<template>
   <nav class="navbar">
        <div>admin</div>
          <i class="fa fa-bars" aria-hidden="true"></i>
      </nav>
      <div id="sidebar">
        <div class="sidebar__title">
          <div class="sidebar__img">
            <img src="assets/logo.png" alt="logo" />
            <h1>Codersbite</h1>
          </div>
          <i
            onclick="closeSidebar()"
            class="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>
        <div class="sidebar__menu">
          <div class="sidebar__link active_menu_link">
            <i class="fa fa-home"></i>
            <a href="#">Dashboard</a>
          </div>
          <h2>MNG</h2>
          <div class="sidebar__link">
            <i class="fa fa-user-secret" aria-hidden="true"></i>
               <router-link to="/hotel">All Hotels</router-link>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-building-o"></i>
            <router-link to="/login" v-if="addone()===false">Login</router-link>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-wrench"></i>
            <router-link to="/registerpage" v-if="addone()===false">Register As User </router-link>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-archive"></i>
            <router-link to="/logout" @click="logoutapp" v-if="addone()===true" > Logout </router-link>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-handshake-o"></i>
            <a href="#">Contracts</a>
          </div>
          <h2>LEAVE</h2>
          <div class="sidebar__link">
            <i class="fa fa-question"></i>
            <a href="#">Requests</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-sign-out"></i>
            <a href="#">Leave Policy</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-calendar-check-o"></i>
            <a href="#">Special Days</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-files-o"></i>
            <a href="#">Apply for leave</a>
          </div>
          <h2>PAYROLL</h2>
          <div class="sidebar__link">
            <i class="fa fa-money"></i>
            <a href="#">Payroll</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-briefcase"></i>
            <a href="#">Paygrade</a>
          </div>
          <div class="sidebar__logout">
            <i class="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
