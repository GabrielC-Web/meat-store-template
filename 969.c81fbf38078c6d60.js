"use strict";(self.webpackChunkmeat_store_template=self.webpackChunkmeat_store_template||[]).push([[969],{969:(Z,m,i)=>{i.r(m),i.d(m,{HomeModule:()=>C});var s=i(6814),l=i(1303),c=i(5854),t=i(5879),p=i(617),d=i(5216),g=i(8396),h=i(3834);function E(o,a){1&o&&t._UZ(0,"cmp-core-product-card",25),2&o&&t.Q6J("data",a.$implicit)}const u=function(o){return{active:o}};function f(o,a){if(1&o&&(t.TgZ(0,"div",22)(1,"div",23),t.YNc(2,E,1,1,"cmp-core-product-card",24),t.qZA()()),2&o){const e=a.$implicit;t.Q6J("ngClass",t.VKq(2,u,0==a.index)),t.xp6(2),t.Q6J("ngForOf",e)}}function R(o,a){if(1&o&&(t.ynx(0,20),t.YNc(1,f,3,4,"div",21),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.popularProducts)}}function O(o,a){if(1&o&&(t.TgZ(0,"div",22)(1,"div",23),t._UZ(2,"cmp-core-product-card",25),t.qZA()()),2&o){const e=a.$implicit;t.Q6J("ngClass",t.VKq(2,u,0==a.index)),t.xp6(2),t.Q6J("data",e)}}function A(o,a){if(1&o&&(t.ynx(0,20),t.YNc(1,O,3,4,"div",21),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.popularProductsSmallScreen)}}function x(o,a){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"img",27),t.TgZ(2,"span",28),t._uU(3),t.qZA()()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("src",e.icon,t.LSH),t.xp6(2),t.Oqu(e.info)}}const T=[{path:"",component:(()=>{class o{onResize(e){window.innerWidth<=992?this.changeListMode():this.popularProductsSmallScreen=[]}constructor(){this.homeImages=c.mv,this.popularProducts=[[{image:c.RB.product1,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product4,name:"MILANESA DE POLLO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product8,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"}],[{image:c.RB.product8,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product1,name:"REDONDO DE TERNERA ENTERO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"},{image:c.RB.product4,name:"MILANESA DE POLLO",price:"OFERTA $4,00",aditionalInfo:"PRECIO POR PIEZA 2,5 KG"}]],this.popularProductsSmallScreen=[],this.items=[{icon:c.ci.corn,info:"Elaborados sin gluten"},{icon:c.ci.house,info:"Empresa familiar desde 1934"},{icon:c.ci.corn,info:"Reparto en veh\xedculo refrigerado"},{icon:c.ci.van,info:"Env\xedo GRATIS Pago seguro"}]}ngOnInit(){window.innerWidth<=992?this.changeListMode():this.popularProductsSmallScreen=[]}nextElement(){const e=this.popularProducts.length-1,n=++this.productSelected;this.selectTemplate(n>e?0:n)}prevElement(){const n=this.productSelected-1;this.selectTemplate(n<0?this.popularProducts.length-1:n)}selectTemplate(e){this.productSelected=e}changeListMode(){this.popularProductsSmallScreen=[],this.popularProducts.forEach(e=>{e.forEach(n=>{this.popularProductsSmallScreen.push(n)})})}static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["pag-home-layout"]],hostBindings:function(n,r){1&n&&t.NdJ("resize",function(S){return r.onResize(S)},!1,t.Jf7)},decls:33,vars:9,consts:[[1,"w-100","d-flex","align-items-center","justify-content-center","home_bg_image",2,"height","600px"],[1,"text-white","cmm-txt-thin-bold","px-3"],[1,"popular_products","d-flex","align-items-center","w-100","p-3",2,"padding-top","6rem !important","padding-bottom","6rem !important"],["carouselId","home_carousel",1,"w-100",3,"customButtons"],["carousel","",4,"ngIf"],["prev","",1,"rounded",2,"background-color","#947676","height","80px","width","60px"],[1,"text-white"],["type","button","next","",1,"rounded",2,"background-color","#947676","height","80px","width","60px"],[1,"w-100","row","mx-auto",2,"max-height","600px","background-color","#FBFCFE"],[1,"col-12","col-md-5","d-flex","flex-column","justify-content-start","align-items-center","px-5","pt-5"],[1,"cmm-txt-thin-bold"],[1,"cmm-txt-thin-bold","mt-5"],[1,"mt-4"],[1,"d-none","col-12","col-md-7","d-md-flex","align-items-start","justify-content-center","p-0"],[1,"w-100",3,"src"],[1,"w-100","row","mx-auto","bg-white","py-5","justify-content-center","align-items-center"],[1,"cmm-txt-thin-bold","text-center","mb-5"],[1,"w-100","home_bg_image",2,"height","200px"],[1,"w-100","row","mx-auto"],["class","col-sm-3 d-flex flex-column align-items-center justify-content-center",4,"ngFor","ngForOf"],["carousel",""],["class","carousel-item h-100 w-100",3,"ngClass",4,"ngFor","ngForOf"],[1,"carousel-item","h-100","w-100",3,"ngClass"],[1,"w-100","h-100","p-0","d-flex","justify-content-center","align-items-center",2,"gap","2rem"],[3,"data",4,"ngFor","ngForOf"],[3,"data"],[1,"col-sm-3","d-flex","flex-column","align-items-center","justify-content-center"],[1,"w-100",2,"max-width","100px",3,"src"],[1,"text-center","cmm-txt-thin-bold",2,"max-width","150px"]],template:function(n,r){1&n&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"CERDO, POLLO, TERNERA... "),t._UZ(3,"br"),t._uU(4," A TU COCINA LLEVAMOS LAS PROTE\xcdNAS "),t._UZ(5,"br"),t._uU(6," CON LA CALIDAD QUE PREFIERAS."),t.qZA()(),t.TgZ(7,"section",2)(8,"cmp-cmm-carousel",3),t.YNc(9,R,2,1,"ng-container",4),t.YNc(10,A,2,1,"ng-container",4),t.TgZ(11,"button",5)(12,"mat-icon",6),t._uU(13,"arrow_back_ios"),t.qZA()(),t.TgZ(14,"button",7)(15,"mat-icon",6),t._uU(16,"arrow_forward_ios"),t.qZA()()()(),t.TgZ(17,"section",8)(18,"div",9)(19,"h3",10),t._uU(20,"HORARIO DE ENTREGAS"),t.qZA(),t.TgZ(21,"p",11),t._uU(22,"ENCUENTRA AQU\xcd TODA LA INFORMACI\xd3N ACERCA DE NUESTROS HORARIOS PARA DELIVERY Y PICK UP"),t.qZA(),t.TgZ(23,"cmp-cmm-new-button",12),t._uU(24,"VER HORARIOS"),t.qZA()(),t.TgZ(25,"div",13),t._UZ(26,"img",14),t.qZA()(),t.TgZ(27,"section",15)(28,"h3",16),t._uU(29,"ENCUENTRA PRODUCTOS ESENCIALES PARA TU PARRILLA"),t.qZA()(),t._UZ(30,"div",17),t.TgZ(31,"div",18),t.YNc(32,x,4,2,"div",19),t.qZA()),2&n&&(t.Udp("background-image","url("+r.homeImages.main+")"),t.xp6(8),t.Q6J("customButtons",!0),t.xp6(1),t.Q6J("ngIf",!r.popularProductsSmallScreen.length),t.xp6(1),t.Q6J("ngIf",r.popularProductsSmallScreen.length),t.xp6(16),t.Q6J("src",r.homeImages.bandejita,t.LSH),t.xp6(4),t.Udp("background-image","url("+r.homeImages.longParallax+")"),t.xp6(2),t.Q6J("ngForOf",r.items))},dependencies:[s.mk,s.sg,s.O5,p.Hw,d.O,g.J,h.u],styles:[".home_bg_image[_ngcontent-%COMP%]{background-position:center}.popular_products[_ngcontent-%COMP%]{background:linear-gradient(90deg,#290302,#5B0506)}"]})}return o})()}];let P=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(T),l.Bz]})}return o})();var I=i(8081),_=i(5481);let C=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[s.ez,_.n,I.I,P]})}return o})()}}]);