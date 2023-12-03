<template>
  <header>
    <Navbar class="text-white"></Navbar>
    <Searchbar></Searchbar>
  </header>

  <div class="main mt-28">
    <div class="flex gap-8">
      <!-- filtering -->
      <div class="filtering w-2/7">
        <!-- search -->
        <div class="search bg-gray6 p-5 rounded">
          <h4 class="text-base font-medium mb-4">Search by property name</h4>
          <div
            class="flex bg-white p-3 gap-2.5 items-center rounded border border-gray6"
          >
            <img src="../assets/images/icons/search 1.svg" alt="Search icon" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="eg. Beach westpalm"
            />
          </div>
        </div>

        <!-- filter by -->
        <div>
          <h3 class="m-5 text-lg font-semibold">Filter by</h3>
          <div class="rounded border border-gray6">
            <div class="bg-gray6 p-5">
              <h4 class="text-base font-medium">Your budget per day</h4>
            </div>
            <div class="p-5">
              <input type="radio" name="budget" value="1" />
              <label for="value1" class="ml-2">$ 0 - $ 200</label><br />
              <input type="radio" name="budget" value="2" />
              <label for="value1" class="ml-2">$ 200 - $ 500</label><br />
              <input type="radio" name="budget" value="3" />
              <label for="value1" class="ml-2">$ 500 - $ 1,000</label><br />
              <input type="radio" name="budget" value="4" />
              <label for="value1" class="ml-2">$ 1,000 - $ 2,000</label><br />
              <input type="radio" name="budget" value="5" />
              <label for="value1" class="ml-2">$ 2,000 - $ 5,000</label><br />
            </div>
            <div class="flex justify-between px-5">
              <label for="toggle">Set your own budget</label>
              <button
                class="toggle-button"
                :class="{ active: isActive }"
                @click="toggle"
              >
                <span class="slider shadow-sm shadow-black"></span>
              </button>
            </div>
            <div class="mt-2 px-5">
              <div class="p-2.5 mb-5 border border-dashed">
                <input
                  type="text"
                  :disabled="!isActive"
                  placeholder="Min budget"
                  class="border p-3 w-28 rounded"
                />
                <input
                  type="text"
                  :disabled="!isActive"
                  placeholder="Max budget"
                  class="border p-3 w-28 ml-3 rounded"
                />
                <br />
                <p class="text-xs font-normal text-gray2">
                  Press Enter to filter
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Rating -->
        <div class="rounded border border-gray6 mt-5">
          <div class="bg-gray6 p-5">
            <h4 class="text-base font-medium">Rating</h4>
          </div>
          <div class="p-5">
            <p class="text-sm font-normal mb-2">Show only ratings more than</p>
            <div class="rounded border border-gray6 flex">
              <span class="w-1/5 flex p-3.5 border border-gray6 cursor-pointer"
                ><p>1</p>
                <img src="../assets/images/icons/star-s-fill 1.svg" alt="star"
              /></span>
              <span class="w-1/5 flex p-3.5 border border-gray6 cursor-pointer"
                ><p>2</p>
                <img src="../assets/images/icons/star-s-fill 1.svg" alt="star"
              /></span>
              <span class="w-1/5 flex p-3.5 border border-gray6 cursor-pointer"
                ><p>3</p>
                <img src="../assets/images/icons/star-s-fill 1.svg" alt="star"
              /></span>
              <span class="w-1/5 flex p-3.5 border border-gray6 cursor-pointer"
                ><p>4</p>
                <img src="../assets/images/icons/star-s-fill 1.svg" alt="star"
              /></span>
              <span class="w-1/5 flex p-3.5 border border-gray6 cursor-pointer"
                ><p>5</p>
                <img src="../assets/images/icons/star-s-fill 1.svg" alt="star"
              /></span>
            </div>
          </div>
        </div>
      </div>

      <!-- results -->
      <div class="results w-5/7">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-semibold">
            Melbourne : 2,582 search results found
          </h2>
          <div class="border rounded border-gray3 items-center w-48 py-2 px-3">
            <p class="text-xs text-gray4 font-medium">Sort by</p>
            <select name="sortBy" id="sortBy" class="w-full">
              <option value="" selected>Recommended</option>
            </select>
          </div>
        </div>
        <!-- Cards -->
        <div class="my-6 p-5 flex gap-6 rounded border border-gray5">
          <img src="../assets/images/search-cards/Rectangle 25.png" alt="" />
          <div class="card-details w-full">
            <div class="flex justify-between">
              <h3 class="text-xl font-medium">Julia Dens Resort</h3>
              <p class="bg-Red py-1 px-2 rounded text-white">
                Book now and receive 15% off
              </p>
            </div>
            <div class="flex gap-3">
              <div class="flex">
                <span
                  ><img
                    class="w-6"
                    src="../assets/images/icons/star-s-fill 1.svg"
                    alt=""
                /></span>
                <span
                  ><img
                    class="w-6"
                    src="../assets/images/icons/star-s-fill 1.svg"
                    alt=""
                /></span>
                <span
                  ><img
                    class="w-6"
                    src="../assets/images/icons/star-s-fill 1.svg"
                    alt=""
                /></span>
                <span
                  ><img
                    class="w-6"
                    src="../assets/images/icons/star-s-fill 1.svg"
                    alt=""
                /></span>
                <span
                  ><img
                    class="w-3"
                    src="../assets/images/icons/star-s-fill 5.svg"
                    alt=""
                /></span>
              </div>
              <p>4.5 (1200 Reviews)</p>
            </div>
            <p class="mt-4 text-sm font-medium">
              Live a little and celbrate with champagne
            </p>
            <div class="flex justify-between">
              <p class="text-sm w-1/2">
                Reats include a glass of French champagne, parking and a late
                checkout. Gym included. Flexible cancellation applies
              </p>
              <div class="discount">
                <p class="py-1 px-2 bg-green1 rounded text-white">5% off</p>
              </div>
            </div>
            <div class="flex justify-between">
              <button class="btn py-2.5 px-4 mt-4">See availability</button>
              <div>
                <p class="text-xl font-medium text-right mt-2.5">$130</p>
                <p class="text-sm font-light">Includes taxes and fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COVID Warning -->
    <Warning></Warning>
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
  <!-- Footer -->
  <footer class="bg-gray3 py-2.5 text-right pr-52 mt-9">
    <p>&copy; my Dream Place 2022</p>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Searchbar from "@/components/Searchbar.vue";
import Warning from "@/components/Warning.vue";
import { useTripStore } from "@/stores/TripsStore";
import { ref } from "vue";

export default {
  components: { Navbar, Searchbar, Warning },

  setup() {
    const tripStore = useTripStore();
    tripStore.logoColor = "white";
    tripStore.notificationsColor = "white";
    tripStore.notificationsStroke = "#2867BC";
    const isActive = ref(false);

    const toggle = () => {
      isActive.value = !isActive.value;
    };
    return { tripStore, isActive, toggle };
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
  height: 200px;
  padding: 24px 100px 0;
}

.search-bar {
  top: 18.5%;
  left: 17%;
}

.toggle-button {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
  background-color: #ccc;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.slider {
  position: absolute;
  top: -4px;
  left: 0px;
  width: 26px;
  height: 26px;
  box-shadow: black;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.3s;
}

.active {
  background-color: #66bb6a; /* Color when active */
}

.active .slider {
  transform: translateX(30px); /* Position when active */
}
</style>