'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "0732fb47638e34f198d46fd1785aff3c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "421af9ada84eefed74c682f65b57e47e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3232e46224f437f3317106e71c922f59",
".git/logs/refs/heads/master": "3232e46224f437f3317106e71c922f59",
".git/logs/refs/remotes/origin/master": "c8012b87f0337cb15f0a16d1f8dea26a",
".git/objects/05/5faac069dbfed61ca787f9041f7c2fd6f5f613": "80051cddd1675e20fa96a4e378227f68",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/f3f0d11b7286deb48f0394d9e97fa249491ef2": "dc9871ac7b4c4f6f40e0959fd1df6b02",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/40/db6e6f41ab9f126116121cef2ddf5adb188b7a": "7774cf76a7a3e8f7a62a6f0e95510c29",
".git/objects/44/0bb1b6896940f2871e775f0d6ddd0b264d8953": "4f1479658404f3f833955ae68ae7a8ad",
".git/objects/53/e542f52b85f980d0fa52ade046e215d0d45810": "17943caa7d07837c34e9a10347898460",
".git/objects/55/aa2076c438fff391ed184b8d573c78c7779e2c": "6a27d264300cdf877d1ee77b49902b46",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/31914e3756d3f9e1f6bee1a2b08c09a4888578": "6c9bb431480bfa6352640f25129e64b0",
".git/objects/86/eba29d01f8e8a2c077db26362ff62815e84189": "3ecbacd5d1c99b04f11b21a1cd85ba84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fda71ff39e03f2a24284146d691fe64a271473": "38d88717ef5f18a3e85cba3fd78ae455",
".git/objects/9d/51c467f878ca6fa6bf3f8fc369f53e67597e1c": "bb6a1f7287f26e6ba549f11df852c060",
".git/objects/a1/031b00d33fc2489405ca31a27cbf71190e7392": "33b5e4d466bda2db0bb7d183237b344b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0412c656300f24b09b2fbaae6809e72e844945": "fdf8df0c68128f28326f63e4de4d9358",
".git/objects/bd/c5916d3cedcee53e94629dbaa50437ad64da9b": "9577bc0733d989669057c1a03bd833af",
".git/objects/cb/f91afea3fec4f57776d41ad086dcc193618fe3": "8d6069c2d2378f98e2bdf463649786b1",
".git/objects/d4/28788884ba70184eaaec0992582fe66f4688f5": "0d63885d463abd453f6a1e4635c69d8a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ea/2c5b68336030e0578391148c7e8bdd7dcf1d5a": "80b60608aa2ca40bcb865b6e07905245",
".git/objects/ed/6d8749969de52be838de6c908e87f78689c404": "b29132df0024c5293216c07359327f2a",
".git/objects/ef/7273de80955eabdb03f293cc98f91b9e55973d": "4d4ba8c28316eb537082421d408405d5",
".git/refs/heads/master": "25b19ad7e77df0318ad5387ae4cd3be7",
".git/refs/remotes/origin/master": "25b19ad7e77df0318ad5387ae4cd3be7",
"assets/AssetManifest.json": "46cdf7529da795c31c8af1c1a92d3c58",
"assets/assets/fonts/Courgette-Regular.ttf": "59c3685a73f0f1b7c302dd2d6dabd628",
"assets/assets/fonts/Niconne-Regular.ttf": "1c8d9ad0f6f13954af8bc07b47b970f2",
"assets/assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/assets/images/deneme.png": "138c10060c289f58a4a1a2a5b5ce69ae",
"assets/FontManifest.json": "183e546f9b2799a5986202601b5f08e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d8f3ac4a8957e10ef85a73a823eb9dbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f068cbb666e911219ce118bbb8420e6f",
"/": "f068cbb666e911219ce118bbb8420e6f",
"main.dart.js": "956a956629473616add04e24922b908a",
"manifest.json": "99369799962f7fd516e028053329a0ae",
"version.json": "278f66770d4091654ab3a0a2a2d9793f"
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
