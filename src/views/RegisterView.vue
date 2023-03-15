<template>
  <form action="">
    <label for="user">User</label>
    <input type="text" name="" id="" v-model="user">
    <label for="email">Email</label>
    <input type="text" name="" id="" v-model="email">
    <label for="password">Password</label>
    <input type="text" name="" id="" v-model="password">
    <button type="submit" @click.prevent="register">Login</button>
  </form>
  <p>{{ feedback }}</p>
</template>

<script lang="ts" setup>

  import { ref } from 'vue';
  import useAuth from '@/store/auth';
  import router from '@/router';

  const store = useAuth();
  const user = ref('');
  const email = ref('');
  const password = ref('');
  const feedback = ref('');
  
  const register= async() => {
    feedback.value=''
    const response = await store.register(user.value,email.value,password.value);
    if (response==false) {
      feedback.value='error en el registro'
    }else {
      router.push({name: 'userlist'})
    }
  }

</script>