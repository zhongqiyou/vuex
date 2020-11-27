export default {
  namespaced: true,
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
}
