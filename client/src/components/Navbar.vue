<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top px-5" id="navbar-custom">
      <a class="navbar-brand mr-auto" href="#" @click="toDashboard">Ren E-Com</a>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          > {{ userName }} </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="logout">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      userName: localStorage.currentUserName,
    };
  },
  methods: {
    toDashboard() {
      return this.$router.push({ name: 'MainPage' })
    },
    logout() {
      console.log('logout');
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style>
#navbar-custom {
  background: #147dd9;
}
</style>
