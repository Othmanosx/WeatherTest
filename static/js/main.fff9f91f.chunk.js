(this.webpackJsonpweathertest=this.webpackJsonpweathertest||[]).push([[0],{125:function(t,e,a){},263:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=a(16),s=(a(125),a(110)),l=a(101),u=a.n(l),b=a(295),d=(a(138),a(63)),j=a.n(d),h=function(){return function(t){j.a.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=imperial").then((function(e){t({type:"FETCH",payload:e.data,unit:"\xb0F"})}))}},p=a(288),m=a(296),f=a(290),O=a(264),x=a(291),g=a(3),v=Object(p.a)({root:{minWidth:120,textAlign:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function y(t){var e=t.status,a=t.date,n=t.temp,c=t.unit,r=(t.passData,v()),i=Object(o.b)();return Object(g.jsx)(m.a,{className:r.root,variant:"outlined",children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(O.a,{className:r.title,color:"textSecondary",gutterBottom:!0}),Object(g.jsx)(O.a,{variant:"h5",component:"h2",color:"secondary",children:e}),Object(g.jsx)(O.a,{className:r.pos,color:"textSecondary",children:function(t){return new Date(1e3*t).toDateString()}(a)}),Object(g.jsxs)(O.a,{variant:"h4",children:[n," ",c]}),Object(g.jsx)(x.a,{size:"small",onClick:function(){i(function(t,e){return function(a){a({type:"PASS",payload:t,unit:e})}}(a,c))},variant:"outlined",color:"primary",children:"More info"})]})})}var k=a(293),C=a(294),D=a(292);function w(t){var e=t.handleChange,a=t.selectedValue;return Object(g.jsxs)(C.a,{className:"radio",row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(g.jsx)(D.a,{value:"C",control:Object(g.jsx)(k.a,{checked:"a"===a,onChange:e,value:"a",name:"radio-button-demo",inputProps:{"aria-label":"A"}}),label:"Celcius"}),Object(g.jsx)(D.a,{value:"F",control:Object(g.jsx)(k.a,{checked:"b"===a,onChange:e,value:"b",name:"radio-button-demo",inputProps:{"aria-label":"B"}}),label:"Fahrenheit"})]})}var F=a(109),N=function(){var t,e=Object(o.c)((function(t){return t})),a={labels:["00:00","03:00","06:00 ","09:00","12:00","15:00","18:00","21:00"],datasets:[{label:"Temp of the day ".concat(e.unit),data:e.all.list.filter((function(t){return t.dt>=e.DayData})).slice(0,8).map((function(t){return t.main.temp})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return e.DayData?Object(g.jsxs)("div",{className:"chart",children:[Object(g.jsxs)(O.a,{className:"title",children:["Hourly forecast for ",(t=e.DayData,new Date(1e3*t).toDateString())]}),Object(g.jsx)(F.a,{data:a,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]}):Object(g.jsx)("div",{className:"chartText",children:Object(g.jsx)(O.a,{variant:"h5",children:"Click on MORE INFO button to view hourly forecast"})})},S={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:3},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:3}};function P(){var t=Object(o.c)((function(t){return t})),e=Object(o.b)(),a=Object(n.useState)("a"),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){switch(r){case"b":e(h());break;case"a":e((function(t){j.a.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=metric").then((function(e){t({type:"FETCH",payload:e.data,unit:"\xb0C"})}))}));break;default:e(h())}}),[r]),Object(g.jsx)("div",{className:"App",children:t?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{selectedValue:r,handleChange:function(t){i(t.target.value)}}),Object(g.jsx)(u.a,{className:"table",responsive:S,children:t.days.map((function(e){if("00:00:00"===e.dt_txt.split(" ")[1])return Object(g.jsx)("div",{className:"weather",children:Object(g.jsx)(y,{date:e.dt,status:e.weather[0].main,temp:Math.round(e.main.temp),unit:t.unit})},e.dt)}))}),Object(g.jsx)(N,{})]}):Object(g.jsx)("div",{className:"loading",children:Object(g.jsxs)("h1",{children:["Loading...",Object(g.jsx)(b.a,{color:"secondary"})]})})})}var A=a(32),T=a(108),E=a(18),M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:[],days:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH":return{all:e.payload,days:e.payload.list.filter((function(t){return"00:00:00"===t.dt_txt.split(" ")[1]})),unit:e.unit};case"PASS":return Object(E.a)(Object(E.a)({},t),{},{DayData:e.payload,unit:e.unit})}},B=Object(A.c)(M,[],Object(A.a)(T.a)),I=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,298)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),r(t),i(t)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{store:B,children:Object(g.jsx)(P,{})})}),document.getElementById("root")),I()}},[[263,1,2]]]);
//# sourceMappingURL=main.fff9f91f.chunk.js.map