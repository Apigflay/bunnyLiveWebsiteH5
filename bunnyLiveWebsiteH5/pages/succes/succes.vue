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
		<!-- success -->
		<div class="succesArea">
			<img class="success" src="../../static/imgs/success.png" alt="">
			<p class="p">Thông tin đã điền đầy đủ, vui lòng tải APP để hoàn thành bước cuối cùng</p>
			<div class="suDownArea">
				<div class="div" @click="goDown(1)"><img class="btn" src="../../static/imgs/ele-btn-bg-ios.png" alt=""></div>
				<div class="div" @click="goDown(2)"><img class="btn" src="../../static/imgs/ele-btn-bg-google.png" alt=""></div>
			</div>
		</div>

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList:[['Trang Chủ','Giới thiệu sản phẩm','','điều khoản sử dụng','Những điều cần biết','Liên lạc chúng tôi'],
				['Home','Product Introduction ','','Privacy policy','User Agreement','Contact Us']
				],
				swiperData:['../../static/imgs/ele-m-img-01.png','../../static/imgs/ele-m-img-02.png','../../static/imgs/ele-m-img-03.png'],
				swiperStr:['Vui mỗi ngày ','Have fun everyday'],
				languageBox:false,
				loginData:['Đăng nhập','sign up'],
			};
		},
		 computed:{
			language(){
			  return this.$store.getters['AllallLanguage']
			},
		},
		methods:{
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
.succesArea{
	width: 750rpx;
	.success{
		height: 100rpx;
		width: 100rpx;
		margin-left: 325rpx;
		margin-top: 300rpx;
	}
	.p{
		width: 94%;
		padding: 0 3%;
		text-align: center;
		line-height: 30px;
	}
	.suDownArea{
		display: flex;
		justify-content: center;
		margin-top: 60rpx;
		.div{
			height: 76rpx;
			width: 150rpx;
			border-radius: 38rpx;
			height: 76rpx;
			position: relative;
			background: #cecece;
			margin:0 40rpx;
			cursor: pointer;
			.btn{
				position: absolute;
				width: 100rpx;
				top: -10rpx;
				left: 24rpx;
				height: 100rpx;
			}
		}
	}
}

</style>
