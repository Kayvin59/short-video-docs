import { Config } from "@remotion/cli/config";


const codeHikeConfig = {
  theme: "github-dark",
  autoImport: false,
  parseOptions: {
    steps: true, // Enable step parsing
  },
};

Config.overrideWebpackConfig((currentConfig) => {
  return {
    ...currentConfig,
    module: {
      ...currentConfig.module,
      rules: [
        ...(currentConfig.module?.rules ?? []),
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: "@mdx-js/loader",
            },
          ],
        },
      ],
    },
  };
});

