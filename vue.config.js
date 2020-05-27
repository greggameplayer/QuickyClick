// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/QuickyClick/'
    : '/',
  pwa: {
    themeColor: '#17a2b8',
    msTileColor: '#da532c',
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png',
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg'
    }
  }
}
