(window["webpackJsonpmemory-match-game"]=window["webpackJsonpmemory-match-game"]||[]).push([[0],[,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Ace1.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King1.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen1.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack1.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten1.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine1.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight1.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven1.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six1.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five1.24fd440c.png"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/gray_back.db53954a.png"},function(e,t,a){e.exports=a.p+"static/media/x.338eceb9.png"},function(e,t,a){e.exports=a.p+"static/media/Ace2.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King2.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen2.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack2.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten2.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine2.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight2.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven2.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six2.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five2.24fd440c.png"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),s=a.n(c),d=(a(37),a(1)),r=a(2),l=a(4),o=a(3),p=a(5),m=(a(6),a(38),a(18),a(7)),u=a.n(m),y=a(8),f=a.n(y),h=a(9),v=a.n(h),b=a(10),g=a.n(b),E=a(11),O=a.n(E),j=a(12),k=a.n(j),S=a(13),T=a.n(S),x=a(14),w=a.n(x),B=a(15),C=a.n(B),F=a(16),I=a.n(F),M=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",{id:"discard",style:{height:"10vh"}},i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:u.a,alt:"",class:"discarded",id:"discardedAce"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:I.a,alt:"",class:"discarded",id:"discardedFive"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:C.a,alt:"",class:"discarded",id:"discardedSix"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:w.a,alt:"",class:"discarded",id:"discardedSeven"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:T.a,alt:"",class:"discarded",id:"discardedEight"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:k.a,alt:"",class:"discarded",id:"discardedNine"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:O.a,alt:"",class:"discarded",id:"discardedTen"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:g.a,alt:"",class:"discarded",id:"discardedJack"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:v.a,alt:"",class:"discarded",id:"discardedQueen"})),i.a.createElement("div",{class:"discardHolder"},i.a.createElement("img",{style:{visibility:"hidden"},src:f.a,alt:"",class:"discarded",id:"discardedKing"})))}}]),t}(n.Component),N=a(20),H=a.n(N),L=a(21),A=a.n(L),V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={discarded:!1},a.flipCard=function(e){document.getElementById(a.props.id).style.transform="rotateY(180deg)",a.props.handleFlip(e)},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this,a="".concat(this.props.id,"X"),n="".concat(this.props.id,"Move");return i.a.createElement("div",{class:"cardHolder"},i.a.createElement("div",{class:"cardMove",id:n},i.a.createElement("div",{key:this.props.keyProp,className:"card",id:this.props.id,"data-value":this.props.value},i.a.createElement("img",{src:H.a,className:"cardBack",alt:"","data-value":this.props.value,onClick:function(e){return t.props.flippedCards<2&&t.props.time>0?t.flipCard(e):null}}),i.a.createElement("img",{src:this.props.src,className:"cardFace",alt:"",style:{transform:"rotateY(180deg)"}}),i.a.createElement("img",{src:A.a,alt:"",className:"cardFace",id:a,style:{zIndex:1e3,visibility:"hidden",transform:"rotateY(180deg)"}}))))}}]),t}(n.Component),J=a(22),D=a.n(J),W=a(23),K=a.n(W),Q=a(24),Y=a.n(Q),G=a(25),X=a.n(G),z=a(26),P=a.n(z),$=a(27),_=a.n($),q=a(28),R=a.n(q),U=a(29),Z=a.n(U),ee=a(30),te=a.n(ee),ae=a(31),ne=a.n(ae),ie={width:"100vw",display:"none"},ce=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).resetMatch=function(){a.setState({flippedOne:"",flippedStoreOne:"",flippedOneFace:"",flippedTwo:"",flippedStoreTwo:"",flippedTwoFace:"",flippedCards:0})},a.handleNoMatch=function(){var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),n=document.getElementById("".concat(a.state.flippedStoreOne,"X")),i=document.getElementById("".concat(a.state.flippedStoreTwo,"X"));setTimeout(function(){n.style.visibility="visible",i.style.visibility="visible"},500),setTimeout(function(){n.style.visibility="hidden",i.style.visibility="hidden"},999),setTimeout(function(){e.style.transform="rotate(0deg)",t.style.transform="rotate(0deg)"},1e3),a.resetMatch()},a.handleMatch=function(){a.props.addMatch();var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),n=document.getElementById("".concat(a.state.flippedStoreOne,"Move")),i=document.getElementById("".concat(a.state.flippedStoreTwo,"Move")),c=document.getElementById("discarded".concat(a.state.flippedOne));n.classList.add("moveToDiscard"),i.classList.add("moveToDiscard"),c.style.visibility="visible",c.classList.add("discardBig"),e.style.visibility="hidden",t.style.visibility="hidden",a.resetMatch()},a.checkForMatch=function(){a.state.flippedOne===a.state.flippedTwo?a.handleMatch():a.handleNoMatch()},a.handleFlip=function(e){var t=e.target.dataset.value,n=e.target.dataset.value.slice(0,-1);a.setState({faceValue:n}),0===a.state.flippedCards?a.setState({flippedOne:n,flippedStoreOne:t}):a.setState({flippedTwo:n,flippedStoreTwo:t}),a.setState({flippedCards:a.state.flippedCards+1}),setTimeout(function(){a.state.flippedCards>1&&a.checkForMatch()},800)},a.shuffleArray=function(e){var t=0;for(t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},a.state={deck:[u.a,D.a,f.a,K.a,v.a,Y.a,g.a,X.a,O.a,P.a,k.a,_.a,T.a,R.a,w.a,Z.a,C.a,te.a,I.a,ne.a],flippedCards:0,flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",matchesFound:a.props.matchesFound,Ace:"1.9",Five:"11.7",Six:"21.5",Seven:"31.3",Eight:"41.1",Nine:"50.9",Ten:"60.7",Jack:"70.5",Queen:"80.3",King:"90.1",xPosition:"",faceValue:""},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.shuffleArray(this.state.deck)}},{key:"render",value:function(e){var t=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"gameBoard",style:ie},i.a.createElement(M,null),this.state.deck.map(function(e){return i.a.createElement(V,{key:e,src:e,id:e.substr(14).slice(0,-13),value:e.substr(14).slice(0,-13),time:t.props.time,handleFlip:t.handleFlip,flippedCards:t.state.flippedCards,flipped:t.state.flipped})})))}}]),t}(i.a.Component),se=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={easyVal:80,mediumVal:60,difficultVal:48},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",{id:"pickLevel",style:{paddingTop:"12vh"}},i.a.createElement("h1",{style:{color:"whitesmoke"}},"pick a level"),i.a.createElement("button",{value:this.state.easyVal,id:"easy",className:"playBtn",onClick:this.props.level},"easy peasy"),i.a.createElement("button",{value:this.state.mediumVal,id:"medium",className:"playBtn",onClick:this.props.level},"...meh"),i.a.createElement("button",{value:this.state.difficultVal,id:"difficult",className:"playBtn",onClick:this.props.level},"yikes!"))}}]),t}(n.Component),de=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{id:"gameHead"},i.a.createElement("h1",null,i.a.createElement("u",null,"Memory Match")),i.a.createElement("p",null,"Click the cards to find their matching counterpart!"))}}]),t}(n.Component),re=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{id:"timer",style:{display:"none"}},this.props.time)}}]),t}(n.Component),le=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{id:"youWin",style:{display:"none"}},"Your Score: ",this.props.score)}}]),t}(n.Component),oe=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("header",{id:"youLose",style:{display:"none"}},"Time is out, sucka.")}}]),t}(n.Component),pe=(a(39),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={matchesFound:a.props.matchesFound},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",{className:"pyro",id:"pyro",style:{zIndex:0,display:"none",width:"100vw",height:"100vh",position:"fixed",top:0}},i.a.createElement("div",{className:"before"}),i.a.createElement("div",{className:"after"}))}}]),t}(n.Component)),me=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",{id:"playDiv",style:{display:"none"}},i.a.createElement("a",{href:"."},i.a.createElement("button",{className:"playBtn"},"play again")))}}]),t}(n.Component),ue=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={time:2,gameStarted:!1,matchesFound:0,beginningTime:0,score:0},a.addMatch=function(){a.setState({matchesFound:a.state.matchesFound+1})},a.resetMatch=function(){var e=document.getElementById("playDiv"),t=document.getElementById("pyro");setTimeout(function(){10===a.state.matchesFound?(t.style.display="block",e.style.display="block"):e.style.display="none"},500)},a.youLose=function(){document.getElementById("youLose").display="inline-block"},a.subtractSecond=function(){a.setState({time:a.state.time-1}),a.startTimer()},a.startTimer=function(){var e=document.getElementById("playDiv"),t=document.getElementById("pyro"),n=document.getElementById("youLose"),i=document.getElementById("timer"),c=document.getElementById("youWin");if(a.state.matchesFound<10&&a.state.time>0)setTimeout(function(){a.subtractSecond()},1e3);else if(10===a.state.matchesFound){var s=3.14159*(a.state.beginningTime-(a.state.beginningTime-a.state.time));a.setState({score:(s+.411).toFixed(3)}),setTimeout(function(){t.style.display="block",e.style.display="block",c.style.display="block",i.style.display="none"},500)}else a.state.matchesFound<10&&0===a.state.time&&(e.style.display="block",i.style.display="none",n.style.display="block")},a.openTimer=function(){document.getElementById("gameHead").style.display="none",document.getElementById("timer").style.display="inline-block",a.startTimer()},a.startGame=function(){document.getElementById("pickLevel").style.display="none",document.getElementById("gameBoard").style.display="inline-block",!1===a.state.gameStarted&&(a.setState({gameStarted:!0}),a.openTimer())},a.pickLevel=function(e){var t=e.target.value;a.setState({beginningTime:t,time:t}),a.startGame()},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"game"},i.a.createElement("div",{id:"scoreboard",style:{height:"17vh",margin:"0 0 3vh"}},i.a.createElement(de,null),i.a.createElement(re,{time:this.state.time}),i.a.createElement(le,{score:this.state.score}),i.a.createElement(oe,null)),i.a.createElement(se,{level:this.pickLevel}),i.a.createElement(ce,{onClick:this.startGame,addMatch:this.addMatch,resetMatch:this.resetMatch,time:this.state.time}),i.a.createElement(pe,null),i.a.createElement(me,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[32,1,2]]]);
//# sourceMappingURL=main.c6611c70.chunk.js.map