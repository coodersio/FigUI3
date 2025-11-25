import type { Preview } from '@storybook/react';
import type { Decorator } from '@storybook/react';
import '../../../packages/components/src/styles.css';

// Theme decorator to apply theme class to HTML element
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';

  // Apply theme class to HTML element
  const htmlElement = document.documentElement;

  // Remove previous theme classes
  htmlElement.classList.remove('figma-light', 'figma-dark');

  // Add current theme class
  htmlElement.classList.add(`figma-${theme}`);

  // Apply background color to body for Storybook
  document.body.style.backgroundColor = 'var(--color-bg-default)';
  document.body.style.color = 'var(--color-text)';

  return Story();
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true, // Disable Storybook's default background switcher
    },
    options: {
      storySort: {
        order: ['Components', ['Badge', 'Avatar', 'Button']],
      },
    },
  },
};

export default preview;
