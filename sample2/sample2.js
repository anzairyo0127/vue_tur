var app = new Vue({
    el: '#app',
    data: {
        hankei: 12,
        name:"山田太郎",
        hYear:3,
        tel: "03,5355,0000",
        num: 25.4,
        msg1: "いん",
        toGoogle: "https://google.com",
        myStyle: {
            color: 'blue',
            textAlign: 'center',
            size: '3em',
        }, 
        newStyle: {
            backgroundColor: "yellow",
            fontSize: '4em'
        }
    },
    methods:{
        setAlign: function(align) {
            this.myStyle.textAlign = align;
        }
    },
    computed: {
        menseki: function () {
            return (Math.PI * this.hankei * this.hankei).toFixed(1);
        }
    }
});
