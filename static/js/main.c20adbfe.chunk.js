(window["webpackJsonpmemory-match-game"]=window["webpackJsonpmemory-match-game"]||[]).push([[0],[,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Ace1.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King1.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen1.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack1.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten1.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine1.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight1.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven1.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six1.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five1.24fd440c.png"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/gray_back.db53954a.png"},function(e,t,a){e.exports=a.p+"static/media/x.338eceb9.png"},function(e,t,a){e.exports=a.p+"static/media/Ace2.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King2.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen2.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack2.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten2.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine2.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight2.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven2.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six2.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five2.24fd440c.png"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(19),c=a.n(s),d=(a(37),a(1)),r=a(2),l=a(4),o=a(3),m=a(5),p=(a(6),a(38),a(18),a(7)),u=a.n(p),y=a(8),f=a.n(y),h=a(9),v=a.n(h),g=a(10),b=a.n(g),E=a(11),O=a.n(E),k=a(12),j=a.n(k),N=a(13),S=a.n(N),T=a(14),w=a.n(T),B=a(15),x=a.n(B),C=a(16),I=a.n(C),M=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{id:"discard",style:{height:"10vh"}},n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:u.a,alt:"",className:"discarded",id:"game/static/media/AceDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:I.a,alt:"",className:"discarded",id:"game/static/media/FiveDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:x.a,alt:"",className:"discarded",id:"game/static/media/SixDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:w.a,alt:"",className:"discarded",id:"game/static/media/SevenDiscarded"}),"/>"),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:S.a,alt:"",className:"discarded",id:"game/static/media/EightDiscarded"}),"/>"),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:j.a,alt:"",className:"discarded",id:"game/static/media/NineDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:O.a,alt:"",className:"discarded",id:"game/static/media/TenDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:b.a,alt:"",className:"discarded",id:"game/static/media/JackDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:v.a,alt:"",className:"discarded",id:"game/static/media/QueenDiscarded"}),"/>"),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:f.a,alt:"",className:"discarded",id:"game/static/media/KingDiscarded"})))}}]),t}(i.Component),F=a(20),D=a.n(F),H=a(21),L=a.n(H),V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={discarded:!1},a.flipCard=function(e){document.getElementById(a.props.id).style.transform="rotateY(180deg)",a.props.handleFlip(e)},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this,a="".concat(this.props.id,"X"),i="".concat(this.props.id,"Move");return n.a.createElement("div",{className:"cardHolder"},n.a.createElement("div",{className:"cardMove",id:i},n.a.createElement("div",{key:this.props.keyProp,className:"card",id:this.props.id,"data-value":this.props.value},n.a.createElement("img",{src:D.a,className:"cardBack",alt:"","data-value":this.props.value,onClick:function(e){return t.props.flippedCards<2&&t.props.time>0?t.flipCard(e):null}}),n.a.createElement("img",{src:this.props.src,className:"cardFace",alt:"",style:{transform:"rotateY(180deg)"}}),n.a.createElement("img",{src:L.a,alt:"",className:"cardFace",id:a,style:{zIndex:1e3,visibility:"hidden",transform:"rotateY(180deg)"}}))))}}]),t}(i.Component),A={width:"100vw",height:"90vh",display:"none"},J=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).resetMatch=function(){a.setState({flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",flippedCards:0})},a.handleNoMatch=function(){var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),i=document.getElementById("".concat(a.state.flippedStoreOne,"X")),n=document.getElementById("".concat(a.state.flippedStoreTwo,"X"));setTimeout(function(){i.style.visibility="visible",n.style.visibility="visible"},300),setTimeout(function(){i.style.visibility="hidden",n.style.visibility="hidden"},600),setTimeout(function(){a.resetMatch(),e.style.transform="rotate(0deg)",t.style.transform="rotate(0deg)"},400)},a.handleMatch=function(){a.props.addMatch();var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),i=document.getElementById("".concat(a.state.flippedStoreOne,"Move")),n=document.getElementById("".concat(a.state.flippedStoreTwo,"Move")),s=document.getElementById(a.state.faceValue);i.classList.add("moveToDiscard"),n.classList.add("moveToDiscard"),s.style.visibility="visible",s.classList.add("discardBig"),setTimeout(function(){e.style.visibility="hidden",t.style.visibility="hidden"},500),a.resetMatch()},a.checkForMatch=function(){a.state.flippedOne===a.state.flippedTwo?a.handleMatch():a.handleNoMatch()},a.handleFlip=function(e){var t=e.target.dataset.value,i=e.target.dataset.value.slice(0,-1);console.log(t,i);var n="".concat(i,"Discarded");a.setState({faceValue:n}),0===a.state.flippedCards?a.setState({flippedOne:i,flippedStoreOne:t}):a.setState({flippedTwo:i,flippedStoreTwo:t}),a.setState({flippedCards:a.state.flippedCards+1}),setTimeout(function(){a.state.flippedCards>1&&a.checkForMatch()},500)},a.state={flippedCards:0,flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",matchesFound:a.props.matchesFound,faceValue:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this;return n.a.createElement("div",{id:"gameBoard",style:A},n.a.createElement(M,null),this.props.deck.map(function(e){return n.a.createElement(V,{key:e,src:e,id:e.substr(14).slice(0,-13),value:e.substr(14).slice(0,-13),time:t.props.time,handleFlip:t.handleFlip,flippedCards:t.state.flippedCards})}))}}]),t}(n.a.Component),z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={easyVal:80,mediumVal:60,difficultVal:48},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{id:"pickLevel",style:{paddingTop:"12vh"}},n.a.createElement("h1",{style:{color:"whitesmoke"}},"pick a level"),n.a.createElement("button",{value:this.state.easyVal,id:"easy",className:"playBtn",onClick:this.props.level},"easy peasy"),n.a.createElement("button",{value:this.state.mediumVal,id:"medium",className:"playBtn",onClick:this.props.level},"...meh"),n.a.createElement("button",{value:this.state.difficultVal,id:"difficult",className:"playBtn",onClick:this.props.level},"yikes!"))}}]),t}(i.Component),W=function(){return n.a.createElement("header",{id:"gameHead"},n.a.createElement("p",{style:{fontSize:"3vw"}},n.a.createElement("u",null,"Memory Match")),n.a.createElement("p",{style:{fontSize:"2vw"}},"Click the cards to find their matching counterpart!"))},Y=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("header",{id:"timer",style:{display:"none"}},this.props.time)}}]),t}(i.Component),G=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("header",{id:"youWin",style:{display:"none"}},"Your Score: ",this.props.score)}}]),t}(i.Component),K=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("header",{id:"youLose",style:{display:"none"}},"Time is out, sucka.")}}]),t}(i.Component),Q=(a(39),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={matchesFound:a.props.matchesFound},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{className:"pyro",id:"pyro",style:{zIndex:0,display:"none",width:"100vw",height:"100vh",position:"fixed",top:0}},n.a.createElement("div",{className:"before"}),n.a.createElement("div",{className:"after"}))}}]),t}(i.Component)),X=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{id:"playDiv",style:{display:"none"}},n.a.createElement("a",{href:"."},n.a.createElement("button",{className:"playBtn"},"play again")))}}]),t}(i.Component),P=a(22),$=a.n(P),_=a(23),q=a.n(_),R=a(24),U=a.n(R),Z=a(25),ee=a.n(Z),te=a(26),ae=a.n(te),ie=a(27),ne=a.n(ie),se=a(28),ce=a.n(se),de=a(29),re=a.n(de),le=a(30),oe=a.n(le),me=a(31),pe=a.n(me),ue=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={time:2,gameStarted:!1,matchesFound:0,beginningTime:0,score:0,deck:[u.a,$.a,f.a,q.a,v.a,U.a,b.a,ee.a,O.a,ae.a,j.a,ne.a,S.a,ce.a,w.a,re.a,x.a,oe.a,I.a,pe.a]},a.addMatch=function(){a.setState({matchesFound:a.state.matchesFound+1})},a.resetMatch=function(){var e=document.getElementById("playDiv"),t=document.getElementById("pyro");setTimeout(function(){10===a.state.matchesFound?(t.style.display="block",e.style.display="block"):e.style.display="none"},500)},a.youLose=function(){document.getElementById("youLose").display="inline-block"},a.subtractSecond=function(){a.setState({time:a.state.time-1}),a.startTimer()},a.startTimer=function(){var e=document.getElementById("playDiv"),t=document.getElementById("pyro"),i=document.getElementById("youLose"),n=document.getElementById("timer"),s=document.getElementById("youWin");if(a.state.matchesFound<10&&a.state.time>0)setTimeout(function(){a.subtractSecond()},1e3);else if(10===a.state.matchesFound){var c=3.14159*(a.state.beginningTime-(a.state.beginningTime-a.state.time));a.setState({score:(c+.411).toFixed(3)}),setTimeout(function(){t.style.display="block",e.style.display="block",s.style.display="block",n.style.display="none"},500)}else a.state.matchesFound<10&&0===a.state.time&&(e.style.display="block",n.style.display="none",i.style.display="block")},a.openTimer=function(){document.getElementById("gameHead").style.display="none",document.getElementById("timer").style.display="inline-block",a.startTimer()},a.startGame=function(){var e=0,t=a.state.deck;for(e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}document.getElementById("pickLevel").style.display="none",document.getElementById("gameBoard").style.display="inline-block",!1===a.state.gameStarted&&(a.setState({gameStarted:!0}),a.openTimer())},a.pickLevel=function(e){var t=e.target.value;a.setState({beginningTime:t,time:t}),a.startGame()},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{id:"scoreboard",style:{height:"8vh"}},n.a.createElement(W,null),n.a.createElement(Y,{time:this.state.time}),n.a.createElement(G,{score:this.state.score}),n.a.createElement(K,null)),n.a.createElement(z,{level:this.pickLevel}),n.a.createElement(J,{onClick:this.startGame,addMatch:this.addMatch,resetMatch:this.resetMatch,time:this.state.time,deck:this.state.deck}),n.a.createElement(Q,null),n.a.createElement(X,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[32,1,2]]]);
//# sourceMappingURL=main.c20adbfe.chunk.js.map