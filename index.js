/* jshint node: true */
'use strict';

module.exports = {
  name: 'eureka-widget-application-menu',

    included: function included(app) {
        this._super.included(app);
        app.import('vendor/widget.css');
    }
};
