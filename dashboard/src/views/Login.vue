<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="text-center mb-3">
          <img src="@/assets/logo.png" style="width: 200px" />
        </div>
        <div class="card shadow">
          <div class="card-title text-center border-bottom">
            <h2 class="p-3">Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="doLogin">
              <div class="mb-4">
                <label for="username" class="form-label">Username/Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="email"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                />
              </div>

              <div class="d-grid">
                <button type="submit" class="btn text-light btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    doLogin(event) {
      if (this.email.length > 0 && this.password.length > 0) {
        var _self = this;
        this.axios
          .post("/api/auth/signin", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            console.log(response);
            this.$store.dispatch("setCurrentLoggedInUser", response.data);
            _self.axios.defaults.headers.common["x-access-token"] =
              response.data.accessToken;
            _self.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
