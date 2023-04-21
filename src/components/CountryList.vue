<template>
  <div>
    <h1>Country List</h1>
    <ul>
      <li className = "countryListLI" v-for="country in countries" :key="country.id" @click="showDetails(country)">
        {{ country.name }}
      </li>
    </ul>
    <!-- v-if="country" checks if country is empty or not, if null it disappears-->
    <CountryDetails v-if="country" :country="country" @cancel="cancelDetails" />
    
  </div>
</template>
<script>
import axios from "axios";
import CountryDetails from "./CountryDetails.vue";

export default {
  name: "CountryList",
  components: {
    CountryDetails,
  },
  data() {
    return {
      countries: [],
      country: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/countries")
      .then((response) => {
        this.countries = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    //passes country object as a prop to CountryDetails component
    showDetails(country) {
      this.country = country;
    },
    //clears country object hiding
    cancelDetails() {
      this.country = null;
    },
  },
};
</script>

<style>
  .countryListLI {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
  
  .countryListLI:hover {
    color: purple;
  }
  
  </style>