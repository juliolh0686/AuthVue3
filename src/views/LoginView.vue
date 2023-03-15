<template>
  <form action="">
    <label for="email">Email</label>
    <input type="text" name="" id="" v-model="email">
    <label for="password">Password</label>
    <input type="text" name="" id="" v-model="password">
    <button type="submit" @click.prevent="login">Login</button>
  </form>
  <p>{{ feedback }}</p>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  import useAuth from '@/store/auth';
  import router from '@/router'

  const store = useAuth()
  const email = ref('')
  const password = ref('')
  const feedback = ref('')

  const login = async() => {
    const response = await store.login(email.value,password.value)

    if (response == false) {
      feedback. value = "login error"
    } else {
      router.push({name: 'userlist'})
    }
    
  }

</script>
