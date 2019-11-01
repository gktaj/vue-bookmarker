<template>
  <div class="home">
    <div class="date"> </div>
    <Viewlist  v-bind:bookmarkers="bookmarkers"   v-on:delete-this="deletebookmark"  v-on:edit-this="editbook" />
    <!-- Button trigger modal -->
    <div class="text-center">
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" @click="openModal">
        Add New Bookmarker
      </button>
    </div>
    <!-- Modal -->
    <div :class="{'show':activeModal}" class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <Addlist  v-on:close-modal="closeModal" v-on:add-bookmark="addbookmark" />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Viewlist from "@/components/View.vue";
import Addlist from "@/components/Addbookmark.vue";
import axios from 'axios';
import { log } from 'util';
import { setTimeout } from 'timers';

export default {
  name: "home",
  components: {
    Viewlist,
    Addlist
  },
  data(){
    return{
         el: document.body,
         bookmarkers:[],
         activeModal:false,
         searchThis:""
    }
 
  }
  ,
  created(){
    axios.get("http://localhost:3004/bookMarker")
        .then(res => this.bookmarkers = res.data)
         .catch(e => {
             console.log(e);
             
          });
  },
  // mounted(){
     
  //     let dt =new Date().toDateString();
  //     let tt =new Date().toLocaleTimeString();
  //     let dttt = dt +" "+ tt;
  //     setInterval(()=>{
  //       this.getdt(dttt);
  //     },1000);
  // },

  methods:{
    // getdt(asd){
    //   document.querySelector(".date").innerHTML=asd;
    // },
    openModal(){
       this.activeModal =  !this.activeModal;
       this.el.classList.toggle("modal-open");
       this.el.insertAdjacentHTML("beforeend",`<div class="modal-backdrop fade show"></div>`);
    },
    closeModal(){
     this.activeModal =  false;
     this.el.classList.remove("modal-open");
     document.querySelector(".modal-backdrop").remove();
    },
    addbookmark(bookmark){
      const {name,url,webname}=bookmark;
      console.log(bookmark);
      
       axios.post("http://localhost:3004/bookMarker",{name,url,webname})
        .then(res => this.bookmarkers = [...this.bookmarkers,res.data])
         .catch(e => {
             console.log(e);
          });
          setTimeout(()=>{
             this.activeModal=false;
             document.querySelector(".modal-backdrop").remove();
             this.el.classList.remove("modal-open");
          },1000);
              
    },
     deletebookmark(id){
       axios.delete(`http://localhost:3004/bookMarker/${id}`)
        .then(res => (this.bookmarkers = this.bookmarkers.filter(bookmark => bookmark.id !== id)))
         .catch(e => {
             console.log(e);
          });         
    },
    editbook(id){
      console.log(id);
       axios.put(`http://localhost:3004/bookMarker/${id}`,{name:"gopal",url:"gopal.com",webname:"test"})
        .then(res => console.log(res.data))
         .catch(e => {
             console.log(e);
        });         
    }

  }
      
};
</script>
<style scoped>

</style>
