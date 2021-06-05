'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "cors.json": "bee071e39edafe3b491f72ad8427064b",
"main.dart.js": "1fc71572f40f86c8e0055a8ee5f34924",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "50cb9faff5f5ab146533e7dace5cbb5c",
"/": "50cb9faff5f5ab146533e7dace5cbb5c",
"manifest.json": "7f0361ee709bfa2cd1d118b23110a210",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.json": "1d10b2e868deda4107c0c7f48d5a4a98",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/beach.jpg": "59e6f61c03a9efb0caf2afb81b46f7cf",
"assets/assets/images/new_york_3.jpg": "62e361440c5f6944ce7602cf663dfe46",
"assets/assets/images/profile.jpg": "c123888f530c725714122df2bcd297b9",
"assets/assets/images/rio_1.jpg": "f55b77d13d921feb3aea013036992107",
"assets/assets/images/new_york_0.jpg": "35db7b9991a1004ffaa659e7ac2cd7de",
"assets/assets/images/background.jpg": "daa9253a2de30e0d1586092cda6aba3a",
"assets/assets/images/cabins_2.jpg": "d72b82bd052e02f875b83d6b1f4a82f5",
"assets/assets/images/temple_2.jpg": "cbc76efcd06d0c0e0db2fc7c465fbf0a",
"assets/assets/images/1200px-Share_Icon.svg": "fe88bf2bcc0869f469026bcca70722fe",
"assets/assets/images/sidney_0.jpg": "f429b3761084a751b2e8f1f7d2ab3433",
"assets/assets/images/top_of_the_town_3.jpg": "60b283d57bab1da7ffbdf6f576f0b099",
"assets/assets/images/Dahab/happy-life-village.jpg": "3c2f5eecde0894dc42772ecdc7f5f630",
"assets/assets/images/Dahab/see-the-magnificent-temples.jpg": "24d551b852b60cf69a439ec851d9125f",
"assets/assets/images/Dahab/moray-garden.jpg": "7c621f85a2eca54dba4473effab9da9d",
"assets/assets/images/Dahab/snorkel-3-pools-and-blue.jpg": "8591f033a3f0b597e099ece09add7fae",
"assets/assets/images/Dahab/coral-reefs.jpg": "6e335794e2ae3ca3b99a39cb04560c3f",
"assets/assets/images/Dahab/caption.jpg": "174239a926587790e4852fd3197567ae",
"assets/assets/images/Dahab/photo0jpg.jpg": "0a2254f01ea6ab576cabb4878b88c80d",
"assets/assets/images/cabins_3.jpg": "c90031af50c3c929514400f8c3997aa1",
"assets/assets/images/aswan/aswan.jpg": "4a0b0d6a19b81e6c75e7ee9c07fb79a6",
"assets/assets/images/aswan/nile-shore-in-aswan.jpg": "2ac851688aa71428741398486f9eb316",
"assets/assets/images/aswan/caption.jpg": "ee778ef391b0efb2d21b0fbed46315fc",
"assets/assets/images/aswan/aswan-city-egypt.jpg": "8277e82ba32a83d07218cef506afa4da",
"assets/assets/images/cabins_1.jpg": "d144b364eb52cbc7a4d7da3413c5cfb2",
"assets/assets/images/new_york_2.jpg": "88a43a73a75a2b27a1e75db686a66448",
"assets/assets/images/cabins_0.jpg": "f36d205b3112ff03bef6a2704e6916cd",
"assets/assets/images/new_york_1.jpg": "8a385b84ad3ee8821f49e64057617a4c",
"assets/assets/images/sidney_1.jpg": "f70271510571b2c9724e02cddac776a3",
"assets/assets/images/temple_0.jpg": "f624ba0b15bae1fc95d51df347ffa484",
"assets/assets/images/rio_3.jpg": "61d3ba912ecd1b362facd720ec5f8509",
"assets/assets/images/rio_2.jpg": "7c988bd71831add4e102f7d46c7eb2a9",
"assets/assets/images/city.jpg": "5744217b22e999c8ef5eb33e8a242e12",
"assets/assets/images/destination.jpg": "90b5ca530159a1a79a956780414eec8e",
"assets/assets/images/top_of_the_town_1.jpg": "fca157a7439ea38c691ca4d7c90200ff",
"assets/assets/images/top_of_the_town_2.jpg": "d4692e38dbfa6a386b7fec0a2e8b1819",
"assets/assets/images/bus-road-trip.gif": "b1554854315177a5b21424dc5f0c24c7",
"assets/assets/images/rio_0.jpg": "91a9169d3e41f579173ef02e909d189f",
"assets/assets/images/top_of_the_town_0.jpg": "5295980413b10303d88c2387a7fe33f6",
"assets/assets/images/earth.png": "fa05f2d4bc5427c5c2050cc12bc4e11f",
"assets/assets/images/gona/eee.jpg": "28710949dbb0ac5aaabe388937ae6e1b",
"assets/assets/images/gona/abu-tig-marina.jpg": "a607929db332f7c5186ae4e03571f4fd",
"assets/assets/images/gona/ee.png": "0214badb47133a01ed76bb25eb26c876",
"assets/assets/images/gona/sheraton-s-waterways.jpg": "b80a86bbebbfad43c318276fcf8ebee9",
"assets/assets/images/gona/views-from-beach-including.jpg": "e0792f99bff10e2aa89a0c53ae930ee8",
"assets/assets/images/gona/aerial-view.jpg": "66cb69179329b349dd72a52af8aaa7e1",
"assets/assets/images/gona/2019_6_2_21_57_57_704.jpg": "7d17ee0caa4ac1f012d6c641c5cad570",
"assets/assets/images/gona/hotel-sultan-bey.jpg": "bd041532ab2cb1f5ad64794bb64f09df",
"assets/assets/images/temple_1.jpg": "1b1c2b34c68b754bcfc1debaa1b6d082",
"assets/assets/icons/temple.png": "e4b10699dd269cd091d20cc00eea6161",
"assets/assets/icons/christ_the_redeemer.png": "a9a303d39ebd95df7ef9f54adf47980f",
"assets/assets/icons/tower_eiffel.png": "cff93c074573f759d2e3c6ee93fea1c6",
"assets/assets/icons/cherry.png": "053926ad7726f0d8557d0c6135aa9557",
"assets/assets/icons/go.gif": "80425ab3ac396cdd3697cc8cb618b97c",
"assets/assets/icons/greek_pillar_capital.png": "348f1670d3ee37daea610c72a860aac1",
"assets/NOTICES": "92d66a9b84ca5090e0fe0b6288bca8fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "6a53ae025ecd744a045f553bb9b6eb0e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
