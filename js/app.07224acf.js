(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/QuickyClick/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04ca":function(e,t,n){},"2ee8":function(e,t,n){"use strict";var r=n("ac0f"),a=n.n(r);a.a},3984:function(e,t,n){"use strict";var r=n("ab92"),a=n.n(r);a.a},"4c9e":function(e,t,n){"use strict";var r=n("bba6"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("0ff2"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{player:e.player,time:e.time},on:{score:e.updateScore,time:e.updateTime}}),n("router-view",{staticClass:"text-center",attrs:{playerName:e.playerName,name:"user"},on:{player:e.updatePlayer,playerName:e.updatePlayerName,playersArray:e.updatePlayers}}),n("router-view",{staticClass:"text-center",attrs:{score:e.score,player:e.player,time:e.time,name:"score"}}),n("router-view",{attrs:{score:e.score,playerName:e.playerName,time:e.time,playersArray:e.playersArray,name:"scoreboard"}})],1)},i=[],o={name:"App",data:function(){return{score:0,player:!1,playerName:"",time:10,playersArray:[]}},methods:{updateScore:function(e){this.score=e},updatePlayer:function(){this.player=!0},updateTime:function(e){this.time=e},updatePlayerName:function(e){this.playerName=e},updatePlayers:function(e){this.playersArray=e}}},c=o,l=(n("5c0b"),n("2877")),u=Object(l["a"])(c,s,i,!1,null,null,null),p=u.exports,d=n("9483");Object(d["a"])("".concat("/QuickyClick/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"game",class:{wait:!e.player||e.stopped},on:{click:e.clickOnInterface}},[e.stopped?e._e():n("span",{staticClass:"time"},[e._v(e._s(e.gameTime))]),e.player&&!e.stopped?n("span",{staticClass:"round",class:{bonus:e.bonusActivated,badColor:e.badColorActivated},style:e.roundStyle,on:{click:[function(t){return t.stopPropagation(),t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.clickOnRound(t)},function(t){return t.altKey?(t.stopPropagation(),e.bonus(t)):null}]}}):e._e()]),n("div",{staticClass:"log text-center"},e._l(e.userLogs,(function(t){return n("p",{key:t.id},[e._v(" "+e._s(t.message)+" ")])})),0)])},m=[],y=(n("99af"),n("4de4"),{name:"game",props:["player","time"],data:function(){return{click:0,gameTime:this.time,roundStyle:{height:"5vh",width:"5vh",margin:"20vh 20vw"},bonusActivated:!1,badColorActivated:!1,collection:[],stopped:!0}},created:function(){document.onkeydown=this.start},watch:{click:function(){this.updateRound(),this.$emit("score",this.click)},player:function(){this.stopped=!1;var e=this;setInterval((function(){e.updateTime()}),1e3)}},computed:{userLogs:function(){return this.collection.filter((function(e){return"user"===e.type}))}},methods:{clickOnRound:function(e){setTimeout(this.updateRound,1e3),this.updateClick(1),this.addLog("BRAVO !")},updateTime:function(){0===this.gameTime&&(this.stopped=!0),this.stopped||(this.gameTime--,this.$emit("time",this.gameTime))},bonus:function(e){this.bonusActivated?(this.updateClick(2),this.addLog("PERFECT +2")):(this.updateClick(),this.addLog("?? -1"))},start:function(e){"Enter"===e.key&&console.log("start")},clickOnInterface:function(e){this.updateClick(),this.addLog("Oh Non -1")},updateClick:function(e){this.player&&!this.stopped&&(e?this.click+=e:this.click--)},updateRound:function(){var e=5*Math.random()+5,t=35*Math.random()+5,n=85*Math.random()+5;this.badColorActivated=e<5,this.bonusActivated=e>8,this.addLog({size:e,top:t,left:n},"round"),this.roundStyle.height=this.roundStyle.width="".concat(e,"vh"),this.roundStyle.margin="".concat(t,"vh ").concat(n,"vw")},addLog:function(e,t){if(this.player&&!this.stopped){var n=t||"user";this.collection.unshift({id:this.collection.length/2,message:e,type:n})}}}}),g=y,b=(n("2ee8"),Object(l["a"])(g,f,m,!1,null,"627612bd",null)),v=b.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.player?n("div",{staticClass:"score"},[e._v(" "+e._s(e.score)+" ")]):e._e(),e.finished?n("a",{staticClass:"btn btn-primary mt-3",attrs:{href:"./"}},[e._v("Relancer")]):e._e()])},w=[],_={name:"score",props:["score","player","time"],data:function(){return{finished:!1}},watch:{time:function(){if(!this.time||!this.player){var e=this;setTimeout((function(){e.finished=!0}),1e3)}}}},A=_,O=(n("3984"),Object(l["a"])(A,k,w,!1,null,"74d52388",null)),x=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.finished?n("div",{staticClass:"scoreboard mt-5"},[n("h1",{staticClass:"text-center display-4"},[e._v("Scoreboard")]),n("div",{staticClass:"text-center",attrs:{id:"scoreboardcontainer"}},[n("div",{staticClass:"btn-group-vertical"},[n("button",{staticClass:"btn btn-primary",class:{active:0===e.btclicked},on:{click:e.onClickLocal}},[e._v("Local")]),n("button",{staticClass:"btn btn-primary",class:{active:1===e.btclicked},on:{click:e.onClickOnline}},[e._v("Online")])]),0===e.btclicked?n("table",{staticClass:"table"},[e._m(0),n("tbody",e._l(e.playersArray,(function(t){return n("tr",{key:t.id},[n("th",{class:{gold:1===t.rank,silver:2===t.rank,bronze:3===t.rank},attrs:{scope:"row"}},[e._v(e._s(t.rank))]),n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.score))])])})),0)]):e._e(),1===e.btclicked?n("table",{staticClass:"table"},[e._m(1),n("tbody",e._l(e.onlineScores,(function(t){return n("tr",{key:t.id},[n("th",{class:{gold:1===t.rank,silver:2===t.rank,bronze:3===t.rank},attrs:{scope:"row"}},[e._v(e._s(t.rank))]),n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.score))])])})),0)]):e._e()])]):e._e()},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("#")]),n("th",{attrs:{scope:"col"}},[e._v("Player")]),n("th",{attrs:{scope:"col"}},[e._v("Score")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("#")]),n("th",{attrs:{scope:"col"}},[e._v("Player")]),n("th",{attrs:{scope:"col"}},[e._v("Score")])])])}],P=(n("b0c0"),n("96cf"),n("1da1")),I=n("59ca"),j=n.n(I),L=(n("ea7b"),n("e71f"),j.a.initializeApp({apiKey:"AIzaSyBlgzxZvzcGnTC_Wl-HeVs9Yas9C9-eRcg",projectId:"quickyclick-87728",authDomain:"quickyclick-87728.firebaseapp.com"}).firestore()),R=j.a.firestore,N=(R.Timestamp,R.GeoPoint,{name:"Scoreboard",data:function(){return{finished:!1,btclicked:0,onlineScores:[],LocalRank:1,OnlineRank:1}},firestore:{onlineScores:L.collection("onlineScores")},props:["playerName","score","time","playersArray"],watch:{time:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.time||(t=this,setTimeout(Object(P["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.playersArray.length)){e.next=10;break}if(t.playerName!==t.playersArray[n].name){e.next=7;break}return t.score>t.playersArray[n].score&&(t.playersArray[n].score=t.score),localStorage.setItem("players",JSON.stringify(t.playersArray)),e.next=7,L.collection("onlineScores").doc(t.playerName).set({name:t.playersArray[n].name,score:t.playersArray[n].score}).then((function(){console.log("user updated!")}));case 7:n++,e.next=1;break;case 10:for(t.playersArray.sort((function(e,t){return t.score-e.score})),r=0;r<t.playersArray.length;r++)"undefined"!==typeof t.playersArray[r+1]?t.playersArray[r].score===t.playersArray[r+1].score?(Object.assign(t.playersArray[r],{rank:t.LocalRank}),Object.assign(t.playersArray[r+1],{rank:t.LocalRank})):(Object.assign(t.playersArray[r],{rank:t.LocalRank}),t.LocalRank++,Object.assign(t.playersArray[r+1],{rank:t.LocalRank})):t.playersArray[r]===t.playersArray[0]&&Object.assign(t.playersArray[r],{rank:t.LocalRank});for(t.finished=!0,t.onlineScores.sort((function(e,t){return t.score-e.score})),a=0;a<t.onlineScores.length;a++)"undefined"!==typeof t.onlineScores[a+1]?t.onlineScores[a].score===t.onlineScores[a+1].score?(Object.assign(t.onlineScores[a],{rank:t.OnlineRank}),Object.assign(t.onlineScores[a+1],{rank:t.OnlineRank})):(Object.assign(t.onlineScores[a],{rank:t.OnlineRank}),t.OnlineRank++,Object.assign(t.onlineScores[a+1],{rank:t.OnlineRank})):t.onlineScores[a]===t.onlineScores[0]&&Object.assign(t.onlineScores[a],{rank:t.OnlineRank});case 15:case"end":return e.stop()}}),e)}))),1e3));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},methods:{onClickLocal:function(){this.btclicked=0},onClickOnline:function(){this.btclicked=1}}}),E=N,T=(n("faac"),Object(l["a"])(E,S,C,!1,null,"66f7da26",null)),$=T.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"usercontainer"}},[n("span",{class:{hide:!e.player},attrs:{id:"welcomeMsg"}},[e._v(e._s(e.welcomeMessage))]),n("div",{attrs:{id:"userformcontainer"}},[n("form",{attrs:{id:"userform"}},[n("div",{staticClass:"form-group",class:{hide:e.logged||!e.renderAuth},attrs:{id:"fieldscontainer"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.authInput.txtEmail,expression:"authInput.txtEmail"}],staticClass:"form-control mb-2",attrs:{type:"email",name:"email",id:"txtEmail",placeholder:"Email",required:""},domProps:{value:e.authInput.txtEmail},on:{input:function(t){t.target.composing||e.$set(e.authInput,"txtEmail",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.authInput.txtPassword,expression:"authInput.txtPassword"}],staticClass:"form-control",attrs:{type:"Password",name:"password",id:"txtPassword",placeholder:"Password",required:""},domProps:{value:e.authInput.txtPassword},on:{input:function(t){t.target.composing||e.$set(e.authInput,"txtPassword",t.target.value)}}})]),n("div",{staticClass:"form-group flex-row align-items-between mb-2",attrs:{id:"connexioncontainer"}},[n("button",{staticClass:"btn btn-primary mx-3 my-2",class:{hide:e.logged||!e.renderAuth},attrs:{type:"submit",id:"btnLogin"},on:{submit:function(t){return t.preventDefault(),e.Login()}}},[e._v(" Log in ")]),n("button",{staticClass:"btn btn-primary mx-3 my-2",class:{hide:e.logged||!e.renderAuth},attrs:{type:"submit",id:"btnSignUp"},on:{submit:function(t){return t.preventDefault(),e.SignUp()}}},[e._v(" Sign Up ")]),n("button",{staticClass:"btn btn-primary",class:{hide:!e.logged||!e.renderAuth},attrs:{id:"btnLogout"},on:{click:function(t){return e.LogOut()}}},[e._v(" Log out ")]),n("button",{staticClass:"btn btn-primary mx-3 my-2",class:{hide:e.logged||!e.renderAuth},attrs:{type:"button",id:"googleIn"},on:{click:function(t){return e.googleLogin()}}},[e._v(" Google in ")])]),n("div",[n("button",{staticClass:"btn btn-primary",class:{hide:!e.renderAuth},attrs:{id:"btnplay"},on:{click:function(t){return e.play()}}},[e._v(" Play ")])])])])])},z=[],q=new j.a.auth.GoogleAuthProvider,K={name:"user",props:["playerName"],data:function(){return{player:this.playerName,players:[],welcomeMessage:"",playerId:0,logged:!1,renderAuth:!1,authInput:{txtEmail:"",txtPassword:""}}},created:function(){null!=localStorage.getItem("players")?(this.players=JSON.parse(localStorage.getItem("players")),this.playerId=this.players.length):localStorage.setItem("players",JSON.stringify(this.players)),j.a.auth().onAuthStateChanged(this.authStateChange)},methods:{setPlayer:function(e){this.player=e,this.$emit("playerName",e),this.welcomeMessage="Bonjour ".concat(this.player," !");for(var t=0;t<this.players.length;t++)if(e===this.players[t].name)return void this.$emit("playersArray",this.players);this.players.push({name:e,id:this.playerId,score:0,rank:0}),this.$emit("playersArray",this.players),this.playerId++},Login:function(e){var t=this.authInput.txtEmail,n=this.authInput.txtPassword,r=j.a.auth(),a=r.signInWithEmailAndPassword(t,n);this.authInput.txtEmail="",this.authInput.txtPassword="",a.catch((function(e){return console.log(e.message)}))},SignUp:function(e){var t=this.authInput.txtEmail,n=this.authInput.txtPassword,r=j.a.auth(),a=r.createUserWithEmailAndPassword(t,n);this.authInput.txtEmail="",this.authInput.txtPassword="",a.catch((function(e){return console.log(e.message)}))},googleLogin:function(){j.a.auth().signInWithPopup(q).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},LogOut:function(){j.a.auth().signOut()},authStateChange:function(e){e?(e.sendEmailVerification().then((function(){console.log("send Verification")}),(function(e){console.log("not send Verification")})),!0===e.emailVerified?(console.log("login success"),this.logged=!0,e.displayName?this.setPlayer(e.displayName):this.setPlayer(e.email)):(this.logged=!1,this.welcomeMessage="")):(console.log("not loggend in"),this.logged=!1,this.welcomeMessage=""),!1===this.renderAuth&&(this.renderAuth=!0)},play:function(){this.player?(this.$emit("player"),document.querySelector("#btnplay").setAttribute("disabled",!0)):window.alert("Merci de vous connecter")}}},V=K,J=(n("4c9e"),Object(l["a"])(V,M,z,!1,null,"9777c950",null)),U=J.exports;r["a"].use(h["a"]);var B=[{path:"/",components:{default:v,score:x,user:U,scoreboard:$}}],G=new h["a"]({mode:"history",base:"/QuickyClick/",routes:B}),W=G;n("4989"),n("ab8b");r["a"].config.productionTip=!1,r["a"].use(a["a"]),new r["a"]({router:W,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},ab92:function(e,t,n){},ac0f:function(e,t,n){},bba6:function(e,t,n){},faac:function(e,t,n){"use strict";var r=n("04ca"),a=n.n(r);a.a}});
//# sourceMappingURL=app.07224acf.js.map