</template>
<script>
export default {
methods :{
    addone(){
       return this.$store.getters.isauth;
    },
    logoutapp()
    {
          this.$store.commit('logout1');
         this.$store.dispatch('logout');
    }
}
};
</script>
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
/*  styling scrollbars  */
::-webkit-scrollbar {
  width: 5px;
  height: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #A5AAAD;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #3EA175;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #A5AAAD;
}
* {
  margin: 0;
  padding: 0;
}
body {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}
.text-primary-p {
  color: #A5AAAD;
  font-size: 14px;
  font-weight: 700;
}
.font-bold {
  font-weight: 700;
}
.text-title {
  color: #2E4A66;
}
.text-lightblue {
  color: #469CAC;
}
.text-red {
  color: #CC3D38;
}
.text-yellow {
  color: #A98921;
}
.text-green {
  color: #3B9668;
}
.container {
  display: grid;
  max-width: 1300px;
  /* height: 100vh; */
  grid-template-columns: 0.8fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'sidebar nav nav nav'
    'sidebar main main main';
  /* grid-gap: 0.2rem; */
}
.navbar {
  background: #FFFFFF;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid lightgray;
}
.nav_icon {
  display: none;
}
.nav_icon > i {
  font-size: 26px;
  color: #A5AAAD;
}
.navbar__left > a {
  margin-right: 30px;
  text-decoration: none;
  color: #A5AAAD;
  font-size: 15px;
  font-weight: 700;
}
.navbar__left .active_link {
  color: #265ACC;
  border-bottom: 3px solid #265ACC;
  padding-bottom: 12px;
}
.navbar__right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar__right > a {
  margin-left: 20px;
  text-decoration: none;
}
.navbar__right > a > i {
  color: #A5AAAD;
  font-size: 16px;
  border-radius: 50px;
  background: #FFFFFF;
  box-shadow: 2px 2px 5px #D9D9D9, -2px -2px 5px #FFFFFF;
  padding: 7px;
}
main {
  background: #F3F4F6;
  grid-area: main;
  overflow-y: auto;
  margin-bottom: -48px;
}
.main__container {
  padding: 0px 0px;
}
.main__title {
  display: flex;
  align-items: center;
}
.main__title > img {
  max-height: 100px;
  object-fit: contain;
  margin-right: 20px;
}
.main__greeting > h1 {
  font-size: 24px;
  color: #2E4A66;
  margin-bottom: 5px;
}
.main__greeting > p {
  font-size: 14px;
  font-weight: 700;
  color: #A5AAAD;
}
.main__cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70px;
  padding: 25px;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 5px 5px 13px #EDEDED, -5px -5px 13px #FFFFFF;
}
.card_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card_inner > span {
  font-size: 25px;
}
.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 50px;
}
.charts__left {
  padding: 25px;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 5px 5px 13px #EDEDED, -5px -5px 13px #FFFFFF;
}
.charts__left__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.charts__left__title > div > h1 {
  font-size: 24px;
  color: #2E4A66;
  margin-bottom: 5px;
}
.charts__left__title > div > p {
  font-size: 14px;
  font-weight: 700;
  color: #A5AAAD;
}
.charts__left__title > i {
  color: #FFFFFF;
  font-size: 20px;
  background: #FFC100;
  border-radius: 200px 0px 200px 200px;
  -moz-border-radius: 200px 0px 200px 200px;
  -webkit-border-radius: 200px 0px 200px 200px;
  border: 0px solid #000000;
  padding: 15px;
}
.charts__right {
  padding: 25px;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 5px 5px 13px #EDEDED, -5px -5px 13px #FFFFFF;
}
.charts__right__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.charts__right__title > div > h1 {
  font-size: 24px;
  color: #2E4A66;
  margin-bottom: 5px;
}
.charts__right__title > div > p {
  font-size: 14px;
  font-weight: 700;
  color: #A5AAAD;
}
.charts__right__title > i {
  color: #FFFFFF;
  font-size: 20px;
  background: #39447A;
  border-radius: 200px 0px 200px 200px;
  -moz-border-radius: 200px 0px 200px 200px;
  -webkit-border-radius: 200px 0px 200px 200px;
  border: 0px solid #000000;
  padding: 15px;
}
.charts__right__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}
.card1 {
  background: #D1ECF1;
  color: #35A4BA;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}
.card2 {
  background: #D2F9EE;
  color: #38E1B0;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}
.card3 {
  background: #D6D8D9;
  color: #3A3E41;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}
.card4 {
  background: #FDDCDF;
  color: #F65A6F;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}
/*  SIDEBAR STARTS HERE  */
#sidebar {
  background: #020509;
  grid-area: sidebar;
  overflow-y: auto;
  padding: 71px;
    margin: -48px;
    margin-right: 5px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.sidebar__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #F3F4F6;
  margin-bottom: 30px;
  /* color: #E85B6B; */
}
.sidebar__img {
  display: flex;
  align-items: center;
}
.sidebar__title > div > img {
  width: 75px;
  object-fit: contain;
}
.sidebar__title > div > h1 {
  font-size: 18px;
  display: inline;
}
.sidebar__title > i {
  font-size: 18px;
  display: none;
}
.sidebar__menu > h2 {
  color: #3EA175;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 700;
}
.sidebar__link {
  color: #F3F4F6;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 5px;
}
.active_menu_link {
  background: rgba(62, 161, 117, 0.3);
  color: #3EA175;
}
.active_menu_link a {
  color: #3EA175 !important;
}
.sidebar__link > a {
  text-decoration: none;
  color: #A5AAAD;
  font-weight: 700;
}
.sidebar__link > i {
  margin-right: 10px;
  font-size: 18px;
}
.sidebar__logout {
  margin-top: 20px;
  padding: 10px;
  color: #E65061;
}
.sidebar__logout > a {
  text-decoration: none;
  color: #E65061;
  font-weight: 700;
  text-transform: uppercase;
}
.sidebar__logout > i {
  margin-right: 10px;
  font-size: 18px;
}
.sidebar_responsive {
  display: inline !important;
  z-index: 9999 !important;
  left: 0 !important;
  position: absolute;
}
@media only screen and (max-width: 978px) {
  .container {
    grid-template-columns: 1fr;
    max-width: 1140px;
    /* grid-template-rows: 0.2fr 2.2fr; */
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      'nav'
      'main';
  }
  #sidebar {
    display: none;
  }
  .sidebar__title > i {
    display: inline;
  }
  .nav_icon {
    display: inline;
  }
}
@media only screen and (max-width: 855px) {
  .main__cards {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }
  .charts {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 480px) {
  .navbar__left {
    display: none;
  }
}
</style>





