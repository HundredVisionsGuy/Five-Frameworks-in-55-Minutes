/* script.js
    TODO:
      * Either follow the link to VueJS Getting Started
        page: https://vuejs.org/v2/guide/
      * Or, just follow the link from the home page
*/
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello SuperQuest!'
  }
})
var app2 = new Vue({
	el: "#app2",
	data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
	el: "#app3",
	data: {
		todos: [
			{ text: "this"},
			{ text: "that"},
			{ text: "the other thing" }
		]
	}
})
var app4 = new Vue({
	el: "#app4",
	data: {
		message: "Hello, SuperQuest"
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!'
  }
})

// Vue Component
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})