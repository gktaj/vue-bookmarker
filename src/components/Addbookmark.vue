<template>
    <div>
      <form action="#" @submit="addBookMarker">     
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Bookmark</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeThis">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">

  <div class="form-group">
    <label for="tech">Technology</label>
    <input type="text" class="form-control" id="tech" v-model="name">
  </div>
  <div class="form-group">
    <label for="url">Url</label>
    <input type="text" class="form-control" id="url" v-model="url">
  </div>
    <div class="form-group">
    <label for="webName">Website Name:</label>
    <input type="text" class="form-control" id="webName" v-model="webname">
  </div>

  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeThis">Close</button>
            <button type="submit" class="btn btn-primary"><i class="fa fa-add" aria-hidden="true"></i> Add</button>
          </div>
        </div>
      </div>
      </form>  
    </div>
</template>
<script>
    export default {
       name:"Addlist",
       data(){
           return{
                name:"",
                url:"",
                webname:""
           }
       },
       methods:{
         closeThis(){
           this.$emit("close-modal");
         },
         addBookMarker(e){
           e.preventDefault();
           const newBookMarker={
             name:this.name,
             url:this.url,
             webname:this.webname
           }
            this.$emit("add-bookmark",newBookMarker);
         }
       }
    }
</script>
<style>
    
</style>