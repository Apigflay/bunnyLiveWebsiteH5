(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-signup-signup"],{"30fd":function(t,i,e){"use strict";e.r(i);var n=e("4f69"),a=e("45f2");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("9673");var l=e("2877"),o=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"7b1ff30d",null);i["default"]=o.exports},"45f2":function(t,i,e){"use strict";e.r(i);var n=e("9f46"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},"4f69":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"indexPages"},[n("v-uni-view",{staticClass:"navsArea"},[n("img",{staticClass:"logo",attrs:{src:e("ac5f"),alt:"logo"}}),n("div",{staticClass:"menuLArea"},[n("span",[t._v("Language:")]),0==t.language?n("span",[t._v("VN")]):t._e(),1==t.language?n("span",[t._v("EN")]):t._e(),n("span",{staticClass:"san",on:{click:function(i){i=t.$handleEvent(i),t.chooseLanguage(i)}}}),t.languageBox?n("div",{staticClass:"languageBox"},[n("div",{staticClass:"per",on:{click:function(i){i=t.$handleEvent(i),t.setLanguage(0)}}},[t._v("VN")]),n("div",{staticClass:"per",on:{click:function(i){i=t.$handleEvent(i),t.setLanguage(1)}}},[t._v("EN")])]):t._e()]),n("div",{staticClass:"sinUpBtn",on:{click:function(i){i=t.$handleEvent(i),t.goSignUp(i)}}},[t._v(t._s(t.loginData[t.language]))])]),n("div",{staticClass:"menuWrap"},[n("div",{staticClass:"menuArea"},t._l(t.menuList[t.language],function(i,e){return n("div",{key:e,staticClass:"menuPer",class:"menuPer"+e,on:{click:function(i){i=t.$handleEvent(i),t.goPages(e)}}},[t._v(t._s(i))])}),0)]),n("div",{staticClass:"signArea"},[n("div",{staticClass:"per1 per"},[n("span",{staticClass:"lable"},[t._v("Họ và tên :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{maxlength:"30",placeholder:""},on:{input:function(i){i=t.$handleEvent(i),t.getInputMsg(1)}},model:{value:t.inputName,callback:function(i){t.inputName="string"===typeof i?i.trim():i},expression:"inputName"}})],1),0==t.p1?n("p",{staticClass:"per1 per_p"},[t._v("Vui lòng điền lại")]):t._e(),n("div",{staticClass:"per2 per"},[n("span",{staticClass:"lable"},[t._v("Ngày tháng năm sinh :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{type:"text",value:""},on:{focus:function(i){i=t.$handleEvent(i),t.getBirthday(2)}},model:{value:t.birthPT2,callback:function(i){t.birthPT2=i},expression:"birthPT2"}})],1),n("div",{staticClass:"per3 per"},[n("span",{staticClass:"lable"},[t._v("loại chứng chỉ :")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.input3,expression:"input3"}],staticClass:"lable_input",attrs:{placeholder:""},on:{blur:function(i){i=t.$handleEvent(i),t.getInputMsg(3)},change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.input3=i.target.multiple?e:e[0]}}},[n("option",{attrs:{label:"Thẻ căn cước CMND",value:"Thẻ căn cước CMND"}}),n("option",{attrs:{label:"hộ chiếu",value:"hộ chiếu"}})])]),n("div",{staticClass:"per4 per"},[n("span",{staticClass:"lable"},[t._v("Số:")]),n("v-uni-input",{staticClass:"lable_input",attrs:{placeholder:"",maxlength:"30"},on:{input:function(i){i=t.$handleEvent(i),t.getInputMsg(4)}},model:{value:t.input4,callback:function(i){t.input4="string"===typeof i?i.trim():i},expression:"input4"}})],1),0==t.p4?n("p",{staticClass:"per4 per_p"},[t._v("Vui lòng điền lại")]):t._e(),n("div",{staticClass:"per5 per"},[n("span",{staticClass:"lable"},[t._v("Ngày cấp :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{type:"text",value:""},on:{focus:function(i){i=t.$handleEvent(i),t.getBirthday(5)}},model:{value:t.birthPT5,callback:function(i){t.birthPT5=i},expression:"birthPT5"}})],1),n("div",{staticClass:"per5 per"},[n("span",{staticClass:"lable"},[t._v("Nơi cấp  :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{maxlength:"30",placeholder:""},on:{input:function(i){i=t.$handleEvent(i),t.getInputMsg(6)}},model:{value:t.input6,callback:function(i){t.input6="string"===typeof i?i.trim():i},expression:"input6"}})],1),0==t.p6?n("p",{staticClass:"per5 per_p"},[t._v("Vui lòng điền lại")]):t._e(),n("div",{staticClass:"per5 per"},[n("span",{staticClass:"lable"},[t._v("email :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{placeholder:""},on:{input:function(i){i=t.$handleEvent(i),t.getInputMsg(7,i)}},model:{value:t.input7,callback:function(i){t.input7="string"===typeof i?i.trim():i},expression:"input7"}})],1),0==t.p7?n("p",{staticClass:"per5 per_p"},[t._v("Vui lòng điền lại")]):t._e(),n("div",{staticClass:"per5 per"},[n("span",{staticClass:"lable"},[t._v("Địa chỉ :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{placeholder:""},on:{input:function(i){i=t.$handleEvent(i),t.getInputMsg(8)}},model:{value:t.input8,callback:function(i){t.input8="string"===typeof i?i.trim():i},expression:"input8"}})],1),0==t.p8?n("p",{staticClass:"per5 per_p"},[t._v("Vui lòng điền lại")]):t._e(),n("div",{staticClass:"per5 per"},[n("span",{staticClass:"lable"},[t._v("SĐT :")]),n("v-uni-input",{staticClass:"lable_input",attrs:{maxlength:"10",placeholder:""},on:{input:function(i){i=t.$handleEvent(i),t.getInputMsg(9,i)}},model:{value:t.input9,callback:function(i){t.input9="string"===typeof i?i.trim():i},expression:"input9"}})],1),0==t.p9?n("p",{staticClass:"per5 per_p"},[t._v("Vui lòng điền lại")]):t._e(),n("div",{staticClass:"nextBtn",on:{click:function(i){i=t.$handleEvent(i),t.goNext(i)}}},[t._v("Bước tiếp theo")])]),t.pT_AreaShow?n("v-uni-view",{staticClass:"pT_box"},[n("v-uni-view",{staticClass:"pT_black"}),n("v-uni-view",{staticClass:"pT_sure"},[n("v-uni-text",{staticClass:"textL",on:{click:function(i){i=t.$handleEvent(i),t.goHidePT_Area(i)}}},[t._v("hủy bỏ")]),n("v-uni-text",{staticClass:"textR",on:{click:function(i){i=t.$handleEvent(i),t.goHidePT_Area(i)}}},[t._v("xác nhận")])],1),t.pT_visible?n("v-uni-picker-view",{staticClass:"pT_choose",attrs:{"indicator-style":t.pT_indicatorStyle,value:t.pT_value},on:{change:function(i){i=t.$handleEvent(i),t.bindPT_Change(i)}}},[n("v-uni-picker-view-column",t._l(t.pT_years,function(i,e){return n("v-uni-view",{key:e,staticClass:"item"},[t._v(t._s(i)+"Năm")])}),1),n("v-uni-picker-view-column",t._l(t.pT_months,function(i,e){return n("v-uni-view",{key:e,staticClass:"item"},[t._v(t._s(i)+"Tháng")])}),1),n("v-uni-picker-view-column",t._l(t.pT_days,function(i,e){return n("v-uni-view",{key:e,staticClass:"item"},[t._v(t._s(i)+"Ngày")])}),1)],1):t._e()],1):t._e(),1==t.centerDialogVisible?n("v-uni-view",{staticClass:"beSureWrap"},[n("div",{staticClass:"beSureArea"},[n("div",{staticClass:"dialogDiv"},[t._v("Họ và tên :"+t._s(this.inputName))]),n("div",{staticClass:"dialogDiv"},[t._v("Ngày tháng năm sinh :"+t._s(this.birthPT2))]),n("div",{staticClass:"dialogDiv"},[t._v("loại chứng chỉ :"+t._s(this.input3))]),n("div",{staticClass:"dialogDiv"},[t._v("Số :"+t._s(this.input4))]),n("div",{staticClass:"dialogDiv"},[t._v("Ngày cấp :"+t._s(this.birthPT5))]),n("div",{staticClass:"dialogDiv"},[t._v("Nơi cấp :"+t._s(this.input6))]),n("div",{staticClass:"dialogDiv"},[t._v("email :"+t._s(this.input7))]),n("div",{staticClass:"dialogDiv"},[t._v("Địa chỉ :"+t._s(this.input8))]),n("div",{staticClass:"dialogDiv"},[t._v("SĐT :"+t._s(this.input9))]),n("div",{staticClass:"dialog-footer"},[n("v-uni-button",{staticClass:"btn1",on:{click:function(i){i=t.$handleEvent(i),t.goPageSuccess(1)}}},[t._v("hủy bỏ")]),n("v-uni-button",{staticClass:"btn2",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.goPageSuccess(2)}}},[t._v("xác nhận")])],1)])]):t._e()],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},9673:function(t,i,e){"use strict";var n=e("f4e7"),a=e.n(n);a.a},"985a":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7b1ff30d]{width:%?750?%;height:100%}.indexPages[data-v-7b1ff30d]{width:100%;height:100%}.navsArea[data-v-7b1ff30d]{width:%?750?%;height:%?120?%;background:#1e2557;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.navsArea .logo[data-v-7b1ff30d]{width:%?80?%;height:%?80?%;margin-left:%?30?%;border-radius:%?10?%}.navsArea .menuLArea[data-v-7b1ff30d]{margin-right:%?10?%;background:#fc2c5d;width:%?320?%;height:%?86?%;background:#fc2c5d;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative}.navsArea .menuLArea .san[data-v-7b1ff30d]{width:0;height:0;border-right:10px solid rgba(0,0,0,0);border-left:10px solid rgba(0,0,0,0);border-top:12px solid #fff;margin-left:3px;cursor:pointer}.navsArea .menuLArea .languageBox[data-v-7b1ff30d]{width:33px;height:66px;position:absolute;right:12px;top:43px}.navsArea .menuLArea .languageBox .per[data-v-7b1ff30d]{height:33px;background:#f16c20;line-height:33px;border-radius:2px;border-radius:50%;cursor:pointer}.navsArea .sinUpBtn[data-v-7b1ff30d]{height:%?86?%;background:#fc2c5d;border-radius:%?10?%;line-height:%?86?%;width:%?240?%;text-align:center;margin-right:%?20?%}.menuWrap[data-v-7b1ff30d]{overflow-x:scroll;width:100%;height:%?120?%}.menuWrap .menuArea[data-v-7b1ff30d]{width:%?2000?%;height:%?120?%;background:#1e2557;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#fff}.menuWrap .menuArea .menuPer0[data-v-7b1ff30d]{margin-left:%?10?%}.menuWrap .menuArea .menuPer5[data-v-7b1ff30d]{margin-right:%?10?%}.signArea[data-v-7b1ff30d]{width:%?740?%;padding:%?50?% %?5?% %?50?% %?5?%}.signArea .per[data-v-7b1ff30d]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?80?%;margin-top:%?10?%}.signArea .per .lable[data-v-7b1ff30d]{width:%?350?%;height:%?80?%;text-align:right;font-size:%?30?%;line-height:%?80?%}.signArea .per .lable_input[data-v-7b1ff30d]{width:%?350?%;margin-left:%?20?%;height:%?78?%;border:%?1?% solid purple;border-radius:%?10?%;line-height:%?78?%;text-indent:%?10?%}.signArea .per_p[data-v-7b1ff30d]{height:%?48?%;color:#fe4761;font-size:%?32?%;line-height:%?48?%;text-align:left;text-indent:%?280?%}.signArea .nextBtn[data-v-7b1ff30d]{width:%?600?%;height:%?100?%;background:#fc2c5d;border-radius:%?20?%;margin:auto;margin-top:%?50?%;color:#fff;line-height:%?100?%;text-align:center}.pT_box[data-v-7b1ff30d]{height:100%;width:100%;position:fixed;bottom:0;left:0;z-index:903;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.pT_box .pT_black[data-v-7b1ff30d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;background:#000;opacity:.7}.pT_box .pT_sure[data-v-7b1ff30d]{height:%?80?%;width:100%;position:relative;background:#fff}.pT_box .pT_sure .textR[data-v-7b1ff30d]{line-height:100%;position:absolute;bottom:%?0?%;right:%?60?%;padding:%?5?%;color:#00f}.pT_box .pT_sure .textL[data-v-7b1ff30d]{line-height:100%;position:absolute;bottom:%?0?%;left:%?60?%;padding:%?5?%}.pT_box .pT_choose[data-v-7b1ff30d]{height:%?500?%;width:100%;background:#fff;text-align:center}.beSureWrap[data-v-7b1ff30d]{height:100%;width:100%;position:fixed;bottom:0;left:0;background:rgba(0,0,0,.7)}.beSureWrap .beSureArea[data-v-7b1ff30d]{margin:auto;margin-top:%?200?%;width:%?620?%;background:#fff;opacity:1;border-radius:20px;min-height:%?500?%;padding:%?50?% %?30?%}.beSureWrap .beSureArea .dialogDiv[data-v-7b1ff30d]{line-height:%?60?%;font-size:%?32?%;color:#000}.beSureWrap .beSureArea .dialog-footer[data-v-7b1ff30d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:%?50?%}',""])},"9f46":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){for(var t=this.getDate({format:!0}),i=new Date,e=[],n=i.getFullYear(),a=[],s=i.getMonth()+1,l=[],o=i.getDate(),p=1919;p<=i.getFullYear();p++)e.push(p);for(var r=1;r<=12;r++)a.push(r);for(var u=1;u<=31;u++)l.push(u);return{menuList:[["Trang Chủ","Giới thiệu sản phẩm","","điều khoản sử dụng","Những điều cần biết","Liên lạc chúng tôi"],["Home","Product Introduction ","","Privacy policy","User Agreement","Contact Us"]],swiperData:["../../static/imgs/ele-m-img-01.png","../../static/imgs/ele-m-img-02.png","../../static/imgs/ele-m-img-03.png"],swiperStr:["Vui mỗi ngày ","Have fun everyday"],languageBox:!1,loginData:["Đăng nhập","sign up"],inputName:"",p1:!0,inputBirth:"",p2:!0,input3:"Thẻ căn cước CMND",p3:!0,input4:"",p4:!0,input5:"",p5:!0,input6:"",p6:!0,input7:"",p7:!0,input8:"",p8:!0,input9:"",p9:!0,date:t,pT_years:e,pT_year:n,pT_months:a,pT_month:s,pT_days:l,pT_day:o,pT_value:[9999,s-1,o-1],pT_visible:!0,pT_indicatorStyle:"height: ".concat(Math.round(uni.getSystemInfoSync().screenWidth/7.5),"px;"),pT_AreaShow:!1,birthPT2:"",birthPT5:"",cliId:0,centerDialogVisible:!1}},computed:{language:function(){return this.$store.getters["AllallLanguage"]},startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")},allIs:function(){return""!=this.inputName&&""!=this.birthPT2&&""!=this.input4&&""!=this.birthPT5&&""!=this.input6&&""!=this.input7&&""!=this.input8&&""!=this.input9}},methods:{getDate:function(t){var i=new Date,e=i.getFullYear(),n=i.getMonth()+1,a=i.getDate();return"start"===t?e-=60:"end"===t&&(e=e),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(e,"-").concat(n,"-").concat(a)},chooseLanguage:function(){this.languageBox?this.languageBox=!1:this.languageBox=!0},setLanguage:function(t){this.languageBox=!1,this.$store.dispatch("SET_allLanguage",t)},goDown:function(t){1==t?(window.location.href="https://apps.apple.com/us/app/bunnylive/id1457545201?l=zh&ls=1",rel="external nofollow"):2==t&&(window.location.href="https://play.google.com/store/apps/details?id=com.tiange.bunnylive",rel="external nofollow")},goPages:function(t){switch(console.log(t),t){case 0:uni.navigateTo({url:"/pages/index/index"});break;case 1:uni.navigateTo({url:"/pages/productintroduction/productintroduction"});break;case 2:break;case 3:uni.navigateTo({url:"/pages/privacypolicy/privacypolicy"});break;case 4:uni.navigateTo({url:"/pages/useragressment/useragressment"});break;case 5:uni.navigateTo({url:"/pages/contectus/contectus"});break}},goSignUp:function(){uni.navigateTo({url:"/pages/signup/signup"})},getInputMsg:function(t,i){if(1==t)this.inputName.length>5?this.p1=!0:this.p1=!1;else if(2==t)""==this.inputBirth?this.p2=!1:this.p2=!0;else if(3==t)console.log(this.input3),""==this.input3?this.p3=!1:this.p3=!0;else if(4==t)console.log(this.input4),this.input4.length<12&&this.input4.length>8?this.p4=!0:this.p4=!1;else if(5==t)console.log(""==this.input5),""==this.input5?this.p5=!1:this.p5=!0;else if(6==t)console.log(this.input6),this.input6.length<31&&this.input6.length>6?this.p6=!0:this.p6=!1;else if(7==t){this.input7=i.detail.value,console.log(i.detail.value);var e=new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"),n=e.test(i.detail.value);this.p7=1==n}else 8==t?this.input8.length<31&&this.input8.length>6?this.p8=!0:this.p8=!1:9==t&&(this.input9=i.detail.value,console.log(i.detail.value),i.detail.value.length<10?this.p9=!1:this.p9=!0)},goNext:function(){1==this.p1&&1==this.p4&&1==this.p6&&1==this.p7&&1==this.p8&&1==this.p9&&1==this.allIs?this.centerDialogVisible=!0:uni.showToast({icon:"none",title:"Vui lòng điền lại",duration:2e3})},goHidePT_Area:function(){this.pT_month<10&&(this.pT_month="0"+this.pT_month),this.pT_day<10&&(this.pT_day="0"+this.pT_day),2==this.cliId?this.birthPT2=this.pT_year+"-"+this.pT_month+"-"+this.pT_day:5==this.cliId&&(this.birthPT5=this.pT_year+"-"+this.pT_month+"-"+this.pT_day),1==this.pT_AreaShow&&(this.pT_AreaShow=!1)},bindPT_Change:function(t){console.log(t);var i=t.detail.value;this.pT_year=this.pT_years[i[0]],this.pT_month=this.pT_months[i[1]],4==this.pT_month||6==this.pT_month||9==this.pT_month||11==this.pT_month?31==this.pT_days[i[2]]?this.pT_day=30:this.pT_day=this.pT_days[i[2]]:2==this.pT_month?this.pT_years[i[0]]%4==0&&this.pT_years[i[0]]%100!=0?30==this.pT_days[i[2]]||31==this.pT_days[i[2]]?this.pT_day=29:this.pT_day=this.pT_days[i[2]]:29==this.pT_days[i[2]]||30==this.pT_days[i[2]]||31==this.pT_days[i[2]]?this.pT_day=28:this.pT_day=this.pT_days[i[2]]:this.pT_day=this.pT_days[i[2]]},getBirthday:function(t){console.log(t),this.pT_AreaShow=!0,2==t?this.cliId=2:5==t&&(this.cliId=5)},goPageSuccess:function(t){1==t?this.centerDialogVisible=!1:2==t&&(this.centerDialogVisible=!1,uni.showToast({icon:"none",title:"Thông tin đã điền đầy đủ, vui lòng tải APP để hoàn thành bước cuối cùng",duration:2e3,complete:function(t){uni.navigateTo({url:"/pages/succes/succes"})}}))}}};i.default=n},f4e7:function(t,i,e){var n=e("985a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("777b67e1",n,!0,{sourceMap:!1,shadowMode:!1})}}]);