'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    nodeAssets: {
      webfontloader: {
        vendor: ['webfontloader.js']
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.import('vendor/webfontloader/webfontloader.js');

      this.import('vendor/calculate-size/calculate-size.js');
    }
  }
};
