"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9308],{9308:(T,d,a)=>{a.r(d),a.d(d,{RegistroPageModule:()=>C});var h=a(6814),g=a(95),e=a(3582),u=a(3912),m=a(5861),t=a(6689),p=a(6466),c=a(4414),f=a(2014);const v=[{path:"",component:(()=>{class n{constructor(o,r,s,l,i,M){this.authService=o,this.navCtrl=r,this.storage=s,this.loadingController=l,this.alertController=i,this.router=M,this.username="",this.password=""}register(){var o=this;return(0,m.Z)(function*(){(yield o.authService.register(o.username,o.password))?(console.log("Usuario registrado correctamente",o.username),o.alerta("Usuario registrado correctamente")):(console.log("Error al registrar el usuario"),o.alerta("Error al registrar el usuario"))})()}alerta(o){var r=this;return(0,m.Z)(function*(){yield(yield r.alertController.create({header:"Alerta",message:o,buttons:[{text:"Aceptar",handler:()=>{r.router.navigate(["/login"])}}]})).present()})()}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(p.e),t.Y36(c.SH),t.Y36(f.K),t.Y36(c.HT),t.Y36(c.Br),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-registro"]],decls:22,vars:2,consts:[[1,"background-image"],["slot","start"],["src","../../assets/logo.png",2,"display","block","margin","0 auto"],["slot","end"],["defaultHref","/"],[2,"padding","10px"],["labelPlacement","floating","value","","name","username","type","text",3,"ngModel","ngModelChange"],["slot","label"],["labelPlacement","floating","value","","name","password","type","text",3,"ngModel","ngModelChange"],["expand","block","color","warning","shape","round","size","default",3,"click"],["slot","start","name","add-circle-outline"]],template:function(r,s){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar"),t._UZ(2,"div",0),t.TgZ(3,"ion-buttons",1),t._UZ(4,"ion-menu-button"),t.qZA(),t._UZ(5,"ion-img",2),t.TgZ(6,"ion-buttons",3),t._UZ(7,"ion-back-button",4),t.qZA()()(),t.TgZ(8,"ion-content"),t._UZ(9,"div",0),t.TgZ(10,"ion-card",5)(11,"ion-item")(12,"ion-input",6),t.NdJ("ngModelChange",function(i){return s.username=i}),t.TgZ(13,"div",7),t._uU(14,"Usuario"),t.qZA()()(),t.TgZ(15,"ion-item")(16,"ion-input",8),t.NdJ("ngModelChange",function(i){return s.password=i}),t.TgZ(17,"div",7),t._uU(18,"Contrase\xf1a"),t.qZA()()(),t.TgZ(19,"ion-button",9),t.NdJ("click",function(){return s.register()}),t._UZ(20,"ion-icon",10),t._uU(21," Registrate "),t.qZA()()()),2&r&&(t.xp6(12),t.Q6J("ngModel",s.username),t.xp6(4),t.Q6J("ngModel",s.password))},dependencies:[g.JJ,g.On,e.YG,e.Sm,e.PM,e.W2,e.Gu,e.gu,e.Xz,e.pK,e.Ie,e.fG,e.sr,e.j9,e.oU],styles:["ion-img[_ngcontent-%COMP%]{width:200px;padding:10px}"]})}return n})()}];let Z=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(v),u.Bz]})}return n})(),C=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[h.ez,g.u5,e.Pc,Z]})}return n})()}}]);