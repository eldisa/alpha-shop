import './style/main.scss';
const vm = Vue.createApp({
    data() {
        return {
            display_theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
            ship_fee_list: [
                {
                    name:"標準運送",
                    price:0,
                    price_text:"免費",
                    spend_time_text:"約3~7個工作天"
                },
                {
                    name:"DHL 貨運",
                    price:500,
                    price_text: "$500",
                    spend_time_text:"48小時內送達"
                }
            ],
            selected_ship_fee:0,
            item_list: [
                {
                    id: 1,
                    name: "破壞補丁修身牛仔褲",
                    price: 3999,
                    image: "./public/images/product-1.jpg",
                },
                {
                    id: 2,
                    name: "刷色直筒牛仔褲",
                    price: 1299,
                    image: "./public/images/product-2.jpg"
                }
            ],
            cart: [
                0, 0
            ],
            city_list: [
                {code: "", name: "請選擇縣市"},
                {code: "KLU", name: "基隆市"},
                {code: "TPH", name: "新北市"},
                {code: "TPE", name: "臺北市"},
                {code: "TYC", name: "桃園市"},
                {code: "HSH", name: "新竹縣"},
                {code: "HSC", name: "新竹市"},
                {code: "MAC", name: "苗栗市"},
                {code: "MAL", name: "苗栗縣"},
                {code: "TXG", name: "臺中市"},
                {code: "CWH", name: "彰化縣"},
                {code: "CWS", name: "彰化市"},
                {code: "NTC", name: "南投市"},
                {code: "NTO", name: "南投縣"},
                {code: "YLH", name: "雲林縣"},
                {code: "CHY", name: "嘉義縣"},
                {code: "CYI", name: "嘉義市"},
                {code: "TNN", name: "臺南市"},
                {code: "KHH", name: "高雄市"},
                {code: "IUH", name: "屏東縣"},
                {code: "PTS", name: "屏東市"},
                {code: "ILN", name: "宜蘭縣"},
                {code: "ILC", name: "宜蘭市"},
                {code: "HWA", name: "花蓮縣"},
                {code: "HWC", name: "花蓮市"},
                {code: "TTC", name: "臺東市"},
                {code: "TTT", name: "臺東縣"},
                {code: "PEH", name: "澎湖縣"},
                {code: "KMN", name: "金門縣"},
                {code: "LNN", name: "連江縣"}
            ],
            status:1,
            phase_list:[
                {
                    name:"address",
                    next:2
                },
                {
                    name:"shipping",
                    prev:1,
                    next:3
                },
                {
                    name:"credit-card",
                    prev:2,
                    next:4
                }
            ],
            prev_text:"上一步",
            next_text:"下一步"
        }
    },
    computed: {
        totalPrice: function () {
            return this.item_list[0].price * this.cart[0] + this.item_list[1].price * this.cart[1] + this.selected_ship_fee
        },
        showShipFee: function () {
            if (this.selected_ship_fee === 0)
                return "免費"
            return this.selected_ship_fee
        }
    },
    methods: {
        addItem: function (item_id) {
            this.cart[item_id - 1]++
        },
        subtractItem: function (item_id) {
            if (this.cart[item_id - 1] > 0) this.cart[item_id - 1]--
        },
        toggleTheme: function () {
            if (this.display_theme === "light") {
                this.display_theme = "dark"
                localStorage.setItem("theme", "dark")
            } else if (this.display_theme === "dark") {
                this.display_theme = "light"
                localStorage.setItem("theme", "light")
            }
        },
        movePhase: function(action){
            let tmp = this.status + action
            if( tmp <=3 && tmp >=1){
                this.status = tmp
                this.next_text = this.status === 3 ? "確認訂單":"下一步"
            }
        }
    }
}).mount('#app');