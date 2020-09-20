import Vue from 'vue';
import Router from 'vue-router';
import Main from "@/views/Main/Main";
import Contacts from '@/views/Contacts/Contacts';
import About from "@/views/About/About";
import Taxi from "@/views/Taxi/Taxi";
import Bus from "@/views/Bus/Bus";
import IT from "@/views/IT/IT";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: Main,
        },
        {
            path: '/contacts',
            name: 'Контакты',
            component: Contacts,
        },
        {
            path: '/about',
            name: 'О компании',
            component: About,
        },
        {
            path: '/it',
            name: 'IT',
            component: IT,
        },
        {
            path: '/taxi',
            name: 'Услуги',
            component: Taxi,
        },
        {
            path: '/bus',
            name: 'Услуги',
            component: Bus,
        },
    ],
    // scrollBehavior () {
    //     return { x: 0, y: 0 }
    // }
});
