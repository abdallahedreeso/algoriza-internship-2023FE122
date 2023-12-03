import { defineStore } from "pinia";
// import axios from "axios";
const axios = require("axios");

export const useTripStore = defineStore("tripStore", {
  state: () => ({
    destinations: [],
    searchResult: {
      location: "",
      checkInDate: "",
      checkOutDate: "",
      guests: Number,
      rooms: Number,
    },
    token: "",
    logoColor: "#2F80ED",
    notificationsColor: "#828282",
    notificationsStroke: "white",
  }),

  actions: {
    async getAllDestinations() {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
        params: { query: "man" },
        headers: {
          "X-RapidAPI-Key":
            "3adee8aba9msh4c6286bb56bd86fp16d932jsneedd9a50768b",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.destinations = response.data.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
