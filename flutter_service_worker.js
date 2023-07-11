'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "4e3b30d00eaaef8ede4dca5807502803",
"assets/AssetManifest.smcbin": "acb1a23c2b4f98c73d8b2a66e8328243",
"assets/assets/buttons/next.png": "811296a5756111efa07b52c8b4bc841f",
"assets/assets/buttons/retry.png": "05502802fe1be9951dc2b0c9bca5fbbb",
"assets/assets/buttons/thumbs_down.png": "16efe88810f007a5bf2333a52177a8e5",
"assets/assets/buttons/thumbs_up.png": "69cee48f6f293328cdbb83494b490e3c",
"assets/assets/fonts/OpenDyslexic3-Bold.ttf": "57f36cc9fffd13d33a564f4d06d1b4d7",
"assets/assets/fonts/OpenDyslexic3-Regular.ttf": "0c774ed53507e9ecda3f9d9e96a504f5",
"assets/assets/images/almonds.jpg": "31c7f23a5f9cacf6fa1bb8ac8a2d569d",
"assets/assets/images/avocado.jpg": "918a6558a879366d8d6e665ccb7b5a7c",
"assets/assets/images/blueberries.jpg": "93253a9d380dc93703b2ef098602ef43",
"assets/assets/images/broccoli.jpg": "905059607be8fb9c6d80b76125aa7379",
"assets/assets/images/burger.jpg": "376abfe23a9115c687c4ab68227bcf73",
"assets/assets/images/candy.jpg": "9c34a566b60ba313b885a57d7345c771",
"assets/assets/images/donuts.jpg": "a1f44c8bb47d850db5ab119c34fce0cb",
"assets/assets/images/french_fries.jpg": "f1cd8adaf42038e2dd389bff0eeacee2",
"assets/assets/images/fried_chicken.jpg": "03628e37fe24abff0bdf70351d20a603",
"assets/assets/images/greek_yogurt.jpg": "e5c8eab2a212a2dbf088d4eddfc9542a",
"assets/assets/images/hot_dog.jpg": "5600713d6941457496966e272fed1298",
"assets/assets/images/ice_cream.jpg": "d87001e1fb752c73068db01e1612a958",
"assets/assets/images/kale.jpg": "98c359b200b21a6ecb7f7f860816a1f1",
"assets/assets/images/oatmeal.jpg": "e42cdd9a4449a42d6dae7e0004241a8d",
"assets/assets/images/pizza.jpg": "47729c36dccfb3967c9f4298923d6530",
"assets/assets/images/potato_chips.jpg": "536f9212fe0858198065bc96244f7697",
"assets/assets/images/quinoa.jpg": "0d2d5a042e6a6896eedaf01f054aff81",
"assets/assets/images/salmon.jpg": "4f51aa6b34cb5cd3be632f0b80116e49",
"assets/assets/images/soda.jpg": "223c4c9ec1c57a32314ac09c133c17e8",
"assets/assets/images/spinach.jpg": "552df23d57b304e193489bff75dcbbca",
"assets/FontManifest.json": "0c4f8db18b465ac6cb98c67ac1a53ada",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8c897394b0eab4cdb44c1b4cd2f9ce2",
"/": "e8c897394b0eab4cdb44c1b4cd2f9ce2",
"main.dart.js": "9f3f7e0e1749aebb04b281792865b920",
"manifest.json": "2f7f32aa90335b3af98480747cd34757",
"version.json": "57f5ca668ae9dd02b48d33a43033f799"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
