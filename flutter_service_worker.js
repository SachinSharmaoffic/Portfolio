'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fe5eaf61b536643e984ec0be656d7deb",
"index.html": "db83200caaf23fa5c2ecca83fe47e068",
"/": "db83200caaf23fa5c2ecca83fe47e068",
"main.dart.js": "a8d7900c34a5abb85c053c7b49b0dbda",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "0f0af1533b8f8a3b13fc801d9f0d1f6c",
"icons/Icon-192.png": "4d34501b1da1fb2663e6e3df3bf878d0",
"icons/Icon-maskable-192.png": "9622e44623971e57c77a25aa1cf94a26",
"icons/Icon-maskable-512.png": "ae049286a57ee4a1122fafc333ecadd5",
"icons/Icon-512.png": "975cf448f2db2e28bf7f9790b3fc66ef",
"manifest.json": "984a3d214cb51d57bc941a3161a9cbce",
"assets/AssetManifest.json": "be81a11f557e61e4ba9d19b816ae5ea7",
"assets/NOTICES": "62fa7e8291d85b8c2d6ce4d042b6e4f9",
"assets/FontManifest.json": "6e4aaed1a4b6549ec38f5f53144aa067",
"assets/AssetManifest.bin.json": "b19fe523861fdc1623cd5db9374d7ff7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "c0fec2d13d4ae5ad27499952dd35d564",
"assets/fonts/MaterialIcons-Regular.otf": "9ed1e96408db2326f1cc05be2f27024a",
"assets/assets/imgs/ok2.jpg": "f5bcf9150444ad33386f5adb0918ff96",
"assets/assets/imgs/okwow.png": "d244dc0763f4a07ce0fbf73498c0bd7f",
"assets/assets/imgs/sac.png": "c12767f1a1f6760f2fe1f7f627f56584",
"assets/assets/imgs/sachintab.png": "acfc44907a1d962b488d4b90321cf6f8",
"assets/assets/imgs/vector.png": "89d0f285138513327850ecbccbaef2d7",
"assets/assets/imgs/sachin.png": "bdc4bbc40d554002b417ec5d83704d9a",
"assets/assets/highcons/ok2.jpg": "f5bcf9150444ad33386f5adb0918ff96",
"assets/assets/highcons/git.png": "ce57145f4a329ceea0a479a29ba74812",
"assets/assets/highcons/mail.png": "c2c52ec91cb54d12cbcd00bfa4d27e44",
"assets/assets/highcons/python.png": "9ae7d0c2a37c4626d2ea58f615906814",
"assets/assets/highcons/flutter.png": "16c3479c9197a3f4ccfa0042a78a0edc",
"assets/assets/highcons/Firebase.png": "f0e9c83476b91ef4b4ac7e45f7bf09be",
"assets/assets/highcons/js.png": "4da39bef7f1776f855902819c439fcb7",
"assets/assets/highcons/django.png": "eaba072c62edb2487cee243587fd6e0b",
"assets/assets/highcons/html.png": "6de3b354bf4afb26313104e20e58d9ad",
"assets/assets/highcons/C.png": "27ece1040234ce600eb39a762e5bae7d",
"assets/assets/highcons/css.png": "f479a83425fb682fe87c4367bc5f133f",
"assets/assets/highcons/dart.png": "975e93e3a9a67eaf8399e64d5841c4cc",
"assets/assets/Projects/12.png": "dcbc760be6c8c9df057612e41afcd76a",
"assets/assets/Projects/22.png": "f38c99a1e4894ca4c90067505e922c47",
"assets/assets/Projects/4.png": "26b30fa448000df9550234c881e8f8c3",
"assets/assets/Projects/2.png": "7d60d19b3936811f0b4e4341a325ee8a",
"assets/assets/Projects/3.png": "877f998c854a776e613dca417d829a6e",
"assets/assets/Projects/1.png": "9147022f72e012f395a407a1a6ee7c00",
"assets/assets/icons/service-icon2.png": "76ebd4fc5d58b6df4727f2c56a0f07d0",
"assets/assets/icons/service-icon3.png": "eb524053ea0003ec4f59dcbd98b52e3b",
"assets/assets/icons/mongo.svg": "4605d33cd36880372616e3ca5e5b84b9",
"assets/assets/icons/service-icon1.png": "532d1d90eb0e8bc77fd20158b183b2c5",
"assets/assets/icons/aws.svg": "f7616d05f34fff7b5d51f2bffaf37680",
"assets/assets/icons/git.png": "d66fdf5359016354bbf17e6d78385f13",
"assets/assets/icons/firebase.svg": "1f2011e3d7c5ce2c5a7bdb0b03b7313a",
"assets/assets/icons/service-icon4.png": "45028cc7f11057c383a6e689fdaf917a",
"assets/assets/icons/service-icon5.png": "57ecfddfefd4478bfdec1eecd8a14f77",
"assets/assets/icons/github.svg": "922cebc7d4eff022d645489376f509fa",
"assets/assets/icons/instagram.png": "fa8de3d8d137f02af96d960647f4708c",
"assets/assets/icons/flutter.svg": "89db552159f61898e9ceecedba8c3f67",
"assets/assets/icons/github.png": "0927fe22d7b0fc7fee25aa52fe4e15d1",
"assets/assets/icons/python.svg": "62f7c299e061d217d7b0102624bf92b7",
"assets/assets/icons/docker.svg": "fa2de16480ab046e2368e2328b1524c2",
"assets/assets/icons/linux.png": "74d43c88e4d58a774ca23dbfb255584e",
"assets/assets/icons/ts.svg": "8c5a9295b9cd3f35b88e85e2aa0da058",
"assets/assets/icons/tf.svg": "ba5e5c7308470d2d06d35f336aeb5e7d",
"assets/assets/icons/tik-tok.png": "32e070e206711aa769d4844e13a4b8cb",
"assets/assets/icons/go.png": "7511bc3950af7eb55f2635459321a689",
"assets/assets/icons/globe.png": "04f941cf7aafe3c383b1a3f238d04ba9",
"assets/assets/icons/twitter.png": "9ee1b4476e06ade4d6f4aa69f3f2105e",
"assets/assets/icons/linkedin.png": "7a1366b13d446d4deb334dc2f4fc6dea",
"assets/assets/icons/youtube.svg": "57f9b50d4a5b2805723fac1be2903200",
"assets/assets/icons/youtube.png": "fed20ac6e9047a7d2872fedbee590517",
"assets/assets/icons/linkedin.svg": "a64a3f0f7f525a4bc822c29f04a9e55f",
"assets/assets/icons/insta.svg": "6776e6e975fb5ec7d02ad6d9aedeac78",
"assets/assets/icons/k8.svg": "519b4e5658ef53ad723f1e53e084b993",
"assets/assets/icons/node.svg": "0d8b1e351914001856e70ce95360398d",
"assets/assets/fonts/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/JosefinSans/JosefinSans-Italic.ttf": "72c897aabeba0a923c4eca1b355fb866",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "b22a8f2494bafa9cd040aa9db29bc43d",
"assets/assets/fonts/JosefinSans/JosefinSans-Light.ttf": "1e660e971a00bdedd9aea889b8b3308d",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "4d6fba7324c7c30b35e1190e93f38aac",
"assets/assets/fonts/JosefinSans/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/JosefinSans/JosefinSans-Medium.ttf": "4c0529618e047e91b356eb04633136dc",
"assets/assets/gif/hi.gif": "a8a03e12ce08a2d350e56855c86ba08b",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
