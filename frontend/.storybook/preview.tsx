import type { Preview } from "@storybook/react";
import { create } from '@storybook/theming';
import React from 'react';

import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

const StorybookDocsStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .sbdocs {
      background: transparent;
    }

    html.dark-theme .sbdocs-title {
      color: #c9cdcf;
    }

    html.dark-theme .sb-bar {
      background-color: rgba(2, 156, 253, 0.07);
    }
    
    html.dark-theme .sbdocs-preview {
      border-color: rgba(255, 255, 255, .1);
    }

    html.dark-theme .docblock-argstable-head th {
      color: #798186;
    }

    html.dark-theme .docblock-argstable-body {
      color: #c9cdcf;
    }

    html.dark-theme .docblock-argstable-body td {
      background: transparent;
    }

    html.dark-theme .docblock-argstable-body td:nth-of-type(2) span {
      color: #c9cdcf;
      background: #222425;
      border-color: rgba(255, 255, 255, .1);
    }

    html.dark-theme .docblock-argstable-body textarea,
    html.dark-theme .docblock-argstable-body select {
      color: #c9cdcf;
      background: transparent;
      box-shadow: hsla(203, 50%, 30%, 0.95) 0 0 0 1px inset;;
    }

    html.dark-theme .docs-story > div:last-child {
      background-color: transparent;
    }

    html.dark-theme .docblock-code-toggle {
      color: #c9cdcf;
      background: transparent;
      border-color: rgba(255, 255, 255, .1);
    }

    html.dark-theme #stories {
      color: #798186;
    }

    html.dark-theme #primary,
    html.dark-theme #secondary,
    html.dark-theme #tertiary,
    html.dark-theme .sb-anchor > h3 {
      color: #c9cdcf;
    }
  `}}/>
)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <StorybookDocsStyles />
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    darkMode: {
      light: create({
        base: 'light',
        brandImage: '/storybook/logotype-light.svg',
      }),
      dark: create({
        base: 'dark',
        brandImage: '/storybook/logotype-dark.svg',
      }),
      stylePreview: true,
      classTarget: 'html',
      lightClass: 'light-theme',
      darkClass: 'dark-theme'
    }
  },

  // @TODO
  // Use theme provider here
  // decorators: (Story) => <div style={{border: '5px solid red'}}><Story /></div>
};

export default preview;
