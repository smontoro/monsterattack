const one= {
	template: `<div>
	<img src="img/base.jpg">
	</div>`
}
const two = {
	template: `<div>
	<img src="img/poseidon.jpg">
	</div>`
}
const three = {
	template: `<div>
	<img src="img/space.jpg">
	</div>`
}

const router = new VueRouter({
	routes: [
		{
			path: '/one',
			component: one
		},
		{
			path: '/two',
			component: two
		}, 
		{
			path: '/three',
			component: three
		}
	]
})


var routeTest = new Vue({
	router, 
	el: '#app',
	data: {

	},
	methods: {

	}
}).$mount('#app')