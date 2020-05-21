import Vue from 'vue';
import App from './App';
import router from './router';
// import 'bootstrap/dist/css/bootstrap.min.css';
 import '@/assets/flexiable.js';
 import './app.less'
 import './iconfont/iconfont.css';
 

 import Vant from 'vant';
 import 'vant/lib/index.css';
 
 Vue.use(Vant);
// import 'animate.css';
// import '@/directive/index.js';
// import '@/utils/loading.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
