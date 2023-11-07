import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Login from '@/components/Login.vue'
import JoinGroup from '@/components/JoinGroup.vue'
import LeaveGroup from '@/components/LeaveGroup.vue'
import ReviewRequest from '@/components/ReviewRequest.vue'
import RequestPage from '@/views/RequestPage.vue'
import FilesPage from '@/views/FilesPage.vue'
import FilesTable from "@/components/FilesTable.vue"
import Notification from "@/components/Notification.vue"



const routes = [
  {
    path: "/",
    name: "Review Request",
    component: FilesPage
 },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
