<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      axios
        .post('/login', {
          username: this.username,
          password: this.password,
        })
        .then(response => {
          // Setelah berhasil login, simpan token di local storage
          localStorage.setItem('token', response.data.token);
          // Redirect ke halaman dashboard
          this.$router.push('/dashboard');
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
