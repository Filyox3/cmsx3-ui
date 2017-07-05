/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "cmsx3",
    short_name: "cmsx3",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/ember-welcome-page/images/construction.png",
        sizes: "540x540",
        type: "image/png"
      }
    ]
  };
}
