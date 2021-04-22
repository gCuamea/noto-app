(this["webpackJsonpdoears-app"]=this["webpackJsonpdoears-app"]||[]).push([[0],{45:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(27),r=n.n(c),s=(n(45),n(46),n(47),n(7)),i=n(20),o=n(40),u=n(3),l="[Auth] LoginAttempt",d="[Auth] Logout",p="[Notes] New note",j="[Notes] Change active note",b="[Notes] Load notes",f="[Notes] Update list of notes",O="[Notes] Delete active note",m="[Notes] Logout clean",h="[Notes] Pin note",v={displayName:null,uid:null},x=n(38),y={notes:[],active:null},g=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.payload;case d:return Object(u.a)({},v);default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{active:Object(u.a)({},t.payload)});case b:return Object(u.a)(Object(u.a)({},e),{},{notes:Object(x.a)(t.payload)});case f:return Object(u.a)(Object(u.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case O:return Object(u.a)(Object(u.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.payload})),active:null});case m:return Object(u.a)({},y);case p:return Object(u.a)(Object(u.a)({},e),{},{notes:[].concat(Object(x.a)(e.notes),[t.payload])});case h:return Object(u.a)(Object(u.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{pinned:!e.pinned}):e}))});default:return e}}}),_="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,N=Object(i.e)(g,_(Object(i.a)(o.a))),w=n(5),k=n.n(w),C=n(11),S=n(29),P=n(9),E=n(18),L=n(19),D=n.n(L),A=n(26);n(60),n(54);A.a.initializeApp({apiKey:"AIzaSyD5JTJMuq3B_q-m__ZxjYYSh9j96S_BXhE",authDomain:"todoers-app.firebaseapp.com",projectId:"todoers-app",storageBucket:"todoers-app.appspot.com",messagingSenderId:"625691589779",appId:"1:625691589779:web:a3ae5cd8f3957e219ae166",measurementId:"G-22CVBK5WWT"});var I=A.a.firestore(),T=new A.a.auth.GoogleAuthProvider,U=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dpvydp6br/upload",(n=new FormData).append("upload_preset","todoers-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dpvydp6br/upload",{method:"POST",body:n});case 7:if((a=e.sent).ok){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,a.json();case 12:return c=e.sent,e.abrupt("return",c.secure_url);case 16:e.prev=16,e.t0=e.catch(4),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("".concat(t,"/storage/notes")).orderBy("date","desc").get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id}))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){return function(){var e=Object(C.a)(k.a.mark((function e(t,n){var a,c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",text:"",pinned:!1,url:"",date:(new Date).getTime()},e.next=4,I.collection("".concat(a,"/storage/notes")).add(c);case 4:r=e.sent,t(q(r.id,c)),t(G(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},q=function(e,t){return{type:j,payload:Object(u.a)(Object(u.a)({},t),{},{id:e})}},G=function(e,t){return{type:p,payload:Object(u.a)(Object(u.a)({},t),{},{id:e})}},J=function(e){return function(){var t=Object(C.a)(k.a.mark((function t(n,a){var c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,delete(r=Object(u.a)({},e)).id,t.next=5,I.doc("".concat(c,"/storage/notes/").concat(e.id)).update(r);case 5:n(X(e.id,r)),D.a.fire("Saved!","Note: ".concat(e.title," was saved succesfully."),"success");case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(C.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.collection("s");case 2:return t.next=4,B(e);case 4:a=t.sent,n(F(a));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return{type:b,payload:e}},X=function(e,t){return{type:f,payload:{id:e,note:Object(u.a)({id:e},t)}}},K=function(e){return{type:h,payload:e}},M=function(e){return{type:O,payload:e}},R=function(e,t){return{type:l,payload:{uid:e,displayName:t}}},V=function(){return{type:d}},Y=n(30),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(E.a)(t,2),c=n[0],r=n[1],s=function(){r(e)},i=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},c),{},Object(Y.a)({},t.name,t.value)))};return[c,i,s]},H=n.p+"static/media/companylogo.72226910.png",Q=n(1),$=function(){var e=Z({lemail:"",lpassword:"",rname:"",remail:"",rpassword:""}),t=Object(E.a)(e,2),n=t[0],a=n.lemail,c=n.lpassword,r=n.rname,i=n.remail,o=n.rpassword,u=t[1],l=Object(s.b)(),d=function(){l(function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a,c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.auth().signInWithPopup(T);case 2:n=e.sent,a=n.user,c=a.uid,r=a.displayName,t(R(c,r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(Q.jsxs)("div",{className:"contain animate__animated animate__slideInDown",children:[Object(Q.jsx)("div",{}),Object(Q.jsx)("img",{src:H,alt:"company logo",className:"mt-5"}),Object(Q.jsxs)("div",{className:"auth my-5",children:[Object(Q.jsxs)("div",{className:"auth__left",children:[Object(Q.jsx)("h2",{children:"Login"}),Object(Q.jsxs)("div",{className:"auth__social",children:[Object(Q.jsx)("p",{className:"text-secondary",children:"Use your Google account..."}),Object(Q.jsx)("i",{style:{cursor:"pointer"},onClick:d,className:"bi bi-google"})]}),Object(Q.jsx)("p",{className:"text-secondary m-0",children:"...or use your credentials"}),Object(Q.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),l((t=a,n=c,function(){var e=Object(C.a)(k.a.mark((function e(a){var c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.auth().signInWithEmailAndPassword(t,n);case 3:c=e.sent,r=c.user,a(R(r.uid,r.displayName)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),D.a.fire("Login error",e.t0.message,"error");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(Q.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",name:"lemail",value:a,onChange:u}),Object(Q.jsx)("input",{className:"form__input",type:"password",placeholder:"Password",name:"lpassword",value:c,onChange:u}),Object(Q.jsx)("button",{className:"button button-red",type:"submit",children:"Log In"})]})]}),Object(Q.jsxs)("div",{className:"auth__right",children:[Object(Q.jsx)("h2",{children:"Create an account"}),Object(Q.jsxs)("div",{className:"auth__social",children:[Object(Q.jsx)("p",{className:"text-secondary",children:"Use your Google account..."}),Object(Q.jsx)("i",{className:"bi bi-google",style:{cursor:"pointer"},onClick:d})]}),Object(Q.jsx)("p",{className:"text-secondary m-0",children:"...or fill out this form"}),Object(Q.jsxs)("form",{onSubmit:function(e){var t,n,a;(e.preventDefault(),o.length<6)?D.a.fire("Error","Tu contrasena debe tener 6 caracteres como minimo.","error"):l((t=i,n=o,a=r,function(){var e=Object(C.a)(k.a.mark((function e(c){var r,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.auth().createUserWithEmailAndPassword(t,n);case 2:return r=e.sent,s=r.user.uid,console.log(r),e.next=7,r.user.updateProfile({displayName:a});case 7:c(R(s,a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(Q.jsx)("input",{className:"form__input",type:"text",placeholder:"Name",name:"rname",value:r,onChange:u}),Object(Q.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",name:"remail",value:i,onChange:u}),Object(Q.jsx)("input",{className:"form__input",type:"password",placeholder:"Password",name:"rpassword",value:o,onChange:u}),Object(Q.jsx)("button",{className:"button button-red",type:"submit",children:"Create account"})]})]})]})]})},ee=n(32),te=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ee.a)(e,["isAuthenticated","component"]);return Object(Q.jsx)(P.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(Q.jsx)(n,Object(u.a)({},e)):Object(Q.jsx)(P.a,{to:"/login"})}}))},ne=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ee.a)(e,["isAuthenticated","component"]);return Object(Q.jsx)(P.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(Q.jsx)(P.a,{to:"/"}):Object(Q.jsx)(n,Object(u.a)({},e))}}))},ae=function(){var e=Object(s.c)((function(e){return e.notes})).active,t=Object(s.b)(),n=Z(e),c=Object(E.a)(n,3),r=c[0],i=c[1],o=c[2],l=Object(a.useRef)(e.id);return Object(a.useEffect)((function(){e.id!==l.current&&(o(e),l.current=e.id)}),[e,o]),Object(a.useEffect)((function(){t(q(r.id,Object(u.a)({},r)))}),[t,r]),Object(Q.jsxs)("div",{className:"active__event",children:[Object(Q.jsx)("input",{className:"form-none",name:"title",value:r.title,onChange:i,type:"text",placeholder:"Titulo..."}),Object(Q.jsx)("textarea",{className:"form-none",name:"text",value:r.text,onChange:i,id:"",placeholder:"Notas..."}),!!e.url&&Object(Q.jsx)("img",{className:"note__image animate__animated animate__fadeInDown",src:e.url,alt:"User uploaded media"})]})},ce=function(){var e=Object(s.b)();return Object(Q.jsx)("h3",{className:"nothing-selected active__event",onClick:function(){e(W())},children:"Selecciona una nota o haz clic aqui para crear una nueva nota."})},re=function(){var e=Object(s.c)((function(e){return e.auth})).displayName,t=Object(s.c)((function(e){return e.notes})).active,n=Object(s.b)();return Object(Q.jsxs)("nav",{className:"topnavbar",children:[Object(Q.jsx)("input",{id:"file-selector",type:"file",style:{display:"none"},name:"file",onChange:function(e){var t=e.target.files[0];t&&n(function(e){return function(){var t=Object(C.a)(k.a.mark((function t(n,a){var c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,D.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){D.a.showLoading()}}),t.next=4,U(e);case 4:r=t.sent,c.url=r,n(J(c)),D.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}),Object(Q.jsxs)("div",{className:"topnavbar__auth",children:[Object(Q.jsx)("h3",{children:e}),Object(Q.jsxs)("button",{onClick:function(){n(function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.auth().signOut();case 2:t(V()),t({type:m});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(Q.jsx)("i",{className:"bi bi-door-open-fill"}),"\xa0Sign out"]})]}),Object(Q.jsx)("div",{className:"topnavbar__actions",children:t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("button",{onClick:function(){document.querySelector("#file-selector").click()},className:"button button-red",children:"Upload picture"}),Object(Q.jsx)("button",{onClick:function(){n(J(t))},className:"button button-orange",children:"Save"})]})})]})},se=function(e){var t=e.title,n=e.date,a=e.text,c=e.id,r=e.pinned,i=e.url,o=e.active,u=Object(s.b)(),l=new Date(n),d=0===t.length?"Empty title":t.length>8?"".concat(t.substr(0,8),"..."):t,p=0===a.length?"Empty note":a.length>14?"".concat(t.substr(0,15),"..."):a;return Object(Q.jsxs)("div",{onClick:function(){u(q(c,{title:t,date:n,text:a,pinned:r,url:i}))},className:"sidebar__note animate__animated animate__fadeInLeft ".concat(o?"sidebar__note-active":""),children:[Object(Q.jsx)("div",{children:Object(Q.jsx)("h3",{children:d})}),Object(Q.jsxs)("p",{children:[l.toLocaleDateString()," ",Object(Q.jsxs)("span",{children:[p,"..."]})]}),Object(Q.jsx)("i",{onClick:function(e){var t;e.stopPropagation(),u((t=c,function(){var e=Object(C.a)(k.a.mark((function e(n,a){var c,r,s,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a().auth.uid,e.prev=1,e.next=4,I.doc("".concat(c,"/storage/notes/").concat(t));case 4:return r=e.sent,e.next=7,r.get();case 7:return s=e.sent,e.next=10,s.data();case 10:return i=e.sent,e.next=13,r.update({pinned:!i.pinned});case 13:n(K(t)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}()))},className:"bi bi-geo".concat(r?"-fill":""," i-icon")}),Object(Q.jsx)("i",{onClick:function(e){var t;e.stopPropagation(),u((t=c,function(){var e=Object(C.a)(k.a.mark((function e(n,a){var c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a().auth.uid,e.prev=1,e.next=4,I.doc("".concat(c,"/storage/notes/").concat(t));case 4:return r=e.sent,e.next=7,r.delete();case 7:n(M(t)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()))},className:"bi bi-x-circle-fill i-icon"}),i&&Object(Q.jsx)("i",{className:"bi bi-image overlay-i"})]})},ie=function(e){var t=e.pinned,n=e.nonPinned,a=Object(s.c)((function(e){return e.notes})).active;return Object(Q.jsxs)(Q.Fragment,{children:[!!t.length&&Object(Q.jsxs)("div",{className:"sidebar__pinned",children:[Object(Q.jsxs)("div",{className:"sidebar__pinned__header",children:[Object(Q.jsx)("i",{className:"bi bi-pin-fill"}),Object(Q.jsx)("h3",{children:"Pinned"})]}),t.map((function(e){return Object(Q.jsx)(se,Object(u.a)({active:(null===a||void 0===a?void 0:a.id)===e.id},e),e.id)}))]}),!!n.length&&Object(Q.jsx)("div",{className:"sidebar__nonpinned",children:n.map((function(e){return Object(Q.jsx)(se,Object(u.a)({active:(null===a||void 0===a?void 0:a.id)===e.id},e),e.id)}))})]})},oe=function(){var e=Object(s.b)(),t=Object(a.useState)(!1),n=Object(E.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([]),o=Object(E.a)(i,2),l=o[0],d=o[1],p=Object(s.c)((function(e){return e.notes})),j=p.notes,b=p.active,f=new Date,O=Z({searchParam:""}),m=Object(E.a)(O,3),h=m[0],v=m[1],x=m[2],y=h.searchParam,g=j.filter((function(e){return!!e.pinned})),_=j.filter((function(e){return!e.pinned}));return Object(Q.jsxs)("div",{className:"sidebar",children:[Object(Q.jsx)("p",{className:"text-end sidebar__date",children:f.toLocaleDateString()}),Object(Q.jsxs)("div",{className:"sidebar__top",children:[Object(Q.jsx)("h2",{className:"px-4",children:"Notes"}),Object(Q.jsx)("i",{className:"bi bi-plus-circle-fill",onClick:function(){e(W())}})]}),Object(Q.jsxs)("div",{className:"sidebar__search my-3",children:[Object(Q.jsx)("i",{className:"bi bi-search"}),Object(Q.jsx)("form",{onSubmit:function(e){e.preventDefault(),r(!0),d(j.filter((function(e){return!(!e.text.toLowerCase().includes(y.toLowerCase())&&!e.title.toLowerCase().includes(y.toLowerCase()))}))),x()},children:Object(Q.jsx)("input",{value:h.searchParam,name:"searchParam",onChange:v,type:"text",className:"px-3",placeholder:"Search in notes..."})})]}),c&&Object(Q.jsx)("div",{className:"px-3",children:Object(Q.jsx)("button",{className:"button button-red button-centered animate__animated animate__backInLeft",onClick:function(){r(!1)},children:"Cancel search"})}),!0===c?l.map((function(e){return Object(Q.jsx)(se,Object(u.a)({active:(null===b||void 0===b?void 0:b.id)===e.id},e),e.id)})):Object(Q.jsx)(ie,{pinned:g,nonPinned:_})]})},ue=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(Q.jsxs)("main",{className:"app-wrapper",children:[Object(Q.jsx)(oe,{}),Object(Q.jsx)(re,{}),e?Object(Q.jsx)(ae,{}):Object(Q.jsx)(ce,{})]})},le=function(){var e=Object(s.c)((function(e){return e.auth})).uid,t=Object(s.b)();return Object(a.useEffect)((function(){A.a.auth().onAuthStateChanged(function(){var e=Object(C.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===n||void 0===n?void 0:n.uid)&&(t(R(n.uid,n.displayName)),t(z(n.uid)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(Q.jsx)(S.a,{basename:"/noto-app",children:Object(Q.jsx)("div",{children:Object(Q.jsxs)(P.d,{children:[Object(Q.jsx)(ne,{path:"/login",isAuthenticated:!!e,component:$}),Object(Q.jsx)(te,{exact:!0,path:"/",isAuthenticated:!!e,component:ue})]})})})},de=(n(58),function(){return Object(Q.jsx)(s.a,{store:N,children:Object(Q.jsx)(le,{})})});r.a.render(Object(Q.jsx)(de,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.d8fd122a.chunk.js.map