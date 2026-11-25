
import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/pages/HomePage.vue"
import ProjectDetails from "@/pages/ProjectDetails.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/projets/:slug",
        name: "project-details",
        component: ProjectDetails,
        props: true
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
