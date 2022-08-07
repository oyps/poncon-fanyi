(function(){"use strict";var t={3826:function(t,a,e){var n=e(9242),o=e(3396),s=e(7139);const r=(0,o.uE)('<nav class="navbar navbar-expand navbar-light bg-light border-bottom shadow-sm"><div class="container"><a class="navbar-brand ms-2" href="">鹏创翻译</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-link active" href="https://ouyangpeng.top" target="_blank">官网</a><a class="nav-link" href="https://github.com/oyps/poncon-fanyi" target="_blank">Github</a><a class="nav-link" href="https://ouyangpeng.top/#about">关于</a></div></div></div></nav>',1),l={class:"container py-3 py-sm-4"},i={class:"row"},d={class:"col-lg-6"},c={class:"form-floating mb-3 mb-lg-4"},u=(0,o._)("label",null,"待翻译内容（限5000字）",-1),h={class:"row mb-3 mb-lg-0 mx-0"},p={class:"col-6 pe-2 pe-sm-3 ps-0"},g={class:"col-4 pe-2 pe-sm-3 ps-0"},b=["disabled"],v={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},f=(0,o.Uk)(" 翻译 "),m={class:"col-2 px-0"},y=(0,o._)("i",{class:"bi bi-trash3"},null,-1),C=[y],w={class:"col-lg-6"},k={key:0,class:"line"},S=(0,o.uE)('<div class="row mx-0"><div class="col pe-2 pe-sm-3 ps-0"><button class="btn btn-secondary w-100 copybtn" data-clipboard-target=".result"> 复制结果 </button></div><div class="col ps-0 pe-0"><button class="btn btn-danger w-100">朗读结果</button></div></div>',1),_={class:"modal fade modal-chooseLanguage user-select-none",id:"staticBackdrop",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},H={class:"modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"},z={class:"modal-content"},x=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"staticBackdropLabel"}," 选择语言 "),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},O={class:"list-group"},L=["data-index","onClick"],j=(0,o._)("div",{class:"modal-footer"},[(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 关闭 "),(0,o._)("button",{type:"button",class:"btn btn-primary"},"确定")],-1);function D(t,a,e,y,D,T){return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o._)("div",l,[(0,o._)("div",i,[(0,o._)("div",d,[(0,o._)("div",c,[(0,o.wy)((0,o._)("textarea",{class:"form-control shadow-sm border border-3","onUpdate:modelValue":a[0]||(a[0]=t=>D.input=t),placeholder:"待翻译内容",style:{height:"200px"}},null,512),[[n.nr,D.input]]),u]),(0,o._)("div",h,[(0,o._)("div",p,[(0,o._)("button",{class:"btn w-100 btn-success text-nowrap me-3",onClick:a[1]||(a[1]=(...t)=>T.changeLang&&T.changeLang(...t))},(0,s.zw)(T.getLangModeText(D.langModeIndex)),1)]),(0,o._)("div",g,[(0,o._)("button",{class:"btn w-100 text-nowrap btn-primary",onClick:a[2]||(a[2]=(...t)=>T.translate&&T.translate(...t)),disabled:D.loading},[D.loading?((0,o.wg)(),(0,o.iD)("span",v)):(0,o.kq)("",!0),f],8,b)]),(0,o._)("div",m,[(0,o._)("button",{class:"btn w-100 text-nowrap btn-danger",onClick:a[3]||(a[3]=(...t)=>T.clear&&T.clear(...t))},C)])])]),(0,o._)("div",w,[(0,o._)("div",{class:"p-3 shadow-sm rounded border border-3 result overflow-auto mb-3 mb-lg-4",style:(0,s.j5)([{height:"200px"},{"text-indent":D.result.length>1?"2em":"0"}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(D.result,((t,a)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:a},[t[0].tgt?((0,o.wg)(),(0,o.iD)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t,((t,a)=>((0,o.wg)(),(0,o.iD)("span",{class:"sentence",key:a},(0,s.zw)(t.tgt),1)))),128))])):(0,o.kq)("",!0)],64)))),128))],4),S])])]),(0,o._)("div",_,[(0,o._)("div",H,[(0,o._)("div",z,[x,(0,o._)("div",M,[(0,o._)("div",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(D.langChoose,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a,class:(0,s.C_)(["list-group-item list-group-item-action",{active:a==D.langModeIndex}]),"data-index":a,onClick:t=>T.clickChangeLang(a)},(0,s.zw)(T.getLangModeText(a)),11,L)))),128))])]),j])])])],64)}var T=e(6265),A=e.n(T),P=e(8937),B={name:"App",data(){return{input:"",result:[],from:"AUTO",to:"AUTO",loading:!1,errorCode:{10:"抱歉，个别句子太长啦，我读不懂",20:"抱歉，超过5000字实在太长啦，让我喘口气",30:"抱歉，我绞尽脑汁了",40:"抱歉，我还在学习该语种中",50:"抱歉，请不要频繁请求服务",transRequestError:"翻译出错，请检查网络后重试"},langModeIndex:0,language:{"zh-CHS":"中文",en:"英语",ko:"韩语",ja:"日语",fr:"法语",ru:"俄语",es:"西班牙语",pt:"葡萄牙语",hi:"印地语",ar:"阿拉伯语",da:"丹麦语",de:"德语",el:"希腊语",fi:"芬兰语",it:"意大利语",ms:"马来语",vi:"越南语",id:"印尼语",nl:"荷兰语",th:"泰语"},langChoose:[["AUTO"],["zh-CHS","en"],["en","zh-CHS"],["zh-CHS","ja"],["ja","zh-CHS"],["zh-CHS","ko"],["ko","zh-CHS"],["zh-CHS","fr"],["fr","zh-CHS"],["zh-CHS","de"],["de","zh-CHS"],["zh-CHS","ru"],["ru","zh-CHS"],["zh-CHS","es"],["es","zh-CHS"],["zh-CHS","pt"],["pt","zh-CHS"],["zh-CHS","it"],["it","zh-CHS"],["zh-CHS","vi"],["vi","zh-CHS"],["zh-CHS","id"],["id","zh-CHS"],["zh-CHS","ar"],["ar","zh-CHS"],["zh-CHS","nl"],["nl","zh-CHS"],["zh-CHS","th"],["th","zh-CHS"]]}},methods:{translate(){this.input.length>5e3?alert("请不要超过5000字"):this.input.match(/^\s*$/)||this.loading||(this.loading=!0,this.$axios.post("http://localhost:3000/api/fanyi.php",{from:this.from,to:this.to,text:this.input},{timeout:1e4}).then((t=>{this.loading=!1;var a=t.data;if(0==a.errorCode){this.result=a.translateResult;var e=a.type.split("2");this.langChoose.forEach(((t,a)=>{t[0]==e[0]&&t[1]==e[1]&&(this.langModeIndex=a)}))}else alert(this.errorCode[a.errorCode])})).catch((t=>{this.loading=!1,alert("请求超时，请重试")})))},clear(){(this.input||this.result)&&confirm("确定清空吗？")&&(this.input="",this.result=[])},changeLang(){this.myModal.show()},getLangModeText(t){var a=this.langChoose[t];return 1==a.length?"自动检测语言":`${this.language[a[0]]} » ${this.language[a[1]]}`},clickChangeLang(t){this.myModal.hide(),this.langModeIndex=t,this.from=this.langChoose[t][0],this.to=this.langChoose[t][1]}},components:{},computed:{_isMobile(){let t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t}},mounted(){document.body.ondragstart=()=>!1,this.myModal=new P.u_(document.querySelector(".modal-chooseLanguage")),window.addEventListener("keyup",(t=>{83==t.keyCode&&t.ctrlKey&&(t.preventDefault(),this.translate())})),window.addEventListener("keydown",(t=>{83==t.keyCode&&t.ctrlKey&&t.preventDefault()}))}},E=e(89);const I=(0,E.Z)(B,[["render",D]]);var U=I,K=e(8134),Y=e.n(K);const $=(0,n.ri)(U);$.config.globalProperties.$axios=A(),new(Y())(".copybtn"),$.mount("#app")}},a={};function e(n){var o=a[n];if(void 0!==o)return o.exports;var s=a[n]={exports:{}};return t[n].call(s.exports,s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(a,n,o,s){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],s=t[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(l=!1,s<r&&(r=s));if(l){t.splice(c--,1);var d=o();void 0!==d&&(a=d)}}return a}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,o,s]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,n){var o,s,r=n[0],l=n[1],i=n[2],d=0;if(r.some((function(a){return 0!==t[a]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(i)var c=i(e)}for(a&&a(n);d<r.length;d++)s=r[d],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},n=self["webpackChunkponcon"]=self["webpackChunkponcon"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(3826)}));n=e.O(n)})();
//# sourceMappingURL=app.7c602742.js.map