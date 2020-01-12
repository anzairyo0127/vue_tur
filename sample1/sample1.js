var app = new Vue({
    el: '#app',
    data: {
        msg1: 'はじめてのVue.js',
        msg2: 'Vue.js',
        inputValue: ''
    },
    methods: {
        changeMsg1: function () {
            this.msg1 = 'こんにちはReact.js';
        },
        kaibun: function (str) {
            var rts = str.split('').reverse().join('');
            if (str === rts){
                return '回文です';
            } else {
                return '回文じゃないのだ';
            }
        }
    }
});
