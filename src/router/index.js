import { createWebHistory, createRouter } from "vue-router";
import CountryList from '../components/CountryList.vue';

const routes = [
    {
        path: "/",
        name: "countryList",
        component: CountryList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;