parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xmeW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.password=exports.user=void 0;const e="unclebillepg";exports.user=e;const s="526D1A95E3B6B19651774D1F90A68C32D758858F";exports.password=s;
},{}],"OIf1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./creds.js");async function t(){try{const t={username:e.user,password:e.password},r={method:"POST",body:JSON.stringify(t)},s=await fetch("https://cors-anywhere.herokuapp.com/https://json.schedulesdirect.org/20141201/token",r),o=await s.json();return await o.token}catch{}}var r=t();exports.default=r;
},{"./creds.js":"xmeW"}],"mahc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./tok.js"));function t(e){return e&&e.__esModule?e:{default:e}}module.hot&&module.hot.accept();class a{constructor(e,t){this.channel=e,this.stationID=t}async getSchedule(){try{const a=(new Date).toISOString();let s=a.substring(0,10);const n=new Date(a);n.setDate(n.getDate()-1);let i=n.toISOString();i=i.substring(0,10);const o=new Date(a);o.setDate(o.getDate()+1);let r=o.toISOString();r=r.substring(0,10);const d=new Date(a);d.setDate(d.getDate()+2);let c=d.toISOString();c=c.substring(0,10);const l=new Date(a);l.setDate(l.getDate()+3);let p=l.toISOString();p=p.substring(0,10);const h=[{stationID:`${this.stationID}`,date:[s,r,c,p]}],g={method:"POST",body:JSON.stringify(h),headers:{"Content-Type":"application/json",token:await D},redirect:"follow"},m=await fetch("https://cors-anywhere.herokuapp.com/https://json.schedulesdirect.org/20141201/schedules",g),u=await m.json(),w=await u[0].programs,y=await u[1].programs,f=await u[2].programs,$=await u[3].programs,S=w.concat(y,f,$),v=await S.map(function(e){return{id:e.programID,day:new Date(e.airDateTime).toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"2-digit"}),time:new Date(e.airDateTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}});let I=await v.map(function(e){return e.id});const b={method:"POST",body:JSON.stringify(I),headers:{"Content-Type":"application/json",token:await D},redirect:"follow"},O=await fetch("https://cors-anywhere.herokuapp.com/https://json.schedulesdirect.org/20141201/programs",b),T=(await O.json()).map(function(e){return{id:e.programID,series:e.titles[0].title120,episode:e.episodeTitle150?e.episodeTitle150:e.titles[0].title120,ssn:e.hasOwnProperty("metadata")&&e.metadata[0].hasOwnProperty("Gracenote")?`Season ${e.metadata[0].Gracenote.season}`:"Season N/A",epNum:e.hasOwnProperty("metadata")&&e.metadata[0].hasOwnProperty("Gracenote")?`Ep ${e.metadata[0].Gracenote.episode}`:"Ep N/A"}});Object.keys(v).forEach(e=>{let t=T.find(({id:t})=>v[e].id===t);t&&(v[e].series=t.series,v[e].episode=t.episode,v[e].ssn=t.ssn,v[e].epNum=t.epNum)}),document.querySelector(`#${this.channel}--epg .spinner`).style.visibility="hidden";const j=document.getElementById(`${this.channel}--epg`),k=(new Date).toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"2-digit"});for(var e=0;e<v.length;e++){const t=`  \n                        <div class="cell time"><p>${v[e].time}</p>\n                        <p class="date" id="${this.channel}--${v[e].day}--${v[e].time}">${v[e].day}</p></div>\n                        <div class="cell title"><p class="series">${v[e].series}</p>\n                        <p class="episode">${v[e].episode}</p></div>                         `;j.insertAdjacentHTML("beforeend",t)}const E=document.getElementById(`${this.channel}--popup`);for(e=0;e<v.length;e++){const t=`\n                        <div class="cell time"><p>${v[e].time}</p>\n                        <p class="date" id="big--${this.channel}--${v[e].day}--${v[e].time}">${v[e].day}</p></div>\n                        <div class="bigCell title"><p class="series">${v[e].series}</p>\n                        <p class="episode">${v[e].episode}</p><p class="tmsid">${v[e].ssn} ${v[e].epNum} - ${v[e].id}</p></div> `;E.insertAdjacentHTML("beforeend",t)}const P=document.getElementById(`${this.channel}--${k}--07:00 PM`).offsetTop;v.forEach(e=>document.getElementById(`${this.channel}--epg`).scrollTop=P+0)}catch(t){"yes"!=(localStorage.getItem("alerted")||"")&&(alert("We're having trouble retrieving schedules. If schedules fail to load, please try again later."),localStorage.setItem("alerted","yes"))}}}exports.default=a;const s=new a("disc","56905"),n=new a("ahc","18284"),i=new a("apl","57394"),o=new a("dam","60468"),r=new a("dfc","16618"),d=new a("idd","16615"),c=new a("mtd","31046"),l=new a("own","70388"),p=new a("tlc","57391"),h=new a("des","19247"),g=new a("dsf","58428"),m=new a("hgtv","49788"),u=new a("cook","68065"),w=new a("diy","67375"),y=new a("food","50747"),f=new a("trav","59303");let $=[s,n,i,o,r,d,c,l,p,h,g,m,u,w,y,f],D=e.default.then(e=>{void 0!==(D=e)?$.forEach(function(e){e.getSchedule()}):alert("Unable to retrieve schedules. Please try again later.")}).catch(e=>{console.log(e)});
},{"./tok.js":"OIf1"}]},{},["mahc"], null)
//# sourceMappingURL=/js.e491eee9.js.map