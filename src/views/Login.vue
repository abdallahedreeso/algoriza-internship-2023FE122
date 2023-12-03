<template>
  <div class="main">
    <!-- Logo -->
    <div class="logo flex">
      <svg
        class="mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
          fill="#2F80ED"
        />
      </svg>
      <p class="font-medium">my Dream Place</p>
    </div>

    <!-- Login form -->
    <div class="form mt-24 mx-auto w-96">
      <h2 class="font-semibold text-center mb-10">Sign in</h2>
      <form @submit.prevent="handleLogin()">
        <label class="text-sm font-medium" for="email">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full rounded bg-gray6 p-3 mb-5 focus:outline-none"
          required
        />

        <label class="text-sm font-medium" for="password">Password</label>
        <div
          class="password-container flex gap-2.5 p-3 w-full rounded bg-gray6 mb-5"
        >
          <input
            v-model="password"
            :type="passwordType"
            id="password"
            class="w-full rounded bg-gray6 focus:outline-none"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <img
            src="../assets/images/icons/eye 1.svg"
            alt="Show password eye icon"
            class="hover:cursor-pointer"
            @click="togglePassword"
          />
        </div>

        <button @click="tripStore.login = true" class="btn w-full mb-5">
          Sign in
        </button>

        <p class="text-base font-normal text-center">
          Don't have an account? <a href="#" class="text-blue1">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { useTripStore } from "../stores/TripsStore";
import { ref } from "vue";
import router from "@/router";

export default {
  setup() {
    const tripStore = useTripStore();
    const passwordType = ref("password");
    const email = ref("");
    const password = ref("");

    // show and hide password
    const togglePassword = () => {
      if (passwordType.value === "password") {
        passwordType.value = "text";
      } else {
        passwordType.value = "password";
      }
    };

    // handleLogin
    const handleLogin = () => {
      if (email.value && password.value) {
        // const user = { email: email.value, password: password.value };

        // Create a token
        tripStore.token = "Done";

        // Store token in localStorage
        localStorage.setItem("token", tripStore.token);
        console.log(tripStore.token);

        // redirect to home or results page
        if (localStorage.getItem("searchResult")) {
          router.push("/searchResults");
        } else {
          router.push("/");
        }
      }
    };

    return {
      togglePassword,
      tripStore,
      passwordType,
      email,
      password,
      handleLogin,
    };
  },
};
</script>

<style>
</style>