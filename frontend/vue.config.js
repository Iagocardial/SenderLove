export function chainWebpack(config) {
  config.module
    .rule('vue')
    .use('vue-loader')
    .loader('vue-loader')
    .tap((options) => {
      // alterar opções do loader se necessário
      return options;
    });
}