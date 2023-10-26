"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[133],{133:(C,p,u)=>{u.r(p),u.d(p,{ProductEditPageModule:()=>Z});var m=u(6814),a=u(95),e=u(7027),c=u(3912),g=u(5861),o=u(6689),h=u(4616);const P=[{path:"",component:(()=>{var r;class l{constructor(i,t,d,n,b,M){this.restApi=i,this.loadingController=t,this.alertController=d,this.route=n,this.router=b,this.formBuilder=M,this.producto={id:1,nombre:"",descripcion:"",precio:0,fecha:new Date,cantidad:0},this.id=""}ngOnInit(){console.log("ngOnInit ID:"+this.route.snapshot.params.id),this.getProduct(this.route.snapshot.params.id),this.productForm=this.formBuilder.group({prod_name:[null,a.kI.required],prod_desc:[null,a.kI.required],prod_price:[null,a.kI.required],prod_cantidad:[null,a.kI.required]})}onFormSubmit(i){var t=this;return(0,g.Z)(function*(){console.log("onFormSubmit ID:"+t.id),t.producto.id=t.id,yield t.restApi.updateProduct(t.id,t.producto).subscribe({next:d=>{t.router.navigate(["/product-detail/"+t.id])},complete:()=>{},error:d=>{console.log(d)}})})()}getProduct(i){var t=this;return(0,g.Z)(function*(){const d=yield t.loadingController.create({message:"Loading..."});yield d.present(),yield t.restApi.getProduct(i+"").subscribe({next:n=>{console.log("getProductID data****"),console.log(n),t.id=n.id,t.productForm.setValue({prod_name:n.nombre,prod_desc:n.descripcion,prod_price:n.precio,prod_cantidad:n.cantidad}),d.dismiss()},complete:()=>{},error:n=>{console.log("getProductID Errr****+"),console.log(n),d.dismiss()}})})()}presentAlertConfirm(i){var t=this;return(0,g.Z)(function*(){yield(yield t.alertController.create({header:"Warning!",message:i,buttons:[{text:"Okay",handler:()=>{t.router.navigate(["/product-list/"])}}]})).present()})()}}return(r=l).\u0275fac=function(i){return new(i||r)(o.Y36(h.I),o.Y36(e.HT),o.Y36(e.Br),o.Y36(c.gz),o.Y36(c.F0),o.Y36(a.qu))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-product-edit"]],decls:25,vars:6,consts:[[3,"translucent"],["slot","start"],["src","../../assets/logo.png"],["slot","end"],["defaultHref","/"],["padding",""],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","prod_name",3,"ngModel","ngModelChange"],["position","stacked"],["formControlName","prod_desc",3,"ngModel","ngModelChange"],["type","number","formControlName","prod_cantidad",3,"ngModel","ngModelChange"],["type","submit","shape","round","color","primary","expand","block",3,"disabled"]],template:function(i,t){1&i&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o._UZ(3,"ion-menu-button"),o.qZA(),o._UZ(4,"ion-img",2),o.TgZ(5,"ion-title"),o._uU(6,"Editar Memorial"),o.qZA(),o.TgZ(7,"ion-buttons",3),o._UZ(8,"ion-back-button",4),o.qZA()()(),o.TgZ(9,"ion-content",5)(10,"form",6),o.NdJ("ngSubmit",function(){return t.onFormSubmit(t.productForm.value)}),o.TgZ(11,"ion-item")(12,"ion-label",7),o._uU(13,"Nombre Memorial"),o.qZA(),o.TgZ(14,"ion-input",8),o.NdJ("ngModelChange",function(n){return t.producto.nombre=n}),o.qZA()(),o.TgZ(15,"ion-item")(16,"ion-label",9),o._uU(17,"Descripci\xf3n"),o.qZA(),o.TgZ(18,"ion-textarea",10),o.NdJ("ngModelChange",function(n){return t.producto.descripcion=n}),o.qZA()(),o.TgZ(19,"ion-item")(20,"ion-label",7),o._uU(21,"Cantidad"),o.qZA(),o.TgZ(22,"ion-input",11),o.NdJ("ngModelChange",function(n){return t.producto.cantidad=n}),o.qZA()(),o.TgZ(23,"ion-button",12),o._uU(24,"Editar Memorial"),o.qZA()()()),2&i&&(o.Q6J("translucent",!0),o.xp6(10),o.Q6J("formGroup",t.productForm),o.xp6(4),o.Q6J("ngModel",t.producto.nombre),o.xp6(4),o.Q6J("ngModel",t.producto.descripcion),o.xp6(4),o.Q6J("ngModel",t.producto.cantidad),o.xp6(1),o.Q6J("disabled",!t.productForm.valid))},dependencies:[a._Y,a.JJ,a.JL,e.oU,e.YG,e.Sm,e.W2,e.Gu,e.Xz,e.pK,e.Ie,e.Q$,e.fG,e.g2,e.wd,e.sr,e.as,e.j9,e.cs,a.sg,a.u]}),l})()}];let f=(()=>{var r;class l{}return(r=l).\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[c.Bz.forChild(P),c.Bz]}),l})(),Z=(()=>{var r;class l{}return(r=l).\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[m.ez,a.u5,e.Pc,a.UX,f]}),l})()}}]);