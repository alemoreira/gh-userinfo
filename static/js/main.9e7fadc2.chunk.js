(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),c=(a(25),a(3)),o=a(4),u=a(6),i=a(5),m=a(2),p=a(7),h=a(8),d=a.n(h),b="https://api.github.com/users",f={getByUsername:function(e){return d.a.get("".concat(b,"/").concat(e))},getReposByUsername:function(e){return d.a.get("".concat(b,"/").concat(e,"/repos"))}},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.getByUsername(this.refs.username.value).then(function(e){t.props.updateUser(e.data)}),f.getReposByUsername(this.refs.username.value).then(function(e){t.props.updateRepos(e.data)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"GitHub Info"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{href:"https://jscasts.teachable.com/"},r.a.createElement("small",null," JSCast | Matheus Lima"))),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col-sm-6",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nome de Usu\xe1rio"),r.a.createElement("input",{type:"text",ref:"username",className:"form-control",placeholder:"Ex: matheusml"}),r.a.createElement("small",{id:"usernamelHelp",className:"form-text text-muted"},"Digite o nome de usu\xe1rio.")),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Buscar"))))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={reposCount:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({reposCount:e.repos.length})}},{key:"render",value:function(){var e=this.props.repos.map(function(e,t){return r.a.createElement("div",{key:t,className:"thumbnail"},r.a.createElement("div",{className:"caption"},r.a.createElement("h3",null,e.name,r.a.createElement("span",{className:"badge"},e.stargazers_count," STARS")),r.a.createElement("p",null,e.description),r.a.createElement("p",null,r.a.createElement("a",{href:e.html_url,className:"btn btn-primary",role:"button"},"Repository"),r.a.createElement("a",{href:e.html_url+"/issues",className:"btn btn-default",role:"button"},"Issues (",e.open_issues,") "))))});return r.a.createElement("div",null,r.a.createElement("h2",null,this.state.reposCount," repositories"),e)}}]),t}(r.a.Component),g=function(e){var t=e.user,a=e.repos;return t?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("img",{className:"img-circle",src:t.avatar_url,alt:"avatar",width:"140",height:"140"}),r.a.createElement("h2",null,t.login),r.a.createElement("p",null,t.name),r.a.createElement("p",null,"Followers: ",t.followers," / Following: ",t.following),r.a.createElement("p",null,r.a.createElement("a",{className:"btn btn-default",href:t.html_url,role:"button"},"View details"))),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(v,{repos:a}))):null},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={user:null,repos:[]},a.updateUser=a.updateUser.bind(Object(m.a)(a)),a.updateRepos=a.updateRepos.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"updateUser",value:function(e){this.setState({user:e})}},{key:"updateRepos",value:function(e){this.setState({repos:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,{updateUser:this.updateUser,updateRepos:this.updateRepos}),r.a.createElement(g,{user:this.state.user,repos:this.state.repos}))}}]),t}(r.a.Component),y=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.9e7fadc2.chunk.js.map