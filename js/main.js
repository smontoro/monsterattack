const one = {
	template: '<h1>One</h1>'
}
const two = {
	template: '<h1>Two</h1>'
}
const three = {
	template: '<h1>Three</h1>'
}

const router = new VueRouter({
	routes: [
	{
		path:'/one',
		component: one
	},
		{
		path:'/two',
		component: two
	},
		{
		path:'/three',
		component: three
	}
	]
})

var routeTest = new Vue ({
	el: '#app',
	data: {

	},
}).$mount('app')