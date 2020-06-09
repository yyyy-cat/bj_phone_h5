import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/login",
			name: "Login",
			component: () =>
				import("@/pages/Login")
		},
		{
			path: "/",
			name: "Index",
			component: () =>
				import("@/pages/index")
		},
		{
			path: "/eRecord",
			name: "ERecord",
			component: () =>
				import("@/pages/ERecord")
		},
		{
			path: "/add",
			name: "Add",
			component: () =>
				import("@/pages/Add")
		},
		{
			path: "/dbddbrowser",
			name: "Dbddbrowser",
			component: () =>
				import("@/pages/DbddBrowser")
		},
		// {
		// 	path: "/",
		// 	name: "dbDetail",
		// 	component: () =>
		// 	  import( "@/pages/DbDetail")
		// },
		{
			path: "/info",
			name: "Info",
			component: () =>
				import("@/pages/Info")
		},
		{
			path: "/address",
			name: "Address",
			component: () =>
				import("@/pages/Address")
		},
		// {
		// 	path: "/",
		// 	name: "AddressAdd",
		// 	component: () =>
		// 	  import( "@/pages/AddressAdd")
		// },
		// {
		// 	path: "/",
		// 	name: "Add",
		// 	component: () =>
		// 	  import( "@/pages/Add")
		// },


		// {
		// 	path: "/",
		// 	name: "ForgetPassword",
		// 	component: () =>
		// 	  import( "@/pages/ForgetPassword")
		// }
	]
})
