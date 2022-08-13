import {createRouter, createWebHistory} from "vue-router";
import PostIdPage from "@/pages/PostIdPage";
import Main from "@/pages/Main";
import News from "@/pages/News";
import Feedback from "@/pages/Feedback";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/feedback',
        component: Feedback
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
