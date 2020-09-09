<template>
	<view class="indexPages">
		<!-- nav -->
		<view class="navsArea">
			<img class="logo" src="../../static/imgs/logo.jpg" alt="logo">
			<div class="menuLArea">
			    <span>Language:</span>
			    <span v-if="language==0">VN</span>
			    <span v-if="language==1">EN</span>
			    <span class="san" @click="chooseLanguage"></span>
			    <div class="languageBox" v-if="languageBox">
			        <div class="per" @click="setLanguage(0)">VN</div>
			        <div class="per" @click="setLanguage(1)">EN</div>
			    </div>
			</div>
			<div class="sinUpBtn" @click="goSignUp">{{loginData[language]}}</div>
		</view>
		<!-- menu -->
		<div class="menuWrap">
			<div class="menuArea">
			      <div class="menuPer" :class="'menuPer'+index" @click="goPages(index)" v-for="(item,index) in menuList[language]" :key="index">{{item}}</div>   
			 </div>
		</div>
		<!-- sign up -->
		<div class="signArea">
			<!-- 1 姓名 -->
			<div class="per1 per">
				<span class="lable">Họ và tên :</span>
				<input class="lable_input" v-model.trim="inputName" maxlength='30' placeholder="" @input="getInputMsg(1)"></input>
			</div>
			<p class="per1 per_p" v-if="p1==false">Vui lòng điền lại</p>
			<!-- 2 生日-->
			<div class="per2 per">
				<span class="lable">Ngày tháng năm sinh :</span>
				<!-- <picker class="lable_input" mode="date" :value="date" start="1900-01-01" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker> -->
				<input class="lable_input" type="text" v-model="birthPT2" value="" @focus='getBirthday(2)'/>
			</div>
			<!-- <p class="per2 per_p" v-if="p2==false">Vui lòng điền lại</p> -->
			<!-- 3 证件类型-->
			<div class="per3 per">
				<span class="lable">loại chứng chỉ :</span>
				<select class="lable_input" v-model="input3" placeholder=""  @blur="getInputMsg(3)">
					<option label="Thẻ căn cước CMND" value="Thẻ căn cước CMND"></option>
					<option label="hộ chiếu" value="hộ chiếu"></option>
				</select>
			</div>
			<!-- <p class="per3 per_p" v-if="p3==false">Thông tin tên quá dài! Vui lòng điền lại</p> -->
			<!-- 4 证件号-->
			<div class="per4 per">
				<span class="lable">Số:</span>
				<input class="lable_input" v-model.trim="input4" placeholder="" maxlength='30' @input="getInputMsg(4)"></input>
			</div>
			<p class="per4 per_p" v-if="p4==false">Vui lòng điền lại</p>
			<!-- 5 签发日期-->
			<div class="per5 per">
				<span class="lable">Ngày cấp :</span>
				<!-- <picker class="lable_input" mode="date" :value="date" start="1900-01-01" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker> -->
				<input class="lable_input" type="text" v-model="birthPT5" value="" @focus='getBirthday(5)'/>
			</div>
			<!-- <p class="per5 per_p" v-if="p5==false">Vui lòng điền lại</p> -->
			<!-- 6 签发地-->
			<div class="per5 per">
				<span class="lable">Nơi cấp  :</span>
				<input class="lable_input" v-model.trim="input6" maxlength='30' placeholder="" @input="getInputMsg(6)"></input>
			</div>
			<p class="per5 per_p" v-if="p6==false">Vui lòng điền lại</p>
			<!-- 7 email-->
			<div class="per5 per">
				<span class="lable">email :</span>
				<input class="lable_input" v-model.trim="input7" placeholder="" @input="getInputMsg(7,$event)"></input>
			</div>
			<p class="per5 per_p" v-if="p7==false">Vui lòng điền lại</p>
			<!-- 8 地址-->
			<div class="per5 per">
				<span class="lable">Địa chỉ :</span>
				<input class="lable_input" v-model.trim="input8" placeholder="" @input="getInputMsg(8)"></input>
			</div>
			<p class="per5 per_p" v-if="p8==false">Vui lòng điền lại</p>
			<!-- 9 电话-->
			<div class="per5 per">
				<span class="lable">SĐT :</span>
				<input class="lable_input" maxlength='10' v-model.trim="input9" placeholder="" @input="getInputMsg(9,$event)"></input>
			</div>
			<p class="per5 per_p" v-if="p9==false">Vui lòng điền lại</p>
			<!-- 10 -->
			<div class="nextBtn" @click="goNext">Bước tiếp theo</div>
		</div>
		<!-- 选择生日弹框 -->
		<view class="pT_box" v-if="pT_AreaShow">
			<!-- <view class="uni-padding-wrap">
				<view class="uni-title">เดท：{{pT_year}}ปี{{pT_month}}ดวงจันทร์{{pT_day}}วันอาทิตย์</view>   
			</view> -->
			<view class="pT_black">
				
			</view>
			<view class="pT_sure">
				<text class="textL" @click="goHidePT_Area">hủy bỏ</text>
				<text class="textR" @click="goHidePT_Area">xác nhận</text>
			</view>
			<picker-view class="pT_choose" v-if="pT_visible" :indicator-style="pT_indicatorStyle" :value="pT_value" @change="bindPT_Change">
				
				
				<picker-view-column>
					<view class="item" v-for="(item,index) in pT_years" :key="index">{{item}}Năm</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in pT_months" :key="index">{{item}}Tháng</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in pT_days" :key="index">{{item}}Ngày</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 选择生日弹框 -->
		<view class="beSureWrap" v-if="centerDialogVisible==true">
			<div class="beSureArea">
				<div class="dialogDiv">
				    Họ và tên :{{this.inputName}}
				</div>
				<div class="dialogDiv">
				    Ngày tháng năm sinh :{{this.birthPT2}}
				</div>
				<div class="dialogDiv">
				    loại chứng chỉ :{{this.input3}}
				</div>
				<div class="dialogDiv">
				    Số :{{this.input4}}
				</div>
				<div class="dialogDiv">
				    Ngày cấp :{{this.birthPT5}}
				</div>
				<div class="dialogDiv">
				    Nơi cấp :{{this.input6}}
				</div>
				<div class="dialogDiv">
				    email :{{this.input7}}
				</div>
				<div class="dialogDiv">
				    Địa chỉ :{{this.input8}}
				</div>
				<div class="dialogDiv">
				    SĐT :{{this.input9}}
				</div>
				 <div class="dialog-footer">
				    <button class="btn1" @click="goPageSuccess(1)">hủy bỏ</button>
				    <button class="btn2" type="primary" @click="goPageSuccess(2)">xác nhận</button>
				</div>
			</div>
           
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			const pT_date = new Date()
			const pT_years = []
			const pT_year = pT_date.getFullYear()
			const pT_months = []
			const pT_month = pT_date.getMonth() + 1
			const pT_days = []
			const pT_day = pT_date.getDate()
			for (let i = 1919; i <= pT_date.getFullYear(); i++) {
				pT_years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				pT_months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				pT_days.push(i)
			}
			return {
				menuList:[['Trang Chủ','Giới thiệu sản phẩm','','điều khoản sử dụng','Những điều cần biết','Liên lạc chúng tôi'],
				['Home','Product Introduction ','','Privacy policy','User Agreement','Contact Us']
				],
				swiperData:['../../static/imgs/ele-m-img-01.png','../../static/imgs/ele-m-img-02.png','../../static/imgs/ele-m-img-03.png'],
				swiperStr:['Vui mỗi ngày ','Have fun everyday'],
				languageBox:false,
				loginData:['Đăng nhập','sign up'],
				inputName:'',//name 
				p1:true,//false  错误  true 不显示
				inputBirth:'',//生日
				p2:true,//false  错误  true 不显示
				input3:'Thẻ căn cước CMND',//证件类型
				p3:true,//false  错误  true 不显示
				input4:'',//证件号
				p4:true,//false  错误  true 不显示
				input5:'',//签发日期
				p5:true,//false  错误  true 不显示
				input6:'',//签发地
				p6:true,//false  错误  true 不显示
				input7:'',//Email
				p7:true,//false  错误  true 不显示
				input8:'',//地址
				p8:true,//false  错误  true 不显示
				input9:'',//电话
				p9:true,//false  错误  true 不显示
				date: currentDate,
				// ----
				pT_years,
				pT_year,
				pT_months,
				pT_month,
				pT_days,
				pT_day,
				pT_value: [9999, pT_month - 1, pT_day - 1],
				pT_visible: true,
				pT_indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				pT_AreaShow:false,//选择生日显示隐藏
				birthPT2:'',//taiguo生日
				birthPT5:'',//taiguo生日
				cliId:0,//moren  0  2 为第二个点击  5 为
				centerDialogVisible:false,
			};
		},
		 computed:{
			language(){
			  return this.$store.getters['AllallLanguage']
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			allIs(){
				return this.inputName!=''&&this.birthPT2!=''&&this.input4!=''&&this.birthPT5!=''&&this.input6!=''&&this.input7!=''&&this.input8!=''&&this.input9!='';
			}
		},
		methods:{
			// bindDateChange: function(e) {
			// 	console.log(e.target.value)
			// 	this.date = e.target.value
			// },
			getDate(type) {//
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			chooseLanguage:function(){
				if(this.languageBox){
					this.languageBox=false;
				}else{
					this.languageBox=true;
				}
			},
			setLanguage:function(id){
				this.languageBox=false;
				this.$store.dispatch('SET_allLanguage',id)
			},
			goDown:function(id){
				if(id==1){
				   window.location.href ="https://apps.apple.com/us/app/bunnylive/id1457545201?l=zh&ls=1"; rel="external nofollow";
				}else if(id==2){
					window.location.href ="https://play.google.com/store/apps/details?id=com.tiange.bunnylive"; rel="external nofollow";
				}
			},
			goPages:function(pageId){
				  console.log(pageId)
				  switch(pageId){
					case 0:
					    uni.navigateTo({
					    	url: '/pages/index/index'
					    });
					    break;
					case 1:
						uni.navigateTo({
							url: '/pages/productintroduction/productintroduction'
						});
					  break;
					case 2:
					   // window.location.href ="http://pay.buny.vn/"; rel="external nofollow";
					  break;
					case 3:
					 uni.navigateTo({
					 	url: '/pages/privacypolicy/privacypolicy'
					 });
					  break;
					case 4:
						uni.navigateTo({
							url: '/pages/useragressment/useragressment'
						});
					  break;
					case 5:
						uni.navigateTo({
							url: '/pages/contectus/contectus'
						});
					  break;
				}
			},
			goSignUp:function(){
				uni.navigateTo({
					url: '/pages/signup/signup'
				});
			},
			getInputMsg:function(id,event){
				
				if(id==1){
					if(this.inputName.length>5){
						this.p1=true;
					}else{
						this.p1=false;
					}
				}else if(id==2){
					 if(this.inputBirth==''){
						this.p2=false;
					}else{
						this.p2=true;
					}
				}else if(id==3){
					console.log(this.input3)
					if(this.input3==''){
						this.p3=false;
					}else{
						this.p3=true;
					}
				}else if(id==4){
					console.log(this.input4)
					if(this.input4.length<12&&this.input4.length>8){
						this.p4=true;
					}else{
						this.p4=false;
					}
				}
				else if(id==5){
					console.log(this.input5=='')
					if(this.input5==''){
						this.p5=false;
					}else{
						this.p5=true;
					}
				}
				else if(id==6){
					console.log(this.input6)
					if(this.input6.length<31&&this.input6.length>6){
						this.p6=true;
					}else{
						this.p6=false;
					}
				}
				else if(id==7){
					this.input7=event.detail.value;
					// console.log(this.input7)
					console.log(event.detail.value)
					var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
					var test =reg.test(event.detail.value);
					if(test==true){
						this.p7=true;
					}else{
						this.p7=false;
					}
				}
				else if(id==8){
					if(this.input8.length<31&&this.input8.length>6){
						this.p8=true;
					}else{
						this.p8=false;
					}
				}
				else if(id==9){
					this.input9=event.detail.value;
					// console.log(this.input9)
					console.log(event.detail.value)
					if(event.detail.value.length<10){
						this.p9=false;
					}else{
						this.p9=true;
					}
				}
			},
			goNext:function(){
				// console.log(this.birthPT2)
				// console.log(this.birthPT5)
				// console.log(this.allIs)
				// console.log(this.inputName,'----------1')
				// console.log(this.birthPT2,'----------2')
				// console.log(this.input3,'----------3')
				// console.log(this.input4,'----------4')
				// console.log(this.birthPT5,'----------5')
				// console.log(this.input6,'----------6')
				// console.log(this.input7,'----------7')
				// console.log(this.input8,'----------8')
		
				
				
				if(this.p1==true&&this.p4==true&&this.p6==true&&this.p7==true&&this.p8==true&&this.p9==true&&this.allIs==true){
					this.centerDialogVisible=true;
					// uni.showToast({
					// 	icon:'none',
					// 	title: 'Thông tin đã điền đầy đủ, vui lòng tải APP để hoàn thành bước cuối cùng',
					// 	duration: 2000,
					// 	complete(com){
					// 		uni.navigateTo({
					// 			url: '/pages/succes/succes'
					// 		});
					// 	}
					// });
				}else{
					uni.showToast({
						icon:'none',
						title: 'Vui lòng điền lại',
						duration: 2000
					});
				}
				
			},
			goHidePT_Area:function(){//隐藏选择日期弹框
				if(this.pT_month<10){
					this.pT_month='0'+this.pT_month;
				}
				if(this.pT_day<10){
					this.pT_day='0'+this.pT_day;
				}
				
				if(this.cliId==2){
					this.birthPT2=this.pT_year+'-'+this.pT_month+'-'+this.pT_day;
				}else if(this.cliId==5){
					this.birthPT5=this.pT_year+'-'+this.pT_month+'-'+this.pT_day;
				}
				if(this.pT_AreaShow==true){
					this.pT_AreaShow=false;
				}
				// var year =this.pT_year+18;
				// var now = new Date().getFullYear();
				// console.log(now)
				// console.log(year)
				// if(now>year){
				// 	this.red = false;
				// }else{
				// 	this.red = true;
				// }
			},
			bindPT_Change: function (e) {//年月日处理
				console.log(e)
				const val = e.detail.value
				this.pT_year = this.pT_years[val[0]]
				this.pT_month = this.pT_months[val[1]]
				if(this.pT_month==4||this.pT_month==6||this.pT_month==9||this.pT_month==11){//4 6 9 11 月
					if(this.pT_days[val[2]]==31){
						this.pT_day = 30
					}else{
						this.pT_day = this.pT_days[val[2]]
					}
				}else if(this.pT_month==2){//2月单独处理
					if(this.pT_years[val[0]]%4==0&&this.pT_years[val[0]]%100!=0){//闰年
						if(this.pT_days[val[2]]==30||this.pT_days[val[2]]==31){
							this.pT_day = 29
						}else{
							this.pT_day = this.pT_days[val[2]]
						}
					}else{//不是闰年
						if(this.pT_days[val[2]]==29||this.pT_days[val[2]]==30||this.pT_days[val[2]]==31){
							this.pT_day = 28
						}else{
							this.pT_day = this.pT_days[val[2]]
						}
					}
				}else{// 1 3 5 7 8 10 12月
					this.pT_day = this.pT_days[val[2]]
				}
				
			},
			getBirthday:function(id){
				console.log(id)
				this.pT_AreaShow=true;
				if(id==2){
					this.cliId=2;
				}else if(id==5){
					this.cliId=5;
				}
			},
			goPageSuccess:function(id){
				if(id==1){
					this.centerDialogVisible=false;
				}else if(id==2){
					this.centerDialogVisible=false;
					uni.showToast({
						icon:'none',
						title: 'Thông tin đã điền đầy đủ, vui lòng tải APP để hoàn thành bước cuối cùng',
						duration: 2000,
						complete(com){
							uni.navigateTo({
								url: '/pages/succes/succes'
							});
						}
					});
				}
			}
		},
	}
</script>

<style lang="scss">
page{
	width: 750rpx;
	height: 100%;
}
.indexPages{
	width: 100%;
	height: 100%;
	// display: flex;
	// flex-direction: column;
}
.navsArea{
	width: 750rpx;
	height: 120rpx;
	background: #1e2557;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.logo{
		width: 80rpx;
		height: 80rpx;
		margin-left: 30rpx;
		border-radius: 10rpx;
	}
	.menuLArea{
		margin-right: 10rpx;
		  background: #fc2c5d;
          width: 320rpx;
          height: 86rpx;
          background: #fc2c5d;
          border-radius: 10rpx;
          display:flex;
          align-items: center;
          justify-content: center;
          position: relative;
          .san{
            width:0;
            height:0;
            border-right:10px solid transparent;
            border-left:10px solid transparent;
            border-top:12px solid #fff;
            margin-left: 3px;
            cursor: pointer;
          }
          .languageBox{
              width: 33px;
              height: 66px;
              
              position: absolute;
              right: 12px;
              top: 43px;
              .per{
                  height: 33px;;
                  background: #f16c20;
                  line-height: 33px;
                  border-radius:2px;
                  border-radius: 50%;
                  cursor: pointer;
              }
              
          }
      }
	  .sinUpBtn{
		   height: 86rpx;
		  background: #fc2c5d;
		  border-radius: 10rpx;
		  line-height: 86rpx;
		  width: 240rpx;
		  text-align: center;
		  margin-right: 20rpx;
	  }
}
.menuWrap{
	overflow-x:scroll;
	width: 100%;
	height: 120rpx;
	.menuArea{
		width: 2000rpx;
		height: 120rpx;
		background: #1e2557;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color:#fff;
		.menuPer0{
			// color:#fc2c5d;
			margin-left: 10rpx;
		}
		.menuPer5{
			margin-right: 10rpx;
		}
	}
}
.signArea{
	width: 740rpx;
	padding: 50rpx 5rpx 50rpx 5rpx;
	.per{
		width: 100%;
		display: flex;
		align-items: center;
		height: 80rpx;
		margin-top: 10rpx;
		.lable{
			width: 350rpx;
			height: 80rpx;
			text-align: right;
			font-size: 30rpx;
			line-height: 80rpx;
			// margin-right: 30rpx;
		}
		.lable_input{
			width: 350rpx;
			margin-left: 20rpx;
			height: 78rpx;
			border: 1rpx solid purple;
			border-radius: 10rpx;
			line-height: 78rpx;
			text-indent: 10rpx;
		}
	}
	.per_p{
		height: 48rpx;
		color: #fe4761;
		font-size: 32rpx;
		line-height: 48rpx;
		text-align: left;
		text-indent: 280rpx;
	}
        .nextBtn{
            width: 600rpx;
            height: 100rpx;
            background: #fc2c5d;
            border-radius: 20rpx;
            margin: auto;
            margin-top: 50rpx;
            color: #fff;
            line-height: 100rpx;
            text-align: center;
        }
}
// 
.pT_box{
	// height: 980rpx;
	height: 100%;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 903;
	display: flex;
	flex-direction: column;
	.pT_black{
		flex: 1;
		// height: 500rpx;
		width: 100%;
		// background: rgba(0,0,0,0.4);
		background: #000;
		opacity: 0.7;
	}
	.pT_sure{
		height: 80rpx;
		width: 100%;
		position:relative;
		background: #fff;
		.textR{
			line-height: 100%;
			position: absolute;
			bottom: 0rpx;
			right: 60rpx;
			padding: 5rpx;
			color: blue;
			
		}
		.textL{
			line-height: 100%;
			position: absolute;
			bottom: 0rpx;
			left: 60rpx;
			padding: 5rpx;
			
		}
	}
	.pT_choose{
		height: 500rpx;
		width: 100%;
		background: #fff;
		text-align: center;
	}
}
.beSureWrap{
	height: 100%;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	// background: #000;
	// opacity: 0.9;
	background: rgba(0,0,0,0.7);
	.beSureArea{
		margin: auto;
		margin-top: 200rpx;
		width: 620rpx;
		background: #fff;
		opacity: 1;
		border-radius: 20px;
		min-height: 500rpx;
		padding: 50rpx 30rpx;
		.dialogDiv{
	        line-height: 60rpx;
	        font-size: 32rpx;
			color: #000;
	    }
		.dialog-footer{
			display: flex;
			margin-top: 50rpx;
		}
	}
}

</style>
