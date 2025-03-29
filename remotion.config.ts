import { Config } from '@remotion/cli/config';

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
              loader: '@mdx-js/loader',
            },
          ],
        },
      ],
    },
  };
});
