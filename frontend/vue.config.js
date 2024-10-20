module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',  // Porta onde o backend está rodando
        changeOrigin: true,
      },
    },
  },
};