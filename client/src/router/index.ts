import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/home-view.vue")
        },
        {
            path: "/order-list",
            name: "order-list",
            component: () => import("@/views/order-list.vue")
        },
        {
            path: "/menu-list",
            name: "menu-list",
            component: () => import("@/views/menu-list.vue")
        }
    ]
});

export default router;
