/**
 * Slider Component
 *
 * An input for selecting a value within a range.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic slider
 * <Slider value={[50]} onValueChange={setValue} />
 *
 * // With range fill
 * <Slider value={[50]} onValueChange={setValue} range />
 *
 * // With hints/ticks
 * <Slider value={[50]} onValueChange={setValue} hints={[0, 25, 50, 75, 100]} />
 * ```
 */

import React, { useEffect, useRef, useState } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import type { SliderProps } from './Slider.types';

const SNAP_PERCENTAGE_THRESHOLD = 2;
const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_ORIENTATION = 'horizontal';
const DEFAULT_DIRECTION = 'ltr';

// Helper to normalize a value from one range to another
function normalize(fromRange: [number, number], toRange: [number, number]) {
  return (value: number) => {
    const [fromMin, fromMax] = fromRange;
    const [toMin, toMax] = toRange;
    return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
  };
}

// Helper to check if arrays are equal
function isArrayEqual(a: number[] | undefined, b: number[] | undefined): boolean {
  if (!a || !b) return a === b;
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

const Slider = React.forwardRef<HTMLSpanElement, SliderProps>((props, forwardedRef) => {
  const {
    className = '',
    min = DEFAULT_MIN,
    max = DEFAULT_MAX,
    defaultValue = [min],
    value,
    onValueChange,
    orientation = DEFAULT_ORIENTATION,
    dir = DEFAULT_DIRECTION,
    inverted,
    disabled,
    range = true,
    rangeAnchor,
    baseValue,
    hints,
    ...rootProps
  } = props;

  const rootRef = useRef<HTMLSpanElement>(null);
  const [trackedValue, setTrackedValue] = useState(value ?? defaultValue);
  const [focusVisible, setFocusVisible] = useState(true);
  const prevValueRef = useRef(value);
  const prevDefaultValueRef = useRef(defaultValue);

  // Sync tracked value with controlled value
  useEffect(() => {
    if (isArrayEqual(value, prevValueRef.current) && isArrayEqual(defaultValue, prevDefaultValueRef.current)) {
      return;
    }
    setTrackedValue(value ?? defaultValue);
    prevValueRef.current = value;
    prevDefaultValueRef.current = defaultValue;
  }, [value, defaultValue]);

  // Set thumb transform CSS variable
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty(
        '--radix-slider-thumb-transform',
        getThumbTransform(orientation, dir, inverted)
      );
    }
  }, [orientation, dir, inverted]);

  const handleValueChange = (newValue: number[]) => {
    const snappedValue = newValue.map((v) => getSnappedValue(v, hints, min, max));
    onValueChange?.(snappedValue);
    setTrackedValue(snappedValue);
  };

  const handlePointerDown = () => {
    setFocusVisible(false);
    const handleUp = () => {
      setFocusVisible(true);
      window.removeEventListener('pointerup', handleUp);
      rootRef.current?.focus();
    };
    window.addEventListener('pointerup', handleUp);
  };

  const classNames = ['figui-SliderRoot', className].filter(Boolean).join(' ');

  return (
    <RadixSlider.Root
      ref={(node) => {
        (rootRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      }}
      tabIndex={-1}
      className={classNames}
      value={trackedValue}
      onValueChange={handleValueChange}
      onPointerDown={handlePointerDown}
      min={min}
      max={max}
      orientation={orientation}
      dir={dir}
      inverted={inverted}
      disabled={disabled}
      {...rootProps}
    >
      <RadixSlider.Track className="figui-SliderTrack" />

      {range && (
        <Range
          dir={dir}
          value={trackedValue}
          min={min}
          max={max}
          orientation={orientation}
          inverted={inverted}
          rangeAnchor={rangeAnchor}
          disabled={disabled}
        />
      )}

      {hints?.map((hint) => (
        <Hint
          key={hint}
          hint={hint}
          baseValue={baseValue}
          min={min}
          max={max}
          orientation={orientation}
          dir={dir}
          inverted={inverted}
        />
      ))}

      {trackedValue.map((v, i) => (
        <RadixSlider.Thumb
          key={i}
          className={[
            'figui-SliderThumb',
            focusVisible ? 'figui-SliderThumb-focusVisible' : '',
            v === baseValue ? 'figui-SliderThumb-baseValue' : '',
          ].filter(Boolean).join(' ')}
        />
      ))}
    </RadixSlider.Root>
  );
});

