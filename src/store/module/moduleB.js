export default {
  namespaced:true ,
   state:{
     b:"我是moduleB"
   } , 
   mutations:{
     changeB(state , str){
        return state.b += str
     }
   } , 
   getters:{} , 
   actions:{}
  
}