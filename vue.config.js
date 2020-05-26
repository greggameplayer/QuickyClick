// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/QuickyClick/'
    : '/',
  pwa: {
    themeColor: '#17a2b8',
    msTileColor: '#da532c',
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png'
    }
  }
}
