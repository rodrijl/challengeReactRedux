(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,t,r){},123:function(e,t,r){"use strict";r.r(t);var n=r(7),c=r(95),a=r(0),i=r(142),s=r(140),o=r(44),u=r(139),h=r(77),l=r(78);function j(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 15px;\n"]);return j=function(){return e},e}function d(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n"]);return d=function(){return e},e}var f=l.a.div(d()),b=l.a.div(j()),g=function(e){return Object(n.jsx)(f,{children:Object(n.jsx)(u.a,{icon:"search",placeholder:"Search...",onKeyUp:function(t){return e.onTextChange(t.target.value)}})})},p=r(143),x=r(141),C=r(96),O=r(124),E=Object(o.b)(null,(function(e){return{deleteCharacter:function(t){return function(e,t){e({type:"DELETE_CHARACTER",url:t})}(e,t)}}}))((function(e){var t=e.character,r=t.name,c=t.height,a=t.gender,i=t.url;return Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(x.a.Content,{children:[Object(n.jsx)(C.a,{alt:"Card image profile",floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/steve.jpg"}),Object(n.jsx)(x.a.Header,{children:r}),Object(n.jsx)(x.a.Meta,{children:c}),Object(n.jsx)(x.a.Meta,{children:a})]}),Object(n.jsx)(x.a.Content,{extra:!0,children:Object(n.jsx)(O.a,{basic:!0,color:"red",floated:"right",onClick:function(){return e.deleteCharacter(i)},children:"Remove"})})]})})),T=function(e){var t,r,c=e.characters,a=e.searchText;0===c.length&&(r=""===a?"There are no characters to show":'There are no characters that match the search "'.concat(a,'"'),t=Object(n.jsx)(p.a,{info:!0,children:Object(n.jsx)(p.a.Header,{children:r})}));return Object(n.jsxs)(b,{children:[c.map((function(e){return Object(n.jsx)(E,{character:e},e.url)})),t]})},R=(r(121),Object(o.b)((function(e){return{characters:e.characters,loading:e.loading}}),(function(e){return{getCharacters:function(){return function(e){e({type:"START_GET_CHARACTERS"}),fetch("https://swapi.dev/api/people/").then((function(e){return e.json()})).then((function(t){e({type:"SUCCESS_GET_CHARACTERS",characters:t.results})})).catch((function(){e({type:"ERROR_GET_CHARACTERS"})}))}(e)}}}))((function(e){var t=Object(a.useState)(""),r=Object(c.a)(t,2),o=r[0],u=r[1],h=e.characters.filter((function(e){return""===o||e.name.toLowerCase().includes(o)?e:void 0}));return Object(a.useEffect)((function(){e.getCharacters()}),[]),Object(n.jsxs)("section",{children:[Object(n.jsx)(i.a,{active:e.loading,inverted:!0,children:Object(n.jsx)(s.a,{size:"large",children:"Loading..."})}),Object(n.jsx)(g,{onTextChange:function(e){return u(e)}}),Object(n.jsx)(T,{characters:h,searchText:o})]})}))),m=r(21),v=r.n(m),A=r(54),S=r(94),_=r.n(S)()({loading:!1,characters:[]}),y=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_GET_CHARACTERS":return e.merge({characters:t.characters,loading:!1});case"DELETE_CHARACTER":var r=t.url,n=e.characters.filter((function(e){return e.url!==r}));return e.merge({characters:n});case"START_GET_CHARACTERS":return e.merge({loading:!0});case"ERROR_GET_CHARACTERS":return e.merge({loading:!1});default:return e}}));r(122);v.a.render(Object(n.jsx)(o.a,{store:y,children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.8f6af924.chunk.js.map