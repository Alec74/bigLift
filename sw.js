var GHPATH = '/bigLift';
var APP_PREFIX = 'bigLift';
var VERSION = 'version_00';
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/pages/profile.html`,
  `${GHPATH}/pages/workout.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/css/profile.css`,
  `${GHPATH}/css/workout.css`,
  `${GHPATH}/img/bell-solidBlue.png`,
  `${GHPATH}/img/bell-solidGreen.png`,
  `${GHPATH}/img/dumbbell-solidBlue.png`,
  `${GHPATH}/img/dumbbell-solidGreen.png`,
  `${GHPATH}/img/house-solidBlue.png`,
  `${GHPATH}/img/house-solidGreen.png`,
  `${GHPATH}/img/user-solidBlue.png`,
  `${GHPATH}/img/user-solidGreen.png`,
  `${GHPATH}/img/folder-plus-solidGreen.svg`,
  `${GHPATH}/img/folder-plus-solidBlue.svg`,
  `${GHPATH}/img/caret-right-solidGreen.svg`,
  `${GHPATH}/js/app.js`
]

var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {       
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})