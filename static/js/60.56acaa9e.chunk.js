"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[60],{645:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});const r=n.p+"static/media/coder.048817b3314c0d4ce829.jpg";var i=n(43);const a=[{id:1,bio:"My name is Akshay, and I am currently a second-year B.Tech student at IIT Mandi. I have a keen interest in web development and machine learning."},{id:2,bio:"I am writing to express my fervent interest in Web Development. I've been eager to work in this field for a while, and the opportunity to contribute using my skills in HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, and MongoDB is incredibly exciting. With a strong foundation in web development principles and a passion for creating user-friendly, high-performing web experiences, I am eager to learn and grow alongside a talented team. I am confident that I can quickly become a valuable asset."}];var s=n(579);const o=(0,i.createContext)(),l=t=>{let{children:e}=t;const[n,r]=(0,i.useState)(a);return(0,s.jsx)(o.Provider,{value:{aboutMe:n,setAboutMe:r},children:e})},u=o,c=()=>{const{aboutMe:t}=(0,i.useContext)(u);return(0,s.jsxs)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/4 mb-7 sm:mb-0",children:(0,s.jsx)("img",{src:r,className:"rounded-lg w-96",alt:""})}),(0,s.jsx)("div",{className:"font-general-regular w-full sm:w-3/4 text-left",children:t.map((t=>(0,s.jsx)("p",{className:"mb-4 text-ternary-dark dark:text-ternary-light text-lg",children:t.bio},t.id)))})]})};var p=n(751);const d=t=>{let{title:e,counter:n,measurement:r}=t;return(0,s.jsxs)("div",{className:"mb-20 sm:mb-0",children:[(0,s.jsxs)("h2",{className:"text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2",children:[n," ",r]}),(0,s.jsx)("span",{className:"font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light",children:e})]})},f=()=>((0,p.S9)({ref:"experienceCounter",end:2,duration:2}),(0,s.jsx)("div",{className:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm",children:(0,s.jsx)("div",{className:"font-general-medium container mx-auto py-20 block ",children:(0,s.jsx)(d,{title:"Years of experience",counter:(0,s.jsx)("span",{id:"experienceCounter"}),measurement:""})})}));var h=n(605);const m=()=>(0,s.jsxs)(l,{children:[(0,s.jsx)(h.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:(0,s.jsx)(c,{})}),(0,s.jsx)(h.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},children:(0,s.jsx)(f,{})})]})},904:(t,e,n)=>{n.r(e),n.d(e,{CountUp:()=>i});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var l=3,u=0,c=0,p=n.length;c<p;++c)i.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=i.options.separator+a),u++,a=n[p-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},751:(t,e,n)=>{var r=n(43),i=n(904);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function l(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return f((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},y=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==p(t,2)[1]}))),n=r.useMemo((function(){return s(s({},g),e)}),[t]),a=n.ref,o=n.startOnMount,l=n.enableReinitialize,u=n.delay,d=n.onEnd,f=n.onStart,y=n.onPauseResume,b=n.onReset,v=n.onUpdate,w=c(n,m),V=r.useRef(),x=r.useRef(),S=r.useRef(!1),j=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,p=e.separator,d=e.start,f=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,b=e.scrollSpyDelay,v=e.scrollSpyOnce,w=e.plugin;return new i.CountUp(t,o,{startVal:d,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:p,prefix:c,suffix:f,plugin:w,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:b,scrollSpyOnce:v})}("string"===typeof a?a:a.current,w)})),O=h((function(t){var e=V.current;if(e&&!t)return e;var n=j();return V.current=n,n})),E=h((function(){var t=function(){return O(!0).start((function(){null===d||void 0===d||d({pauseResume:F,reset:A,start:P,update:k})}))};u&&u>0?x.current=setTimeout(t,1e3*u):t(),null===f||void 0===f||f({pauseResume:F,reset:A,update:k})})),F=h((function(){O().pauseResume(),null===y||void 0===y||y({reset:A,start:P,update:k})})),A=h((function(){O().el&&(x.current&&clearTimeout(x.current),O().reset(),null===b||void 0===b||b({pauseResume:F,start:P,update:k}))})),k=h((function(t){O().update(t),null===v||void 0===v||v({pauseResume:F,reset:A,start:P})})),P=h((function(){A(),E()})),N=h((function(t){o&&(t&&A(),E())}));return r.useEffect((function(){S.current?l&&N(!0):(S.current=!0,N())}),[l,S,N,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){A()}}),[A]),{start:P,pauseResume:F,reset:A,update:k,getCountUp:O}},b=["className","redraw","containerProps","children","style"];e.S9=y}}]);
//# sourceMappingURL=60.56acaa9e.chunk.js.map