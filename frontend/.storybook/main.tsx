import type { StorybookConfig } from "@storybook/nextjs";
import StorybookStyles from "./misc/StorybookStyles";

const config: StorybookConfig = {
  stories: ["../ui/**/*.stories.tsx"],
  managerHead: StorybookStyles(),
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
      from: "../public/fonts",
      to: "public/fonts"
    }
  ],
};
export default config;
