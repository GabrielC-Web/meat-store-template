"use strict";(self.webpackChunkmeat_store_template=self.webpackChunkmeat_store_template||[]).push([[908],{908:(b,m,a)=>{a.r(m),a.d(m,{HomeModule:()=>C});var s=a(6814),l=a(1303),c=a(5854),t=a(5879),u=a(617),p=a(2296);const g=["*"];let h=(()=>{class e{constructor(){this.outlined=!1}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-new-button"]],inputs:{outlined:"outlined"},ngContentSelectors:g,decls:2,vars:1,consts:[["mat-button","",1,"rounded","w-fit","p-3","fs-12","cmm-txt-thin-bold","text-white",2,"min-width","200px","height","45px",3,"ngClass"]],template:function(o,i){1&o&&(t.F$t(),t.TgZ(0,"button",0),t.Hsn(1),t.qZA()),2&o&&t.Q6J("ngClass",i.outlined?"btn-project-primary-outline":"cmm-bg-project-primary")},dependencies:[p.lW,s.mk]})}return e})(),f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-core-product-card"]],inputs:{data:"data"},decls:11,vars:4,consts:[[1,"d-flex","justify-content-center","flex-column","align-items-center","p-3",2,"background-color","#947676","max-width","100%","border-radius","30px","max-width","250px"],[1,"w-100",2,"max-width","250px",3,"src"],[1,"text-white","text-center","cmm-txt-thin-bold"],[1,"text-white","cmm-txt-thin-bold"],[1,"text-white","fs-10","cmm-txt-thin-bold","mt-2"],[1,"d-flex","mt-3"],[1,"cmm-txt-thin-bold","fs-20"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"h5",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA(),t.TgZ(6,"span",4),t._uU(7),t.qZA(),t.TgZ(8,"div",5)(9,"cmp-cmm-new-button",6),t._uU(10,"A\xf1adir"),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("src",i.data.image,t.LSH),t.xp6(2),t.Oqu(i.data.name),t.xp6(2),t.Oqu(i.data.price),t.xp6(2),t.Oqu(i.data.aditionalInfo))},dependencies:[h]})}return e})();function E(e,r){1&e&&t._UZ(0,"cmp-core-product-card",15),2&e&&t.Q6J("data",r.$implicit)}const O=function(e){return{active:e}};function R(e,r){if(1&e&&(t.TgZ(0,"div",12)(1,"div",13),t.YNc(2,E,1,1,"cmp-core-product-card",14),t.qZA()()),2&e){const n=r.$implicit;t.Q6J("ngClass",t.VKq(2,O,0==r.index)),t.xp6(2),t.Q6J("ngForOf",n)}}const A=[{path:"",component:(()=>{class e{constructor(){this.homeImages=c.mv,this.popularProducts=[[{image:c.RB.product1,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product4,name:"MILANESA DE POLLO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product8,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"}],[{image:c.RB.product8,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product1,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product4,name:"MILANESA DE POLLO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"}]]}nextElement(){const n=this.popularProducts.length-1,o=++this.productSelected;this.selectTemplate(o>n?0:o)}prevElement(){const o=this.productSelected-1;this.selectTemplate(o<0?this.popularProducts.length-1:o)}selectTemplate(n){this.productSelected=n}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-home-layout"]],decls:20,vars:3,consts:[[1,"w-100","d-flex","align-items-center","justify-content-center","home_bg_image",2,"height","600px"],[1,"text-white","cmm-txt-thin-bold","px-3"],[1,"popular_products","d-flex","align-items-center","w-100","p-3",2,"padding-top","6rem !important","padding-bottom","6rem !important"],["id","carousel","data-bs-touch","false","data-bs-pause","true",1,"container","carousel","carousel-dark","slide","d-flex","align-items-center","w-100",2,"max-width","100%"],[1,"carousel-inner","h-100","w-100"],["class","carousel-item h-100 w-100",3,"ngClass",4,"ngFor","ngForOf"],["data-bs-target","#carousel","data-bs-slide","prev",1,"d-flex","align-items-center","carousel-control-prev","border-0"],[1,"rounded",2,"background-color","#947676","height","80px","width","60px",3,"click"],[1,"text-white"],["data-bs-target","#carousel","data-bs-slide","next",1,"d-flex","align-items-center","carousel-control-next","border-0"],["type","button",1,"rounded",2,"background-color","#947676","height","80px","width","60px",3,"click"],[1,"w-100"],[1,"carousel-item","h-100","w-100",3,"ngClass"],[1,"w-100","h-100","p-0","d-flex","justify-content-center","align-items-center",2,"gap","2rem"],[3,"data",4,"ngFor","ngForOf"],[3,"data"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"CERDO, POLLO, TERNERA... "),t._UZ(3,"br"),t._uU(4," A TU COCINA LLEVAMOS LAS PROTE\xcdNAS "),t._UZ(5,"br"),t._uU(6," CON LA CALIDAD QUE PREFIERAS."),t.qZA()(),t.TgZ(7,"section",2)(8,"div",3)(9,"div",4),t.YNc(10,R,3,4,"div",5),t.qZA(),t.TgZ(11,"div",6)(12,"button",7),t.NdJ("click",function(){return i.prevElement()}),t.TgZ(13,"mat-icon",8),t._uU(14,"arrow_back_ios"),t.qZA()()(),t.TgZ(15,"div",9)(16,"button",10),t.NdJ("click",function(){return i.nextElement()}),t.TgZ(17,"mat-icon",8),t._uU(18,"arrow_forward_ios"),t.qZA()()()()(),t._UZ(19,"section",11)),2&o&&(t.Udp("background-image","url("+i.homeImages.main+")"),t.xp6(10),t.Q6J("ngForOf",i.popularProducts))},dependencies:[s.mk,s.sg,u.Hw,f],styles:[".home_bg_image[_ngcontent-%COMP%]{background-position:center}.popular_products[_ngcontent-%COMP%]{background:linear-gradient(90deg,#290302,#5B0506)}"]})}return e})()}];let x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]})}return e})();var d=a(5481);let T=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[s.ez,d.n]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[s.ez,d.n,T,x]})}return e})()}}]);