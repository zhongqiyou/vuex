<template>
<div id="app">
  <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
    <!-- start -->
    <el-form ref="form" label-width="80px">
      <el-form-item label="ID:">
        <el-input v-model="form.ID"></el-input>
      </el-form-item>

      <el-form-item label="is_admin:">
        <el-radio-group v-model="form.is_admin">
          <el-radio label="选择1"></el-radio>
          <el-radio label="选择2"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="moblie:">
        <el-input v-model="form.moblie"></el-input>
      </el-form-item>

      <el-form-item label="name:">
        <el-input v-model="form.name" type="text"></el-input>
      </el-form-item>

      <el-form-item label="password:">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>

      <el-form-item label="prohibit:">
        <el-radio-group v-model="form.prohibit">
          <el-radio label="选择1"></el-radio>
          <el-radio label="选择2"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="prohitext:">
        <el-radio-group v-model="form.prohitext">
          <el-radio label="选择1"></el-radio>
          <el-radio label="选择2"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="date:">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

    </el-form>
    <!-- end -->

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>

 {{$store.state.moduleB.b}}
 
<TestVuex></TestVuex>



</div>
</template>

<script>
import TestVuex from "@/components/TestVuex"
import store from "./store/index";
export default {
  name: 'App',
  data() {
    return {
      massage:"B" ,
      dialogVisible: false,
      form: {
        ID: '',
        is_admin: '',
        moblie: '',
        name: '',
        password: '',
        prohibit: '',
        prohitext: '',
        date: ''
      }
    }
  },
  store ,
  components:{
TestVuex
  } ,
  methods: {
     onSlotB(){
       console.log("插槽B的按钮")
         
     } ,
     onPass(a , b , c , d){
        console.log(a , b , c , d);
     }
  } ,

  mounted() {
   console.log(store.state.count);
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  background: #cccccc;
}
</style>
