import './polyfills.server.mjs';
import{a as E}from"./chunk-RCCJDQQ4.mjs";import"./chunk-6KUIGUAD.mjs";import{f as S,i as v,l as A}from"./chunk-M3MBJX2L.mjs";import{$a as b,Aa as g,Fa as C,Ka as w,Rb as h,Ta as m,Va as _,W as d,Wa as n,X as x,Xa as t,Ya as c,Za as y,_a as a,db as i,hb as p,wa as s}from"./chunk-U4FNL7X3.mjs";import"./chunk-X2SEQXRR.mjs";var f=u=>[u];function I(u,l){u&1&&(n(0,"section",6)(1,"p",2),i(2,"\u06A9\u0627\u0631\u062A \u0634\u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u0635\u062F\u0648\u0631 \u0627\u0633\u062A."),t(),n(3,"p",7),i(4,"\u0628\u0647 \u0645\u062D\u0636 \u0622\u0645\u0627\u062F\u0647 \u0634\u062F\u0646 \u06A9\u0627\u0631\u062A \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u067E\u06CC\u0627\u0645\u06A9 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u0634\u0648\u062F"),t()())}function R(u,l){u&1&&(n(0,"section",6)(1,"p",2),i(2,"\u06A9\u0627\u0631\u062A \u0634\u0645\u0627 \u0635\u0627\u062F\u0631 \u0646\u0634\u062F\u0647."),t(),n(3,"p",8),i(4,"\u062B\u0628\u062A \u06A9\u0627\u0631\u062A"),t(),c(5,"app-charging",9),t())}function T(u,l){if(u&1){let o=y();n(0,"section",6)(1,"p",2),i(2,"\u06A9\u0627\u0631\u062A \u0634\u0645\u0627 \u0635\u0627\u062F\u0631 \u0634\u062F\u0647."),t(),n(3,"section",3)(4,"div",10)(5,"p",11),i(6,"VISA"),t(),n(7,"p",12),i(8,"4000 1234 5678 9010"),t(),n(9,"p",13),i(10,"CVV 1234"),t(),n(11,"p",14),i(12,"12/28"),t()(),n(13,"div",15)(14,"button",16),a("click",function(){d(o);let r=b();return x(r.connectToApplePay())}),c(15,"img",17),n(16,"span"),i(17,"Connect to Apple Pay"),t()(),n(18,"button",18),a("click",function(){d(o);let r=b();return x(r.connectToGooglePay())}),c(19,"img",19),n(20,"span"),i(21,"Connect to Google Pay"),t()()(),n(22,"p",20),i(23,"\u0634\u0627\u0631\u0698"),t(),c(24,"app-charging",9),t()()}}var k=(e=>(e[e.Issued=0]="Issued",e[e.Issuing=1]="Issuing",e[e.NotIssued=2]="NotIssued",e))(k||{}),F=class u{constructor(l,o){this.activatedRoute=l;this.router=o}id=null;cardStatus=2;cardStatusEnum=k;ngOnInit(){this.activatedRoute.params.subscribe(l=>{this.id=l.id})}handleSmapleRouting(l){this.router.navigate(["/home/client/"+l])}connectToApplePay(){console.log("Connecting to Apple Pay...")}connectToGooglePay(){console.log("Connecting to Google Pay...")}static \u0275fac=function(o){return new(o||u)(g(S),g(v))};static \u0275cmp=C({type:u,selectors:[["app-client"]],decls:14,vars:10,consts:[[1,"w-full","h-flex","flex-wrap","justify-start","content-start"],[1,"w-full","flex","flex-wrap","justify-center","items-center","mb-4"],[1,"w-full","text-lg","font-semibold","text-center","mb-4"],[1,"w-full","flex","flex-wrap","justify-center","items-center"],[1,"px-6","py-4","text-xs","text-white","hover:bg-blue-800","rounded-xl","ml-2",3,"click","ngClass"],[1,"px-6","py-4","text-xs","text-white","hover:bg-blue-800","rounded-xl",3,"click","ngClass"],[1,"w-full","h-full","flex","flex-wrap","justify-center","items-center"],[1,"w-full","text-sm","text-gray-600","text-center"],[1,"w-full","text-sm","border-b-2","border-b-blue-400","text-blue-600","px-8","py-4","text-center","font-semibold"],[1,"w-full"],[1,"max-w-[400px]","border","border-blue-300","bg-blue-900","w-full","md:w-1/2","lg:w-1/2","xl:w-1/2","2xl:w-1/2","flex","flex-wrap","items-center","shadow-sm","rounded-md","py-8","px-4","mb-4"],[1,"w-full","text-xl","font-semibold","text-white","text-end","mb-8"],[1,"w-full","text-2xl","text-white","text-center","font-bold","mb-4",2,"direction","ltr","word-spacing","15px"],[1,"w-1/2","text-white","font-semibold",2,"word-spacing","15px"],[1,"w-1/2","text-white","font-semibold","text-end",2,"letter-spacing","3px"],[1,"w-full","flex","justify-center","gap-4","mt-4","mb-16"],[1,"bg-gray-500","text-white","py-2","px-6","rounded","hover:bg-gray-800","flex","items-center","gap-2",3,"click"],["src","../../../../assets/logo/apple-pay-logo.svg","alt","Apple Pay",1,"h-6"],[1,"bg-blue-600","text-white","py-2","px-6","rounded","hover:bg-blue-700","flex","items-center","gap-2",3,"click"],["src","../../../../assets/logo/google-play-logo.svg","alt","Google Pay",1,"h-6"],[1,"w-full","max-w-[400px]","text-center","text-xl","border-b-2","border-b-blue-500","font-semibold","text-blue-600","mb-4","pb-4"]],template:function(o,e){o&1&&(n(0,"section",0)(1,"section",1)(2,"p",2),i(3,"\u0648\u0636\u0639\u06CC\u062A \u06A9\u0627\u0631\u062A"),t(),n(4,"div",3)(5,"button",4),a("click",function(){return e.handleSmapleRouting("3")}),i(6,"\u0635\u0627\u062F\u0631 \u0634\u062F\u0647"),t(),n(7,"button",4),a("click",function(){return e.handleSmapleRouting("1")}),i(8,"\u062F\u0631 \u062D\u0627\u0644 \u0635\u062F\u0648\u0631"),t(),n(9,"button",5),a("click",function(){return e.handleSmapleRouting("2")}),i(10,"\u0635\u0627\u062F\u0631 \u0646\u0634\u062F\u0647"),t()()(),w(11,I,5,0,"section",6)(12,R,6,0,"section",6)(13,T,25,0,"section",6),t()),o&2&&(s(5),m("ngClass",p(4,f,e.cardStatus===e.cardStatusEnum.Issued?"bg-gray-500":"bg-blue-700")),s(2),m("ngClass",p(6,f,e.cardStatus===e.cardStatusEnum.Issued?"bg-gray-500":"bg-blue-700")),s(2),m("ngClass",p(8,f,e.cardStatus===e.cardStatusEnum.Issued?"bg-gray-500":"bg-blue-700")),s(2),_(e.id=="1"?11:e.id=="2"?12:e.id==="3"?13:-1))},dependencies:[A,E,h],styles:["[_nghost-%COMP%]{width:100%;height:100%!important}"]})};export{F as ClientComponent};
