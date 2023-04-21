<template>
  <div>
    <h1>Country List</h1>

      <li className = "countryListLI" v-for="country in countries" :key="country.id" @click="showDetails(country)">
        {{ country.name }}
      </li>
    <!-- v-if="country" checks if country is empty or not, if null it disappears-->
    <CountryDetails v-if="country" :country="country" @cancel="cancelDetails" />
    
  </div>
</template>
<script>
//import axios from "axios";
import CountryDetails from "./CountryDetails.vue";
import CountryDataService from "@/service/CountryDataService";
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
    this.getData();
  },
  methods: {
    getData() {
      CountryDataService.getCountries()
      .then(response=>{
        this.countries=response.data;
      })
      .catch(error => {
        console.log(error);
      })
    },
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