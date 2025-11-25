/**
 * ValueField Types
 *
 * Compound component for value inputs with labels/prefixes/suffixes.
 */

import type { NumericInputProps } from '../Input';

// Root props
export interface RootProps extends Omit<React.ComponentPropsWithoutRef<'label'>, 'children'> {
  children: React.ReactNode;
  disabled?: boolean;
}

// Multi props - for grouping multiple fields
export interface MultiProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  children: React.ReactNode;
  disabled?: boolean;
}

// Label props
export interface LabelProps extends React.ComponentPropsWithoutRef<'span'> {}

// Numeric props - extends base NumericInput but works within ValueField context
export interface NumericProps extends Omit<NumericInputProps, 'leadingIcon' | 'className'> {
  className?: string;
}
