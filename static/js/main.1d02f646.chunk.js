(window["webpackJsonpmemory-match-game"]=window["webpackJsonpmemory-match-game"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={game:"Game__game__-hash-base64-5-",scoreboard:"Game__scoreboard__-hash-base64-5-",playArea:"Game__playArea__-hash-base64-5-",gameHead:"Game__gameHead__-hash-base64-5-",pickLevel:"Game__pickLevel__-hash-base64-5-",timer:"Game__timer__-hash-base64-5-",playAgain:"Game__playAgain__-hash-base64-5-"}},function(e,t,a){e.exports={cardBack:"card__cardBack__-hash-base64-5-",cardFace:"card__cardFace__-hash-base64-5-",discardRow:"card__discardRow__-hash-base64-5-",discarded:"card__discarded__-hash-base64-5-",playArea:"card__playArea__-hash-base64-5-",cardHolder:"card__cardHolder__-hash-base64-5-",cardMove:"card__cardMove__-hash-base64-5-",card:"card__card__-hash-base64-5-",discardBig:"card__discardBig__-hash-base64-5-",moveToDiscard:"card__moveToDiscard__-hash-base64-5-"}},function(e,t,a){e.exports=a.p+"static/media/Ace1.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King1.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen1.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack1.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten1.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine1.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight1.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven1.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six1.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five1.24fd440c.png"},,,function(e,t,a){e.exports=a.p+"static/media/gray_back.db53954a.png"},function(e,t,a){e.exports=a.p+"static/media/x.338eceb9.png"},function(e,t,a){e.exports=a.p+"static/media/Ace2.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King2.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen2.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack2.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten2.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine2.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight2.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven2.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six2.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five2.24fd440c.png"},function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){e.exports={root:"index__root__-hash-base64-5-"}},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),s=a.n(c),r=(a(37),a(1)),d=a(2),o=a(4),l=a(3),p=a(5),m=a(6),u=a.n(m),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return i.a.createElement("section",{style:{padding:"10% 0",display:"none"},id:"playAgain"},i.a.createElement("div",{className:u.a.PlayAgain},i.a.createElement("a",{href:"."},i.a.createElement("button",null,"play again"))))}}]),t}(n.Component),h=a(7),y=a.n(h),b=a(8),v=a.n(b),g=a(9),_=a.n(g),E=a(10),k=a.n(E),O=a(11),j=a.n(O),S=a(12),x=a.n(S),T=a(13),w=a.n(T),B=a(14),M=a.n(B),N=a(15),A=a.n(N),C=a(16),F=a.n(C),I=a(17),L=a.n(I),D=[{name:"A",src:v.a,id:"aceDiscarded"},{name:"5",src:L.a,id:"fivDiscarded"},{name:"6",src:F.a,id:"sixDiscarded"},{name:"7",src:A.a,id:"sevDiscarded"},{name:"8",src:M.a,id:"eigDiscarded"},{name:"9",src:w.a,id:"ninDiscarded"},{name:"10",src:x.a,id:"tenDiscarded"},{name:"J",src:j.a,id:"jacDiscarded"},{name:"Q",src:k.a,id:"queDiscarded"},{name:"K",src:_.a,id:"kinDiscarded"}],H=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",{id:"discard",className:y.a.discardRow},D.map(function(e,t){return i.a.createElement("img",{key:"".concat(e.name).concat(t),style:{visibility:"hidden"},src:e.src,className:y.a.discarded,id:e.id,alt:""})}))}}]),t}(n.Component),G=a(20),J=a.n(G),z=a(21),K=a.n(z),Q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={discarded:!1},a.flipCard=function(e){document.getElementById(a.props.id).style.transform="rotateY(180deg)",a.props.handleFlip(e)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){var t=this,a="".concat(this.props.id,"X"),n="".concat(this.props.id,"Move");return i.a.createElement("card",{className:y.a.cardHolder},i.a.createElement("div",{className:y.a.cardMove,id:n},i.a.createElement("div",{key:this.props.id,className:y.a.card,id:this.props.id,"data-value":this.props.value},i.a.createElement("img",{src:J.a,className:y.a.cardBack,alt:"","data-value":this.props.value,onClick:function(e){return t.props.flippedCards<2&&t.props.time>0?t.flipCard(e):null}}),i.a.createElement("img",{src:this.props.src,className:y.a.cardFace,alt:"",style:{transform:"rotateY(180deg)"}}),i.a.createElement("img",{src:K.a,alt:"",className:y.a.cardFace,id:a,style:{zIndex:999,visibility:"hidden",transform:"rotateY(180deg)"}}))))}}]),t}(n.Component),W={width:"100%",height:"100%",display:"none"},Y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={flippedCards:0,flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",matchesFound:a.props.matchesFound,faceValue:""},a.resetMatch=function(){a.setState({flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",flippedCards:0})},a.handleNoMatch=function(){var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),n=document.getElementById("".concat(a.state.flippedStoreOne,"X")),i=document.getElementById("".concat(a.state.flippedStoreTwo,"X"));setTimeout(function(){n.style.visibility="visible",i.style.visibility="visible"},300),setTimeout(function(){n.style.visibility="hidden",i.style.visibility="hidden"},600),setTimeout(function(){a.resetMatch(),e.style.transform="rotate(0deg)",t.style.transform="rotate(0deg)"},400)},a.handleMatch=function(){a.props.addMatch();var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),n=document.getElementById("".concat(a.state.flippedStoreOne,"Move")),i=document.getElementById("".concat(a.state.flippedStoreTwo,"Move")),c=document.getElementById(a.state.faceValue);n.classList.add(y.a.moveToDiscard),i.classList.add(y.a.moveToDiscard),c.style.visibility="visible",c.classList.add(y.a.discardBig),setTimeout(function(){e.style.visibility="hidden",t.style.visibility="hidden"},500),a.resetMatch()},a.checkForMatch=function(){a.state.flippedOne===a.state.flippedTwo?a.handleMatch():a.handleNoMatch()},a.handleFlip=function(e,t,n){var i=t,c=n,s="".concat(c,"Discarded");a.setState({faceValue:s}),0===a.state.flippedCards?a.setState({flippedOne:c,flippedStoreOne:i}):a.setState({flippedTwo:c,flippedStoreTwo:i}),a.setState({flippedCards:a.state.flippedCards+1}),setTimeout(function(){a.state.flippedCards>1&&a.checkForMatch()},500)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){var t=this;return i.a.createElement("div",{id:"gameBoard",style:W},i.a.createElement(H,null),i.a.createElement("div",{className:y.a.playArea,id:"playArea"},this.props.cards.map(function(e,a){return i.a.createElement(Q,{key:a,src:e.card,id:e.id,value:e.face,time:t.props.time,handleFlip:function(a){return t.handleFlip(a,e.id,e.face)},flippedCards:t.state.flippedCards})}),";"))}}]),t}(n.Component),q=function(e){return i.a.createElement("button",{key:e.index,"data-level":e.level,id:e.id,"data-time":e.time,onClick:function(t){return e.pickLevel(t)}},e.name)},R=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={levels:[{level:1,name:"easy peasy",id:"easy",time:80},{level:2,name:"...meh",id:"medium",time:60},{level:3,name:"yikes!",id:"hard",time:48}]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){var t=this;return i.a.createElement("section",{style:{padding:"10% 0"},id:"pickLevel"},i.a.createElement("h1",{style:{color:"whitesmoke"}},"pick a level"),i.a.createElement("div",{className:u.a.pickLevel},this.state.levels.map(function(e,a){return i.a.createElement(q,{key:a,level:e.level,id:e.id,time:e.time,className:u.a.levelBtn,pickLevel:function(e){return t.props.pickLevel(e)},name:e.name})}),";"))}}]),t}(n.Component),V=function(){return i.a.createElement("header",{className:u.a.gameHead,id:"gameHead"},i.a.createElement("p",{style:{fontSize:"30px"}},i.a.createElement("u",null,"Memory Match")),i.a.createElement("p",{style:{fontSize:"24px"}},"Click the cards to find their matching counterpart!"))},X=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{className:u.a.gameHead,id:"timer",style:{display:"none",fontSize:"8vh"}},this.props.time)}}]),t}(n.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{className:u.a.gameHead,id:"youWin",style:{display:"none",fontSize:"5.5vh"}},"Your Score: ",this.props.score)}}]),t}(n.Component),$=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{className:u.a.gameHead,id:"youLose",style:{display:"none",fontSize:"5.5vh"}},"Time is out, sucka.")}}]),t}(n.Component),U=a(22),Z=a.n(U),ee=a(23),te=a.n(ee),ae=a(24),ne=a.n(ae),ie=a(25),ce=a.n(ie),se=a(26),re=a.n(se),de=a(27),oe=a.n(de),le=a(28),pe=a.n(le),me=a(29),ue=a.n(me),fe=a(30),he=a.n(fe),ye=a(31),be=a.n(ye),ve=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={time:2,gameStarted:!1,matchesFound:0,score:0,bonus:0,cards:[{id:"Ac1",face:"ace",card:v.a},{id:"Ac2",face:"ace",card:Z.a},{id:"Kg1",face:"kin",card:_.a},{id:"Kg2",face:"kin",card:te.a},{id:"Qn1",face:"que",card:k.a},{id:"Qn2",face:"que",card:ne.a},{id:"Jk1",face:"jac",card:j.a},{id:"Jk2",face:"jac",card:ce.a},{id:"Tn1",face:"ten",card:x.a},{id:"Tn2",face:"ten",card:re.a},{id:"Nn1",face:"nin",card:w.a},{id:"Nn2",face:"nin",card:oe.a},{id:"Et1",face:"eig",card:M.a},{id:"Et2",face:"eig",card:pe.a},{id:"Sv1",face:"sev",card:A.a},{id:"Sv2",face:"sev",card:ue.a},{id:"Sx1",face:"six",card:F.a},{id:"Sx2",face:"six",card:he.a},{id:"Fv1",face:"fiv",card:L.a},{id:"Fv2",face:"fiv",card:be.a}]},a.addMatch=function(){a.setState({matchesFound:a.state.matchesFound+1})},a.resetMatch=function(){var e=document.getElementById("playAgain");setTimeout(function(){10===a.state.matchesFound?e.style.display="flex":e.style.display="none"},500)},a.youLose=function(){document.getElementById("youLose").display="inline-block"},a.subtractSecond=function(){a.setState({time:a.state.time-1}),a.startTimer()},a.startTimer=function(){var e=document.getElementById("playAgain"),t=document.getElementById("youLose"),n=document.getElementById("timer"),i=document.getElementById("youWin");if(a.state.matchesFound<10&&a.state.time>0)setTimeout(function(){a.subtractSecond()},1e3);else if(10===a.state.matchesFound){var c=3.14159*a.state.time+a.state.bonus;a.setState({score:c.toFixed(3)}),setTimeout(function(){e.style.display="block",i.style.display="block",n.style.display="none"},500)}else a.state.matchesFound<10&&0===a.state.time&&(e.style.display="block",n.style.display="none",t.style.display="block")},a.openTimer=function(){document.getElementById("gameHead").style.display="none",document.getElementById("timer").style.display="block",document.getElementById("playArea").style.display="block",a.startTimer()},a.startGame=function(){var e=0,t=a.state.cards;for(e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),i=[t[n],t[e]];t[e]=i[0],t[n]=i[1]}document.getElementById("pickLevel").style.display="none",document.getElementById("gameBoard").style.display="inline-block",!1===a.state.gameStarted&&(a.setState({gameStarted:!0}),a.openTimer())},a.pickLevel=function(e){var t=e.target.dataset.time,n=2*(80-e.target.dataset.time);console.log("time: "+t+", bonusPoints: "+n),a.setState({time:t,bonus:n}),a.startGame()},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:u.a.game},i.a.createElement("div",{id:"scoreboard",className:u.a.scoreboard},i.a.createElement(V,null),i.a.createElement(X,{time:this.state.time}),i.a.createElement(P,{score:this.state.score}),i.a.createElement($,null)),i.a.createElement("div",{id:"playArea",className:u.a.playArea},i.a.createElement(f,null),i.a.createElement(R,{pickLevel:function(t){return e.pickLevel(t)}}),i.a.createElement(Y,{onClick:this.startGame,addMatch:this.addMatch,resetMatch:this.resetMatch,time:this.state.time,cards:this.state.cards})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[32,1,2]]]);
//# sourceMappingURL=main.1d02f646.chunk.js.map