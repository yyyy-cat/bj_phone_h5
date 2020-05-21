/**
 * scroll-here自定义指令
 * @author <cuihuiming>
 * @description 监听文档滚动，单滚动到目标元素时，执行回调（只会执行一次）
 * @todo 有一个问题，绑定指令的时候也需要检查一下
 */

import Vue from 'vue';

Vue.directive('scroll-here', {
	inserted(el, binding, vNode) {
		let cb = vNode.context[binding.expression];
		let document_el = document.documentElement;
		let el_offset_top = el.offsetTop;
		let el_client_height = el.clientHeight;
		
		window.addEventListener('scroll', async function() {
			try {
				let document_viewing_area_height = document_el.clientHeight;
				let document_scroll_top = document_el.scrollTop;
				
				if(
					!binding.callback_perform &&
					document_viewing_area_height - document_scroll_top > el_offset_top &&
					document_viewing_area_height - document_scroll_top < el_offset_top + el_client_height
				) {
					binding.callback_perform = true;
					cb && await cb();
				}
			} catch (e) {
				console.error('scroll-here Error: ' + e.toString());
			}
			
		}, false);
	},
	bind(el, binding, vNode) {
		let cb = vNode.context[binding.expression];
		let document_el = document.documentElement;
		let el_offset_top = el.offsetTop;
		let el_client_height = el.clientHeight;
		
		let document_viewing_area_height = document_el.clientHeight;
		let document_scroll_top = document_el.scrollTop;
		
		if(
			!binding.callback_perform &&
			document_viewing_area_height - document_scroll_top > el_offset_top &&
			document_viewing_area_height - document_scroll_top < el_offset_top + el_client_height
		) {
			binding.callback_perform = true;
			cb && cb();
		}
	}
});
