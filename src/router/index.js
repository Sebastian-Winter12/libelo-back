import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/class",
        name: "class",
        component: () => import("../views/ClassView.vue"),
    },
    {
        path: "/work",
        name: "work",
        component: () => import("../views/WorkView.vue"),
    },
    {
        path: "/settings",
        name: "settings",
        component: () => import("../views/SettingsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

const goTo = (path) => {
    router.push(path);
};

export { goTo };
export default router;
