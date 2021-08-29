(window["webpackJsonpmemory-match-game"]=window["webpackJsonpmemory-match-game"]||[]).push([[0],{140:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(48),i=t.n(c),s=(t(72),t(73),t(11)),o=t.n(s),d=t(15),l=t(14),u=t(10),m=t(49),p=t(50),f=t(65),b=t(51),h=t(66),v=t(7),_=t(9),g=t.n(_),y=t(34),O=t.n(y),j=t(18),w=t.n(j),E=t(19),x=t.n(E),S=t(20),k=t.n(S),N=t(21),T=t.n(N),B=t(22),D=t.n(B),P=t(23),A=t.n(P),F=t(24),M=t.n(F),L=t(25),G=t.n(L),H=t(26),C=t.n(H),q=t(27),J=t.n(q),K=[{name:"A",src:w.a,id:"aceDiscarded"},{name:"5",src:J.a,id:"fivDiscarded"},{name:"6",src:C.a,id:"sixDiscarded"},{name:"7",src:G.a,id:"sevDiscarded"},{name:"8",src:M.a,id:"eigDiscarded"},{name:"9",src:A.a,id:"ninDiscarded"},{name:"10",src:D.a,id:"tenDiscarded"},{name:"J",src:T.a,id:"jacDiscarded"},{name:"Q",src:k.a,id:"queDiscarded"},{name:"K",src:x.a,id:"kinDiscarded"}],z=function(){return r.a.createElement("div",{id:"discard",className:O.a.discardRow},K.map((function(e,a){return r.a.createElement("img",{key:"".concat(e.name).concat(a),style:{visibility:"hidden"},src:e.src,className:O.a.discarded,id:e.id,alt:""})})))},Q=t(52),Y=t.n(Q),R=t(53),V=t.n(R),X=t(2),Z=t.n(X),I=function(e){var a="".concat(e.id,"X"),t="".concat(e.id,"Move");return r.a.createElement("div",{className:g.a.cardHolder},r.a.createElement("div",{className:g.a.cardMove,id:t},r.a.createElement("div",{key:e.id,className:g.a.card,id:e.id,"data-value":e.value},r.a.createElement("img",{src:Y.a,className:g.a.cardBack,alt:"","data-value":e.value,onClick:function(a){return e.flippedCards<2&&e.time>0?function(a){Z()("#".concat(e.id)).css("transform","rotateY(180deg)"),e.handleFlip(a)}(a):null}}),r.a.createElement("img",{src:e.src,className:g.a.cardFace,alt:"",style:{transform:"rotateY(180deg)"}}),r.a.createElement("img",{src:V.a,alt:"",className:g.a.cardFace,id:a,style:{zIndex:999,visibility:"hidden",transform:"rotateY(180deg)"}}))))},W=function(e){var a=Object(n.useState)(0),t=Object(v.a)(a,2),c=t[0],i=t[1],s=Object(n.useState)(""),o=Object(v.a)(s,2),d=o[0],l=o[1],u=Object(n.useState)(""),m=Object(v.a)(u,2),p=m[0],f=m[1],b=Object(n.useState)(""),h=Object(v.a)(b,2),_=h[0],y=h[1],O=Object(n.useState)(""),j=Object(v.a)(O,2),w=j[0],E=j[1],x=Object(n.useState)(1),S=Object(v.a)(x,2),k=S[0],N=(S[1],Object(n.useState)("")),T=Object(v.a)(N,2),B=T[0],D=T[1],P=function(){l(""),f(""),y(""),E(""),i(0)},A=function(){d===_?(e.addMatch(k),Z()("#".concat(p,"Move")).addClass(g.a.moveToDiscard),Z()("#".concat(w,"Move")).addClass(g.a.moveToDiscard),Z()("#".concat(B)).css("visibility","visible"),Z()("#".concat(B)).addClass(g.a.discardBig),setTimeout((function(){Z()("#".concat(p)).css("visibility","hidden"),Z()("#".concat(w)).css("visibility","hidden")}),500),P()):(setTimeout((function(){Z()("#".concat(p,"X")).css("visibility","visible"),Z()("#".concat(w,"X")).css("visibility","visible")}),500),setTimeout((function(){Z()("#".concat(p,"X")).css("visibility","hidden"),Z()("#".concat(w,"X")).css("visibility","hidden")}),1e3),setTimeout((function(){Z()("#".concat(p)).css("transform","rotate(0deg)"),Z()("#".concat(w)).css("transform","rotate(0deg)")}),800),P())};return Object(n.useEffect)((function(){2===c&&A()}),[A]),r.a.createElement("div",{id:"gameBoard",className:g.a.gameBoard,style:{display:"none"}},r.a.createElement(z,null),r.a.createElement("div",{className:g.a.playArea,id:"playArea"},e.cards.map((function(a,t){return r.a.createElement(I,{key:t,src:a.card,id:a.id,value:a.face,time:e.time,handleFlip:function(e){return function(e,a,t){var n=a,r=t,s="".concat(r,"Discarded");D(s),0===c?(l(r),f(n)):(y(r),E(n)),i(c+1)}(0,a.id,a.face)},flippedCards:c})}))))},U=function(e){return r.a.createElement("button",{key:e.index,"data-level":e.level,id:e.id,"data-time":e.time,onClick:function(a){return e.pickLevel(a)}},e.name)},$=t(8),ee=t.n($),ae=function(e){return r.a.createElement("section",{style:{padding:"10% 0"},id:"pickLevel"},r.a.createElement("h1",{style:{color:"whitesmoke"}},"pick a level"),r.a.createElement("div",{className:ee.a.pickLevel},[{level:1,name:"easy peasy",id:"easy",time:80},{level:2,name:"...meh",id:"medium",time:60},{level:3,name:"yikes!",id:"hard",time:48}].map((function(a,t){return r.a.createElement(U,{key:t,level:a.level,id:a.id,time:a.time,className:ee.a.levelBtn,pickLevel:function(a){return e.pickLevel(a)},name:a.name})}))))},te=function(){return r.a.createElement("header",{className:ee.a.gameHead,id:"gameHead"},r.a.createElement("p",{className:ee.a.title},r.a.createElement("u",null,"Memory Match")),r.a.createElement("p",{style:{fontSize:"24px"}},"Click the cards to find their matching counterpart!"))},ne=function(e){var a=e.time,t=Number(a).toFixed(1);return r.a.createElement("div",{className:ee.a.gameHead,id:"timer",style:{display:"none",fontSize:"8vh",textAlign:"left",width:"100%",padding:"0 33%"}},t)},re=function(){return r.a.createElement("section",{style:{padding:"10% 0",display:"none"},id:"repeatPlay"},r.a.createElement("div",{className:ee.a.PlayAgain},r.a.createElement("a",{href:"."},r.a.createElement("button",null,"play again"))))};function ce(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ie(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ce(t,!0).forEach((function(a){Object(d.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var se=t(75)({projectId:"dw2i2kvg",dataset:"production",token:"skQ6f3hEky8g5HG4aK7qeZiFMi3S23okugqMok6r5N7NdyGO7NJ4kTZSvOhZ2VVzBLbCVBVqruPevVgz9Fzfl1Sb4OIuHi2s9At0mSLab0JAbDaFmmd7YGq0iLBCTNMcVsaDEgaBKqnz4kPaLjkYFinwD9CHKbQgZpQodnZ8MKvrnARput9A",useCdn:!1,ignoreBrowserTokenWarning:!0}),oe=function(){var e=Object(l.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,se.fetch('*[_type == "winner"]| order(score desc)');case 3:return(n=e.sent).sort((function(e,a){return a.score-e.score})),n.forEach((function(e,n){n<10&&(t=[].concat(Object(u.a)(t),[ie({},e)]),9===n&&(a=e.score))})),e.abrupt("return",{winners:t,qualifier:a});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(l.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.create(a);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),le=t(142),ue=t(143),me=t(28),pe=t.n(me);function fe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function be(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?fe(t,!0).forEach((function(a){Object(d.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function he(e){var a=e.winnersList,t=e.myScore,c=e.qualifyingScore,i=Object(n.useState)([]),s=Object(v.a)(i,2),d=s[0],m=s[1],p=Object(n.useState)({first:"",second:"",third:""}),f=Object(v.a)(p,2),b=f[0],h=f[1],_=Object(n.useState)(!1),g=Object(v.a)(_,2),y=g[0],O=g[1],j=function(){var e=Object(l.a)(o.a.mark((function e(a){var n,r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=b.first+b.second+b.third,r=n.trim(),c=Number(t).toFixed(3),i={_type:"winner",initials:r,score:Number(c)},e.next=7,de(i);case 7:s=e.sent,console.log(s),Z()("#repeatPlay").show(),Z()("#submitScoreBtn").hide(),Z()(".initial").prop("disabled",!0);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=[];t>c?(O(!0),Z()("#repeatPlay").hide(),a.forEach((function(a,t){t<9&&(e=[].concat(Object(u.a)(e),[a]))})),(e=[].concat(Object(u.a)(e),[{type:"winner",score:t,initials:""}])).sort((function(e,a){return a.score-e.score}))):(e=Object(u.a)(a),Z()("#repeatPlay").show()),m(Object(u.a)(e))}),[a,t,c]),r.a.createElement("div",{id:"topTen",className:pe.a.topTen},r.a.createElement("h4",{style:{marginBottom:"5vh"}},y?"You Made The Top Ten!!!":"Behold The Top Ten"),r.a.createElement(le.a,{onSubmit:function(e){return j(e)}},d.map((function(e,a){var t=function(e){for(var a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}(7),n=e.initials,c=t+n,i=n.length,s=i>0?n[0]:"",o=i>1?n[1]:"",d=i>2?n[2]:"";return r.a.createElement("div",{key:c,className:pe.a.winnerLine},r.a.createElement("span",{style:{whiteSpace:"nowrap"}},a<9?"   #".concat(a+1," -"):"#".concat(a+1,"-")),r.a.createElement("div",{className:pe.a.innerStats},r.a.createElement("input",{type:"text",autoFocus:n?null:"autofocus",className:"initial",maxLength:"1",disabled:!!n,value:n?s:b.first,onChange:function(e){return h(be({},b,{first:e.target.value}))},required:!n}),r.a.createElement("input",{type:"text",className:"initial",maxLength:"1",disabled:!!n,value:n?o:b.second,onChange:function(e){return h(be({},b,{second:e.target.value}))},required:!n}),r.a.createElement("input",{type:"text",className:"initial",maxLength:"1",disabled:!!n,value:n?d:b.third,onChange:function(e){return h(be({},b,{third:e.target.value}))},style:{visibility:n&&!d?"hidden":"visible"}})),r.a.createElement("span",null,"\xa0-\xa0",Number(e.score).toFixed(3)))})),r.a.createElement(ue.a,{type:"submit",id:"submitScoreBtn",style:{display:y?"initial":"none"}},"Next")),r.a.createElement(re,null))}var ve=t(54),_e=t.n(ve),ge=function(e){var a=e.score,t=e.stats,c=Object(n.useState)([]),i=Object(v.a)(c,2),s=i[0],o=i[1],d=Object(n.useState)(0),l=Object(v.a)(d,2),m=l[0],p=l[1],f=Object(n.useState)(0),b=Object(v.a)(f,2),h=b[0],_=b[1];return Object(n.useEffect)((function(){var e,n,r=null!==(e=t.winners)&&void 0!==e?e:[];o(Object(u.a)(r));var c=null!==(n=t.qualifier)&&void 0!==n?n:0;p(Number(c)),_(Number(a))}),[a,t]),r.a.createElement("div",{className:_e.a.gameHead,id:"endOfGame",style:{display:"none",fontSize:"5.5vh"}},"Your Score: ",a,r.a.createElement(he,{winnersList:s,myScore:h,qualifyingScore:m}))},ye=t(55),Oe=t.n(ye),je=t(56),we=t.n(je),Ee=t(57),xe=t.n(Ee),Se=t(58),ke=t.n(Se),Ne=t(59),Te=t.n(Ne),Be=t(60),De=t.n(Be),Pe=t(61),Ae=t.n(Pe),Fe=t(62),Me=t.n(Fe),Le=t(63),Ge=t.n(Le),He=t(64),Ce=t.n(He),qe=[{id:"Ac1",face:"ace",card:w.a},{id:"Ac2",face:"ace",card:Oe.a},{id:"Kg1",face:"kin",card:x.a},{id:"Kg2",face:"kin",card:we.a},{id:"Qn1",face:"que",card:k.a},{id:"Qn2",face:"que",card:xe.a},{id:"Jk1",face:"jac",card:T.a},{id:"Jk2",face:"jac",card:ke.a},{id:"Tn1",face:"ten",card:D.a},{id:"Tn2",face:"ten",card:Te.a},{id:"Nn1",face:"nin",card:A.a},{id:"Nn2",face:"nin",card:De.a},{id:"Et1",face:"eig",card:M.a},{id:"Et2",face:"eig",card:Ae.a},{id:"Sv1",face:"sev",card:G.a},{id:"Sv2",face:"sev",card:Me.a},{id:"Sx1",face:"six",card:C.a},{id:"Sx2",face:"six",card:Ge.a},{id:"Fv1",face:"fiv",card:J.a},{id:"Fv2",face:"fiv",card:Ce.a}];function Je(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Ke(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Je(t,!0).forEach((function(a){Object(d.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ze=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).state={time:20,gameStarted:!1,matchesFound:0,score:0,bonus:0,level:0,cards:[],stats:{}},t.addMatch=function(){var e=t.state.matchesFound+1;t.setState({matchesFound:e})},t.resetMatch=function(){var e=Z()("#playAgain");setTimeout((function(){10===t.state.matchesFound?e.css("display","flex"):e.css("display","none")}),500)},t.subtractTenthSecond=function(){t.setState({time:t.state.time-.1}),t.startTimer()},t.startTimer=function(){if(t.state.matchesFound<10&&t.state.time<.01)Z()("#timer").hide(),Z()("#endOfGame").show(),Z()("#playArea").hide(),Z()("#discard").hide();else if(t.state.matchesFound<10&&t.state.time>0)setTimeout((function(){t.subtractTenthSecond()}),100);else if(10===t.state.matchesFound){var e=3.14159*t.state.time+t.state.bonus;t.setState({score:Number(e).toFixed(3)}),setTimeout((function(){Z()("#endOfGame").show(),Z()("#timer").hide(),Z()("#playArea").hide(),Z()("#discard").hide()}),500)}},t.startGame=function(){var e=0,a=qe;for(e=a.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[a[n],a[e]];a[e]=r[0],a[n]=r[1]}t.setState({cards:Object(u.a)(a)}),Z()("#pickLevel").hide(),Z()("#gameBoard").css("display","flex"),t.state.gameStarted||t.setState({gameStarted:!0}),Z()("#gameHead").hide(),Z()("#timer").show(),Z()("#playArea").show(),t.startTimer()},t.pickLevel=function(e){var a=Number(e.target.dataset.level),n=Number(e.target.dataset.time);t.setState({time:n,level:a});var r=2*(80-n);t.setState({bonus:r}),t.startGame()},t}return Object(h.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var a=Object(l.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,oe();case 2:t=Ke({},t=a.sent,{level:e.state.level}),e.setState({stats:t}),console.log(t);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){return r.a.createElement("div",{className:ee.a.game,id:"game"},r.a.createElement("div",{id:"scoreboard",className:ee.a.scoreboard},r.a.createElement(te,null),r.a.createElement(ne,{time:this.state.time}),r.a.createElement(ge,{score:this.state.score,level:this.state.level,gameStarted:this.state.gameStarted,stats:this.state.stats})),r.a.createElement("div",{className:ee.a.flipArea},r.a.createElement(ae,{pickLevel:this.pickLevel}),r.a.createElement(W,{addMatch:this.addMatch,resetMatch:this.resetMatch,time:this.state.time,cards:this.state.cards,startTimer:this.startTimer})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,a,t){e.exports=t.p+"static/media/Ace1.e6a6d2f8.png"},19:function(e,a,t){e.exports=t.p+"static/media/King1.6b5b30c0.png"},20:function(e,a,t){e.exports=t.p+"static/media/Queen1.63afa62b.png"},21:function(e,a,t){e.exports=t.p+"static/media/Jack1.1595a3ea.png"},22:function(e,a,t){e.exports=t.p+"static/media/Ten1.b208cd7f.png"},23:function(e,a,t){e.exports=t.p+"static/media/Nine1.1d495bb1.png"},24:function(e,a,t){e.exports=t.p+"static/media/Eight1.1e9e59b0.png"},25:function(e,a,t){e.exports=t.p+"static/media/Seven1.4808cc41.png"},26:function(e,a,t){e.exports=t.p+"static/media/Six1.c99b0f04.png"},27:function(e,a,t){e.exports=t.p+"static/media/Five1.24fd440c.png"},28:function(e,a,t){e.exports={topTen:"TopTen__topTen__-hash-base64-5-",winnerLine:"TopTen__winnerLine__-hash-base64-5-",innerStats:"TopTen__innerStats__-hash-base64-5-"}},34:function(e,a,t){e.exports={gameBoard:"board__gameBoard__-hash-base64-5-",cardBack:"board__cardBack__-hash-base64-5-",cardFace:"board__cardFace__-hash-base64-5-",discardRow:"board__discardRow__-hash-base64-5-",discarded:"board__discarded__-hash-base64-5-",playArea:"board__playArea__-hash-base64-5-",cardHolder:"board__cardHolder__-hash-base64-5-",cardMove:"board__cardMove__-hash-base64-5-",card:"board__card__-hash-base64-5-",discardBig:"board__discardBig__-hash-base64-5-",moveToDiscard:"board__moveToDiscard__-hash-base64-5-"}},52:function(e,a,t){e.exports=t.p+"static/media/red_back.b27beff2.png"},53:function(e,a,t){e.exports=t.p+"static/media/x.338eceb9.png"},54:function(e,a,t){e.exports={gameHead:"EndOfGame__gameHead__-hash-base64-5-",winnersList:"EndOfGame__winnersList__-hash-base64-5-"}},55:function(e,a,t){e.exports=t.p+"static/media/Ace2.e6a6d2f8.png"},56:function(e,a,t){e.exports=t.p+"static/media/King2.6b5b30c0.png"},57:function(e,a,t){e.exports=t.p+"static/media/Queen2.63afa62b.png"},58:function(e,a,t){e.exports=t.p+"static/media/Jack2.1595a3ea.png"},59:function(e,a,t){e.exports=t.p+"static/media/Ten2.b208cd7f.png"},60:function(e,a,t){e.exports=t.p+"static/media/Nine2.1d495bb1.png"},61:function(e,a,t){e.exports=t.p+"static/media/Eight2.1e9e59b0.png"},62:function(e,a,t){e.exports=t.p+"static/media/Seven2.4808cc41.png"},63:function(e,a,t){e.exports=t.p+"static/media/Six2.c99b0f04.png"},64:function(e,a,t){e.exports=t.p+"static/media/Five2.24fd440c.png"},67:function(e,a,t){e.exports=t(140)},72:function(e,a,t){e.exports={root:"index__root__-hash-base64-5-"}},8:function(e,a,t){e.exports={game:"Game__game__-hash-base64-5-",scoreboard:"Game__scoreboard__-hash-base64-5-",title:"Game__title__-hash-base64-5-",flipArea:"Game__flipArea__-hash-base64-5-",gameHead:"Game__gameHead__-hash-base64-5-",pickLevel:"Game__pickLevel__-hash-base64-5-",timer:"Game__timer__-hash-base64-5-",playAgain:"Game__playAgain__-hash-base64-5-"}},9:function(e,a,t){e.exports={gameBoard:"Board__gameBoard__-hash-base64-5-",cardBack:"Board__cardBack__-hash-base64-5-",cardFace:"Board__cardFace__-hash-base64-5-",discardRow:"Board__discardRow__-hash-base64-5-",discarded:"Board__discarded__-hash-base64-5-",playArea:"Board__playArea__-hash-base64-5-",cardHolder:"Board__cardHolder__-hash-base64-5-",cardMove:"Board__cardMove__-hash-base64-5-",card:"Board__card__-hash-base64-5-",discardBig:"Board__discardBig__-hash-base64-5-",moveToDiscard:"Board__moveToDiscard__-hash-base64-5-"}}},[[67,1,2]]]);
//# sourceMappingURL=main.ad373a44.chunk.js.map