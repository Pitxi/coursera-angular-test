(function() {
'use strict';

	angular
	.module('data').service('MenuDataService', MenuDataService);

	MenuDataService.$inject = [ '$http', 'BASE_URL' ];
	function MenuDataService($http, BASE_URL) {
		var service = this;

		service.getAllCategories = function() {
			return $http({
				method: 'GET',
				url: BASE_URL + 'categories.json'
			});
		};

		service.getItemsForCategory = function(categoryShortName) {
			return $http({
				method: 'GET',
				url: BASE_URL + 'menu_items.json',
				params: { category: categoryShortName }
			});
		};
	}
})();