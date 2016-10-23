var app = angular.module('store', []);

var gems = [
	{
		name: 'test1',
		price: 2,
		description: "test1Description",
		specifications: "test1Specifications",
		reviews: "test1Reviews",
		canPurchase: true
},
	{
		name: 'test2',
		price: 3.5,
		description: "test2description",
		specifications: "test2Specifications",
		reviews: "test2Reviews",
		canPurchase: false
	}
];
app.controller('StoreController', function() {
	this.products = gems;
});
