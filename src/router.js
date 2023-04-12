import{ createRouter , createWebHistory } from 'vue-router';
import ContactHotel from './Hotel/ContactHotel.vue';
import HotelDetail from './Hotel/HotelDetail.vue';
import HotelList from './Hotel/HotelList.vue';
import HotelForm from './Hotel/HotelForm.vue';
import RequestHotel from './Hotel/RequestHotel.vue';
import RoomPage from './Hotel/RoomPage.vue';
import NotFound from './NotFound.vue';
import AuthLogin from './Login/AuthLogin.vue'
import RegisterPage from './Customer/RegisterPage.vue'
import AdminDashboard from './Admin/AdminDashboard.vue'
import YourHotel from "./Hotel/YourHotel.vue"
import HotelBookingform from "./Hotel/HotelBookingform.vue"
import PaymentPage from "./Payment/PaymentPage.vue"
import ErrorPage from "./Payment/ErrorPage.vue"
import SuccessPage from "./Payment/SuccessPage.vue"
//import store from './store/modules/admin/index.js'
const router = createRouter({
  history: createWebHistory(),
   routes: [
    {path:'/', redirect: '/hotel'},
    {path:'/logout', redirect: '/hotel'},
    {path: '/hotel',component: HotelList},
    {path: '/hotel/:id',component: HotelDetail,
     props: true, // id will send as a prop in the component
     children: [
        {path: 'contact',component: ContactHotel},// /coaches/c1/contect
    ]},
    {path: '/register',component: HotelForm},
    {path: '/hotel/room/payment',component: PaymentPage},
    {path: '/hotel/room/booking',component: HotelBookingform},
    {path: '/hotel/room/error',component: ErrorPage},
    {path: '/hotel/room/success',component: SuccessPage},
    {path: '/hotel/room',component: RoomPage},//change1
    {path: '/yourhotel',component: YourHotel},//, meta:{ requiresAuth: true}},
    {path: '/admin',component: AdminDashboard},//, meta:{ requireAuth : true} },
    {path: '/requests',component: RequestHotel},
    {path: '/login', component: AuthLogin},//,meta:{ requireAuth : true}},
    {path: '/registerpage', component: RegisterPage},
    {path: '/:notFound(.*)',component: NotFound},
   ]
});
// router.beforeEach(function(to,from,next)
// {
//    if(to.meta.requireAuth  && !store.getter.isAuthenticated )
//    {

//      // router.redirect('/hotel');
//        next('/login');
//    }
//    else if(to.meta.requireAuth  && store.getter.isAuthenticated )
//    {
//        next('/login');
//    }
//    else if(to.meta.requireAuth  && store.getter.isAuthenticated )
//    {
//        next('/login');
//    }
//    else{
//       next();
//    }
//}
//);
export default router;