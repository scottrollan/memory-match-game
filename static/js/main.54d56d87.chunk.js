(window["webpackJsonpmemory-match-game"]=window["webpackJsonpmemory-match-game"]||[]).push([[0],[,function(e,a,t){e.exports={game:"Game__game__-hash-base64-5-",scoreboard:"Game__scoreboard__-hash-base64-5-",title:"Game__title__-hash-base64-5-",playArea:"Game__playArea__-hash-base64-5-",gameHead:"Game__gameHead__-hash-base64-5-",pickLevel:"Game__pickLevel__-hash-base64-5-",timer:"Game__timer__-hash-base64-5-",playAgain:"Game__playAgain__-hash-base64-5-"}},,,,,,function(e,a,t){e.exports={cardBack:"card__cardBack__-hash-base64-5-",cardFace:"card__cardFace__-hash-base64-5-",discardRow:"card__discardRow__-hash-base64-5-",discarded:"card__discarded__-hash-base64-5-",playArea:"card__playArea__-hash-base64-5-",cardHolder:"card__cardHolder__-hash-base64-5-",cardMove:"card__cardMove__-hash-base64-5-",card:"card__card__-hash-base64-5-",discardBig:"card__discardBig__-hash-base64-5-",moveToDiscard:"card__moveToDiscard__-hash-base64-5-"}},,,function(e,a,t){e.exports=t.p+"static/media/Ace1.e6a6d2f8.png"},function(e,a,t){e.exports=t.p+"static/media/King1.6b5b30c0.png"},function(e,a,t){e.exports=t.p+"static/media/Queen1.63afa62b.png"},function(e,a,t){e.exports=t.p+"static/media/Jack1.1595a3ea.png"},function(e,a,t){e.exports=t.p+"static/media/Ten1.b208cd7f.png"},function(e,a,t){e.exports=t.p+"static/media/Nine1.1d495bb1.png"},function(e,a,t){e.exports=t.p+"static/media/Eight1.1e9e59b0.png"},function(e,a,t){e.exports=t.p+"static/media/Seven1.4808cc41.png"},function(e,a,t){e.exports=t.p+"static/media/Six1.c99b0f04.png"},function(e,a,t){e.exports=t.p+"static/media/Five1.24fd440c.png"},,,function(e,a,t){e.exports=t.p+"static/media/gray_back.db53954a.png"},function(e,a,t){e.exports=t.p+"static/media/x.338eceb9.png"},function(e,a,t){e.exports=t.p+"static/media/Ace2.e6a6d2f8.png"},function(e,a,t){e.exports=t.p+"static/media/King2.6b5b30c0.png"},function(e,a,t){e.exports=t.p+"static/media/Queen2.63afa62b.png"},function(e,a,t){e.exports=t.p+"static/media/Jack2.1595a3ea.png"},function(e,a,t){e.exports=t.p+"static/media/Ten2.b208cd7f.png"},function(e,a,t){e.exports=t.p+"static/media/Nine2.1d495bb1.png"},function(e,a,t){e.exports=t.p+"static/media/Eight2.1e9e59b0.png"},function(e,a,t){e.exports=t.p+"static/media/Seven2.4808cc41.png"},function(e,a,t){e.exports=t.p+"static/media/Six2.c99b0f04.png"},function(e,a,t){e.exports=t.p+"static/media/Five2.24fd440c.png"},function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){e.exports={root:"index__root__-hash-base64-5-"}},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(21),s=t.n(i),r=(t(39),t(2)),d=t(3),o=t(5),l=t(4),m=t(6),u=t(1),p=t.n(u),f=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){return c.a.createElement("section",{style:{padding:"10% 0",display:"none"},id:"playAgain"},c.a.createElement("div",{className:p.a.PlayAgain},c.a.createElement("a",{href:"."},c.a.createElement("button",null,"play again"))))}}]),a}(n.Component),h=t(9),b=t(7),y=t.n(b),v=t(10),g=t.n(v),_=t(11),j=t.n(_),E=t(12),k=t.n(E),O=t(13),x=t.n(O),S=t(14),N=t.n(S),w=t(15),A=t.n(w),B=t(16),T=t.n(B),F=t(17),C=t.n(F),M=t(18),L=t.n(M),D=t(19),I=t.n(D),G=[{name:"A",src:g.a,id:"aceDiscarded"},{name:"5",src:I.a,id:"fivDiscarded"},{name:"6",src:L.a,id:"sixDiscarded"},{name:"7",src:C.a,id:"sevDiscarded"},{name:"8",src:T.a,id:"eigDiscarded"},{name:"9",src:A.a,id:"ninDiscarded"},{name:"10",src:N.a,id:"tenDiscarded"},{name:"J",src:x.a,id:"jacDiscarded"},{name:"Q",src:k.a,id:"queDiscarded"},{name:"K",src:j.a,id:"kinDiscarded"}],H=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){return c.a.createElement("div",{id:"discard",className:y.a.discardRow},G.map((function(e,a){return c.a.createElement("img",{key:"".concat(e.name).concat(a),style:{visibility:"hidden"},src:e.src,className:y.a.discarded,id:e.id,alt:""})})))}}]),a}(n.Component),J=t(22),z=t.n(J),K=t(23),Q=t.n(K),X=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={discarded:!1},t.flipCard=function(e){document.getElementById(t.props.id).style.transform="rotateY(180deg)",t.props.handleFlip(e)},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){var a=this,t="".concat(this.props.id,"X"),n="".concat(this.props.id,"Move");return c.a.createElement("div",{className:y.a.cardHolder},c.a.createElement("div",{className:y.a.cardMove,id:n},c.a.createElement("div",{key:this.props.id,className:y.a.card,id:this.props.id,"data-value":this.props.value},c.a.createElement("img",{src:z.a,className:y.a.cardBack,alt:"","data-value":this.props.value,onClick:function(e){return a.props.flippedCards<2&&a.props.time>0?a.flipCard(e):null}}),c.a.createElement("img",{src:this.props.src,className:y.a.cardFace,alt:"",style:{transform:"rotateY(180deg)"}}),c.a.createElement("img",{src:Q.a,alt:"",className:y.a.cardFace,id:t,style:{zIndex:999,visibility:"hidden",transform:"rotateY(180deg)"}}))))}}]),a}(n.Component),W=t(8),Y=t.n(W),q={width:"100%",height:"100%",display:"none"},R=function(e){var a=Object(n.useState)(0),t=Object(h.a)(a,2),i=t[0],s=t[1],r=Object(n.useState)(""),d=Object(h.a)(r,2),o=d[0],l=d[1],m=Object(n.useState)(""),u=Object(h.a)(m,2),p=u[0],f=u[1],b=Object(n.useState)(""),v=Object(h.a)(b,2),g=v[0],_=v[1],j=Object(n.useState)(""),E=Object(h.a)(j,2),k=E[0],O=E[1],x=Object(n.useState)(e.matchesFound),S=Object(h.a)(x,2),N=(S[0],S[1],Object(n.useState)("")),w=Object(h.a)(N,2),A=w[0],B=w[1],T=function(){l(""),f(""),_(""),O(""),s(0)},F=function(){console.log("checkForMatch fired."),o===g?(e.addMatch(),Y()("#".concat(p,"Move")).addClass(y.a.moveToDiscard),Y()("#".concat(k,"Move")).addClass(y.a.moveToDiscard),Y()("#".concat(A)).css("visibility","visible"),Y()("#".concat(A)).addClass(y.a.discardBig),setTimeout((function(){Y()("#".concat(p)).css("visibility","hidden"),Y()("#".concat(k)).css("visibility","hidden")}),500),T()):(console.log("handleNoMatch fired."),setTimeout((function(){Y()("#".concat(p,"X")).css("visibility","visible"),Y()("#".concat(k,"X")).css("visibility","visible")}),300),setTimeout((function(){Y()("#".concat(p,"X")).css("visibility","hidden"),Y()("#".concat(k,"X")).css("visibility","hidden")}),600),setTimeout((function(){Y()("#".concat(p)).css("transform","rotate(0deg)"),Y()("#".concat(k)).css("transform","rotate(0deg)")}),400),T())};return Object(n.useEffect)((function(){2===i&&F()}),[F]),c.a.createElement("div",{id:"gameBoard",style:q},c.a.createElement(H,null),c.a.createElement("div",{className:y.a.playArea,id:"playArea"},e.cards.map((function(a,t){return c.a.createElement(X,{key:t,src:a.card,id:a.id,value:a.face,time:e.time,handleFlip:function(e){return function(e,a,t){var n=a,c=t,r="".concat(c,"Discarded");B(r),0===i?(l(c),f(n)):(_(c),O(n)),s(i+1)}(0,a.id,a.face)},flippedCards:i})})),";"))},P=function(e){return c.a.createElement("button",{key:e.index,"data-level":e.level,id:e.id,"data-time":e.time,onClick:function(a){return e.pickLevel(a)}},e.name)},$=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={levels:[{level:1,name:"easy peasy",id:"easy",time:80},{level:2,name:"...meh",id:"medium",time:60},{level:3,name:"yikes!",id:"hard",time:48}]},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){var a=this;return c.a.createElement("section",{style:{padding:"10% 0"},id:"pickLevel"},c.a.createElement("h1",{style:{color:"whitesmoke"}},"pick a level"),c.a.createElement("div",{className:p.a.pickLevel},this.state.levels.map((function(e,t){return c.a.createElement(P,{key:t,level:e.level,id:e.id,time:e.time,className:p.a.levelBtn,pickLevel:function(e){return a.props.pickLevel(e)},name:e.name})}))))}}]),a}(n.Component),U=function(){return c.a.createElement("header",{className:p.a.gameHead,id:"gameHead"},c.a.createElement("p",{className:p.a.title},c.a.createElement("u",null,"Memory Match")),c.a.createElement("p",{style:{fontSize:"24px"}},"Click the cards to find their matching counterpart!"))},V=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){return c.a.createElement("header",{className:p.a.gameHead,id:"timer",style:{display:"none",fontSize:"8vh"}},this.props.time)}}]),a}(n.Component),Z=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){return c.a.createElement("header",{className:p.a.gameHead,id:"youWin",style:{display:"none",fontSize:"5.5vh"}},"Your Score: ",this.props.score)}}]),a}(n.Component),ee=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(e){return c.a.createElement("header",{className:p.a.gameHead,id:"youLose",style:{display:"none",fontSize:"5.5vh"}},"Time is out, sucka.")}}]),a}(n.Component),ae=t(24),te=t.n(ae),ne=t(25),ce=t.n(ne),ie=t(26),se=t.n(ie),re=t(27),de=t.n(re),oe=t(28),le=t.n(oe),me=t(29),ue=t.n(me),pe=t(30),fe=t.n(pe),he=t(31),be=t.n(he),ye=t(32),ve=t.n(ye),ge=t(33),_e=t.n(ge),je=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={time:2,gameStarted:!1,matchesFound:0,score:0,bonus:0,cards:[{id:"Ac1",face:"ace",card:g.a},{id:"Ac2",face:"ace",card:te.a},{id:"Kg1",face:"kin",card:j.a},{id:"Kg2",face:"kin",card:ce.a},{id:"Qn1",face:"que",card:k.a},{id:"Qn2",face:"que",card:se.a},{id:"Jk1",face:"jac",card:x.a},{id:"Jk2",face:"jac",card:de.a},{id:"Tn1",face:"ten",card:N.a},{id:"Tn2",face:"ten",card:le.a},{id:"Nn1",face:"nin",card:A.a},{id:"Nn2",face:"nin",card:ue.a},{id:"Et1",face:"eig",card:T.a},{id:"Et2",face:"eig",card:fe.a},{id:"Sv1",face:"sev",card:C.a},{id:"Sv2",face:"sev",card:be.a},{id:"Sx1",face:"six",card:L.a},{id:"Sx2",face:"six",card:ve.a},{id:"Fv1",face:"fiv",card:I.a},{id:"Fv2",face:"fiv",card:_e.a}]},t.addMatch=function(){t.setState({matchesFound:t.state.matchesFound+1})},t.resetMatch=function(){var e=document.getElementById("playAgain");setTimeout((function(){10===t.state.matchesFound?e.style.display="flex":e.style.display="none"}),500)},t.youLose=function(){document.getElementById("youLose").display="inline-block"},t.subtractSecond=function(){t.setState({time:t.state.time-1}),t.startTimer()},t.startTimer=function(){var e=document.getElementById("playAgain"),a=document.getElementById("youLose"),n=document.getElementById("timer"),c=document.getElementById("youWin");if(t.state.matchesFound<10&&t.state.time>0)setTimeout((function(){t.subtractSecond()}),1e3);else if(10===t.state.matchesFound){var i=3.14159*t.state.time+t.state.bonus;t.setState({score:i.toFixed(3)}),setTimeout((function(){e.style.display="block",c.style.display="block",n.style.display="none"}),500)}else t.state.matchesFound<10&&0===t.state.time&&(e.style.display="block",n.style.display="none",a.style.display="block")},t.openTimer=function(){document.getElementById("gameHead").style.display="none",document.getElementById("timer").style.display="block",document.getElementById("playArea").style.display="block",t.startTimer()},t.startGame=function(){var e=0,a=t.state.cards;for(e=a.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),c=[a[n],a[e]];a[e]=c[0],a[n]=c[1]}document.getElementById("pickLevel").style.display="none",document.getElementById("gameBoard").style.display="inline-block",!1===t.state.gameStarted&&(t.setState({gameStarted:!0}),t.openTimer())},t.pickLevel=function(e){var a=e.target.dataset.time,n=2*(80-e.target.dataset.time);t.setState({time:a,bonus:n}),t.startGame()},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return window.addEventListener("load",(function(){window.scrollTo(0,1)}),!1),c.a.createElement("div",{className:p.a.game},c.a.createElement("div",{id:"scoreboard",className:p.a.scoreboard},c.a.createElement(U,null),c.a.createElement(V,{time:this.state.time}),c.a.createElement(Z,{score:this.state.score}),c.a.createElement(ee,null)),c.a.createElement("div",{id:"playArea",className:p.a.playArea},c.a.createElement(f,null),c.a.createElement($,{pickLevel:function(a){return e.pickLevel(a)}}),c.a.createElement(R,{onClick:this.startGame,addMatch:this.addMatch,resetMatch:this.resetMatch,time:this.state.time,cards:this.state.cards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[34,1,2]]]);
//# sourceMappingURL=main.54d56d87.chunk.js.map