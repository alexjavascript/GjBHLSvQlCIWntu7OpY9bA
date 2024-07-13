import type { Preview } from "@storybook/react";
import { create } from '@storybook/theming';
import React from 'react';
import './../public/styles/themes.css'

import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import StorybookDocsStyles from "./misc/StorybookDocsStyles";

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
      lightClass: 'light',
      darkClass: 'dark',
    }
  },
};

export default preview;
