(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+dc4":function(l,e,n){"use strict";n.d(e,"a",(function(){return t}));class t{}},GGdc:function(l,e,n){"use strict";n.d(e,"a",(function(){return u}));var t=n("IheW"),r=n("WE4D"),a=n("8Y7J");let u=(()=>{class l{constructor(l){this._http=l}getuserdetails(l){let e=(new t.g).set("user_id",l),n=this._http.get(r.a.nodeAPIBaseUrl+"/getuserdetails",{params:e});return console.log("in service=> ",n),n}updateuserdetails(l,e){let n=(new t.g).set("user_id",l),a=this._http.post(r.a.nodeAPIBaseUrl+"/updateuserdetails",e,{params:n});return console.log("in service=> ",a),a}changepassword(l){let e=this._http.post(r.a.nodeAPIBaseUrl+"/changepassword",l);return console.log("in service=> ",e),e}}return l.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new l(a["\u0275\u0275inject"](t.c))},token:l,providedIn:"root"}),l})()},Kmc8:function(l,e,n){"use strict";n.d(e,"a",(function(){return t}));class t{constructor(l){this.router=l}ngOnInit(){}}},l5mm:function(l,e,n){"use strict";n.d(e,"a",(function(){return u}));var t=n("HDdC"),r=n("D0XW"),a=n("Y7HM");function u(l=0,e=r.a){return(!Object(a.a)(l)||l<0)&&(l=0),e&&"function"==typeof e.schedule||(e=r.a),new t.a(n=>(n.add(e.schedule(s,l,{subscriber:n,counter:0,period:l})),n))}function s(l){const{subscriber:e,counter:n,period:t}=l;e.next(n),this.schedule({subscriber:e,counter:n+1,period:t},t)}},mrSG:function(l,e,n){"use strict";n.d(e,"a",(function(){return t})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return u}));var t=function(){return(t=Object.assign||function(l){for(var e,n=1,t=arguments.length;n<t;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(l[r]=e[r]);return l}).apply(this,arguments)};function r(l,e){var n={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&e.indexOf(t)<0&&(n[t]=l[t]);if(null!=l&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(l);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(l,t[r])&&(n[t[r]]=l[t[r]])}return n}function a(l,e,n,t){return new(n||(n=Promise))((function(r,a){function u(l){try{i(t.next(l))}catch(e){a(e)}}function s(l){try{i(t.throw(l))}catch(e){a(e)}}function i(l){var e;l.done?r(l.value):(e=l.value,e instanceof n?e:new n((function(l){l(e)}))).then(u,s)}i((t=t.apply(l,e||[])).next())}))}function u(){for(var l=0,e=0,n=arguments.length;e<n;e++)l+=arguments[e].length;var t=Array(l),r=0;for(e=0;e<n;e++)for(var a=arguments[e],u=0,s=a.length;u<s;u++,r++)t[r]=a[u];return t}},tA3T:function(l,e,n){"use strict";var t=n("8Y7J"),r=n("SVse"),a=n("iInd");n("Kmc8"),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var u=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,36,"div",[["class","flex-between__column"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,8,"a",[["class",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,e,n){var r=!0;return"click"===e&&(r=!1!==t["\u0275nov"](l,4).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&r),r}),null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](3,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275did"](4,671744,null,0,a.n,[a.k,a.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](5,1),(l()(),t["\u0275eld"](6,0,null,null,1,":svg:svg",[["fill","none"],["height","18"],["viewBox","0 0 18 18"],["width","18"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M8.4375 0C7.81618 0 7.3125 0.50368 7.3125 1.125L7.17745 2.07038C7.05652 2.91684 6.0728 3.32431 5.38875 2.81128L4.62478 2.23829C4.18544 1.79895 3.47313 1.79895 3.03379 2.23829L2.23829 3.03379C1.79895 3.47313 1.79895 4.18544 2.23829 4.62478L2.81127 5.38875C3.32431 6.0728 2.91684 7.05652 2.07037 7.17745L1.125 7.3125C0.50368 7.3125 0 7.81618 0 8.4375V9.5625C0 10.1838 0.50368 10.6875 1.125 10.6875L2.07038 10.8226C2.91685 10.9435 3.32432 11.9272 2.81128 12.6112L2.23829 13.3752C1.79895 13.8146 1.79895 14.5269 2.23829 14.9662L3.03379 15.7617C3.47313 16.2011 4.18544 16.2011 4.62478 15.7617L5.38875 15.1887C6.0728 14.6757 7.05652 15.0832 7.17745 15.9296L7.3125 16.875C7.3125 17.4963 7.81618 18 8.4375 18H9.5625C10.1838 18 10.6875 17.4963 10.6875 16.875L10.8226 15.9296C10.9435 15.0832 11.9272 14.6757 12.6112 15.1887L13.3752 15.7617C13.8146 16.2011 14.5269 16.2011 14.9662 15.7617L15.7617 14.9662C16.201 14.5269 16.201 13.8146 15.7617 13.3752L15.1887 12.6112C14.6757 11.9272 15.0832 10.9435 15.9296 10.8226L16.875 10.6875C17.4963 10.6875 18 10.1838 18 9.5625V8.4375C18 7.81618 17.4963 7.3125 16.875 7.3125L15.9296 7.17745C15.0832 7.05652 14.6757 6.0728 15.1887 5.38875L15.7617 4.62478C16.201 4.18544 16.201 3.47313 15.7617 3.03379L14.9662 2.23829C14.5269 1.79895 13.8146 1.79895 13.3752 2.23829L12.6112 2.81128C11.9272 3.32431 10.9435 2.91684 10.8226 2.07038L10.6875 1.125C10.6875 0.50368 10.1838 0 9.5625 0H8.4375ZM9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"],["fill","#001431"],["fill-rule","evenodd"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["General"])),(l()(),t["\u0275eld"](10,0,null,null,8,"a",[["class",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,e,n){var r=!0;return"click"===e&&(r=!1!==t["\u0275nov"](l,13).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&r),r}),null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](12,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275did"](13,671744,null,0,a.n,[a.k,a.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](14,1),(l()(),t["\u0275eld"](15,0,null,null,1,":svg:svg",[["fill","none"],["height","18"],["viewBox","0 0 16 18"],["width","16"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M8 0C5.23858 0 3 2.23858 3 5V6H2C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.895431 18 2 18H14C15.1046 18 16 17.1046 16 16V8C16 6.89543 15.1046 6 14 6H13V5C13 2.23858 10.7614 0 8 0ZM5 5V6H11V5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5ZM8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"],["fill","#CCD0E3"],["fill-rule","evenodd"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Change password"])),(l()(),t["\u0275eld"](19,0,null,null,9,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,e,n){var r=!0;return"click"===e&&(r=!1!==t["\u0275nov"](l,22).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&r),r}),null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](21,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](22,671744,null,0,a.n,[a.k,a.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](23,1),(l()(),t["\u0275eld"](24,0,null,null,2,":svg:svg",[["fill","none"],["height","14"],["viewBox","0 0 19 14"],["width","19"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,0,":svg:path",[["d","M0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V4H14C12.3431 4 11 5.34315 11 7C11 8.65685 12.3431 10 14 10H18V12C18 13.1046 17.1046 14 16 14H2C0.89543 14 0 13.1046 0 12V2Z"],["fill","#CCD0E3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M12 7C12 5.89543 12.8954 5 14 5H18C18.5523 5 19 5.44772 19 6V8C19 8.55228 18.5523 9 18 9H14C12.8954 9 12 8.10457 12 7ZM15 7C15 7.55228 14.5523 8 14 8C13.4477 8 13 7.55228 13 7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7Z"],["fill","#CCD0E3"],["fill-rule","evenodd"]],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Billing settings"])),(l()(),t["\u0275eld"](29,0,null,null,7,"a",[["class","menu_item-right-sidebar right-sidebar-todo__item "],["href","#"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,null,4,":svg:svg",[["fill","none"],["height","18"],["viewBox","0 0 18 18"],["width","18"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](31,0,null,null,0,":svg:path",[["d","M2 0C0.895431 0 0 0.89543 0 2V7C0 8.10457 0.89543 9 2 9H7C8.10457 9 9 8.10457 9 7V2C9 0.895431 8.10457 0 7 0H2Z"],["fill","#CCD0E3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](32,0,null,null,0,":svg:path",[["d","M13 3C11.8954 3 11 3.89543 11 5V8C11 9.10457 11.8954 10 13 10H16C17.1046 10 18 9.10457 18 8V5C18 3.89543 17.1046 3 16 3H13Z"],["fill","#CCD0E3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,null,null,0,":svg:path",[["d","M13 11C11.8954 11 11 11.8954 11 13V16C11 17.1046 11.8954 18 13 18H16C17.1046 18 18 17.1046 18 16V13C18 11.8954 17.1046 11 16 11H13Z"],["fill","#CCD0E3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](34,0,null,null,0,":svg:path",[["d","M2 13C2 11.8954 2.89543 11 4 11H7C8.10457 11 9 11.8954 9 13V16C9 17.1046 8.10457 18 7 18H4C2.89543 18 2 17.1046 2 16V13Z"],["fill","#CCD0E3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Portfolio settings"]))],(function(l,e){var n=e.component;l(e,3,0,"",n.router.isActive("/myaccount/general",!0)?"menu_item-right-sidebar right-sidebar-todo__item menu_item-right-sidebar__active":"menu_item-right-sidebar right-sidebar-todo__item");var t=l(e,5,0,"/myaccount/general");l(e,4,0,t),l(e,12,0,"",n.router.isActive("/myaccount/changepassword",!0)?"menu_item-right-sidebar right-sidebar-todo__item menu_item-right-sidebar__active":"menu_item-right-sidebar right-sidebar-todo__item");var r=l(e,14,0,"/myaccount/changepassword");l(e,13,0,r),l(e,21,0,n.router.isActive("/myaccount/billingsetting",!0)?"menu_item-right-sidebar right-sidebar-todo__item menu_item-right-sidebar__active":"menu_item-right-sidebar right-sidebar-todo__item");var a=l(e,23,0,"/myaccount/billingsetting");l(e,22,0,a)}),(function(l,e){l(e,1,0,t["\u0275nov"](e,4).target,t["\u0275nov"](e,4).href),l(e,10,0,t["\u0275nov"](e,13).target,t["\u0275nov"](e,13).href),l(e,19,0,t["\u0275nov"](e,22).target,t["\u0275nov"](e,22).href)}))}},"vM/f":function(l,e,n){"use strict";n.d(e,"a",(function(){return u}));var t=n("IheW"),r=n("WE4D"),a=n("8Y7J");let u=(()=>{class l{constructor(l){this._http=l}createtask(l){let e=localStorage.getItem("Database_Name"),n=(new t.g).set("database",e);return this._http.post(r.a.nodeAPIBaseUrl+"/createtask",l,{params:n})}getalltask(){let l=localStorage.getItem("Database_Name"),e=(new t.g).set("database",l);return this._http.get(r.a.nodeAPIBaseUrl+"/getalltask",{params:e})}updateisdone(l){let e=localStorage.getItem("Database_Name"),n=(new t.g).set("database",e);return this._http.post(r.a.nodeAPIBaseUrl+"/isdonestatus",l,{params:n})}taskstage(l){let e=localStorage.getItem("Database_Name"),n=(new t.g).set("database",e);return this._http.post(r.a.nodeAPIBaseUrl+"/taskstage",l,{params:n})}deletetask(l){let e=localStorage.getItem("Database_Name"),n=(new t.g).set("database",e).set("task_id",l);return this._http.delete(r.a.nodeAPIBaseUrl+"/deletetask",{params:n})}getprojectsallpendingtask(){let l=localStorage.getItem("Database_Name"),e=(new t.g).set("database",l);return this._http.get(r.a.nodeAPIBaseUrl+"/getprojectsallpendingtask",{params:e})}getcurrentmonthtask(){let l=localStorage.getItem("Database_Name"),e=(new t.g).set("database",l),n=this._http.get(r.a.nodeAPIBaseUrl+"/getcurruntmonthtask",{params:e});return console.log("in service=> ",n),n}getcurrentyeartask(){let l=localStorage.getItem("Database_Name"),e=(new t.g).set("database",l),n=this._http.get(r.a.nodeAPIBaseUrl+"/getcurruntyeartask",{params:e});return console.log("in service=> ",n),n}}return l.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new l(a["\u0275\u0275inject"](t.c))},token:l,providedIn:"root"}),l})()}}]);