new Vue({
	el: "#main",
	data: {
		isRunning: false,
		playerHealth: 100,
		monsterHealth: 100
	},
	methods: {
		start: function() {
			this.isRunning = !this.isRunning
			this.playerHealth = 100
			this.monsterHealth = 100
		},
		calcDamage: function(max, min) {
			return Math.floor(Math.random() * max) + min
		},
		attack: function() {
			this.playerHealth -= calcDamage(18, 6)
			this.monsterHealth -= calcDamage(10, 3)
		},
		special: function() {
			this.playerHealth -= Math.floor(Math.random()*18) + 6
			this.monsterHealth -= Math.floor(Math.random() *13) +3
		},
		heal: function() {
			this.playerHealth +=Math.floor(Math.random() * 16) + 10
			this.playerHealth -=Math.floor(Math.random() * 18) + 6
		}, 
	}
	
})
