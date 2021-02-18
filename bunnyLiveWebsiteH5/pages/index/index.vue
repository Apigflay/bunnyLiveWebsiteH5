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
		<div class="swiperArea">
            <div class="name">Bunny Live</div>
            <div class="name2">{{swiperStr[language]}}</div>
			<div class="swiperboxl">
				<swiper class="swiper" :indicator-dots="true" :autoplay="false" :interval="2000" :duration="500" :circular="true">
					<!-- <swiper-item class="swiper-si" v-for="(item,index) in swiperData" :key="index">
						<image class="imgssl" :src="item" mode=""></image>
					</swiper-item> -->
					<swiper-item class="swiper-si">
						<image class="imgssl" src="../../static/imgs/ele-m-img-01.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-si">
						<image class="imgssl" src="../../static/imgs/ele-m-img-02.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-si">
						<image class="imgssl" src="../../static/imgs/ele-m-img-03.png" mode=""></image>
					</swiper-item>
				</swiper>
			</div>
			<div class="btnArea">
                <span class="img1" @click="goDown(1)"><img src="../../static/imgs/ele-btn-bg-ios.png" alt=""></span>
                <span class="img2" @click="goDown(2)"><img src="../../static/imgs/ele-btn-bg-google.png" alt=""></span>
            </div>
		</div>
		<div class="footerArea">
			copyright@2019.CONG TY TNHH BUNY
		</div>
		<div class="conArea">
			<!-- Công Ty TNHH BUNNY<br> -->
			Địa chỉ : B01 , Tầng 1 , 624 Lạc Long Quân , Phường 5 , Quận 11<br>
			Sđt : 028.66503686<br>
			Email :bunycompany@gmail.com<br>
			Người chịu trách nhiệm nội dung: Lâm Bửu Oanh<br>
			Giấy phép MXH số 206/GP-BTTTT do Bộ TTTT cấp ngày 14/5/2020
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList:[['Trang Chủ','Giới thiệu sản phẩm','','Những điều cần biết','điều khoản sử dụng','Liên lạc chúng tôi'],
				['Home','Product Introduction ','','User Agreement','Privacy policy','Contact Us']
				],
				swiperData:['../../static/imgs/ele-m-img-01.png','../../static/imgs/ele-m-img-02.png','../../static/imgs/ele-m-img-03.png'],
				swiperStr:['Vui mỗi ngày ','Have fun everyday'],
				languageBox:false,
				loginData:['Đăng ký','sign up'],
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
						url: '/pages/useragressment/useragressment'
					});
					 // uni.navigateTo({
					 // 	url: '/pages/privacypolicy/privacypolicy'
					 // });
					  break;
					case 4:
					uni.navigateTo({
						url: '/pages/privacypolicy/privacypolicy'
					});
						// uni.navigateTo({
						// 	url: '/pages/useragressment/useragressment'
						// });
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
			color:#fc2c5d;
			margin-left: 10rpx;
		}
		.menuPer5{
			margin-right: 10rpx;
		}
	}
}
.swiperArea{
	// flex:1;
	background-image: linear-gradient(#FA5062, #F95266,#F073B2);
	display: flex;
    flex-direction: column;
	.name,.name2{
	   height: 60rpx;
	   line-height: 60rpx;
	   text-align: left;
	   color: #fff;
   }
   .name{
		font-size: 16px;
	   text-indent: 5%;
   }
   .name2{
	   text-indent: 8%;
		font-size: 20rpx;
	}
    .btnArea{
       width:100%;
       height: 100rpx;
       display: flex;
       align-items: center;
       justify-content: center;
       .img1{
           height: 76rpx;
           width: 150rpx;
           background: #fff;
           border-radius: 38rpx;
            margin-right: 20rpx;
           img{
               height: 110rpx;
               margin-top:-14rpx;
			   margin-left: 22rpx;
           }
       }
       .img2{
           height: 76rpx;
           width: 150rpx;
           background: #fff;
           border-radius: 38rpx;
           margin-left: 20rpx;
           img{
               height: 110rpx;
               margin-top:-14rpx;
			   margin-left: 22rpx;
           }
       }
	}
   .swiperboxl{
	   // flex: 1;
	   height: 879rpx;
	   // width: 100%;
	   .swiper{
		   height: 100%;
		   .swiper-si{
			   text-align: center;
			   .imgssl{
			   			height: 879rpx;
						width: 454rpx;
			   			// margin: auto;
			   }
		   }
		    
		   
	   }
   }
}
.footerArea{
	height: 100rpx;
	font-size: 16rpx;
	line-height: 100rpx;
	text-align: center;
}
.conArea{
	text-align: center;
	width: 90%;
	padding: 0 5%;
	font-size: 16rpx;
}

</style>
