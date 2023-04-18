<template>
    <div>
        <div class="d-flex" id="wrapper">
            <!-- Page Content -->
            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div class="d-flex align-items-center">
                        <!-- <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i> -->
                        <h2 class="fs-2 m-0">Admin Dashboard</h2>
                    </div>
                    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-user me-2"></i>John Doe
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Hotels</a></li>
                                        <li><a class="dropdown-item" href="#">Users</a></li>
                                        <li><a class="dropdown-item" href="#">Bookings</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> -->
                </nav>
                <div class="container-fluid px-4">
                    <div class="row g-3 my-2">
                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 class="fs-2">{{ hotelcount }}</h3>
                                    <p class="fs-5">Hotels</p>
                                </div>
                                <i
                                    class="fas fa-duotone fa-hotel fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 class="fs-2">{{ usercount }}</h3>
                                    <p class="fs-5">Users</p>
                                </div>
                                <i class="fas fa-regular fa-user primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 class="fs-2">{{ bookingcount }}</h3>
                                    <p class="fs-5">Bookings</p>
                                </div>
                                <i class="fas fa-solid fa-check fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>
                        <div class="col-md-3">
              <div
                class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
              >
                <div>
                  
                  <p class="fs-5">Register Hotel On App</p>
                </div>
                <i @click="callcomponent()"
                  class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3 "
                ></i>
              </div>
            </div>

                    </div>
                    <div class="row my-5">
                        <h3 class="fs-4 mb-3">Users</h3>
                        <div class="col">
                            <table class="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="50">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in users" v-bind:key="user.id">
                                        <td>{{ user.id }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.email }}</td>
                                        <td>{{ user.phonenumber }}</td>
                                        <td>{{ user.address }}</td>
                                        <td>
                                            <button type="button" class="btn btn-danger"
                                                @click="removeu(user)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row my-5">
                        <h3 class="fs-4 mb-3">Hotels</h3>
                        <div class="col">
                            <table class="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="50">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="hotel in hotels" v-bind:key="hotel.id">
                                        <td>{{ hotel.id }}</td>
                                        <td>{{ hotel.hotel_name }}</td>
                                        <td>{{ hotel.email }}</td>
                                        <td>{{ hotel.phonenumber }}</td>
                                        <td>{{ hotel.location }}</td>
                                        <td>
                                            <!-- <router-link to="/admin/hotel" class="btn btn-warning">
                                                Edit
                                            </router-link> -->
                                            <button type="button" class="btn btn-warning"
                                                @click="edit(hotel)">Edit</button>
                                            <!-- <button type="button" class="btn btn-warning">Edit</button> -->
                                            <button type="button" class="btn btn-danger"
                                                @click="removeh(hotel)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row my-5">
                        <h3 class="fs-4 mb-3">Bookings</h3>
                        <div class="col">
                            <table class="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="50">#</th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Arrival</th>
                                        <th scope="col">Departure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="booking in bookings" v-bind:key="booking.id">
                                        <td>{{ booking.id }}</td>
                                        <td>{{ booking.customer_id }}</td>
                                        <td>{{ booking.price }}</td>
                                        <td>{{ booking.arival }}</td>
                                        <td>{{ booking.departure }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            users: {},
            hotels: {},
            bookings: {},
            hotelcount: "",
            usercount: "",
            bookingcount: ""
        };
    },
    created() {
        this.UserLoad();
        this.HotelLoad();
        this.BookingLoad();
        this.HotelCount();
        this.UserCount();
        this.BookingCount();
    },
    mounted(){
        this.HotelCount();
        this.UserCount();
        this.BookingCount();
        
    },
  
 
    methods: {
        UserLoad() {
            var page = "http://127.0.0.1:8000/api/customerdata";
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.users = data;
                    }
                );
        },
        UserCount() {
            var page = "http://127.0.0.1:8000/api/customerdatacount";
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.usercount = data;
                    }
                );
        },
        HotelLoad() {
            var page = "http://127.0.0.1:8000/api/hoteldata";
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.hotels = data;
                    }
                );
        },
        HotelCount() {
            var page = "http://127.0.0.1:8000/api/hoteldatacount";
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.hotelcount = data;
                    }
                );
        },
        BookingLoad() {
            var page = "http://127.0.0.1:8000/api/bookingdata";
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.bookings = data;
                    }
                );
        },
        BookingCount() {
            var page = "http://127.0.0.1:8000/api/bookingdatacount";
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.bookingcount = data;
                    }
                );
        },
        removeh(hotel) {
            // var url = `http://127.0.0.1:8000/api/deletehotel/${hotel.id}`;
            var url = 'http://127.0.0.1:8000/api/deletehotel/' + hotel.id;
            axios.delete(url);
            alert("Deleteddd");
            this.HotelLoad();
            this.HotelCount();
        },
         edit(hotel) {
            // var url = `http://127.0.0.1:8000/api/deletehotel/${hotel.id}`;
            // var url = 'http://127.0.0.1:8000/api/deletehotel/' + hotel.id;
            // axios.delete(url);
            // alert("Deleteddd");
            // this.HotelLoad();
            // this.HotelCount();
               this.$store.commit('sethotelid',{ hotelid:hotel.id});
              this.$router.push("/admin/hotel");
        },
        removeu(user) {
            // var url = `http://127.0.0.1:8000/api/deletehotel/${hotel.id}`;
            var url = 'http://127.0.0.1:8000/api/deletecustomer/' + user.id;
            axios.delete(url);
            alert("Deleteddd");
            this.UserLoad();
            this.UserCount();
        },

        callcomponent(){
      this.$router.push('/createhotel');
    }
    }
}
</script>
<style scoped>
:root {
    --main-bg-color: #009D63;
    --main-text-color: #009D63;
    --second-text-color: #BBBEC5;
    --second-bg-color: #C1EFDE;
}
.primary-text {
    color: var(--main-text-color);
}
.second-text {
    color: var(--second-text-color);
}
.primary-bg {
    background-color: var(--main-bg-color);
}
.secondary-bg {
    background-color: var(--second-bg-color);
}
.btn-warning {
    margin-right: 20px;
}
.rounded-full {
    border-radius: 100%;
}
#wrapper {
    overflow-x: hidden;
    background-image: linear-gradient(to right,
            #BAF3D7,
            #C2F5DE,
            #CBF7E4,
            #D4F8EA,
            #DDFAEF);
}
#sidebar-wrapper {
    min-height: 100vh;
    margin-left: -15rem;
    -webkit-transition: margin 0.25s ease-out;
    -moz-transition: margin 0.25s ease-out;
    -o-transition: margin 0.25s ease-out;
    transition: margin 0.25s ease-out;
}
#sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
}
#sidebar-wrapper .list-group {
    width: 15rem;
}
#page-content-wrapper {
    min-width: 100vw;
}
#wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
}
#menu-toggle {
    cursor: pointer;
}
.list-group-item {
    border: none;
    padding: 20px 30px;
}
.list-group-item.active {
    background-color: transparent;
    color: var(--main-text-color);
    font-weight: bold;
    border: none;
}
@media (min-width: 768px) {
    #sidebar-wrapper {
        margin-left: 0;
    }
    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }
    #wrapper.toggled #sidebar-wrapper {
        margin-left: -15rem;
    }
}
</style>