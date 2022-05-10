import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue'
import myHome from './components/myHome.vue'
import myDetail from './components/myDetail.vue'
import errorPage from './components/errorPage.vue'


const routes = [
	{
		path: "/list",
		component: List,
	},
	{
		path: "/",
		component: myHome,
	},
	{
		path: "/detail/:id",
		component: myDetail,
	},
	{
		path: "/:sdgadga",
		component: errorPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router; 