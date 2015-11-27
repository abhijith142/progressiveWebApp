// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");
var urlsToCache = [ new Request('/', {mode: 'no-cors'})
					, new Request("index.html", {mode: 'no-cors'})
					, new Request("ex.js", {mode: 'no-cors'})
          , new Request("lib/angular.js", {mode: 'no-cors'})
          , new Request("lib/angular-route.js", {mode: 'no-cors'})
          , new Request("lib/angular-resource.js", {mode: 'no-cors'})
					, new Request("lib/jquery-2.1.4.js", {mode: 'no-cors'})
					, new Request("bootstrap-3.3.5-dist/js/bootstrap.js", {mode: 'no-cors'})
					, new Request("js/module/main.js" , {mode: 'no-cors'})
					, new Request("js/controller/mainController.js", {mode: 'no-cors'})
					, new Request("js/controller/editHeroController.js" , {mode: 'no-cors'})
					, new Request("js/controller/addHeroController.js", {mode: 'no-cors'})
					, new Request("js/service/mainService.js", {mode: 'no-cors'})
					, new Request("bootstrap-3.3.5-dist/css/bootstrap.css", {mode: 'no-cors'})
					, new Request("js/view/addHeroView.html", {mode: 'no-cors'})
					, new Request("js/view/editHeroView.html", {mode: 'no-cors'})
					, new Request("js/view/mainView.html", {mode: 'no-cors'})
					, new Request("/getData", {mode: 'no-cors'})
					];

self.addEventListener('install', function(event) {
	console.log("SW installed");
	var CACHE_NAME = 'my-site-cache-v1';
	// Perform install steps
	event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
		console.log('Opened cache');
		return cache.addAll(urlsToCache);
	}));
});

self.addEventListener('activate', function(event) {
	console.log("SW activated");
});

self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request).then(function(response) {
		// Cache hit - return response
		if (response) {
			return response;
		}

		return fetch(event.request);
	}));
});
