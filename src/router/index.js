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
			  import( "@/pages/Login")
		},
		{
			path: "/",
			name: "Index",
			component: () =>
			  import( "@/pages/index")
		},
		{
			path: "/eRecord",
			name: "ERecord",
			component: () =>
			  import( "@/pages/zhanhuijilv/ERecord")
		},
		{
			path: "/add",
			name: "Add",
			component: () =>
			  import( "@/pages/xinzeng/Add")
		},
		{
			path: "/dbddbrowser",
			name: "Dbddbrowser",
			component: () =>
			  import( "@/pages/zhanhuijilv/DbddBrowser")
		},
		{
			path: "/dbdetail",
			name: "dbDetail",
			component: () =>
			  import( "@/pages/xinzeng/DbDetail")
		},
		 {
			path: "/info",
			name: "Info",
			component: () =>
			  import( "@/pages/xinzeng/Info")
		},
		{
			path: "/address",
			name: "Address",
			component: () =>
			  import( "@/pages/xinzeng/Address")
		},
		{
			path: "/AddressAdd",
			name: "AddressAdd",
			component: () =>
			  import( "@/pages/xinzeng/AddressAdd")
		},
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
		// },
		{
			path: "/bfjl",
			name: "bfjl",
			component: () =>
			  import( "@/pages/bfjl")
		},
		{
			path: "/cpxx",
			name: "cpxx",
			component: () =>
			  import( "@/pages/product/cpxx")
		},
	]
})
