
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-PVVO6XCL.js",
      "chunk-QPJVJV3I.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7U75AMQJ.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7U75AMQJ.js",
      "chunk-FPXARVEV.js",
      "chunk-3XVTETOR.js",
      "chunk-QPJVJV3I.js"
    ],
    "route": "/home/seller/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7U75AMQJ.js",
      "chunk-ISYZDTES.js",
      "chunk-3XVTETOR.js",
      "chunk-QPJVJV3I.js"
    ],
    "route": "/home/client/*"
  },
  {
    "renderMode": 1,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6043, hash: '37ecc266f26ecc474fcabc5afd151147778e8694627c3783d4e68827d39c1f64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: 'bf948d1b5f728865f3248572a7d6bae1f0dc547504c80d26271f07b10d29d6e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5DS4XTBL.css': {size: 17052, hash: 'h4UUZH+CaXQ', text: () => import('./assets-chunks/styles-5DS4XTBL_css.mjs').then(m => m.default)}
  },
};
