const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.ts"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@noods/vue",
            replacement: path.resolve(
              __dirname,
              "../../../packages/noods-vue/"
            ),
          },
        ],
      },
    };
  },
};