(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(76)},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),i=n.n(c),o=(n(52),n(2)),l=n(19),s=n(11),u=n(12),m=n(15),d=n(9),b=n(16),f=n(7),h=(n(54),function(e){var t=e.numOfPosts,n=e.liked;return r.a.createElement("div",{className:"app-header d-flex"},r.a.createElement("h1",null,"Your tweets"),r.a.createElement("h2",null,t," tweets, liked ",n))}),p=(n(56),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={msg:""},n.onTextChange=n.onTextChange.bind(Object(f.a)(Object(f.a)(n))),n.onSubmit=n.onSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onTextChange",value:function(e){this.setState({msg:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAddPost(this.state.msg),this.setState({msg:""})}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Enter your thoughts...",className:"form-control new-post",onChange:this.onTextChange,value:this.state.msg}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))}}]),t}(a.Component)),j=n(3),O=(n(58),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelete,a=e.onImportant,c=e.onLiked,i="post-item d-flex justify-content-between";return e.star&&(i+=" star"),e.like&&(i+=" like"),r.a.createElement("div",{className:i},r.a.createElement("span",{className:"post-item-label",onClick:c},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}}]),t}(a.Component)),k=n(79),v=(n(60),function(e){var t=e.posts,n=e.onDelete,a=e.onImportant,c=e.onLiked,i=t.map(function(e){var t=e.id,i=Object(j.a)(e,["id"]);return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(O,Object.assign({},i,{onDelete:function(){return n(t)},onImportant:function(){return a(t)},onLiked:function(){return c(t)}})))});return r.a.createElement(k.a,{className:"post-list list-group"},i)}),E=(n(64),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={term:""},n.onUpdateSearch=n.onUpdateSearch.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onUpdateSearch",value:function(e){var t=e.target.value.toLowerCase();console.log(t),this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Search...",onChange:this.onUpdateSearch})}}]),t}(a.Component)),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).buttons=[{name:"all",label:"All"},{name:"like",label:"Liked"},{name:"star",label:"Important"}],n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.buttons.map(function(t){var n=t.name,a=t.label,c=e.props,i=c.filter,o=c.onFilter,l=i===n?"btn info":"btn-outline-secondary";return r.a.createElement("button",{key:n,type:"button",className:"btn ".concat(l),onClick:function(){return o(n)}},a)});return r.a.createElement("div",{className:"btn-group"},t)}}]),t}(a.Component),g=n(41),S=n(37),N=n(42),C=(n(66),function(){return r.a.createElement(N.a,{variant:"light liner"},r.a.createElement(g.a,null,r.a.createElement(S.a,{className:"heading"},"Place for your thoughts"),r.a.createElement(S.a,{className:"me-auto links"},r.a.createElement(S.a.Link,{href:"https://github.com/julikss/pink-twitter"},r.a.createElement("i",{className:"fa fa-github"})))))}),P=(n(72),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={data:[],term:"",filter:"all"},n.addPost=n.addPost.bind(Object(f.a)(Object(f.a)(n))),n.deletePost=n.deletePost.bind(Object(f.a)(Object(f.a)(n))),n.onImportant=n.onImportant.bind(Object(f.a)(Object(f.a)(n))),n.onLiked=n.onLiked.bind(Object(f.a)(Object(f.a)(n))),n.onUpdateSearch=n.onUpdateSearch.bind(Object(f.a)(Object(f.a)(n))),n.onFilter=n.onFilter.bind(Object(f.a)(Object(f.a)(n))),n.countId=0,n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"addPost",value:function(e){var t={label:e,star:!1,id:this.countId++};this.setState(function(e){var n=e.data;return{data:[].concat(Object(l.a)(n),[t])}})}},{key:"deletePost",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),r=n.slice(0,a),c=n.slice(a+1);return{data:[].concat(Object(l.a)(r),Object(l.a)(c))}})}},{key:"onImportant",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),r=n[a],c=Object(o.a)({},r,{star:!r.star}),i=n.slice(0,a),s=n.slice(a+1);return{data:[].concat(Object(l.a)(i),[c],Object(l.a)(s))}})}},{key:"onLiked",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),r=n[a],c=Object(o.a)({},r,{like:!r.like}),i=n.slice(0,a),s=n.slice(a+1);return{data:[].concat(Object(l.a)(i),[c],Object(l.a)(s))}})}},{key:"searchPost",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t)>-1})}},{key:"filterPost",value:function(e,t){return"like"===t?e.filter(function(e){return e.like}):"star"===t?e.filter(function(e){return e.star}):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilter",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,c=t.filter(function(e){return e.like}).length,i=t.length,o=this.filterPost(this.searchPost(t,n),a);return r.a.createElement("div",{className:"app"},r.a.createElement(C,null),r.a.createElement(h,{liked:c,numOfPosts:i}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(E,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(y,{filter:a,onFilter:this.onFilter})),r.a.createElement(v,{posts:o,onDelete:this.deletePost,onImportant:this.onImportant,onLiked:this.onLiked}),r.a.createElement(p,{onAddPost:this.addPost}))}}]),t}(a.Component)),x=(n(74),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"banner right"}),r.a.createElement("div",{className:"banner left"}))});i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null),r.a.createElement(P,null)))}},[[44,2,1]]]);
//# sourceMappingURL=main.aa86d4ca.chunk.js.map