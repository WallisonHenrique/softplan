(this.webpackJsonpsoftplan=this.webpackJsonpsoftplan||[]).push([[0],{76:function(t,e,n){t.exports=n(91)},90:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(69),o=n.n(l),i=n(24),u=n(10),c=n(26),p=n(4),m=n(8);function d(){var t=Object(p.a)(["\n\tborder: 0;\n\tclip: rect(0,0,0,0);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twidth: 1px;\n"]);return d=function(){return t},t}function f(){var t=Object(p.a)(["\n\tborder: 1px solid #ddd;\n\tborder-radius: 2px;\n\tfont-size: 14px;\n\theight: 40px;\n\tpadding: 10px;\n\twidth: 100%;\n"]);return f=function(){return t},t}function s(){var t=Object(p.a)(["\n\tpadding: 20px 20px 10px;\n"]);return s=function(){return t},t}var b=m.a.form(s()),v=m.a.input(f()),g=m.a.label(d());function E(t){var e=t.search,n=Object(a.useState)(""),l=Object(c.a)(n,2),o=l[0],i=l[1];return r.a.createElement(b,{onSubmit:function(t){t.preventDefault(),e(o)}},r.a.createElement(g,null,"Pesquisar por pa\xeds"),r.a.createElement(v,{onChange:function(t){return i(t.target.value)},type:"text",placeholder:"Pesquisar por pa\xeds...",value:o}))}function x(){var t=Object(p.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: 10px 15px 15px;\n"]);return x=function(){return t},t}var h=m.a.div(x());function O(){var t=Object(p.a)(["\n\tfont-size: 16px;\n"]);return O=function(){return t},t}function j(){var t=Object(p.a)(["\n\tfont-size: 16px;\n"]);return j=function(){return t},t}function y(){var t=Object(p.a)(["\n\theight: 33px;\n\tmargin-right: 10px;\n\tvertical-align: middle;\n\twidth: 50px;\n"]);return y=function(){return t},t}function w(){var t=Object(p.a)(["\n\tflex: 50%;\n\tpadding: 5px;\n\n\t@media (max-width: 767px) {\n\t\tflex: 100%;\n\t}\n\n\ta {\n\t\tbackground-color: #fcfcfc;\n\t\tborder: 1px solid #ddd;\n\t\tborder-radius: 2px;\n\t\tcolor: #000;\n\t\tdisplay: flex;\n\t\tpadding: 10px;\n\t\ttext-decoration: none;\n\t}\n"]);return w=function(){return t},t}var C=m.a.article(w()),L=m.a.img(y()),k=m.a.h2(j()),D=m.a.p(O());function F(t){var e=t.country,n=e.nameTranslations[0].value,a=e.flag,l=e.capital,o=e._id;return r.a.createElement(C,null,r.a.createElement(i.b,{to:"/softplan/".concat(o)},r.a.createElement("div",null,r.a.createElement(L,{src:a.svgFile,alt:" Bandeira ".concat(n," ")})),r.a.createElement("div",null,r.a.createElement(k,null,n),r.a.createElement(D,null,l))))}function T(){var t=Object(p.a)(["\n\tpadding: 20px;\n"]);return T=function(){return t},t}var q=m.a.p(T());function P(t){var e=t.children;return r.a.createElement(q,null,e)}function z(t){var e=t.loading,n=t.error,a=t.data;return e?r.a.createElement(P,null,"Carregando..."):n?r.a.createElement(P,null,"Falha :("):void 0===a?r.a.createElement(P,null,"Carregando..."):0===a.list.length?r.a.createElement(P,null,"Pa\xeds n\xe3o encontrado. Tente novamente."):r.a.createElement(h,null,a.list.map((function(t,e){return r.a.createElement(F,{key:e,country:t})})))}var S=n(12);function _(){var t=Object(p.a)(["\n  query {\n    details @client\n  }\n"]);return _=function(){return t},t}function Q(){var t=Object(p.a)(["\n  query List {\n    list @client\n  }\n"]);return Q=function(){return t},t}function V(){var t=Object(p.a)(['\n  query {\n    Country {\n       _id,\n      capital,\n      nameTranslations(filter: { languageCode_in: ["pt"]}) {\n        value\n      },\n      flag {\n        svgFile\n      },\n      area,\n      population,\n      topLevelDomains {\n        name\n      }\n    }\n  }\n']);return V=function(){return t},t}var B=Object(S.gql)(V()),A=Object(S.gql)(Q()),I=Object(S.gql)(_());function J(){var t=Object(S.useLazyQuery)(A,{variables:{term:""}}),e=Object(c.a)(t,2),n=e[0],l=e[1],o=l.error,i=l.loading,u=l.data;Object(a.useEffect)((function(){n()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{search:function(t){n({variables:{term:t}})}}),r.a.createElement(z,{loading:i,error:o,data:u}))}function M(){var t=Object(p.a)(["\n\tborder-bottom: 1px solid #000;\n\tfont-weight: bold;\n\tpadding: 5px;\n"]);return M=function(){return t},t}function N(){var t=Object(p.a)(["\n\tborder-bottom: 1px solid #000;\n\tfont-weight: normal;\n\tpadding: 5px;\n"]);return N=function(){return t},t}function R(){var t=Object(p.a)(["\n\tborder-spacing: initial;\n\tmargin-bottom: 10px;\n\ttext-align: left;\n\twidth: 100%;\n"]);return R=function(){return t},t}function G(){var t=Object(p.a)(["\n\tfont-size: 22px;\n\tmargin-bottom: 10px;\n\ttext-transform: uppercase;\n"]);return G=function(){return t},t}function H(){var t=Object(p.a)(["\n\tmargin-bottom: 20px;\n\tmargin-top: 10px;\n\ttext-align: center;\n\n\timg {\n\t\tmax-width: 100%;\n\t\twidth: 400px;\n\t}\n"]);return H=function(){return t},t}function K(){var t=Object(p.a)(["\n\tmargin: 0 auto;\n\tmax-width: 700px;\n\tpadding: 15px;\n"]);return K=function(){return t},t}var U=m.a.article(K()),W=m.a.div(H()),X=m.a.h2(G()),Y=m.a.table(R()),Z=m.a.th(N()),$=m.a.td(M());function tt(t){var e=t.match,n=Object(S.useLazyQuery)(I,{variables:{id:e.params.id},notifyOnNetworkStatusChange:!0}),l=Object(c.a)(n,2),o=l[0],u=l[1],p=u.error,m=u.loading,d=u.data;u.networkStatus;if(Object(a.useEffect)((function(){o()}),[]),m)return r.a.createElement(P,null,"Carregando...");if(p)return r.a.createElement(P,null,"Falha :(");if(void 0===d)return r.a.createElement(P,null,"Carregando...");if(0===d.details.length)return r.a.createElement(P,null,"Pa\xeds n\xe3o encontrado. Tente novamente. ",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/softplan"},"Voltar"));var f=d.details.nameTranslations[0].value,s=d.details,b=s.flag,v=s.capital,g=s.area,E=s.population,x=s.topLevelDomains;return r.a.createElement(U,null,r.a.createElement(i.b,{to:"/softplan"},"Voltar"),r.a.createElement(W,null,r.a.createElement("img",{src:b.svgFile,alt:" Bandeira ".concat(f," ")})),r.a.createElement(X,null,f),r.a.createElement(Y,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(Z,null,"Capital"),r.a.createElement($,null,v)),r.a.createElement("tr",null,r.a.createElement(Z,null,"\xc1rea"),r.a.createElement($,null,g," km\xb2")),r.a.createElement("tr",null,r.a.createElement(Z,null,"Popula\xe7\xe3o"),r.a.createElement($,null,E)),r.a.createElement("tr",null,r.a.createElement(Z,null,"Dom\xednio de topo"),r.a.createElement($,null,x[0].name)))),r.a.createElement(i.b,{to:"/softplan/editar/".concat(e.params.id)},"Editar"))}var et=n(75);function nt(){var t=Object(p.a)(["\n\tmargin: 0 auto;\n\tmax-width: 700px;\n\tpadding: 15px;\n"]);return nt=function(){return t},t}var at=m.a.div(nt()),rt=Object(S.makeVar)([]),lt=new S.InMemoryCache({typePolicies:{Query:{fields:{list:{read:function(t,e){var n=e.variables;return rt().filter((function(t){return t.nameTranslations[0].value.toLowerCase().indexOf(n.term.toLowerCase())>=0}))}},details:{read:function(t,e){var n=e.variables,a=rt().find((function(t){return t._id===n.id}));return a||[]}}}}}}),ot=new S.ApolloClient({uri:"https://countries-274616.ew.r.appspot.com",cache:lt}),it=n(47),ut=n(25);function ct(){var t=Object(p.a)(["\n\tbackground-color: #000;\n\tborder: none;\n\tborder-radius: 2px;\n\tcolor: #fff;\n\tcursor: pointer;\n\theight: 40px;\n    padding: 5px 10px;\n    width: 100%;\n"]);return ct=function(){return t},t}function pt(){var t=Object(p.a)(["\n\theight: 40px;\n    padding: 5px 10px;\n    width: 100%;\n"]);return pt=function(){return t},t}function mt(){var t=Object(p.a)(["\n\tdisplay: block;\n\tmargin-bottom: 5px;\n"]);return mt=function(){return t},t}function dt(){var t=Object(p.a)(["\n\tmargin-bottom: 15px;\n"]);return dt=function(){return t},t}function ft(){var t=Object(p.a)(["\n\tmargin: 0 auto;\n\tpadding: 15px;\n    max-width: 500px;\n"]);return ft=function(){return t},t}var st=m.a.form(ft()),bt=m.a.div(dt()),vt=m.a.label(mt()),gt=m.a.input(pt()),Et=m.a.button(ct());function xt(t){var e=t.country,n=t.edit,l=e.nameTranslations[0].value,o=e.flag,i=e.capital,u=e.area,p=e.population,m=e.topLevelDomains,d=Object(a.useReducer)((function(t,e){return Object(ut.a)(Object(ut.a)({},t),e)}),{flag:o.svgFile,name:l,capital:i,area:u,population:p,topLevelDomains:m[0].name}),f=Object(c.a)(d,2),s=f[0],b=f[1],v={onChange:function(t){return b(Object(it.a)({},t.target.name,t.target.value))},required:!0},g=[{label:"Bandeira",attrs:{name:"flag",type:"text",value:s.flag}},{label:"Nome",attrs:{name:"name",type:"text",value:s.name}},{label:"Capital",attrs:{name:"capital",type:"text",value:s.capital}},{label:"\xc1rea km\xb2",attrs:{name:"area",type:"number",value:s.area}},{label:"Popula\xe7\xe3o",attrs:{name:"population",type:"number",value:s.population}},{label:"Dom\xednio de topo",attrs:{name:"topLevelDomains",type:"text",value:s.topLevelDomains}}];return r.a.createElement(st,{onSubmit:function(t){var a=Object(ut.a)(Object(ut.a)({},e),{},{nameTranslations:[Object(ut.a)(Object(ut.a)({},e.nameTranslations[0]),{},{value:s.name})],flag:Object(ut.a)(Object(ut.a)({},o),{},{svgFile:s.flag}),topLevelDomains:[Object(ut.a)(Object(ut.a)({},m[0]),{},{name:s.topLevelDomains})],capital:s.capital,area:s.area,population:s.population});n(a),t.preventDefault()}},g.map((function(t,e){return r.a.createElement(bt,{key:e},r.a.createElement(vt,null,t.label,":"),r.a.createElement(gt,Object.assign({},t.attrs,v)))})),r.a.createElement(Et,null,"Salvar"))}function ht(t){var e=t.match,n=t.history,l=Object(S.useLazyQuery)(I,{variables:{id:e.params.id}}),o=Object(c.a)(l,2),u=o[0],p=o[1],m=p.error,d=p.loading,f=p.data;if(Object(a.useEffect)((function(){u()}),[]),d)return r.a.createElement(P,null,"Carregando...");if(m)return r.a.createElement(P,null,"Falha :(");if(void 0===f)return r.a.createElement(P,null,"Carregando...");if(0===f.details.length)return r.a.createElement(P,null,"Pa\xeds n\xe3o encontrado. Tente novamente. ",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/softplan"},"Voltar"));return r.a.createElement(at,null,r.a.createElement(i.b,{to:"/softplan"},"Voltar"),r.a.createElement(xt,{country:f.details,edit:function(t){var e=rt().map((function(e){return e._id===t._id?t:e}));rt(Object(et.a)(e)),n.push("/softplan")}}))}function Ot(){return r.a.createElement(i.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/softplan",exact:!0,component:J}),r.a.createElement(u.b,{path:"/softplan/:id",exact:!0,render:function(t){var e=t.match;return r.a.createElement(tt,{match:e})}}),r.a.createElement(u.b,{path:"/softplan/editar/:id",render:function(t){return r.a.createElement(ht,t)}}),r.a.createElement(u.a,{to:"/softplan"})))}function jt(){var t=Object(S.useQuery)(B),e=t.loading,n=t.error,a=t.data;return e?r.a.createElement(P,null,"Carregando..."):n?r.a.createElement(P,null,"Falha :("):(rt(a.Country),r.a.createElement(Ot,null))}n(90);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.ApolloProvider,{client:ot},r.a.createElement(jt,null))),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.2d3b4398.chunk.js.map