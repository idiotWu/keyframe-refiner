!function(){var e,t,n={2929:function(e,t,n){"use strict";var r,i=n(655),o=n(7093),s=n.n(o);!function(e){e.PEG_HOLE="PEG_HOLE",e.FRAME="FRAME"}(r||(r={}));const a={minArea:100,minExtent:.75,minVertexCount:4,topN:3,adaptive:!1,useOtsu:!1};new class extends class{constructor(){this.ready=new Promise((e=>{s().onRuntimeInitialized=()=>{e(null)}})),this.debug=!1,this.configs=null,this.handleMessage()}onRequestPivot(e,t,n){return(0,i.mG)(this,void 0,void 0,(function*(){return new(s().Point)(0,0)}))}onRequestProcessing(e,t,n,r,o){return(0,i.mG)(this,void 0,void 0,(function*(){return t.clone()}))}createImageMat(e){const{width:t,height:n,buffer:r}=e,i=new(s().Mat)(n,t,s().CV_8UC4);return i.data.set(new Uint8ClampedArray(r)),i}pong(e){return(0,i.mG)(this,void 0,void 0,(function*(){yield this.ready,this.respond(e)}))}requestPivot(e){return(0,i.mG)(this,void 0,void 0,(function*(){const{mode:t,image:n,ROI:r}=e.data.body,i=this.createImageMat(n),o=new(s().Rect)(r.x,r.y,r.width,r.height);try{const n=yield this.onRequestPivot(t,i,o);this.respond(e,{result:{pivot:n}})}catch(t){this.handleError(e,t)}finally{i.delete()}}))}requestProcessing(e){return(0,i.mG)(this,void 0,void 0,(function*(){const{mode:t,refImage:n,ROI:r,pivot:i}=this.configs,o=this.createImageMat(e.data.body.image);try{const s=yield this.onRequestProcessing(t,o,n,r,i),{buffer:a}=new Uint8ClampedArray(s.data);this.respond(e,{result:{image:{buffer:a,width:s.cols,height:s.rows}},transfer:[a]}),s.delete()}catch(t){this.handleError(e,t)}finally{o.delete()}}))}setConfigs(e){const{mode:t,fitFrame:n,refImage:r,ROI:i,pivot:o}=e.data.body.configs;this.configs={mode:t,fitFrame:n,refImage:this.createImageMat(r),pivot:new(s().Point)(o.x,o.y),ROI:new(s().Rect)(i.x,i.y,i.width,i.height)},this.respond(e)}setDebugMode(e){this.debug=e.data.body.debug}clean(e){var t;null===(t=this.configs)||void 0===t||t.refImage.delete(),this.configs=null,this.respond(e)}checkConfig(){if(!this.configs)throw new Error("[worker] configs not set")}respond(e,{result:t,error:n,transfer:r}={}){self.postMessage({respondTo:e.data.request,id:e.data.id,error:n,result:t},r||[])}handleError(e,t){console.error("[worker]",t),this.respond(e,{error:t.message})}handleMessage(){self.addEventListener("message",(e=>(0,i.mG)(this,void 0,void 0,(function*(){var t;switch(null===(t=e.data)||void 0===t?void 0:t.request){case"ping":yield this.pong(e);break;case"set-debug":this.setDebugMode(e);break;case"set-configs":this.setConfigs(e);break;case"clean":this.clean(e);break;case"request-pivot":yield this.requestPivot(e);break;case"request-processing":yield this.requestProcessing(e);break;default:console.warn("[worker] unknown message",e)}}))))}}{constructor(){super(...arguments),this.baseSize=null}findPolygons(e,t,{minArea:n,minExtent:r,minVertexCount:i,topN:o,adaptive:a,useOtsu:c}){const u=e.roi(t),l=new(s().Mat);if(s().cvtColor(u,l,s().COLOR_RGBA2GRAY,0),a)s().adaptiveThreshold(l,l,255,s().ADAPTIVE_THRESH_GAUSSIAN_C,s().THRESH_BINARY_INV,21,2);else{let e=s().THRESH_BINARY_INV;c&&(e|=s().THRESH_OTSU),s().threshold(l,l,100,255,e)}const d=c?t.width*t.height*.9:1/0,h=new(s().MatVector),f=new(s().Mat);s().findContours(l,h,f,s().RETR_LIST,s().CHAIN_APPROX_SIMPLE);const g=[];for(let e=0;e<h.size();++e){const o=h.get(e),a=s().contourArea(o),c=s().arcLength(o,!0),l=new(s().Mat);if(s().approxPolyDP(o,l,.02*c,!0),l.rows>=i&&a>n&&a<d&&s().isContourConvex(l)){const n=s().minAreaRect(l),{width:i,height:o}=n.size,c=a/(i*o);if(c<r)continue;if(g.push({area:a,extent:c,rectSize:new(s().Size)(Math.max(i,o),Math.min(i,o)),center:new(s().Point)(t.x+n.center.x,t.y+n.center.y),angle:i<o?n.angle+90:n.angle}),this.debug){s().drawContours(u,h,e,new(s().Scalar)(255,0,0,255),3);const t=s().rotatedRectPoints(n);for(let e=0;e<4;e++)s().line(u,t[e],t[(e+1)%4],new(s().Scalar)(0,0,255,255),3,s().LINE_AA,0)}}o.delete(),l.delete()}h.delete(),f.delete(),l.delete(),u.delete(),function(e,t=10){let n=e.length;for(let r=0;r<n;r++){const i=e[r];for(let o=r+1;o<n;o++){const r=e[o];Math.abs(i.center.x-r.center.x)<t&&Math.abs(i.center.y-r.center.y)<t&&(e.splice(o,1),o--,n--)}}}(g),g.sort(((e,t)=>t.area-e.area));const p=g.slice(0,o);return p.sort(((e,t)=>e.center.x-t.center.x)),p}findPolygonsWithTries(e,t,n=a){const r=Object.assign(Object.assign(Object.assign({},a),n),{adaptive:!1}),i=this.findPolygons(e,t,r);return i.length===r.topN?i:(this.debug&&console.log("%c[worker] non-adaptive threshold failed, trying adaptive...","color: #f60"),this.findPolygons(e,t,Object.assign(Object.assign({},r),{adaptive:!0})))}pegHoleRotation(e,t){const n=this.findPolygonsWithTries(e,t,{useOtsu:!0,minVertexCount:5});if(n.length<3)throw new Error("タップ穴を検出できませんでした");const{center:r}=n[0],{center:i}=n[1],o=new(s().Point)(i.x,i.y);return this.debug&&n.forEach((({center:t})=>{s().circle(e,t,10,new(s().Scalar)(255,0,0,255),-1)})),{center:o,angle:180*Math.atan2(i.y-r.y,i.x-r.x)/Math.PI,rectSize:n[0].rectSize}}frameRotation(e,t){const n=e.cols*e.rows,r=this.findPolygonsWithTries(e,t,{minArea:.5*n,minExtent:0,minVertexCount:4,topN:1})[0];if(!r)throw new Error("フレームを検出できませんでした");return this.debug&&s().circle(e,r.center,10,new(s().Scalar)(255,0,0,255),-1),{center:r.center,angle:r.angle,rectSize:r.rectSize}}calcRotation(e,t,n){return e===r.PEG_HOLE?this.pegHoleRotation(t,n):this.frameRotation(t,n)}getRotationMatrix(e,t,n,r,i,o){const a=[1,0,e.x,0,1,e.y,0,0,1],c=[1,0,n,0,1,r,0,0,1],u=-t*Math.PI/180,l=Math.cos(u),d=Math.sin(u),h=[a,c,[l,-d,0,d,l,0,0,0,1],[i,0,0,0,o,0,0,0,1],[1,0,-e.x,0,1,-e.y,0,0,1]].reduce(((e,t)=>function(e,t){const n=[];for(let r=0;r<2;r++)for(let i=0;i<3;i++){let o=0;for(let n=0;n<3;n++)o+=e[3*r+n]*t[3*n+i];n[3*r+i]=o}return n.push(0,0,1),n}(e,t)));return s().matFromArray(2,3,s().CV_64FC1,h.slice(0,6))}setConfigs(e){super.setConfigs(e);const{mode:t,refImage:n,ROI:r}=this.configs,{rectSize:i}=this.calcRotation(t,n,r);this.baseSize=i}clean(e){super.clean(e),this.baseSize=null}onRequestPivot(e,t,n){return(0,i.mG)(this,void 0,void 0,(function*(){const{center:r}=this.calcRotation(e,t,n);return r}))}onRequestProcessing(e,t,n,o,a){return(0,i.mG)(this,void 0,void 0,(function*(){const i=new(s().Size)(n.cols%2==0?n.cols:n.cols+1,n.rows%2==0?n.rows:n.rows+1),c=new(s().Mat);s().resize(t,c,i);const{center:u,angle:l,rectSize:d}=this.calcRotation(e,c,o),h=a.x-u.x,f=a.y-u.y;let g=1,p=1;e===r.FRAME&&this.configs.fitFrame&&(g=this.baseSize.width/d.width,p=this.baseSize.height/d.height);const m=this.getRotationMatrix(u,l,h,f,g,p),v=new(s().Mat);return s().warpAffine(c,v,m,i,s().INTER_LINEAR,s().BORDER_CONSTANT,new(s().Scalar)(255,255,255,255)),m.delete(),c.delete(),v}))}}},3499:function(){},2999:function(){},8300:function(){}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.exports}i.m=n,i.x=function(){var e=i.O(void 0,[216,977],(function(){return i(2929)}));return i.O(e)},e=[],i.O=function(t,n,r,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return{216:"vendors",977:"opencv"}[e]+"."+{216:"2a42100c994558b3f97c",977:"a1d009f617e5a1f5d520"}[e]+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=696,function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e}(),function(){var e={696:1};i.f.i=function(t,n){e[t]||importScripts(i.p+i.u(t))};var t=self.webpackChunkkeyframe_refiner=self.webpackChunkkeyframe_refiner||[],n=t.push.bind(t);t.push=function(t){var r=t[0],o=t[1],s=t[2];for(var a in o)i.o(o,a)&&(i.m[a]=o[a]);for(s&&s(i);r.length;)e[r.pop()]=1;n(t)}}(),t=i.x,i.x=function(){return Promise.all([i.e(216),i.e(977)]).then(t)},i.x()}();