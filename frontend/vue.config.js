module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://0.0.0.0:5001", // Porta onde o backend está rodando
        changeOrigin: true,
      },
    },
  },
};
