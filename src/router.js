import{ createRouter , createWebHistory } from 'vue-router';
//import HotelDetail from './Hotel/HotelDetail.vue';
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
import ErrorPage from "./Payment/ErrorPage.vue"
import SuccessPage from "./Payment/SuccessPage.vue"
import ProfilePage from "./Customer/ProfilePage.vue"
import RoomBooking from "./Hotel/RoomBooking.vue"
import ShowImage from "./Admin/ShowImage.vue"
import PaymentPage from "./Payment/PaymentPage.vue"
import BookingForm from "./Hotel/BookingForm.vue"
import AdminHotelEdit from "./Admin/AdminHotelEdit.vue"
import CreateHotel from "./Hotel/CreateHotel.vue"
//import store from './store/modules/admin/index.js'
const router = createRouter({
  history: createWebHistory(),
   routes: [
    {path:'/', redirect: '/hotel'},
    {path:'/logout', redirect: '/hotel'},
    {path: '/hotel',component: HotelList},
   //  {path: '/hotel/:id',component: HotelDetail,
   //   props: true, // id will send as a prop in the component
   //   children: [
   //      {path: '/:roomid',component: RoomBooking},// /coaches/c1/contect
   //  ]},
    {path: '/register',component: HotelForm},
    {path: '/hotel/room/payment',component: PaymentPage},
    {path: '/hotel/room/booking',component: HotelBookingform},
    {path: '/hotel/room/error',component: ErrorPage},
    {path: '/hotel/room/success',component: SuccessPage},
    {path: '/hotel/:id',component: RoomPage,
    props: true, // id will send as a prop in the component
    children: [
       {path: '/:roomid',component: RoomBooking},// /coaches/c1/contect
   ]},//change1
    {path: '/yourhotel',component: YourHotel},//, meta:{ requiresAuth: true}},
    {path: '/admin',component: AdminDashboard},//, meta:{ requireAuth : true} },
    {path: '/requests',component: RequestHotel},
    {path: '/login', component: AuthLogin},//,meta:{ requireAuth : true}},
    {path: '/registerpage', component: RegisterPage},
    {path: '/admin/hotel', component: AdminHotelEdit},
    {path: '/user/profile', component: ProfilePage},
    {path: '/image',component: ShowImage},
    {path:'/bookingform', component: BookingForm},
    {path:'/payment', component: PaymentPage},
    {path: '/createhotel', component: CreateHotel},
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