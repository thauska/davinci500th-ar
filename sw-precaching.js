console.log('Hello from sw.js')

//////////////////////////////////////////////////////////////////////////////
//		load workbox
//////////////////////////////////////////////////////////////////////////////
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`)
} else {
	console.log(`Boo! Workbox didn't load 😬`)
}

//////////////////////////////////////////////////////////////////////////////
//		set log level
//////////////////////////////////////////////////////////////////////////////
// The most verbose - displays all logs.
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

//////////////////////////////////////////////////////////////////////////////
//		register some routes
//////////////////////////////////////////////////////////////////////////////
workbox.routing.registerRoute(
	new RegExp('.*\.js'),
	workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
	new RegExp('index.html'),
	workbox.strategies.cacheFirst()
)


// TODO register / for index.html
// - is this needed ?

//////////////////////////////////////////////////////////////////////////////
//		precache and route
//////////////////////////////////////////////////////////////////////////////

// TO BE FILLED BY ``````
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "cc28257303356890e7011a6a28167324"
  },
  {
    "url": "sw.js",
    "revision": "d4b9dddffb8524988be9fc3e44af1c65"
  },
  {
    "url": "vendor/aframe.min.js",
    "revision": "50610178305c4ae36dce20d74d7dd06c"
  }
])
