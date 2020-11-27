<template>
   <div>
      测试vuex
     <button @click="add(10)">jiajia</button>
     <button @click="reduce()">jianjian</button>


     <button @click="addActions(10)">jiajia</button>
     <button @click="reduceActions()">jianjian</button>

    <div v-for="(item , index) in obj" :key="index">
         {{item}} -- {{index}}
    </div>
     {{$store.state.count}}
     ````{{count}}````{{obj}}``````{{arr}}````````{{getTes}}

     ---------------{{b}}--------
     <button @click="changeB('命名空间')">changeB</button>

     <h3>{{$store.state.moduleA.count}}</h3>

     <button @click="getFunData">获取方法与值</button>
    
   </div>
</template>

<script>
import {mapState ,mapMutations , mapGetters, mapActions} from "vuex";
export default {

   methods:{
    ...mapMutations("moduleA" , ["add" , "reduce"]) ,
    ...mapMutations("moduleB" , ["changeB"]) ,
    ...mapActions("moduleA"  , ["addActions" , "reduceActions"]) , 
     getFunData(){
         console.log(this.count);

         this.changeB("neibudiaoyong");

       

      } , 

    
   
   } , 
   computed:{
      ...mapState("moduleA" , ["count" ,  "obj" , "arr"]) , 
      ...mapState("moduleB" , ["b"]) , 
      ...mapGetters("moduleA" , ["count"]) ,
      getTes(){
         return "计算属性"
      } ,
     
   } , 
   created(){
      console.log(this.$store.state.moduleA);
   }

        
       
      
   
 
}
</script>