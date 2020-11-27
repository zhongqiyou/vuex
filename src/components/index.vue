<template>
  <el-row>
    <el-button @click="click" type="primary">主要按钮</el-button>
  </el-row>
</template>

<script>
  import { getLogin } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {}
  },
  filters: {

  },
  created() {
  },
  methods: {
    click() {
      return new Promise((resolve, reject) => {
        getLogin().then(res => {
          let { data } = res
          if (res.status === 200) {
            localStorage.setItem('TOKEN', `Bearer ${data.token}`)
            localStorage.setItem('USER_INFO', JSON.stringify(data))
            this.$router.push({ path: '/' })
          }
        }).catch(err => {
          console.log(err.message)
        })
      })
    }
  }
}
</script>
