<template>
  <div class="productintroductionPage">
    <div class="strY" v-if="language==0">
        Giới thiệu sản phẩm<br><br>

Bunny Live là ứng dụng tiên phong trong phát trực tiếp - phát trên nền tảng ứng dụng điện thoại thông minh giúp người dùng kết nối với hàng trăm ngàn Idol livestream <br>

 Bunny live là niềm đam mê của chúng tôi, đó là lý do tại sao chúng tôi luôn cố gắng hết sức để cải thiện Bunny Live liên tục để mang đến cho người dùng trải nghiệm tốt nhất.<br>


 <br>[𝐁] -𝐁𝐥𝐢𝐬𝐬𝐟𝐮𝐥<br>

 Bạn sẽ luôn có khoảng thời gian tuyệt vời và hạnh phúc nhất với Bunny Live.  Bạn có thể phát trực tiếp những khoảnh khắc thú vị của mình và trở thành một Idol hoặc tham gia các buổi phát trực tiếp của các Idol khác để trò chuyện với họ <br>


 <br>[𝐔] - 𝐔𝐧𝐢𝐪𝐮𝐞<br>

 Bunny Live là ứng dụng điện thoại thông minh duy nhất và độc nhất , không chỉ mang lại sự tương tác giữa người dùng và Idol livestream mà còn giữa Idol livestream với nhau <br>


 <br>[𝐍] - 𝐍𝐢𝐜𝐞<br>

 Chúng tôi không chỉ quan tâm đến việc tạo một ứng dụng để kết nối người dùng và Idol livestream phát trực tiếp, mà còn muốn giúp người dùng khám phá tài năng của họ và cho họ thấy những người khác để giúp họ tạo nên sự tự tin<br>


 <br>[𝐍] - 𝐍𝐮𝐦𝐛𝐞𝐫𝐨𝐮𝐬<br>

 Bunny Live hiện có sẵn ở hơn 150 quốc gia, có 100.000 thần tượng phát trực tiếp và 1.000.000 người dùng mới mỗi tháng.  Chúng tôi luôn cố gắng làm hết sức mình để cộng đồng Bunny sống phát triển không ngừng với tốc độ nhanh nhất.<br>


 <br>[𝐘] - 𝐘𝐨𝐮𝐧𝐠<br>

 Bunny Live trẻ trung và được truyền cảm hứng từ tuổi trẻ, đó là lý do tại sao chúng tôi có thể cung cấp cho bạn trải nghiệm tốt nhất cho tâm hồn trẻ của bạn.  Hãy đến với chúng tôi và chúng tôi sẽ mang đến cho bạn trải nghiệm độc đáo với các tính năng cực kỳ dễ thương và các phiên phát trực tiếp đầy màu sắc.<br>


    </div>
    
    <div class="strE" v-if="language==1">
<br>Product Introduction<br><br>

Bunny Live is the pioneer application in Live streaming – broadcasting on smartphone app platform which help users to connect with hundreds of thousands of live stream idols. <br>
Bunny live is our passion, that’s why we always try our best to improve Bunny Live constantly to give users the best experience.<br>

<br>[𝐁] – 𝐁𝐥𝐢𝐬𝐬𝐟𝐮𝐥<br>
You will always have the most wonderful and happy time with Bunny Live. You can live stream your interesting moments and becoming an idol or join other live stream idols sessions to chat with them in real time.<br>

<br>[𝐔] – 𝐔𝐧𝐢𝐪𝐮𝐞<br>
Bunny Live is the one and only smartphone app that not only bring out interaction between users and live stream idols but also between idols and idols.<br>

<br>[𝐍] – 𝐍𝐢𝐜𝐞<br>
Not only we care about creating an app to connect users and live stream idols,  and also want to help users discover their talents and show them to others to make them more confident<br>

<br>[𝐍] – 𝐍𝐮𝐦𝐞𝐫𝐨𝐮𝐬<br>
Bunny Live is now available in more than 150 countries, have 100.000 live stream idols and 1.000.000 new users a month. We always try to do our best to make Bunny live community growing constantly with the fastest speed. <br>

<br>[𝐘] – 𝐘𝐨𝐮𝐧𝐠<br>
Bunny Live is young and inspired with youth, that’s why we can give you the best experience for your young soul. Come with us and we will give you an unique experience with extremely cute features and colorful live stream sessions. <br>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import NavigationBar from '@/components/NavigationBar.vue'
export default {
  name: 'productintroduction',
  components: {

  },
  data(){
      const num =Math.floor(Math.random()*3)+1;
      return {
         
      }
  },
  created() {  

  },    
  computed:{
    language(){
      return this.$store.getters['AllallLanguage']
    },

  },
  watch:{

  },
  methods:{
   
    
  },
  beforeMount(){
  },
  mounted() {
    //   this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
.productintroductionPage{
  padding:0 7%;
  text-align: left;
  width: 86%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 30px;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}


</style>

