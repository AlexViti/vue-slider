const setting = {
	el: '#root',
	data: {
		slides: [
			{
				title:'Svezia',
				img: '01.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
			},
			{
				title:'Svizzera',
				img: '02.jpg',
				text: 'Lorem ipsum'
			},
			{
				title:'Gran Bretagna',
				img: '03.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
			},
			{
				title:'Germania',
				img: '04.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
			},
			{
				title:'Paradise',
				img: '05.jpg',
				text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
			}
		],
		activeIndex: 0
	},
	methods: {
		next() {
			this.activeIndex == this.slides.length - 1 ? this.activeIndex = 0 : this.activeIndex++;
		}
	},
	created() {
		setInterval(this.next, 3000);
	}
}

const app = new Vue(setting);