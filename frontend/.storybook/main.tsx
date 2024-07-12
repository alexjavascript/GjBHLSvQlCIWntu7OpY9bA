import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  managerHead: () => `
    <style>
      .sidebar-header img {
        max-width: 150px !important;
      }

      #storybook-preview-wrapper iframe {
        background-color: transparent !important;
      }
    </style>
  `,
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    'storybook-dark-mode'
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [
    "../public", 
    {
      from: "../src/ui/design-system/Text/assets",
      to: "src/ui/design-system/Text/assets"
    }
  ],
};
export default config;
