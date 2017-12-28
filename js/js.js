var vm = new Vue({
	el:'#app1',
	data:{
		productList:[
			{
				productName:'杏璞霜儿童型肤乐霜湿痒宝宝口水疹膏婴儿护肤婴亲霜杏噗婴宝面霜',
				productUrl:'images/goods_1.jpg',
				productPrice:280.00,
				productDiscount:0.995,
				productEquantity:1
			},
			{
				productName:'Laiersi21寸23寸尤克里里初学者云杉桃花心木小吉他乌克丽丽',
				productUrl:'images/goods_2.jpg',
				productPrice:198.00,
				productDiscount:0.7,
				productEquantity:1
			},
			{
				productName:'diy钻石画工具套装多功能快速点钻笔点钻神器九钻笔定制粘十字绣',
				productUrl:'images/goods_3.jpg',
				productPrice:45.90,
				productDiscount:0.4,
				productEquantity:1
			},
			{
				productName:'婴儿围嘴宝宝口水巾新生儿口水兜纯棉护肚纱布非防水防吐奶小围兜',
				productUrl:'images/goods_4.jpg',
				productPrice:38.00,
				productDiscount:0.4,
				productEquantity:1
			}
		],
		totalPrice:0,
		totalList:0,
		allIsChecked:false
	},
	filters:{
		formatPrice(val){
			return '￥' + val.toFixed(2);
		}
	},
	methods:{
		changeEquantity(item, flag){
			if(flag < 0){
				item.productEquantity--;
				if(item.productEquantity === 0){
					item.productEquantity = 1;
				}
			}else{
				item.productEquantity++;
			};
			this.calculateTotal();
			this.calculateTotalList();
		},
		calculateTotal(){
			this.totalPrice = 0;
			this.productList.forEach((val)=>{
				if(val.isChecked){
					this.totalPrice += val.productPrice * val.productDiscount * val.productEquantity;
				}
			})
		},
		choose(item){
			if(!item.isChecked){
				this.$set(item, 'isChecked', true);
			}else{
				item.isChecked = !item.isChecked;
			};
			this.calculateTotal();
			this.calculateTotalList();
		},
		removeItem(index){
			this.productList.splice(index, 1);
			this.calculateTotal();
			this.calculateTotalList();
		},
		calculateTotalList(){
			this.totalList = 0;
			this.productList.forEach((val)=>{
				if(val.isChecked){
					this.totalList += val.productEquantity;
				}
			})
		},
		chooseAll(){
			this.productList.forEach((item)=>{
				if(!item.isChecked){
					this.$set(item, 'isChecked', true);
				}
			})
			this.allIsChecked = !this.allIsChecked;
			this.calculateTotal();
			this.calculateTotalList();
		}
	}
})