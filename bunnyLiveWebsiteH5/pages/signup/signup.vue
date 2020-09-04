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
				<picker class="lable_input" mode="date" :value="date" start="1900-01-01" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</div>
			<!-- <p class="per2 per_p" v-if="p2==false">Vui lòng điền lại</p> -->
			<!-- 3 证件类型-->
			<div class="per3 per">
				<span class="lable">loại chứng chỉ :</span>
				<select class="lable_input" v-model="input3" placeholder=""  @blur="getInputMsg(3)">
					<option label="Thẻ căn cước" value="1"></option>
					<option label="hộ chiếu" value="2"></option>
				</select>
			</div>
			<!-- <p class="per3 per_p" v-if="p3==false">Thông tin tên quá dài! Vui lòng điền lại</p> -->
			<!-- 4 证件号-->
			<div class="per4 per">
				<span class="lable">Số văn kiện :</span>
				<input class="lable_input" v-model.trim="input4" placeholder="" maxlength='30' @input="getInputMsg(4)"></input>
			</div>
			<p class="per4 per_p" v-if="p4==false">Vui lòng điền lại</p>
			<!-- 5 签发日期-->
			<div class="per5 per">
				<span class="lable">Ngày cấp :</span>
				<picker class="lable_input" mode="date" :value="date" start="1900-01-01" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</div>
			<!-- <p class="per5 per_p" v-if="p5==false">Vui lòng điền lại</p> -->
			<!-- 6 签发地-->
			<div class="per5 per">
				<span class="lable">Nơi phát hành :</span>
				<input class="lable_input" v-model.trim="input6" maxlength='30' placeholder="" @input="getInputMsg(6)"></input>
			</div>
			<p class="per5 per_p" v-if="p6==false">Vui lòng điền lại</p>
			<!-- 7 email-->
			<div class="per5 per">
				<span class="lable">email :</span>
				<input class="lable_input" v-model.trim="input7" placeholder="" @input="getInputMsg(7)"></input>
			</div>
			<p class="per5 per_p" v-if="p7==false">Vui lòng điền lại</p>
			<!-- 8 地址-->
			<div class="per5 per">
				<span class="lable">Địa chỉ :</span>
				<input class="lable_input" v-model.trim="input8" placeholder="" @input="getInputMsg(8)"></input>
			</div>
			<p class="per5 per_p" v-if="p8==false">Vui lòng điền lại</p>
			
			<!-- 9 -->
			<div class="nextBtn" @click="goNext">Bước tiếp theo</div>
		</div>
		
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
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
				input3:'1',//证件类型
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
				date: currentDate,
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
				return this.inputName!=''&&this.input4!=''&&this.input6!=''&&this.input7!=''&&this.input8!='';
			}
		},
		methods:{
			bindDateChange: function(e) {
				console.log(e.target.value)
				this.date = e.target.value
			},
			getDate(type) {
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
			getInputMsg:function(id){
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
					console.log(this.input7)
					var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
					var test =reg.test(this.input7);
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
			},
			goNext:function(){


				
				
				if(this.p1==true&&this.p4==true&&this.p6==true&&this.p7==true&&this.p8==true&&this.allIs==true){
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
				}else{
					uni.showToast({
						icon:'none',
						title: 'Vui lòng điền lại',
						duration: 2000
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

</style>
