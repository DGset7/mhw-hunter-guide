const CACHE_NAME = 'mhw-guide-v1';
const ASSETS = [
    '/mhw-hunter-guide/',
    '/mhw-hunter-guide/index.html',
    '/mhw-hunter-guide/css/style.css',
    '/mhw-hunter-guide/js/app.js',
    '/mhw-hunter-guide/js/data.js',
    '/mhw-hunter-guide/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
