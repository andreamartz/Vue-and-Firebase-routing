<template>
  <nav class="main-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>
    <h2>User Profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile', params: { user_id: id } }">
          <span>Profile for {{ id }}</span>
        </router-link>
      </li>
    </ul>
    <h2>Navigation Controls</h2>
    <ul>
      <!-- programmatically redirect the user -->
      <li><button @click="goBack">Go Back</button></li>
      <li><button @click="goHome">Redirect to Home</button></li>
      <li><button @click="goForward">Go Forward</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      // imagine that these user IDs came from a database
      userIds: ["1", "2", "3", "4"]
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" }); // use the name of the route you want to redirect to (use the same name you gave it in index.js)
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
