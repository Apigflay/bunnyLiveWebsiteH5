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
			<div class="swiperbox">
				<swiper class="swiper" :indicator-dots="true" :autoplay="false" :interval="2000" :duration="500" :circular="true">
					<swiper-item v-for="(item,index) in swiperData" :key="index">
						<image class="imgss" :src="item" mode=""></image>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList:[['Trang Chủ','Giới thiệu sản phẩm',' Trả',' Chính sách bảo mật',' Sự phản đối của người dùng','Liên lạc chúng tôi'],
				['Home','Product Introduction ','Pay','Privacy policy','User Agressment','Contect Us']
				],
				swiperData:['../../static/imgs/ele-m-img-01.png','../../static/imgs/ele-m-img-02.png','../../static/imgs/ele-m-img-03.png'],
				swiperStr:['Vui mỗi ngày ','Have fun everyday'],
				languageBox:false,
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
					   window.location.href ="http://pay.buny.vn/"; rel="external nofollow";
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
	display: flex;
	flex-direction: column;
}
.navsArea{
	width: 750rpx;
	height: 120rpx;
	background: blue;
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
		margin-right: 30rpx;
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
	flex:1;
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
		font-size: 20px;
   }
      .btnArea{
       width:100%;
       height: 50px;
       display: flex;
       align-items: center;
       justify-content: center;
       .img1{
           height: 38px;
           width: 75px;
           background: #fff;
           border-radius: 19px;
            margin-right: 10px;
           img{
               height: 55px;
               margin-top:-7px;
           }
       }
       .img2{
           height: 38px;
           width: 75px;
           background: #fff;
           border-radius: 19px;
           margin-left: 10px;
           img{
               height: 55px;
               margin-top:-7px;
           }
       }
   }
   .swiperbox{
	   flex: 1;
	   .swiper{
		   height: 100%;
		   .uni-swiper-item{
			   text-align: center;
			  
		   }
		    .imgss{
		   			   height: 100%;
					   margin-left: 50rpx;
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

</style>
