(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"body {\n    /* background: linear-gradient(135deg, #b3b4ff43, #FFB3B3); */\n    background-color: rgb(179,148,105);\n    color: black;\n    text-align: center;\n    font-size: 1rem;\n    padding: 0;\n    margin: 0;\n}\n\n#nav-container ul {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 5vw;\n\n}\n#nav-container li {\n    font-size: 1.4rem;\ntext-transform: lowercase;\n    list-style-type: none;\n    padding: 2vw;\n    border-radius: 6px;\n    /* border: 2px solid yellowgreen;     */\n    cursor: pointer;\n}\n#nav-container li:hover {\ncolor: yellowgreen;\n\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    /* place-items: center; */\n    \n    row-gap: 200px;\n}\n#description-container {\n    /* border: 5px solid yellowgreen; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n}\n#img-container {\nwidth: 100%;\nheight: auto;\n}\n#img-container video {\nbackground-size: contain;\n    background-position: center;\n    width: 100%;\n    /* opacity: 0.7; */\n    border-radius: 25px;\n}\n\n#description-container #text-container {\n    position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n    /* border: 5px solid yellowgreen; */\n    \n    font-size: 1.5rem;\n    \n}\n@media (max-width: 800px) {\n    #description-container #text-container {\nfont-size: 1.2rem;\n    }\n    \n}\n\n#text-container h1 {\n    color: white;\n    text-transform: lowercase;\nfont-family: 'Courier New', Courier, monospace;\npadding: auto;\nmargin-bottom: 10%;\n}\n#text-container p {\n    color: white;\n    text-transform: lowercase;\n/* font-family: 'Courier New', Courier, monospace; */\ntext-align: center;\nopacity: 0.7;\npadding: auto;\nmargin-bottom: 20%;\n}\n\n\n.bio {\n    background: linear-gradient(135deg, #fbfafd, #f5deb3);\n\n\n    \n}\n#section-2-parent-container {\n    width: 80vw;\n    height: 600px;\n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n\n}\n#section-2-parent-container:hover {\nborder-left: 15px solid #7315cb;\n}\n#section-2-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n\n#section-2-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-2-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-3-parent-container {\n    width: 80vw;\n    height: 600px;\n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n\n}\n#section-3-parent-container:hover {\n    border-right: 15px solid #7315cb;\n    }\n\n\n\n#section-3-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n\n#section-3-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-3-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-4-parent-container {\n    width: 80vw;\n    height: 600px;\n    \n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n}\n\n#section-4-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\nbackground: linear-gradient(135deg, #DAB3FF, #FFB3B3);\npadding: 40px;\nborder-radius: 5px;\n}\n\n\n#section-4-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-4-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-5-parent-container {\n    width: 80vw;\n    height: 600px;\n    background-color: white;    \n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n\n}\n#section-5-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n#section-5-text-container:hover {\nborder-left: 5px solid black;\npadding-left: 20px;\n}\n\n#section-5-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-5-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-6-parent-container {\n    width: 80vw;\n    height: 600px;\n    \n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n\n}\n#section-6-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n#section-6-text-container:hover {\n    border-left: 5px solid black;\n    padding-left: 20px;\n    }\n\n\n\n\n#section-6-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-6-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-7-parent-container {\n    width: 80vw;\n    height: 600px;\n    \n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n\n}\n#section-7-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\nbackground: linear-gradient(135deg, #DAB3FF, #FFB3B3);    \npadding: 30px;\n}\n\n#section-7-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-7-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n} \n\n\n#section-8-parent-container {\n    width: 80vw;\n    height: 600px;\n    background: linear-gradient(90deg, #DABFFF, #B3FFD6);\n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n\n}\n#section-8-cards-container {\nborder: 2px solid white;\nwidth: 80%;\nheight: 80%;\nbackground-color: rgbA(245, 222, 179, 0.3);\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\n\n\n}\n.card-item {\n    height: 50%;\n    width: 33%;\n    /* background-color: wheat; */\n    font-size: 1.3rem ;\n    \n\n}\n#eye-icon {\n    width: auto;\n    height: 75px;\n}\n\n\n\n#section-9-parent-container {\n    width: 60vw;\n    height: 40vw;\n    background: linear-gradient(135deg, #B3FFD9, #8e32e5);\n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    margin-top: -100px;\n\n}\n#section-9-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n\n#section-9-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-9-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n} \n#paula-span {\n    color: #7315cb;\n    font-weight: bold;\n    text-decoration:underline;\n    \n}\n\n",""]);const c=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(r[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=i(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var c=t(a[r]);e[c].references--}for(var l=o(n,i),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"intro2.mp4",e=t.p+"eb5e768a65250989170e.svg",o=["glowing skin","empowerment","female community","inner wellbeing","hollistic self care","embracing the journey","beauty"];let i=0;function a(n,e){const t=e.textContent.split(" ");for(var o=0;o<t.length;o++)if(t[o]===n){var i=document.createElement("span");i.textContent=t[o],i.id="span-"+o,i.style.color="#7315cb",i.style.fontWeight="bold",t[o]=i.outerHTML}e.innerHTML=t.join(" ")}var r=t(72),c=t.n(r),l=t(825),s=t.n(l),d=t(659),p=t.n(d),u=t(56),m=t.n(u),h=t(540),f=t.n(h),g=t(113),y=t.n(g),v=t(208),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=f(),c()(v.A,x),v.A&&v.A.locals&&v.A.locals;const b=document.body,w=document.getElementById("content");b.insertBefore(function(){const n=document.createElement("div"),e=document.createElement("h1");return e.innerHTML="glow on flow",n.appendChild(e),n}(),w),b.insertBefore(function(){const n=document.createElement("div");n.id="nav-container";const e=document.createElement("ul");e.id="nav-ul";const t=["About","Training","Contact"];for(let n=0;n<t.length;n++){const o=document.createElement("li");o.id=t[n],o.textContent=t[n],e.appendChild(o)}return n.appendChild(e),n}(),w),w.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");e.id="description-container",t.id="img-container";const o=document.createElement("video");return o.src=n,o.autoplay=!0,o.loop=!0,o.muted=!0,t.style.backgroundImage="url(introVideo)",e.appendChild(t),t.appendChild(o),e}()),document.getElementById("description-container").appendChild(function(){const n=document.createElement("div");n.id="text-container";const e=document.createElement("h1");e.id="section-1-title";const t=document.createElement("p");return t.id="paragraph-description",t.textContent="Glow on Flow is a community where women of all ages and backgrounds embark on a journey toward glowing skin and inner well-being with holistic self-care approaches",n.appendChild(e),n.appendChild(t),n}()),setInterval((function(){document.getElementById("section-1-title").textContent=o[i],i=(i+1)%o.length}),2e3),w.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-2-parent-container";const e=document.createElement("div");e.id="section-2-text-container";const t=document.createElement("h1");t.id="section-2-title";const o="why Paula does what she does".split(" ");for(let n=0;n<o.length;n++){const e=o[n],i=document.createElement("span");if(i.textContent=e,"Paula"===e&&(i.id="paula-span"),t.appendChild(i),n<e.length-1){const n=document.createTextNode(" ");t.appendChild(n)}}const i=document.createElement("p");return i.id="section-2-paragraph",i.textContent="Our mission is to change how women think about aging by embracing the journey instead of fighting it. At Glow on Flow, we empower women to appreciate the beauty of every stage of life.",e.appendChild(t),e.appendChild(i),n.appendChild(e),n}()),w.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-3-parent-container";const e=document.createElement("div");e.id="section-3-text-container";const t=document.createElement("h1");t.id="section-3-title",t.textContent="Paulas journey from the beginning ",a("Paulas",t);const o=document.createElement("p");return o.id="section-3-paragraph",o.textContent="of her nursing career led her down the path of Yoga and Energy Medicine, which served as a powerful homecoming to what she had always intuitively known. She firmly believed that every individual possesses the inherent power and capacity to maintain balance in all aspects of life—mentally, physically, emotionally, and spiritually.",e.appendChild(t),e.appendChild(o),n.appendChild(e),n}()),w.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-4-parent-container";const e=document.createElement("div");e.id="section-4-text-container";const t=document.createElement("h1");t.id="section-4-title",t.textContent="east meets west";const o=document.createElement("p");return o.id="section-4-paragraph",o.textContent="Unlike Western Medicine which looks primarily at the physical body, Eastern practices look at the self holistically. Problems arise when our mind and body become misaligned chronically and continuously. Our life force becomes stuck and illness may follow ,physically ,mentally or emotionally.",e.appendChild(t),e.appendChild(o),n.appendChild(e),n}()),w.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-5-parent-container";const e=document.createElement("div");e.id="section-5-text-container";const t=document.createElement("h1");t.id="section-5-title",t.textContent="...getting to the root cause",a("root",t);const o=document.createElement("p");return o.id="section-5-paragraph",o.textContent="When we fail to look at the effects of imbalance on all levels of the body, we fail to treat the root cause of dis-ease. Contrary to popular perception, we are all born with an innate ability to feel and understand our own energies.  Energy isn’t something you do, it’s something you already are. Much like a physical practice, you can become more attuned to your energy or life force through easy everyday practice -- feeling your way into balance, health and peace.",e.appendChild(t),e.appendChild(o),n.appendChild(e),n}()),w.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-6-parent-container";const e=document.createElement("div");e.id="section-6-text-container";const t=document.createElement("h1");t.id="section-6-title",t.textContent="Paulas life mission.",a("Paulas",t);const o=document.createElement("p");return o.id="section-6-paragraph",o.textContent="Paula's life mission revolves around living out her passion for walking a path that connects her with her true nature and being of service to others. She is dedicated to sharing what she learns and finds most beneficial along the way. Through accessible teachings and healing modalities.",e.appendChild(t),e.appendChild(o),n.appendChild(e),n}()),w.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-7-parent-container";const e=document.createElement("div");e.id="section-7-text-container";const t=document.createElement("h1");t.id="section-7-title",t.textContent="...what Paula can do for you. ",a("Paula",t);const o=document.createElement("p");return o.id="section-7-paragraph",o.textContent="Paula offers group workshops and one-on-one private sessions to guide individuals back into their mind and body. Her core offerings are rooted in Subtle Body Anatomy (energy body anatomy) and Physical Anatomy, combined with practices such as Yoga, Intuitive Anatomy, African Reflexology, Family & Systemic Constellation, Kinesiology, and Flower Essence Therapy.",e.appendChild(t),e.appendChild(o),n.appendChild(e),n}()),w.appendChild(function(){const n=document.createElement("div");n.id="section-8-parent-container";const t=document.createElement("div");t.id="section-8-cards-container";const o=document.createElement("div");o.classList.add("card-item");const i=document.createElement("div");i.classList.add("card-item");const a=document.createElement("div");a.classList.add("card-item");const r=document.createElement("div");r.classList.add("card-item");let c=new Image;c.src=e,c.alt="hello there",c.id="eye-icon",o.style.backgroundImage="url(eyeIcon)";const l=document.createElement("h5");l.textContent="yoga teacher";const s=document.createElement("p");s.textContent="Teaching yoga to all levels in workshops and in private sessions",o.appendChild(c),o.appendChild(l),o.appendChild(s);const d=new Image;d.src=e,d.alt="hello there",d.id="eye-icon",i.style.backgroundImage="url(eyeIcon2)";const p=document.createElement("h5");p.textContent="yoga teacher";const u=document.createElement("p");u.textContent="Teaching yoga to all levels in workshops and in private sessions",i.appendChild(d),i.appendChild(p),i.appendChild(u);const m=new Image;m.src=e,m.alt="hello there",m.id="eye-icon",a.style.backgroundImage="url(eyeIcon3)";const h=document.createElement("h5");h.textContent="yoga teacher";const f=document.createElement("p");return f.textContent="Teaching yoga to all levels in workshops and in private sessions",a.appendChild(m),a.appendChild(h),a.appendChild(f),n.appendChild(t),t.appendChild(o),t.appendChild(i),t.appendChild(a),t.appendChild(r),n}()),w.appendChild(function(){const n=document.createElement("div");n.id="section-9-parent-container";const e=document.createElement("div");e.id="section-9-text-container";const t=document.createElement("h1");t.id="section-7-title",t.textContent="Contact Paula";const o=document.createElement("hr"),i=document.createElement("h6");i.id="section-7-paragraph",i.textContent="+66 123456789";const a=document.createElement("h6");return a.id="section-7-paragraph-2",a.textContent="paulasmoonbythesea@gmail.com",e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(a),n.appendChild(e),n}())})()})();