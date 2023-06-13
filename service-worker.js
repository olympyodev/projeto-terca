self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('css-grid-pwa').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png',
        './splash.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