Slider.displayName = 'Slider';

// ============================================================================
// Range Component
// ============================================================================

interface RangeProps {
  min: number;
  max: number;
  value: number[];
  orientation: 'horizontal' | 'vertical';
  dir: 'ltr' | 'rtl';
  inverted?: boolean;
  rangeAnchor?: number;
  disabled?: boolean;
}

const Range = (props: RangeProps) => {
  const { min, max, value, rangeAnchor = min, orientation, dir, inverted, disabled } = props;
  const rangeStart = value.length > 1 ? Math.min(...value) : Math.min(rangeAnchor, ...value);
  const rangeEnd = value.length > 1 ? Math.max(...value) : Math.max(rangeAnchor, ...value);
  const offsetStart = normalize([min, max], [0, 100])(rangeStart);
  const offsetEnd = 100 - normalize([min, max], [0, 100])(rangeEnd);
  const edges = getOrientationEdges(orientation, dir, inverted);

  return (
    <span
      className="figui-SliderRange"
      data-orientation={orientation}
      data-disabled={disabled ? '' : undefined}
      style={{
        [edges.startEdge]: `${offsetStart}%`,
        [edges.endEdge]: `${offsetEnd}%`,
      }}
    />
  );
};

// ============================================================================
// Hint Component
// ============================================================================

interface HintProps {
  hint: number;
  baseValue?: number;
  min: number;
  max: number;
  orientation: 'horizontal' | 'vertical';
  dir: 'ltr' | 'rtl';
  inverted?: boolean;
}

const Hint = (props: HintProps) => {
  const { baseValue, dir, inverted, max, min, orientation, hint } = props;
  const { startEdge } = getOrientationEdges(orientation, dir, inverted);
  const offset = normalize([min, max], [0, 100])(hint);
  const HINT_WIDTH = 4;

  return (
    <span
      className={[
        'figui-SliderHint',
        hint === baseValue ? 'figui-SliderHint-baseValue' : '',
      ].filter(Boolean).join(' ')}
      data-orientation={orientation}
      style={{ [startEdge]: `calc(${offset}% - ${HINT_WIDTH / 2}px)` }}
    />
  );
};

// ============================================================================
// Helper Functions
// ============================================================================

function getOrientationEdges(
  orientation: 'horizontal' | 'vertical',
  dir: 'ltr' | 'rtl',
  inverted: boolean | undefined
) {
  const inversion = inverted ? 'inverted' : 'normal';
  const edges = {
    vertical: {
      normal: { startEdge: 'bottom', endEdge: 'top' },
      inverted: { startEdge: 'top', endEdge: 'bottom' },
    },
    horizontal: {
      normal: {
        startEdge: dir === 'ltr' ? 'left' : 'right',
        endEdge: dir === 'ltr' ? 'right' : 'left',
      },
      inverted: {
        startEdge: dir === 'ltr' ? 'right' : 'left',
        endEdge: dir === 'ltr' ? 'left' : 'right',
      },
    },
  };
  return edges[orientation][inversion];
}

function getThumbTransform(
  orientation: 'horizontal' | 'vertical',
  dir: 'ltr' | 'rtl',
  inverted: boolean | undefined
) {
  const inversion = inverted ? 'inverted' : 'normal';
  const transform = {
    vertical: {
      normal: 'translateY(50%)',
      inverted: 'translateY(-50%)',
    },
    horizontal: {
      normal: dir === 'ltr' ? 'translateX(-50%)' : 'translateX(50%)',
      inverted: dir === 'ltr' ? 'translateX(50%)' : 'translateX(-50%)',
    },
  };
  return transform[orientation][inversion];
}

function getSnappedValue(value: number, hints: number[] | undefined, min: number, max: number) {
  const snappingFactor = normalize([0, 100], [0, max - min])(SNAP_PERCENTAGE_THRESHOLD);
  const closestHint = hints?.find((hint) => Math.abs(hint - value) <= snappingFactor);
  if (typeof closestHint === 'number') {
    return closestHint;
  }
  return value;
}

export { Slider };
