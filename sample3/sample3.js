const app = new Vue({
    el: '#app',
    data: {
        show: true,
        time: (new Date).getHours(),
        weekdays: ['g','k','s','m','k','d','n'],
        customer: {name:"まーちゃん", age: 35, gender:"男性", pref:"神奈川"},
        colors: ['red', 'green', 'blue']
    },
    methods: {
        getTime: function (){
            if(0 <= this.time && this.time < 12){
                return 'morning';
            } else if (12 <= this.time && this.time < 18){
                return 'afternoon';
            } else if (18 <= this.time && this.time < 21){
                return 'evening';
            } else {
                return 'night';
            }
        }
    }
})