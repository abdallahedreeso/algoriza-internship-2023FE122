<template>
  <div class="main">
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- cover -->
    <div class="cover rounded text-center text-white">
      <h1 class="text-3xl font-semibold mb-5">Enjoy Your Dream Vacation</h1>
      <p>
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <!-- search section -->
      <Searchbar></Searchbar>
    </div>

    <!-- WARNING -->
    <Warning></Warning>

    <!-- section 1 -->
    <SectionOne></SectionOne>

    <!-- Section 2 -->
    <SectionTwo></SectionTwo>

    <!-- section 3 -->
    <SectionThree></SectionThree>

    <!-- mobile app -->
    <section class="mobile-app mt-14 flex">
      <div class="w-1/2">
        <h2 class="text-white mb-6 mt-12 font-semibold">
          Download the mobile application for bonus coupons and travel codes
        </h2>
        <button class="btn px-5">Download mobile app</button>
      </div>
      <div class="smartphone"></div>
    </section>

    <!-- Explore -->
    <div class="text-center mt-20">
      <h2 class="font-semibold">Explore the world with My Dream place</h2>
      <p class="text-blue1 mt-4">
        <small>Discover new places and experiences</small>
      </p>
    </div>

    <!-- End -->
    <div class="footer mt-20 grid grid-cols-5 gap-28">
      <div>
        <!-- LOGO -->
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
        <p class="text-sm ml-7 mt-2">Your next goto companion for travel</p>
      </div>
      <!-- second col -->
      <div>
        <p class="font-medium">Company</p>
        <ul class="mt-5">
          <li class="text-sm"><a href="#">About</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Jobs</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Newsroom</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Advertising</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Contact us</a></li>
        </ul>
      </div>
      <!-- third col -->
      <div>
        <p class="font-medium">Explore</p>
        <ul class="mt-5">
          <li class="text-sm"><a href="#">Australia</a></li>
          <li class="mt-2.5 text-sm"><a href="#">New Zealand</a></li>
          <li class="mt-2.5 text-sm">
            <a href="#">United States America (USA)</a>
          </li>
          <li class="mt-2.5 text-sm"><a href="#">Greece</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Maldives</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Singapore</a></li>
          <li class="mt-2.5 text-sm text-blue1"><a href="#">See more</a></li>
        </ul>
      </div>
      <!-- fourth col -->
      <div>
        <p class="font-medium">Terms and Policies</p>
        <ul class="mt-5">
          <li class="text-sm"><a href="#">Privacy Policy</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Terms of use</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Acessibility</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Reward system policy</a></li>
        </ul>
      </div>
      <!-- 5th col -->
      <div>
        <p class="font-medium">Help</p>
        <ul class="mt-5">
          <li class="text-sm"><a href="#">Support</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Cancel your bookings</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Use Coupon</a></li>
          <li class="mt-2.5 text-sm"><a href="#">Refund Policies</a></li>
          <li class="mt-2.5 text-sm">
            <a href="#">International Travel Documents</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer class="bg-gray3 py-2.5 text-right pr-52 mt-9">
    <p>&copy; my Dream Place 2022</p>
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Searchbar from "../components/Searchbar.vue";
import Warning from "../components/Warning.vue";
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";

export default {
  components: {
    Navbar,
    Searchbar,
    Warning,
    SectionOne,
    SectionTwo,
    SectionThree,
  },
  setup() {
    return {};
  },
};
</script>

<style>
.main {
  padding: 24px 100px;
}

.cover {
  height: 500px;
  background-image: url("../assets/images/cover.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 190px 550px 0;
}

.mobile-app {
  min-height: 280px;
  background-image: url("../assets/images/mobile-app-cover/Rectangle\ 18.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 0 69px;
}

.mobile-app .smartphone {
  background-image: url("../assets/images/mobile-app-cover/Isolated_right_hand_with_smartphone\ 2\ \(2\).png");
  width: 900px;
}
</style>