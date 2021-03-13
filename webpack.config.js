export const module = {
  rules: [
    {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          }
        }
      ],
      include: /\.module\.css$/
    },
    {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        'css-loader'
      ],
      exclude: /\.module\.css$/
    },
  ],
};
