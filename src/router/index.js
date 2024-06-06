import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Member from "@/views/Member.vue";
import Books from "@/views/Books.vue";
import LbBook from "@/views/LbBook.vue";
import BorrowBook from "@/views/BorrowBook.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/member",
      name: Member,
      component: Member,
    },
    {
      path: "/addbook",
      name: Books,
      component: Books,
    },
    {
      path:"/book",
      name: LbBook,
      component: LbBook,
    },
    {
      path:"/borrow",
      name: BorrowBook,
      component: BorrowBook,
    }
  ],
});
export default router;
