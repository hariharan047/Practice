<template>
  <div class="h-screen p-20">
    <div class="p-10">
      <div
        class="md:w-2/3 lg:w-2/3 mx-auto h-[700px] bg-[#afdaf0] border md:flex p-10 md:justify-center md:justify-items-center"
      >
        <div
          class="w-1/2 md:flex p-10 bg-[url('./assets/bg1.jpg')] rounded-md bg-no-repeat bg-cover justify-center items-center"
        >
          <div class="text-center text-green-300 space-y-5">
            <p class="">Nice to see you again</p>
            <h2 class="p-2 font-bold text-xl">Welcome Back</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum, soluta maiores. Pariatur, perferendis? Quisquam, nemo
              officia. Minus atque facilis blanditiis, doloribus placeat
              eligendi ipsa magnam minima, reprehenderit, mollitia nostrum ea?
            </p>
          </div>
        </div>
        <div
          class="md:flex md:w-1/2 bg-white justify-center items-center mx-auto"
        >
          <div class="text-left space-y-5">
            <div v-if="loginFailed">
              <p class="text-[#f89c37]">
                Invalid username or password. Please try again.
              </p>
            </div>
            <h2 class="text-3xl text-black font-bold">Sign Up</h2>
            <form @submit.prevent="LoginDetails" class="space-y-5">
              <div class="space-y-2">
                <label for="id">User Id</label>
                <input
                  type="text"
                  v-model="id"
                  class="block px-3 py-2 rounded-md border-2 focus:border-red-500 focus:outline-none border-[#2f2f58] w-full"
                  name=""
                  id=""
                />
              </div>
              <div class="space-y-2">
                <label for="name">User Name</label>
                <input
                  type="text"
                  v-model="name"
                  class="block px-3 py-2 w-full rounded-md border-2 focus:border-red-500 focus:outline-none border-[#2f2f58]"
                  name=""
                  id=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="px-4 py-2 border-[#2f2f58] rounded-md border-2 text-[#2f2f58] hover:text-[#f89c37]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <button class="" @click="registerUser(user)">Register</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // user: [{ id: "", name: "" }],
      id: "",
      name: "",
      loginFailed: false,
    };
  },
  computed: {
    // users() {
    //   return this.$store.state.users;
    // },
  },
  methods: {
    // registerUser(user) {
    //   const date = new Date();
    //   user.register = true;
    //   this.$store.state.registration.push({
    //     userId: user.id,
    //     name: user.name,
    //     date: date.getMonth() + "/" + date.getDay(),
    //   });
    // },
    LoginDetails() {
      if (this.id === "CHA0035" && this.name === "Hari") {
        this.$router.push("/home-page");
      } else {
        this.loginFailed = true;
      }
    },
  },
};
</script>

<style></style>
