<template>
  <div class="grid grid-cols-3 grid-flow-col justify-between items-center mb-7">
    <!-- LOGO -->
    <div class="logo flex">
      <svg
        class="mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
          :fill="tripStore.logoColor"
        />
      </svg>
      <p class="font-medium">my Dream Place</p>
    </div>

    <!-- Nav -->
    <nav>
      <ul class="grid grid-cols-5 justify-between">
        <li><a href="#">Home</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Activities</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <!-- Login and user pp -->
    <div class="flex justify-end mr-2">
      <button class="btn px-5" v-if="!token">
        <router-link to="/login">Login</router-link>
      </button>

      <div class="profilePic flex gap-5 items-center" v-if="token">
        <svg
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.81998C17.9387 7.70401 17.6216 6.61119 17.0252 5.66795C16.4288 4.72471 15.5776 3.9696 14.5699 3.48998C14.3128 3.03332 13.9376 2.65412 13.4838 2.39201C13.0299 2.1299 12.514 1.99451 11.9899 1.99998C10.8999 1.99998 9.91994 2.58998 9.39994 3.51998C7.44994 4.48998 6.09994 6.49998 6.09994 8.81998V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
            :fill="tripStore.notificationsColor"
          />
          <path
            d="M14.8299 20.01C14.6196 20.5922 14.2352 21.0954 13.7289 21.4515C13.2226 21.8075 12.6189 21.999 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07L14.8299 20.01Z"
            :fill="tripStore.notificationsColor"
          />
          <circle
            cx="17"
            cy="6"
            r="5"
            fill="#EB5757"
            :stroke="tripStore.notificationsStroke"
            stroke-width="2"
          />
        </svg>

        <img
          src="../assets/images/icons/profile-pic/Ellipse 2.svg"
          alt="profile picture"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useTripStore } from "@/stores/TripsStore";
export default {
  setup() {
    const tripStore = useTripStore();
    const token = localStorage.getItem("token");
    return {
      tripStore,
      token,
    };
  },
};
</script>

<style>
</style>