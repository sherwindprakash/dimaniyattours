import CompressionPlugin from "compression-webpack-plugin";

export const plugins = [new CompressionPlugin()];
module.exports = {
  plugins: [
    new CompressionPlugin({
      compressionOptions: { level: 1 },
    }),
  ],
};
