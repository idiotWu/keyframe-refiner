if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-1035e95e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/android-chrome-144x144.png",revision:"76c434c1b336b6fb3a3b570e5efddff2"},{url:"assets/android-chrome-192x192.png",revision:"0f0b350bf39470b161f412798dffdbef"},{url:"assets/android-chrome-256x256.png",revision:"bbd6ecf129f6fc445d61d77293062343"},{url:"assets/android-chrome-36x36.png",revision:"90b127d64acbcf52574e258379cc8b6d"},{url:"assets/android-chrome-384x384.png",revision:"f04207d55512415c911a28cd5360edd3"},{url:"assets/android-chrome-48x48.png",revision:"4f2978788e71bddfb6adab508625ab57"},{url:"assets/android-chrome-512x512.png",revision:"df1a3b04e4a39792d970356cba92f7c5"},{url:"assets/android-chrome-72x72.png",revision:"6191d2dbbb989c10ff21e612e8a97811"},{url:"assets/android-chrome-96x96.png",revision:"2fc4c1363d105144bf5807a5d7744ec0"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"3766f4261b9d41e917c9bc141a0371c3"},{url:"assets/apple-touch-icon-114x114.png",revision:"a64bba89a5e16d335719ed1735bcbb9c"},{url:"assets/apple-touch-icon-120x120.png",revision:"b036bff3739a15bc69804c48230307fd"},{url:"assets/apple-touch-icon-144x144.png",revision:"01923db7d5cf192d60cb898651420281"},{url:"assets/apple-touch-icon-152x152.png",revision:"797b8c3547f2174b9ffefb0fde972558"},{url:"assets/apple-touch-icon-167x167.png",revision:"b10ec21b1ef57f192101eda5f55b6cdc"},{url:"assets/apple-touch-icon-180x180.png",revision:"ad25a7f6f94ba61dbdd3019e5a213c52"},{url:"assets/apple-touch-icon-57x57.png",revision:"e0a1385ed85a3c6d2eb319e5954a7ae9"},{url:"assets/apple-touch-icon-60x60.png",revision:"bce4f5a93acbfb3abce47fa5525a0ed0"},{url:"assets/apple-touch-icon-72x72.png",revision:"dc42198ccfa43ee3d29c2d8d29b10eb9"},{url:"assets/apple-touch-icon-76x76.png",revision:"ca0671547e226bfc6ae9042c60212b90"},{url:"assets/apple-touch-icon-precomposed.png",revision:"ad25a7f6f94ba61dbdd3019e5a213c52"},{url:"assets/apple-touch-icon.png",revision:"ad25a7f6f94ba61dbdd3019e5a213c52"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"e65e4823abcd958576a9b1fedbe429a8"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"deb88b89ad3828a0d4a812547495a249"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"c75853083516c3a7ea09f1de64320009"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"90326b0e9abc4a74126c8cba73de4a0e"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"55b9e28d1e6e96509d888af933fc24d1"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"d643f16de6352a9a65025158087c1fa5"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"4abd00379bb0337e5cdff039d18a0a4e"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"fad0d642052656a0d73e6dc915bc677e"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"9473ed30ff956bb3701ba9bdbfb49ecb"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"86de2c0129856a149bed3cb313070da6"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"fbe5bb068c671a6a5f87d87cc3f23eb2"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"56fb9bdbd3c24b5ad6c42e95e4da1303"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"974d37bf134e09b01b41015cb29f371c"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"3b767e59cde26b9ad90725b88082b7fd"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"ca0e832261890c6880f66552d002eeb6"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"f5fd25b39a75b4f7f61e44c926da2a59"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"4d6963fc6b6c41a1dafec8d58000b782"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"0b9a08145b7dcab0d3d2702dc09f4323"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"7efb7a382e03f97b8aaaa475319dbb3c"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"fc47bfb07e506d9e8a8250896778c33f"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"836533a5a849e6f93ca18695fb1773af"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"5b9ebe3788367c26c53f07a50698a72f"},{url:"assets/browserconfig.xml",revision:"6b9febff1eb49f1662476afc3e8c6d77"},{url:"assets/coast-228x228.png",revision:"6da85310bbe3edc2c5a7f1f1685c3433"},{url:"assets/favicon-16x16.png",revision:"a9da3f7edb3dc3b8a651292fe86bee04"},{url:"assets/favicon-32x32.png",revision:"ac44e9a1d2926475238a9ed20094a944"},{url:"assets/favicon-48x48.png",revision:"4f2978788e71bddfb6adab508625ab57"},{url:"assets/favicon.ico",revision:"3aa9fa78bc7302cdb10bc2831d83878b"},{url:"assets/firefox_app_128x128.png",revision:"6576e017fcac72708482e585b7e4cfe4"},{url:"assets/firefox_app_512x512.png",revision:"51d737a57ec3416c728b36e5c8390f80"},{url:"assets/firefox_app_60x60.png",revision:"b603ea28a996d0e9884986e04f457fdd"},{url:"assets/manifest.json",revision:"6ad522e736ac0e521ccef4a7cff56457"},{url:"assets/manifest.webapp",revision:"88b85a84781b873ea6749d490a3e19d1"},{url:"assets/mstile-144x144.png",revision:"76c434c1b336b6fb3a3b570e5efddff2"},{url:"assets/mstile-150x150.png",revision:"d890b4952f5bc40963fd35950d97e356"},{url:"assets/mstile-310x150.png",revision:"29dde0c7fe0cd78597b826e64d61016e"},{url:"assets/mstile-310x310.png",revision:"d6a01b33a5f7c7f7c46822810c296693"},{url:"assets/mstile-70x70.png",revision:"d5021f6b261d8c85c98b74511c17697a"},{url:"assets/yandex-browser-50x50.png",revision:"6af0f28bfe263bdb306413b50a820b1a"},{url:"assets/yandex-browser-manifest.json",revision:"b628ba867d44b84353277cd3a1a3d630"},{url:"main.0bdb81dd11476ff76c47.css",revision:null},{url:"main.8173340ce9b99d447d4c.js",revision:null},{url:"opencv.a1d009f617e5a1f5d520.js",revision:null},{url:"refiner.20da6f1ff952439e7bb3.js",revision:null},{url:"vendors.2a42100c994558b3f97c.js",revision:null},{url:"vendors.2a42100c994558b3f97c.js.LICENSE.txt",revision:"f286c85ff88f885b038d9fcc1ba37196"}],{}),e.registerRoute("index.html",new e.NetworkFirst,"GET"),e.registerRoute("/",new e.NetworkFirst,"GET")}));
