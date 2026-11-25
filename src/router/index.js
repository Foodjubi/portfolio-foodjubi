import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue"
import ProjectDetails from "@/pages/ProjectDetails.vue"

const routes = [
    { path : "/", component: HomePage },
    { path: "/project/:slug", name: "projet", component: ProjectDetails },
    { path: "/:pathMatch(.*)*", redirect: "/"}
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to){
        if (to.hash) return { el: to.hash, behavior: "smooth"}
        return  {top: 0}
    }
})

export default router