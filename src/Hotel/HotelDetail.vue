<template>
    <section>
    </section>
</template>
<script>
import axios from "axios";
export default{
    data(){
        return {
           selectedHotel: null
        };
    },
    computed:{
          fullName(){
              return this.selectedHotel.firstName + ' ' +this.selectedHotel.lastName;
          },
          areas(){
            return this.selectedHotel.areas;
          },
           rate(){
            return this.selectedHotel.hourlyRate;
          },
           description(){
            return this.selectedHotel.description;
          },
          contactLink(){
            return this.$route.path+'/'+this.id+'/content';
          }
    },
    created(){
        
      axios
        .get("http://127.0.0.1:8000/api/myhoteldetail", this.hotel)
        .then(( data ) => {
          try {
             alert(data);
             alert('hotel register successfully');
          }
           catch (err) {
            alert("Error, please try again");
          }
        });
    },
};
</script>