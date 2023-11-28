<template>
  <form
    class="search-bar shadow-lg flex bg-white rounded items-center gap-x-2.5"
  >
    <!-- location -->
    <div class="search-box rounded">
      <img class="mr-2.5" src="../assets/images/icons/location 1.svg" />
      <select
        required
        name="location"
        class="focus:outline-none w-40 bg-transparent text-gray2 text-center"
      >
        <option value="" hidden selected="true" disabled="disabled">
          where are you going?
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
    <div class="search-box rounded">
      <img class="mr-2.5" src="../assets/images/icons/calendar 1.svg" />
      <input
        required
        :type="typeIn"
        placeholder="Check in date"
        onfocus="(this.typeIn='date')"
        id="checkInDate"
        name="checkInDate"
        class="no-calendar bg-transparent text-gray2"
      />
    </div>
    <!-- check out -->
    <div class="search-box rounded">
      <img class="mr-2.5" src="../assets/images/icons/calendar 1.svg" />
      <input
        required
        type="date"
        id="checkOutDate"
        name="checkOutDate"
        class="no-calendar bg-transparent text-gray2"
      />
    </div>
    <!-- Guests -->
    <div class="search-box rounded">
      <img class="mr-2.5" src="../assets/images/icons/user-square 1.svg" />
      <input
        type="text"
        name="guestsNumber"
        placeholder="Guests"
        class="bg-transparent w-28 text-gray2"
      />
    </div>
    <!-- Rooms -->
    <div class="search-box rounded">
      <img
        class="mr-2.5"
        src="../assets/images/icons/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg"
      />
      <input
        type="text"
        name="roomsNumber"
        placeholder="Rooms"
        class="bg-transparent w-28 text-gray2"
      />
    </div>
    <!-- search button -->
    <div>
      <button class="btn px-10">Search</button>
    </div>
  </form>
</template>

<script>
import { useTripStore } from "@/stores/TripsStore";
import { ref } from "vue";
export default {
  setup() {
    const tripStore = useTripStore();
    const typeIn = ref("text");
    tripStore.getAllDestinations();

    return { tripStore, typeIn };
  },
};
</script>

<style>
.search-bar {
  min-width: 1228px;
  padding: 11px 12px 12px 12px;
  position: relative;
  top: 50%;
  left: -51%;
}

.search-bar select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

option {
  border-bottom: 1px solid black;
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