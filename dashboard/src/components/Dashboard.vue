<template>
  <div>
    <h1>Dashboard</h1>
    <nav>
      <ul>
        <li><router-link to="/dashboard/grafik">Grafik</router-link></li>
        <li><router-link to="/dashboard/report">Report</router-link></li>
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
