(this["webpackJsonpramialhussein.com"]=this["webpackJsonpramialhussein.com"]||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/resume.0624606f.png"},57:function(e,t,a){e.exports=a(75)},71:function(e,t,a){e.exports=a.p+"static/media/jumbo2.fb77ce93.jpg"},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(6),s=a(47),l=a(14),u=a(15),m=a(17),p=a(16),h=a(32),b=a(93),f=(a(95),a(96),a(77)),g=(a(99),a(97),a(42),a(98));Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{color:"white"}}}));var E=a(100),y=a(101),d=a(76),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.items.map((function(e){return r.a.createElement(E.a,{item:!0,key:e.id,xs:12,sm:4},r.a.createElement(d.a,{elevation:2,className:"root"},r.a.createElement(f.a,{className:"title"},r.a.createElement("strong",null,"Repository name:")," ",e.name),r.a.createElement(E.a,{container:!0,style:{marginTop:"1em "}},r.a.createElement(E.a,{item:!0,sm:6},r.a.createElement(g.a,{variant:"body2",target:"_blank",href:e.html_url,style:{marginTop:".75em"}},"Go To Repo")),r.a.createElement(E.a,{item:!0,sm:6},"Language: ",e.language))))}));return r.a.createElement(r.a.Fragment,null,e)}}]),a}(r.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={card:[]},n}return Object(u.a)(a,[{key:"getRepos",value:function(){var e=this;fetch("https://api.github.com/users/Alhusseinr/repos",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({card:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getRepos()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Grid",spacing:3},r.a.createElement(y.a,{severity:"success"},"GitHub Repositories. Click ",r.a.createElement(g.a,{target:"_blank",href:"https://github.com/Alhusseinr"},"here")," to go to my github page"),r.a.createElement(E.a,{container:!0,style:{marginBottom:100}},r.a.createElement(v,{items:this.state.card}))))}}]),a}(n.Component),O=(a(71),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Will be back up soon, redesign on its way")}}]),a}(r.a.Component)),k=a(46),w=a.n(k),x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,{severity:"success"},"Resume. Click ",r.a.createElement(g.a,{target:"_blank",href:"https://www.linkedin.com/in/rami-alhussein/"},"here")," to go to my LinkedIn page"),r.a.createElement("img",{src:w.a,style:{width:"75%"},alt:"Resume"}))}}]),a}(r.a.Component);var R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.b,{basename:"/"},r.a.createElement(h.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:O}),r.a.createElement(o.a,{exact:!0,path:"/repos",component:j}),r.a.createElement(o.a,{exact:!0,path:"/resume",component:x})))))}}]),a}(n.Component),C=(a(74),Object(s.a)());i.a.render(r.a.createElement(o.b,{history:C},r.a.createElement(R,{history:C})),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4ad05a43.chunk.js.map