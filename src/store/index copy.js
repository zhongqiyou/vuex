import Vue from 'vue'
import Vuex from "vuex";


Vue.use(Vuex);

// 核心概念:
//        state:  访问状态对象
//        Getters: 计算过滤操作
//        Mutaions: 修改状态(同步)
//        Actions: 修改状态(异步)
//        Modules:模块组

 const store = new Vuex.Store({
   state :{
     count:0 , 
     obj:{title:"我是一个对象" , name:"姓名" , age:22} , 
     arr:["我是数组"] 
   } , 

   mutations:{
   
     add(state , num){
       state.count += num
     } , 
     reduce(state){
        state.count--
     }

   } , 

   getters:{
     count(state){
       return state.count += 100;
     }
   } ,

   actions:{
     addActions(content){
      content.commit("add" , 10);
     } , 
     reduceActions({commit}){
       setTimeout(() => {
        commit("reduce") 
       }, 3000);

      console.log("我比reduce先执行");
     }
   }
 

})

export default store;

