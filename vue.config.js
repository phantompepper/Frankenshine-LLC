const PrerenderSPAPlugin = require('prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [(
        new PrerenderSPAPlugin({
          staticDir: __dirname, // The path to the folder where index.html is.
          routes: ['/'], // List of routes to prerender.
          renderer: new PuppeteerRenderer(),
          renderAfterElementExists: '#app'
        })
      ), ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // Bring in Sass files to the project
        data: `
          @import "@/sass/abstracts/_functions.scss";
          @import "@/sass/abstracts/_mixins.scss";
          @import "@/sass/abstracts/_variables.scss";

          @import "@/sass/base/_animations.scss";
          @import "@/sass/base/_base.scss";
          @import "@/sass/base/_typography.scss";
          @import "@/sass/base/_utilities.scss";

          @import "@/sass/components/_button.scss";

          @import "@/sass/layout/_footer.scss";
          @import "@/sass/layout/_grid.scss";

          @import "@/sass/pages/_home.scss";
        `
      }
    }
  }
};