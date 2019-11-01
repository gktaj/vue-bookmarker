<template>
      <div>
        <form action="#"  @submit.prevent="updatebookmark" >     
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add New Bookmark</h5>
                <router-link :to="{name: 'home'}" class="btncustom close"> <span aria-hidden="true">&times;</span></router-link>
                  
              </div>
              <div class="modal-body">
                    <div class="form-group">
                        <label for="tech">Technology</label>
                        <input type="text" class="form-control" id="tech" v-model="bookmarkers.name">
                    </div>
                    <div class="form-group">
                        <label for="url">Url</label>
                        <input type="text" class="form-control" id="url" v-model="bookmarkers.url">
                    </div>
                        <div class="form-group">
                        <label for="webName">Website Name:</label>
                        <input type="text" class="form-control" id="webName" v-model="bookmarkers.webname">
                    </div>
              </div>
              <div class="modal-footer">
                <router-link :to="{name: 'home'}" type="button" class="btn btn-secondary" data-dismiss="modal">Close</router-link>
                <button type="submit" class="btn btn-primary"><i class="fa fa-add" aria-hidden="true"></i> Add</button>
              </div>
            </div>
          </div>
          </form> 
      </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Editbookmark",
    data(){
        return{
           bookmarkers:{name:"",url:"",webname:""}
        }
    },
   created(){
    axios.get(`http://localhost:3004/bookMarker/${this.$route.params.id}`)
        .then(res =>  this.bookmarkers=res.data)
         .catch(e => {
             console.log(e);
             
          });
  },
  methods:{
      updatebookmark(a){
        const newbookmarker={
          name:this.bookmarkers.name,
          url:this.bookmarkers.url,
          webname:this.bookmarkers.webname,
        }
        const {name,url,webname} =newbookmarker;
         axios.put(`http://localhost:3004/bookMarker/${this.$route.params.id}`,newbookmarker )
         .then(res=>{if (res.statusText) {
           this.$router.push({name: 'home'})
         }})
         .catch(err=>console.log(err))
      }
  }

}
</script>

<style>

</style>