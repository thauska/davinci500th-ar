server:
	http-server -c-1 

workbox-generate-precaching:
	workbox injectManifest workbox-config.js
