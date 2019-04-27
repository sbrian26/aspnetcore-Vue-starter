import CounterExample from 'components/counter-example.vue';
import FetchData from 'components/fetch-data.vue';
import HomePage from 'components/home-page.vue';
import About from 'components/about.vue';
export var routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
    { name: 'about', path: '/about', component: About, display: 'About Template', icon: 'info' },
    { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
    { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Data', icon: 'list' }
];
