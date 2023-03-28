<template>
  <h1>Report</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.status }}</td>
        </tr>
      </tbody>
    </table>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    // Ambil data dari server
    axios
      .post('/', {
        query: `
          query {
            users {
              id
              nama
              email
              status
            }
          }
        `,
      })
      .then(response => {
        this.users = response.data.data.users;
      });
  },
};
</script>