(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,8],{211:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("7bc6a032",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";var r=n(211);n.n(r).a},215:function(t,e,n){(e=n(47)(!1)).push([t.i,".addBorder[data-v-1196d1aa]{border:5px solid #de1616}",""]),t.exports=e},217:function(t,e,n){"use strict";n.r(e),e.default={created:function(){console.log("border mixin")},data:function(){return{isHidden:!1,myVal:!0}},methods:{toggleShowHide:function(){this.isHidden=!this.isHidden},myMethod:function(){document.getElementById("noBorder").classList.toggle("addBorder"),console.log("remove border button")}}}},218:function(t,e,n){"use strict";n.r(e);var r={name:"photos",props:{image:[Object,String],required:!0,default:function(){return{}}}},o=(n(214),n(30)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"addBorder frame card-img-top img-fluid rounded",staticStyle:{width:"100%"},attrs:{src:this.image.src,alt:this.image.alt,id:"noBorder"}}),this._v(" "),e("div",{staticClass:"caption"},[e("p",[this._v(this._s(this.image.caption))])])])}),[],!1,null,"1196d1aa",null);e.default=component.exports},220:function(t,e,n){t.exports=n.p+"img/b46d898.jpg"},221:function(t,e,n){t.exports=n.p+"img/16d5e6d.jpg"},222:function(t,e,n){t.exports=n.p+"img/1c8d504.jpg"},227:function(t,e,n){"use strict";n.r(e);var r=n(217),o=n(218),c=n(220),d=n(221),l=n(222),m={name:"Images",mixins:[r.default],components:{photos:o.default},data:function(){return{link:"/schedule",images:[{src:c,alt:"a woman installing a car seat into a car",caption:"CSK will teach you how to install your car seat"},{src:d,alt:"a baby smiling at the camera while in a car seat",caption:"CSK can assist families with babies, expectant parents, and others, including grandparents and nannies"},{src:l,alt:"a man installing a baby into a car seat",caption:"CSK technicians will ensure your car seat harness is used properly"}],title:"Images from Car Safe Kids"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Images of Car Safe Kids technicians helping to install car seats"}]}}},f=n(30),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"alert alert-warning"},[t._v("To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.")]),t._v(" "),t.images?n("div",{staticClass:"text-center"},[t.myVal?n("button",{staticClass:"btn btn-info",on:{click:function(e){return t.myMethod()}}},[t._v("\r\n     Click to remove border\r\n   ")]):t._e()]):t._e(),t._v(" "),t.images?n("div",{staticClass:"container"},t._l(t.images,(function(t){return n("photos",{key:t.src,attrs:{image:t}})})),1):t._e()])}),[],!1,null,"7bdcefb6",null);e.default=component.exports}}]);