(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(76)},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),o=a.n(c),i=(a(52),a(2)),l=a(19),s=a(11),u=a(12),m=a(15),d=a(9),b=a(16),f=a(7),h=(a(54),function(e){var t=e.numOfPosts,a=e.liked;return r.a.createElement("div",{className:"app-header d-flex"},r.a.createElement("h1",null,"Your tweets"),r.a.createElement("h2",null,t," tweets, liked ",a))}),p=(a(56),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={msg:""},a.onTextChange=a.onTextChange.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onTextChange",value:function(e){this.setState({msg:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAddPost(this.state.msg),this.setState({msg:""})}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Enter your thoughts...",className:"form-control new-post",onChange:this.onTextChange,value:this.state.msg}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))}}]),t}(n.Component)),j=a(3),O=(a(58),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.onDelete,n=e.onImportant,c=e.onLiked,o="post-item d-flex justify-content-between";return e.star&&(o+=" star"),e.like&&(o+=" like"),r.a.createElement("div",{className:o},r.a.createElement("span",{className:"post-item-label",onClick:c},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}}]),t}(n.Component)),k=a(79),v=(a(60),function(e){var t=e.posts,a=e.onDelete,n=e.onImportant,c=e.onLiked,o=t.map(function(e){var t=e.id,o=Object(j.a)(e,["id"]);return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(O,Object.assign({},o,{onDelete:function(){return a(t)},onImportant:function(){return n(t)},onLiked:function(){return c(t)}})))});return r.a.createElement(k.a,{className:"post-list list-group"},o)}),E=(a(64),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onUpdateSearch",value:function(e){var t=e.target.value.toLowerCase();console.log(t),this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Search...",onChange:this.onUpdateSearch})}}]),t}(n.Component)),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).buttons=[{name:"all",label:"All"},{name:"like",label:"Liked"},{name:"star",label:"Important"}],a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.buttons.map(function(t){var a=t.name,n=t.label,c=e.props,o=c.filter,i=c.onFilter,l=o===a?"btn info":"btn-outline-secondary";return r.a.createElement("button",{key:a,type:"button",className:"btn ".concat(l),onClick:function(){return i(a)}},n)});return r.a.createElement("div",{className:"btn-group"},t)}}]),t}(n.Component),y=a(41),S=a(37),N=a(42),C=(a(66),function(){return r.a.createElement(N.a,{variant:"light liner"},r.a.createElement(y.a,null,r.a.createElement("img",{className:"logo",src:"../../../../../logo.png",alt:"logo"}),r.a.createElement(S.a,{className:"heading"},"Place for your thoughts"),r.a.createElement(S.a,{className:"me-auto links"},r.a.createElement(S.a.Link,{href:"https://github.com/julikss/pink-twitter"},r.a.createElement("i",{className:"fa fa-github"})))))}),P=(a(72),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={data:[],term:"",filter:"all"},a.addPost=a.addPost.bind(Object(f.a)(Object(f.a)(a))),a.deletePost=a.deletePost.bind(Object(f.a)(Object(f.a)(a))),a.onImportant=a.onImportant.bind(Object(f.a)(Object(f.a)(a))),a.onLiked=a.onLiked.bind(Object(f.a)(Object(f.a)(a))),a.onUpdateSearch=a.onUpdateSearch.bind(Object(f.a)(Object(f.a)(a))),a.onFilter=a.onFilter.bind(Object(f.a)(Object(f.a)(a))),a.countId=0,a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"addPost",value:function(e){var t={label:e,star:!1,id:this.countId++};this.setState(function(e){var a=e.data;return{data:[].concat(Object(l.a)(a),[t])}})}},{key:"deletePost",value:function(e){this.setState(function(t){var a=t.data,n=a.findIndex(function(t){return t.id===e}),r=a.slice(0,n),c=a.slice(n+1);return{data:[].concat(Object(l.a)(r),Object(l.a)(c))}})}},{key:"onImportant",value:function(e){this.setState(function(t){var a=t.data,n=a.findIndex(function(t){return t.id===e}),r=a[n],c=Object(i.a)({},r,{star:!r.star}),o=a.slice(0,n),s=a.slice(n+1);return{data:[].concat(Object(l.a)(o),[c],Object(l.a)(s))}})}},{key:"onLiked",value:function(e){this.setState(function(t){var a=t.data,n=a.findIndex(function(t){return t.id===e}),r=a[n],c=Object(i.a)({},r,{like:!r.like}),o=a.slice(0,n),s=a.slice(n+1);return{data:[].concat(Object(l.a)(o),[c],Object(l.a)(s))}})}},{key:"searchPost",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t)>-1})}},{key:"filterPost",value:function(e,t){return"like"===t?e.filter(function(e){return e.like}):"star"===t?e.filter(function(e){return e.star}):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilter",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.term,n=e.filter,c=t.filter(function(e){return e.like}).length,o=t.length,i=this.filterPost(this.searchPost(t,a),n);return r.a.createElement("div",{className:"app"},r.a.createElement(C,null),r.a.createElement(h,{liked:c,numOfPosts:o}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(E,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(g,{filter:n,onFilter:this.onFilter})),r.a.createElement(v,{posts:i,onDelete:this.deletePost,onImportant:this.onImportant,onLiked:this.onLiked}),r.a.createElement(p,{onAddPost:this.addPost}))}}]),t}(n.Component)),x=(a(74),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"banner right"}),r.a.createElement("div",{className:"banner left"}))});o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null),r.a.createElement(P,null)))}},[[44,2,1]]]);
//# sourceMappingURL=main.b66ceede.chunk.js.map