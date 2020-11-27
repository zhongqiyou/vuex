import Vue from 'vue'
import Vuex from "vuex";
import moduleA from "./module/moduleA";
import moduleB from "./module/moduleB"


Vue.use(Vuex);

// 核心概念:
//        state:  访问状态对象
//        Getters: 计算过滤操作
//        Mutations: 修改状态(同步)
//        Actions: 修改状态(异步)
//        Modules:模块组

// 注意*:只有mutations函数 , 才有权利修改 state 中的数据

// 在 actions 中 , 不能直接修改 state 中的数据;
// 必须通过 context.commit() 触发某个 mutations 才行 




 const store = new Vuex.Store({   
  modules:{
    moduleA ,
    moduleB
   
  }
 

})

export default store;

