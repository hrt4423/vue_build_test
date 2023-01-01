<template>
  <div id="app">

    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <router-view class="shop-img"/>

    <nav class="bottom-banner">
      <li>
        <router-link to="/" class="link">
          <img src="@/assets/homeicon.png" class="icon"/>
        </router-link>
      </li>
      <li>
        <router-link to="/task" class="link">
          <img src="@/assets/taskicon.png" class="icon"/>
        </router-link>
      </li>
      <li>
        <router-link to="/care" class="link">
          <img src="@/assets/careicon.png" class="icon"/>
        </router-link>
      </li>
      <li>
        <router-link to="/shop" class="link">
          <img src="@/assets/shopicon.png" class="icon"/>
        </router-link>
      </li>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.shop-img{
  background-image: url(@/assets/shop.png);
  background-position: center;
  background-size: cover;
  /*position:absolute;*/
  width: auto;
  height: 100vh;
  z-index: 1;
}
/* バナーのcss */
.bottom-banner{
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
}

.bottom-banner li{
  width: calc(100%/4);/* ←画像を横に4つ並べる場合*/
  padding:0 5px;/* ←画像の左右に5pxの余白を入れる場合*/
  box-sizing:border-box;
  list-style:none;
  z-index: 4;
}

/* バナーとメニューのアイコンcss */
.icon{
  position: absolute;
  /* right:30px; */
  bottom:3%;
  /* margin:10px; */
  width:10%;
  height:auto;
  z-index: 4;
  background-clip:border-box;
  background-color: #B4FFBB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
