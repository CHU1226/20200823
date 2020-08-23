var vm = new Vue({
    el: "#app",
    data: {
        products: [
            {
                id: '1',
                name: '自然的故事_小蝸牛',
                price: 890,
                content: '自然中可愛憨厚的蝸牛，1450度的高溫燒結而成的琉璃，內外明徹，高溫成型，冷卻之後，最重要的定格成形，永不退去。',
                thumb: "img/product1.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab1',
            },
            {
                id: '3',
                name: '自然的故事_四季琉璃項鍊',
                price: 890,
                content: '四季轉變，自成一派，1450度的高溫燒結而成的琉璃，內外明徹，高溫成型，冷卻之後，最重要的定格成形，永不退去。',
                thumb: "img/product2.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab2',
            },
            {
                id: '3',
                name: '自然的故事_淡紫蝴蝶',
                price: 890,
                content: '輕盈美麗的蝴蝶，1450度的高溫燒結而成的琉璃，內外明徹，高溫成型，冷卻之後，最重要的定格成形，永不退去。',
                thumb: "img/product3.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab3',
            },
            {
                id: '4',
                name: '星球系列_木星',
                price: 590,
                content: '自然純樸的大地色木星，在浩瀚無垠的銀河系中，每個星球總有獨特的故事，絕美色系搭配純熟工藝，為客戶打造屬於自己的小小世界。',
                thumb: "img/product4.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab4',
            },
            {
                id: '5',
                name: '星球系列_冥王星',
                price: 590,
                content: '神秘優雅的紫色冥王星，在浩瀚無垠的銀河系中，每個星球總有獨特的故事，絕美色系搭配純熟工藝，為客戶打造屬於自己的小小世界。',
                thumb: "img/product5.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab5',
            },
            {
                id: '6',
                name: '星球系列_海王星',
                price: 590,
                content: '深邃無底的藍色海王星，在浩瀚無垠的銀河系中，每個星球總有獨特的故事，絕美色系搭配純熟工藝，為客戶打造屬於自己的小小世界。',
                thumb: "img/product6.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab6',
            },
			{
                id: '7',
                name: '彩色琉璃金箔小魚(單隻)',
                price: 390,
                content: '海洋中的小小魚們，看似不起眼，卻因工匠們的傳統手藝而被賦予生命，活潑靈動、通體發光，是海洋中的小小精靈。',
                thumb: "img/product7.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab7',
            },
			{
                id: '8',
                name: '紫色琉璃金箔小魚(單隻)',
                price: 390,
                content: '海洋中的小小魚們，看似不起眼，卻因工匠們的傳統手藝而被賦予生命，活潑靈動、通體發光，是海洋中的小小精靈。',
                thumb: "img/product8.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab8',
            },
			{
                id: '9',
                name: '綠色琉璃金箔小魚(單隻)',
                price: 390,
                content: '海洋中的小小魚們，看似不起眼，卻因工匠們的傳統手藝而被賦予生命，活潑靈動、通體發光，是海洋中的小小精靈。',
                thumb: "img/product9.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab9',
            },
			{
                id: '10',
                name: '銀土壓紋',
                price: 1000,
                content: '用別緻可愛的甜點造型、清新的葉脈造型、氣質的銀杏造型，讓頸間悄悄的透露一絲清甜的性感，彰顯妳個人的氣質。',
                thumb: "img/product10.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab10',
            },
			{
                id: '11',
                name: '窯燒玻璃壁掛式花器',
                price: 430,
                content: '窯燒玻璃壁掛式花器是一種別具巧思的花卉藝術裝置，透明的容器與花紋相互映襯，可掛牆上將花放置其中，簡便的裝飾卻能讓居家氛圍多一分優雅。',
                thumb: "img/product11.jpg",
                amount: 0,
                amountShow: 1,
                idName: 'tab11',
            },
        ]
    },
    methods: {
        minusOne (product) {
            product.amountShow--
            product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
        },
        addOne (product) {
            product.amountShow++
            product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
        },
        addToCart (product) {
            product.amount += product.amountShow
        },
        remove (product) {
            product.amount = 0
        },
    },
    computed: {
        productsInCart () {
            return this.products
                .filter(p => p.amount)
                .map(p => {
                    p.sum = p.amount * p.price
                    return p
                })
        },
        total () {
            return this.productsInCart
                .reduce((sum, p) => (sum + p.sum), 0)
        }
    }
})