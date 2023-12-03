<template>
  <form
    @submit.prevent="handleSearch()"
    class="search-bar shadow-lg flex bg-white rounded items-center gap-x-2.5"
  >
    <!-- location -->
    <div class="search-box rounded w-64">
      <img class="mr-2.5" src="../assets/images/icons/location 1.svg" />
      <select
        v-model="location"
        required
        name="location"
        class="focus:outline-none w-9/12 bg-transparent text-gray2 opacity-70 text-center"
      >
        <option value="" hidden selected="true" disabled="disabled">
          <span class="">where are you going?</span>
        </option>
        <option
          class="border-t-2"
          v-for="dest in tripStore.destinations"
          :key="dest.dest_id"
          :value="dest.country"
        >
          {{ dest.country }}
        </option>
      </select>
      <img
        class="ml-2"
        src="../assets/images/icons/arrow-down 1.svg"
        alt="arrow down"
      />
    </div>
    <!-- check in -->
    <div class="search-box rounded w-40">
      <img class="mr-2.5" src="../assets/images/icons/calendar 1.svg" />
      <input
        v-model="checkInDate"
        required
        :type="type"
        onfocus="(this.type='date')"
        placeholder="Check in date"
        id="checkInDate"
        name="checkInDate"
        class="no-calendar bg-transparent text-gray2 w-4/5"
      />
    </div>
    <!-- check out -->
    <div class="search-box rounded w-40">
      <img class="mr-2.5" src="../assets/images/icons/calendar 1.svg" />
      <input
        v-model="checkOutDate"
        required
        :type="type"
        onfocus="(this.type='date')"
        placeholder="Check out date"
        id="checkOutDate"
        name="checkOutDate"
        class="no-calendar bg-transparent text-gray2 w-4/5"
      />
    </div>
    <!-- Guests -->
    <div class="search-box rounded w-40">
      <img class="mr-2.5" src="../assets/images/icons/user-square 1.svg" />
      <input
        v-model="guests"
        type="text"
        name="guestsNumber"
        placeholder="Guests"
        class="bg-transparent w-28 text-gray2"
      />
    </div>
    <!-- Rooms -->
    <div class="search-box rounded w-40">
      <img
        class="mr-2.5"
        src="../assets/images/icons/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg"
      />
      <input
        v-model="rooms"
        type="text"
        name="roomsNumber"
        placeholder="Rooms"
        class="bg-transparent w-28 text-gray2"
      />
    </div>
    <!-- search button -->
    <div class="w-40">
      <button class="btn px-10 w-full">Search</button>
    </div>
  </form>
</template>

<script>
import { useTripStore } from "@/stores/TripsStore";
import { ref } from "vue";
import router from "@/router";

export default {
  setup() {
    const tripStore = useTripStore();
    const type = ref("text");
    const location = ref("");
    const checkInDate = ref("");
    const checkOutDate = ref("");
    const guests = ref("");
    const rooms = ref("");

    // get all the destinations from api
    tripStore.getAllDestinations();

    // Handle Search
    const handleSearch = () => {
      tripStore.searchResult.location = location.value;
      tripStore.searchResult.checkInDate = checkInDate.value;
      tripStore.searchResult.checkOutDate = checkOutDate.value;
      tripStore.searchResult.guests = guests.value;
      tripStore.searchResult.rooms = rooms.value;
      // save search results in localstorage
      localStorage.setItem("searchResult", tripStore.searchResult);

      // redirect to login or search results page
      if (!localStorage.getItem("token")) {
        router.push("/login");
      } else {
        router.push("/searchResults");
      }
    };

    return {
      tripStore,
      type,
      handleSearch,
      location,
      checkInDate,
      checkOutDate,
      guests,
      rooms,
    };
  },
};
</script>

<style>
.search-bar {
  min-width: 1228px;
  padding: 11px 12px 12px 12px;
  position: absolute;
  top: 61.5%;
  left: 16.8%;
}

.search-bar select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

.no-calendar::-webkit-calendar-picker-indicator {
  opacity: 0;
  pointer-events: none;
  display: none;
}

input::placeholder {
  color: #828282;
}
</style>