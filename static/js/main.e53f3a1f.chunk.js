(window["webpackJsonpmemory-match-game"]=window["webpackJsonpmemory-match-game"]||[]).push([[0],[,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Ace1.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King1.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen1.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack1.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten1.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine1.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight1.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven1.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six1.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five1.24fd440c.png"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/gray_back.db53954a.png"},function(e,t,a){e.exports=a.p+"static/media/x.338eceb9.png"},function(e,t,a){e.exports=a.p+"static/media/Ace2.e6a6d2f8.png"},function(e,t,a){e.exports=a.p+"static/media/King2.6b5b30c0.png"},function(e,t,a){e.exports=a.p+"static/media/Queen2.63afa62b.png"},function(e,t,a){e.exports=a.p+"static/media/Jack2.1595a3ea.png"},function(e,t,a){e.exports=a.p+"static/media/Ten2.b208cd7f.png"},function(e,t,a){e.exports=a.p+"static/media/Nine2.1d495bb1.png"},function(e,t,a){e.exports=a.p+"static/media/Eight2.1e9e59b0.png"},function(e,t,a){e.exports=a.p+"static/media/Seven2.4808cc41.png"},function(e,t,a){e.exports=a.p+"static/media/Six2.c99b0f04.png"},function(e,t,a){e.exports=a.p+"static/media/Five2.24fd440c.png"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(19),s=a.n(c),d=(a(37),a(1)),r=a(2),l=a(4),o=a(3),m=a(5),p=(a(6),a(38),a(18),a(7)),u=a.n(p),f=a(8),y=a.n(f),h=a(9),v=a.n(h),b=a(10),g=a.n(b),E=a(11),O=a.n(E),k=a(12),j=a.n(k),S=a(13),N=a.n(S),x=a(14),T=a.n(x),w=a(15),B=a.n(w),F=a(16),C=a.n(F),I=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{id:"discard",style:{height:"10vh"}},n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:u.a,alt:"",className:"discarded",id:"aceDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:C.a,alt:"",className:"discarded",id:"fivDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:B.a,alt:"",className:"discarded",id:"sixDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:T.a,alt:"",className:"discarded",id:"sevDiscarded"}),"/>"),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:N.a,alt:"",className:"discarded",id:"eigDiscarded"}),"/>"),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:j.a,alt:"",className:"discarded",id:"ninDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:O.a,alt:"",className:"discarded",id:"tenDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:g.a,alt:"",className:"discarded",id:"jacDiscarded"})),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:v.a,alt:"",className:"discarded",id:"queDiscarded"}),"/>"),n.a.createElement("div",{className:"discardHolder"},n.a.createElement("img",{style:{visibility:"hidden"},src:y.a,alt:"",className:"discarded",id:"kinDiscarded"})))}}]),t}(i.Component),M=a(20),D=a.n(M),L=a(21),H=a.n(L),A=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={discarded:!1},a.flipCard=function(e){document.getElementById(a.props.id).style.transform="rotateY(180deg)",a.props.handleFlip(e)},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this,a="".concat(this.props.id,"X"),i="".concat(this.props.id,"Move");return n.a.createElement("div",{className:"cardHolder"},n.a.createElement("div",{className:"cardMove",id:i},n.a.createElement("div",{key:this.props.id,className:"card",id:this.props.id,"data-value":this.props.value},n.a.createElement("img",{src:D.a,className:"cardBack",alt:"","data-value":this.props.value,onClick:function(e){return t.props.flippedCards<2&&t.props.time>0?t.flipCard(e):null}}),n.a.createElement("img",{src:this.props.src,className:"cardFace",alt:"",style:{transform:"rotateY(180deg)"}}),n.a.createElement("img",{src:H.a,alt:"",className:"cardFace",id:a,style:{zIndex:999,visibility:"hidden",transform:"rotateY(180deg)"}}))))}}]),t}(i.Component),J={width:"100vw",height:"90vh",display:"none"},z=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).resetMatch=function(){a.setState({flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",flippedCards:0})},a.handleNoMatch=function(){var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),i=document.getElementById("".concat(a.state.flippedStoreOne,"X")),n=document.getElementById("".concat(a.state.flippedStoreTwo,"X"));setTimeout(function(){i.style.visibility="visible",n.style.visibility="visible"},300),setTimeout(function(){i.style.visibility="hidden",n.style.visibility="hidden"},600),setTimeout(function(){a.resetMatch(),e.style.transform="rotate(0deg)",t.style.transform="rotate(0deg)"},400)},a.handleMatch=function(){a.props.addMatch();var e=document.getElementById(a.state.flippedStoreOne),t=document.getElementById(a.state.flippedStoreTwo),i=document.getElementById("".concat(a.state.flippedStoreOne,"Move")),n=document.getElementById("".concat(a.state.flippedStoreTwo,"Move")),c=document.getElementById(a.state.faceValue);i.classList.add("moveToDiscard"),n.classList.add("moveToDiscard"),c.style.visibility="visible",c.classList.add("discardBig"),setTimeout(function(){e.style.visibility="hidden",t.style.visibility="hidden"},500),a.resetMatch()},a.checkForMatch=function(){a.state.flippedOne===a.state.flippedTwo?a.handleMatch():a.handleNoMatch()},a.handleFlip=function(e,t,i){var n=t,c=i,s="".concat(c,"Discarded");a.setState({faceValue:s}),0===a.state.flippedCards?a.setState({flippedOne:c,flippedStoreOne:n}):a.setState({flippedTwo:c,flippedStoreTwo:n}),a.setState({flippedCards:a.state.flippedCards+1}),setTimeout(function(){a.state.flippedCards>1&&a.checkForMatch()},500)},a.state={flippedCards:0,flippedOne:"",flippedStoreOne:"",flippedTwo:"",flippedStoreTwo:"",matchesFound:a.props.matchesFound,faceValue:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this;return n.a.createElement("div",{id:"gameBoard",style:J},n.a.createElement(I,null),this.props.cards.map(function(e,a){return n.a.createElement(A,{key:a,src:e.card,id:e.id,value:e.face,time:t.props.time,handleFlip:function(a){return t.handleFlip(a,e.id,e.face)},flippedCards:t.state.flippedCards})}))}}]),t}(i.Component),K=function(e){return n.a.createElement("button",{key:e.index,"data-level":e.level,id:e.id,"data-time":e.time,className:"playBtn",onClick:function(t){return e.pickLevel(t)}},e.name)},Q=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={levels:[{level:1,name:"easy peasy",id:"easy",time:80},{level:2,name:"...meh",id:"medium",time:60},{level:3,name:"yikes!",id:"hard",time:48}]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this;return n.a.createElement("div",{id:"pickLevel",style:{paddingTop:"12vh"}},n.a.createElement("h1",{style:{color:"whitesmoke"}},"pick a level"),this.state.levels.map(function(e,a){return n.a.createElement(K,{key:a,index:a,level:e.level,id:e.id,time:e.time,className:"playBtn",pickLevel:t.props.pickLevel,name:e.name})}),";")}}]),t}(i.Component),W=function(){return n.a.createElement("header",{id:"gameHead"},n.a.createElement("p",{style:{fontSize:"5vw",paddingTop:"2vh"}},n.a.createElement("u",null,"Memory Match")),n.a.createElement("p",{style:{fontSize:"3vw"}},"Click the cards to find their matching counterpart!"))},Y=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("header",{id:"timer",style:{display:"none"}},this.props.time)}}]),t}(i.Component),q=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("header",{id:"youWin",style:{display:"none"}},"Your Score: ",this.props.score)}}]),t}(i.Component),G=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("header",{id:"youLose",style:{display:"none"}},"Time is out, sucka.")}}]),t}(i.Component),V=(a(39),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={matchesFound:a.props.matchesFound},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{className:"pyro",id:"pyro",style:{zIndex:0,display:"none",width:"100vw",height:"100vh",position:"fixed",top:0}},n.a.createElement("div",{className:"before"}),n.a.createElement("div",{className:"after"}))}}]),t}(i.Component)),X=function(e){function t(){return Object(d.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",{id:"playDiv",style:{display:"none"}},n.a.createElement("a",{href:"."},n.a.createElement("button",{className:"playBtn"},"play again")))}}]),t}(i.Component),$=a(22),_=a.n($),P=a(23),R=a.n(P),U=a(24),Z=a.n(U),ee=a(25),te=a.n(ee),ae=a(26),ie=a.n(ae),ne=a(27),ce=a.n(ne),se=a(28),de=a.n(se),re=a(29),le=a.n(re),oe=a(30),me=a.n(oe),pe=a(31),ue=a.n(pe),fe=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={time:2,gameStarted:!1,matchesFound:0,beginningTime:0,score:0,winFactor:1,cards:[{id:"Ac1",face:"ace",card:u.a},{id:"Ac2",face:"ace",card:_.a},{id:"Kg1",face:"kin",card:y.a},{id:"Kg2",face:"kin",card:R.a},{id:"Qn1",face:"que",card:v.a},{id:"Qn2",face:"que",card:Z.a},{id:"Jk1",face:"jac",card:g.a},{id:"Jk2",face:"jac",card:te.a},{id:"Tn1",face:"ten",card:O.a},{id:"Tn2",face:"ten",card:ie.a},{id:"Nn1",face:"nin",card:j.a},{id:"Nn2",face:"nin",card:ce.a},{id:"Et1",face:"eig",card:N.a},{id:"Et2",face:"eig",card:de.a},{id:"Sv1",face:"sev",card:T.a},{id:"Sv2",face:"sev",card:le.a},{id:"Sx1",face:"six",card:B.a},{id:"Sx2",face:"six",card:me.a},{id:"Fv1",face:"fiv",card:C.a},{id:"Fv2",face:"fiv",card:ue.a}]},a.addMatch=function(){a.setState({matchesFound:a.state.matchesFound+1})},a.resetMatch=function(){var e=document.getElementById("playDiv"),t=document.getElementById("pyro");setTimeout(function(){10===a.state.matchesFound?(t.style.display="block",e.style.display="block"):e.style.display="none"},500)},a.youLose=function(){document.getElementById("youLose").display="inline-block"},a.subtractSecond=function(){a.setState({time:a.state.time-1}),a.startTimer()},a.startTimer=function(){var e=document.getElementById("playDiv"),t=document.getElementById("pyro"),i=document.getElementById("youLose"),n=document.getElementById("timer"),c=document.getElementById("youWin");if(a.state.matchesFound<10&&a.state.time>0)setTimeout(function(){a.subtractSecond()},1e3);else if(10===a.state.matchesFound){var s=3.14159*(a.state.beginningTime-(a.state.beginningTime-a.state.time))*a.state.winFactor;a.setState({score:(s+.411).toFixed(3)}),setTimeout(function(){t.style.display="block",e.style.display="block",c.style.display="block",n.style.display="none"},500)}else a.state.matchesFound<10&&0===a.state.time&&(e.style.display="block",n.style.display="none",i.style.display="block")},a.openTimer=function(){document.getElementById("gameHead").style.display="none",document.getElementById("timer").style.display="inline-block",a.startTimer()},a.startGame=function(){var e=0,t=a.state.cards;for(e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}document.getElementById("pickLevel").style.display="none",document.getElementById("gameBoard").style.display="inline-block",!1===a.state.gameStarted&&(a.setState({gameStarted:!0}),a.openTimer())},a.pickLevel=function(e){var t=e.target.dataset.time,i=e.target.dataset.level;a.setState({beginningTime:t,time:t,winFactor:i}),a.startGame()},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"game"},n.a.createElement("div",{id:"scoreboard",style:{height:"8vh"}},n.a.createElement(W,null),n.a.createElement(Y,{time:this.state.time}),n.a.createElement(q,{score:this.state.score}),n.a.createElement(G,null)),n.a.createElement(Q,{levels:this.state.levels,pickLevel:function(t){return e.pickLevel(t)}}),n.a.createElement(z,{onClick:this.startGame,addMatch:this.addMatch,resetMatch:this.resetMatch,time:this.state.time,cards:this.state.cards}),n.a.createElement(V,null),n.a.createElement(X,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[32,1,2]]]);
//# sourceMappingURL=main.e53f3a1f.chunk.js.map