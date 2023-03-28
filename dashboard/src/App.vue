<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Login</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  mounted() {
    // Jika belum login, redirect ke halaman login
    if (!localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
