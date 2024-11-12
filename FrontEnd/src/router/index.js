import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/RegisterView.vue"),
    },
    {
        path: "/welcome",
        name: "welcome",
        component: () => import("../views/WelcomeView.vue"),
    },
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
        path: "/class/chat/fast",
        name: "fast-chat",
        component: () => import("../views/FastChatView.vue"),
    },
    {
        path: "/class/work",
        name: "work",
        component: () => import("../views/WorkView.vue"),
    },
    {
        path: "/class/calendar",
        name: "calendar",
        component: () => import("../views/CalendarView.vue"),
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
