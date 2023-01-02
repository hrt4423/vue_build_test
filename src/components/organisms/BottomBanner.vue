<template>
  <div class="bottom-banner">
    <nav>
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

<script>
export default {
  name: 'BottomBanner'
}
</script>

<style>
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
