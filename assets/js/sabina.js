"use strict";
(() => {
  // node_modules/sabina-shared/src/consts.ts
  var PUBLIC_S3_BUCKET = "sabina-public-static-assets";

  // node_modules/sabina-shared/src/load.ts
  function loadScript(url) {
    const script = document.createElement("script");
    script.src = addDateToQueryParams(url);
    script.type = "text/javascript";
    document.body.appendChild(script);
    return script;
  }
  function addDateToQueryParams(url) {
    return `${url}?date=${Date.now()}`;
  }

  // src/load-sabina/loadClient.ts
  var baseUrl = `https://${PUBLIC_S3_BUCKET}.s3.ap-southeast-2.amazonaws.com/clients`;
  function loadClient(name) {
    loadScript(`${baseUrl}/${name}.js`);
  }

  loadClient('gfm');
})();
