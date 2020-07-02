<template>
  <div class="row justify-content-center mt-5 text-center">
    <div class="col-4">
      <form class="form-signin" @submit.prevent="register">
        <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
        <label for="name" class="sr-only">Name</label>
        <input
          type="text"
          v-model="name"
          id="name"
          class="form-control"
          placeholder="Username"
          required
          autofocus
        />
        <label for="address" class="sr-only">Address</label>
        <input
          type="text"
          v-model="address"
          id="address"
          class="form-control"
          placeholder="Address"
          required
        />
        <label for="inputEmail" class="sr-only">Email</label>
        <input
          type="email"
          v-model="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email"
          required
          autofocus
        />
        <label for="password" class="sr-only">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="form-control"
          placeholder="Password"
          required
        />
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Register</button>
        <router-link class="btn btn-lg btn-primary btn-block mt-3" to="/login">Cancel</router-link>
        <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
      </form>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      baseUrl: 'http://localhost:3000',
      name: '',
      address: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      axios({
        method: 'post',
        url: `${this.baseUrl}/customers/register`,
        data: {
          name: this.name,
          address: this.address,
          email: this.email,
          password: this.password,
        },
      })
        .then((respon) => {
          console.log(respon, '<<< respon');
          // const { id, email, name, token } = respon.data;
          // localStorage.setItem('currentUserId', id);
          // localStorage.setItem('currentUserEmail', email);
          // localStorage.setItem('currentUserName', name);
          // localStorage.setItem('token', token);
          this.$router.push({ name: 'Login' });
        })
        .catch((err) => {
          console.log(err, '<<< err login');
        });
    },
  },
};
</script>