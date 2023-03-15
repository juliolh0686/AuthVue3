<template>
  <p>User View</p>
  <button type="submit" @click.prevent="logout">Logout</button>
  <p>{{ feedback }}</p>
</template>

<script lang="ts" setup>

  import { ref } from 'vue';
  import useAuth from '@/store/auth';
  import router from '@/router';

  const store = useAuth();
  const feedback = ref('')
  
  const logout= async() => {
    const response = await store.logout();
    if (response==false) {
      feedback.value='error en el logout'
    }else {
      router.push({name: 'login'})
    }
  }

</script>