<template>
    <div>
        <section>
  <!--for demo wrap-->
  <h1>Bookmarker App</h1>
  <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="searchThis">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary" ><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
            <th>#</th>
            <th>Technologies</th>
            <th>Url</th>
            <th>Website Name</th>
            <th>Action</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
                <tr v-for="bookmarker in searchbookmark" :key="bookmarker.id" :id="bookmarker.id">
                    <td>
                        {{bookmarker.id}}
                    </td>
                    <td scope="row">
                        {{bookmarker.name}}
                    </td>
                    <td> {{bookmarker.url}}</td>
                    <td> {{bookmarker.webname}}</td>
                    <td>
                      <router-link :to="{name: 'edit', params: { id: bookmarker.id }}" class="btncustom btn btn-info"><i class="fa fa-edit" aria-hidden="true"></i> Edit</router-link>
                      
                      <button  class="btncustom d-none"  @click="editThis(bookmarker.id)"><i class="fa fa-edit" aria-hidden="true"></i></button> 
                      
                      <button class="btncustom btn btn-danger" @click="deleteThis(bookmarker.id)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button></td>
                </tr>
      </tbody>
    </table>
  </div>
</section>
    </div>
</template>
<script>
    export default {
       name:"Viewlist",
       props:["bookmarkers"],
       data(){
             return{
               searchThis:"",
               newData:""
             }
       },
       computed:{
          searchbookmark(){
          return this.bookmarkers.filter(bookmark=>{
            return bookmark.name.toLowerCase().includes(this.searchThis.toLowerCase())
      });
    }
       },
       methods:{
           deleteThis(id){
               this.$emit("delete-this",id);
           },
           editThis(id){
               this.$emit("edit-this",id);
           }
       }
    }
</script>
<style lang="scss">
   
h1{
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th {
	padding: 9px 15px!important;
	text-align: left!important;
	font-weight: 500;
	font-size: 12px;
	color: #fff;
	text-transform: uppercase;
}
td {
	padding: 7px 15px!important;
	text-align: left;
	vertical-align: middle;
	font-weight: bold;
	font-size: 12px;
	color: #fff;
	border-bottom: solid 1px rgba(255, 255, 255, 0.38);
}
.btncustom {
	padding: 3px 7px !important;
	margin: 0 5px;
	border: 0;
	background: transparent;
	font-size: 13px !important;
    i {
    color: #fff;  
    }
}


</style>