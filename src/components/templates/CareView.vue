<template>
  <div class="care">
    <button v-on:click="openModal">Click</button>
    <div id="overlay" v-show="showContent">
      <div id="content">
        <p>これがモーダルウィンドウです。</p>
        <p><button v-on:click="closeModal">close</button></p>
      </div>
    </div>
    <div class="message">
      <h2>お世話</h2>
    </div>
    <!--
      <img src="../assets/shop.png" alt="ショップ画面" class="shop-img">
    -->

    <!-- <img src="../image/homeicon.png" alt="ホームアイコン" class="icon"> -->
    <!-- <img src="../image/taskicon.png" alt="タスクアイコン" class="icon"> -->
    <!-- <img src="../image/shopicon.png" alt="ショップアイコン" class="icon"> -->

    <!-- メニュー -->
    <ul class="bottom-bannerfood">
      <li>
        <div class="card card-skin">
          <div class="card__imgframe"></div>
          <button class="button-style">
            <div class="card__textbox">
              <div class="card__titletext">
                おにぎり
              </div>
              <div class="card__overviewtext">
                おいしいおにぎり<br>所字数:00
              </div>
            </div>
          </button>
        </div>
      </li>

      <li>
        <div class="card card-skin">
          <div class="card__imgframe"></div>
          <button class="button-style">
            <div class="card__textbox">
              <div class="card__titletext">
                りんご
              </div>
              <div class="card__overviewtext">
                新鮮なりんご<br>所字数:00
              </div>
            </div>
          </button>
        </div>
      </li>
    </ul>

    <ul class="bottom-bannerfood">
      <li>
        <div class="card card-skin">
          <div class="card__imgframe"></div>
          <button class="button-style">
            <div class="card__textbox">
              <div class="card__titletext">
                アメ
              </div>
              <div class="card__overviewtext">
                普通のアメ<br>所字数:00
              </div>
            </div>
          </button>
        </div>
      </li>

      <li>
        <div class="card card-skin">
          <div class="card__imgframe"></div>
          <button class="button-style">
            <div class="card__textbox">
              <div class="card__titletext">
                ケーキ
              </div>
              <div class="card__overviewtext">
                おいしいケーキ<br>所字数:00
              </div>
            </div>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ShopView',

  data () {
    return {
      showContent: false
    }
  },

  methods: {
    openModal () {
      this.showContent = true
    },
    closeModal () {
      this.showContent = false
    }
  }
}
</script>

<style>
.char-img{
  height: 200px;
}

body,html{
  margin: 0;
  padding: 0;
}

/* ↓↓ショップ画面のcss↓↓ */

/* ショップ背景画像のcss */
.shop-img{
  background-image: url(@/assets/shop.png);
  background-position: center;
  background-size: cover;
  /*position:absolute;*/
  width: auto;
  height: 100vh;
  z-index: 1;
}
.shop-img::before{
  content: '';
  padding-top: 50%;
}
/* バナーのcss */
.bottom-banner{
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
}

.bottom-banner li{
  width: calc(100%/4);/*←画像を横に4つ並べる場合*/
  padding:0 5px;/*←画像の左右に5pxの余白を入れる場合*/
  box-sizing:border-box;
  list-style:none;
  z-index: 4;
}

.bottom-bannerfood li{
  width: calc(100%/2);/*←画像を横に4つ並べる場合*/
  padding:0 5px;/*←画像の左右に5pxの余白を入れる場合*/
  box-sizing:border-box;
  list-style:none;
  z-index: 4;
}

/* メニューのcss */
.bottom-bannerfood{
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
}

.bottom-bannerfood li img{
  max-width:100%; /*画像のはみだしを防ぐ*/
  height: auto; /*画像の縦横比を維持 */
}
/* バナーとメニューのアイコンcss */
.icon{
  position: absolute;
  /* right:30px; */
  bottom: 3%;
  /* margin:10px; */
  width:10%;
  height:auto;
  z-index: 4;
  background-clip:border-box;
  background-color: #B4FFBB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
/* ボタンのcss */
.btn{
  position: absolute;
  width: 67px;
  height: 56px;
  bottom:3%;
  background: #B4FFBB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 3;
}
/* カードのcss */
.card{
  width:150px;
  height:auto;
  top:40%;
  right:5%;
  left:auto;
  box-sizing:border-box;
  list-style:none;
  z-index:3;
}
/* カードの画像css */
/* カード画像サイズは640×360 */
.card__imgframe{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(@/assets/ringotest.png) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
  background-color:#DFDFDF;
}
/* カードのテキスト */
.card__textbox{
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: #f5f5f5;
  box-sizing: border-box;
}
.card__textbox > * + *{
  margin-top: 10px;
}
/* カードのタイトル */
.card__titletext{
  font-size: 20px;
  font-weight: bold;
  line-height: 125%;
}
.card__overviewtext{
  font-size: 12px;
  line-height: 150%;
}

.card-skin{
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
}
/* 文字css */
.message{
  position: absolute;
  text-align: right;
  width: 100%;
  height: 100%;
  z-index:3;
}
/* aタグのテキストを青くしない */
a{
  color:inherit;
  text-decoration: none;
}
/* ボタンの枠線を消す */
.button-style {
  border: none;
  background-color: #f5f5f5;
  background: transparent;
  outline: none;
}

#overlay{
  /*要素を重ねた時の順番*/
  z-index:5;

  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:6;
  width:50%;
  /* height:30%;*/
  padding: 1em;
  background:#fff;
}
</style>
