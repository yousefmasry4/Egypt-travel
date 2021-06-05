'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "cors.json": "bee071e39edafe3b491f72ad8427064b",
"main.dart.js": "37cdecfe5a3034d623f445994f8cfab4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3dca61d6bfdee302d2914dd36c94a295",
"/": "3dca61d6bfdee302d2914dd36c94a295",
"manifest.json": "7f0361ee709bfa2cd1d118b23110a210",
"assets/images/beach.jpg": "59e6f61c03a9efb0caf2afb81b46f7cf",
"assets/images/new_york_3.jpg": "62e361440c5f6944ce7602cf663dfe46",
"assets/images/profile.jpg": "c123888f530c725714122df2bcd297b9",
"assets/images/rio_1.jpg": "f55b77d13d921feb3aea013036992107",
"assets/images/new_york_0.jpg": "35db7b9991a1004ffaa659e7ac2cd7de",
"assets/images/background.jpg": "daa9253a2de30e0d1586092cda6aba3a",
"assets/images/cabins_2.jpg": "d72b82bd052e02f875b83d6b1f4a82f5",
"assets/images/temple_2.jpg": "cbc76efcd06d0c0e0db2fc7c465fbf0a",
"assets/images/1200px-Share_Icon.svg": "fe88bf2bcc0869f469026bcca70722fe",
"assets/images/sidney_0.jpg": "f429b3761084a751b2e8f1f7d2ab3433",
"assets/images/top_of_the_town_3.jpg": "60b283d57bab1da7ffbdf6f576f0b099",
"assets/images/Dahab/happy-life-village.jpg": "3c2f5eecde0894dc42772ecdc7f5f630",
"assets/images/Dahab/see-the-magnificent-temples.jpg": "24d551b852b60cf69a439ec851d9125f",
"assets/images/Dahab/moray-garden.jpg": "7c621f85a2eca54dba4473effab9da9d",
"assets/images/Dahab/snorkel-3-pools-and-blue.jpg": "8591f033a3f0b597e099ece09add7fae",
"assets/images/Dahab/coral-reefs.jpg": "6e335794e2ae3ca3b99a39cb04560c3f",
"assets/images/Dahab/caption.jpg": "174239a926587790e4852fd3197567ae",
"assets/images/Dahab/photo0jpg.jpg": "0a2254f01ea6ab576cabb4878b88c80d",
"assets/images/cabins_3.jpg": "c90031af50c3c929514400f8c3997aa1",
"assets/images/aswan/aswan.jpg": "4a0b0d6a19b81e6c75e7ee9c07fb79a6",
"assets/images/aswan/nile-shore-in-aswan.jpg": "2ac851688aa71428741398486f9eb316",
"assets/images/aswan/caption.jpg": "ee778ef391b0efb2d21b0fbed46315fc",
"assets/images/aswan/aswan-city-egypt.jpg": "8277e82ba32a83d07218cef506afa4da",
"assets/images/cabins_1.jpg": "d144b364eb52cbc7a4d7da3413c5cfb2",
"assets/images/new_york_2.jpg": "88a43a73a75a2b27a1e75db686a66448",
"assets/images/cabins_0.jpg": "f36d205b3112ff03bef6a2704e6916cd",
"assets/images/new_york_1.jpg": "8a385b84ad3ee8821f49e64057617a4c",
"assets/images/sidney_1.jpg": "f70271510571b2c9724e02cddac776a3",
"assets/images/temple_0.jpg": "f624ba0b15bae1fc95d51df347ffa484",
"assets/images/rio_3.jpg": "61d3ba912ecd1b362facd720ec5f8509",
"assets/images/rio_2.jpg": "7c988bd71831add4e102f7d46c7eb2a9",
"assets/images/city.jpg": "5744217b22e999c8ef5eb33e8a242e12",
"assets/images/destination.jpg": "90b5ca530159a1a79a956780414eec8e",
"assets/images/top_of_the_town_1.jpg": "fca157a7439ea38c691ca4d7c90200ff",
"assets/images/top_of_the_town_2.jpg": "d4692e38dbfa6a386b7fec0a2e8b1819",
"assets/images/bus-road-trip.gif": "b1554854315177a5b21424dc5f0c24c7",
"assets/images/rio_0.jpg": "91a9169d3e41f579173ef02e909d189f",
"assets/images/top_of_the_town_0.jpg": "5295980413b10303d88c2387a7fe33f6",
"assets/images/earth.png": "fa05f2d4bc5427c5c2050cc12bc4e11f",
"assets/images/gona/eee.jpg": "28710949dbb0ac5aaabe388937ae6e1b",
"assets/images/gona/abu-tig-marina.jpg": "a607929db332f7c5186ae4e03571f4fd",
"assets/images/gona/ee.png": "0214badb47133a01ed76bb25eb26c876",
"assets/images/gona/sheraton-s-waterways.jpg": "b80a86bbebbfad43c318276fcf8ebee9",
"assets/images/gona/views-from-beach-including.jpg": "e0792f99bff10e2aa89a0c53ae930ee8",
"assets/images/gona/aerial-view.jpg": "66cb69179329b349dd72a52af8aaa7e1",
"assets/images/gona/2019_6_2_21_57_57_704.jpg": "7d17ee0caa4ac1f012d6c641c5cad570",
"assets/images/gona/hotel-sultan-bey.jpg": "bd041532ab2cb1f5ad64794bb64f09df",
"assets/images/temple_1.jpg": "1b1c2b34c68b754bcfc1debaa1b6d082",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.json": "1d10b2e868deda4107c0c7f48d5a4a98",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/icons/temple.png": "e4b10699dd269cd091d20cc00eea6161",
"assets/icons/christ_the_redeemer.png": "a9a303d39ebd95df7ef9f54adf47980f",
"assets/icons/tower_eiffel.png": "cff93c074573f759d2e3c6ee93fea1c6",
"assets/icons/cherry.png": "053926ad7726f0d8557d0c6135aa9557",
"assets/icons/go.gif": "80425ab3ac396cdd3697cc8cb618b97c",
"assets/icons/greek_pillar_capital.png": "348f1670d3ee37daea610c72a860aac1",
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
"version.json": "6a53ae025ecd744a045f553bb9b6eb0e",
"README.md": "23aa74a48066146386483b5978b5fd64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/72/6714ef66c1a92ebe19f3b2f43376b7616f1b54": "8a850120edfd2a8261f3838044967dfd",
".git/objects/2d/b7230e330a8881df6462744c884e562e56c719": "ed8535de9d2c382e25ed97ef55bd12ed",
".git/objects/84/930caeaa9e012e74f3d56dd089f8a2bd497098": "c055acab28147dc81fa8d3b526ef4e41",
".git/objects/84/e22f25a7b6a2cc42482cbf8b030c28903a79d2": "7af41829a9d8cade98cf61853e28af6d",
".git/objects/38/1c01ec6797a979908ae0d0000dab028e2ffed2": "ea06dc219a1643d8996b7708de09e7cc",
".git/objects/c8/cc03867d30e20119249e218328676bf3a09d72": "ac60482e9cc78362cc533a0f2d0cde1e",
".git/objects/d2/0f1771c4bb4939091be80e2608c3ae07731e90": "d3cb4aefbc020a41a19651a5e0e7cc2f",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/c816e96a571dce73b000ff44cbe6fedcea8b49": "3318851698d23a0964d01032a8bf12a0",
".git/objects/dd/5e35748463c97bb874513ba0170d5e7654ab76": "dc0ce8792817a0640814e5a3dda0ca81",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/e6/ab282f68e4c78f3b316857ff9d6f26d4ab6271": "1e7f5d08181399201f93302a7ca9d4d9",
".git/objects/e6/24e7e34f5aa3ea4e6415e198fcc340b19ad5d5": "b80e05a134aef76097efd18215ad746e",
".git/objects/28/7252d0aec5a4bd5fbfe74bbf344b973e84b89f": "83f59636c54b5148ed8edb76d2e9867c",
".git/objects/83/e6e6b2315e73c307da4df58880eaf18c473a7a": "52bdff0cd95d2fad80a239697864d9ba",
".git/objects/4d/291e37e74078f8d1b3b6092a2520b5ba93cdb7": "9d539d2aa924a3643bc904c4782722b6",
".git/objects/56/4d28b75281c38a58a5e438914ba905858c1257": "6a7fb5f841ed1c3588faebf98d4e6dfa",
".git/objects/74/e7be7c66f74c9efa266bac9ebe00474b659ad7": "dac367155a4cdc1261331af4b6d523ee",
".git/objects/18/9e7d4a257fa9b3ba6eeb9777d2f1d4578ebed9": "4fe6a25c9a6cf1bd149c0c38ad8391a1",
".git/objects/18/4f9362f78c25dce7c9a96fa3f96194b6ecfd61": "db79730ab924879f2284af7791357bde",
".git/objects/e1/4b109790e159f78c5519569440e0399707b12a": "12ec6a6b68ebef301b6b8c6c2cd5096e",
".git/objects/82/31743df256032a9e62e9e0613a8ab73d894f0c": "75596615aceef6e2878c57a2b5c5eeba",
".git/objects/89/5167f3f9c8b70a3ee801322af8965e5305429f": "bf6e19e775b8546e1806feb6283def9a",
".git/objects/19/9246d67d24a72fb470377f5f9184a33171baf7": "cbd673b214de7a7e0b617c42a7aa6fc8",
".git/objects/e0/9ce98f9996e591b01eb686a11d0da3b51497a1": "c34c1cda29f6b0fd902e794cb26ebba7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/06/d9fe5ee81e2717feddcbc815a8e857a407519a": "5110812c4a632267c2bacd2b8dff4896",
".git/objects/fe/a8771e1eb7e587fd0d1d564228c32fd40992ce": "2e7819b34b3cb1020e648d093428203b",
".git/objects/b6/4ac9c12567305742a06525eb0efb80a455ff67": "9da4b8df17b880fa1ba3cd603592fd1b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/bf/28cfc7837c37ee531619ae9c647c1de787dd51": "1f69858752b4555840eaff6648b9e07b",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/c9/ddddb6f66fe96fde96043b79536a13d1f95bc3": "142e91c0845daf63e5d2060394158704",
".git/objects/75/d1616ca1a5dfd74631cb050da90f5fd0b90178": "abb04bd3be73b900b02f7d4e28345112",
".git/objects/3a/6f7ad08dcdcd2dbe07bfa9c99b793c5c3e0b9a": "8aaa13d607d512d093300560d3a60d7e",
".git/objects/e8/dc3cf3299671ef19cd7f41b16958d27d51f1ca": "3af67ce97ee8b7721bd19154a86cdc57",
".git/objects/35/6f9c3494f71784d88eb7a19b9a26979ed34ab6": "abb00b083668e58f26ee565e45cea489",
".git/objects/12/fe4c3eebed09adf083046ff236dc418e5d5092": "acc6495bc32ccf5d45397596e05d98fb",
".git/objects/e3/f7601bd49cf85e5b94c5db6fedfe906a2f022a": "48d45b60a2c8e8728623e9341ff4c987",
".git/objects/b8/a901b9d0f2ab2cd19015e002267968cfa7ed96": "59bf5223f1fba9c961dac3248c1ba00a",
".git/objects/ef/09d5f352a18d785ab0b80b03b546b42b54190a": "4905a1ed0e35712208f9d68d95c279dc",
".git/objects/a6/7371818724b080064a2229b6819af36f72ec66": "820fa43b137e0202089c81af5d6d0807",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a0/21d8b6d8fc75866f0117157b2117232033ddc5": "59511ffdaceedc1331bccdc8105067d7",
".git/objects/cc/5646faa4b5deb47cc5a2f4f52ff770f579ea28": "073a14bb2c397b51c496e65487db719c",
".git/objects/3c/a5e4f81b992d53d12a127142fabf280f167d56": "1d737acc3e698d42871a03c58e2191de",
".git/objects/3c/7978c4130329be82139a008e3fd5bbb202a3fd": "737dfc66cb4f6180d8ca72e2479773d9",
".git/objects/51/28c1dbf2fbfa5bcf8571db31f6519372b55e11": "3f8ff5c658bb4d476d87b24f9b151602",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b3/a6833059eff80e64892e13acc215ecc0cc1681": "fd97552884407a8eb32ca0da00f0a111",
".git/objects/de/c9880fe97cd3560c0cef5ab54977570fa17f12": "c48009d3ba5bf358a86cde6161474437",
".git/objects/80/5fcdd8d444c4894021760c0e0a4bd7805d2f2d": "48f688e4bf51c5b771e800339f157aa6",
".git/objects/2c/e6db759558940ef91a4d6f1923078c8eccecb6": "809df4417daa7f2d26c8d19ba1ad42c5",
".git/objects/cb/cd0d0e5714c27b2faf31dc639e713426438aa3": "82963b4e114deaa96b7d7686ddafd581",
".git/objects/4b/6dae199947e5fde481b7ac5d61d8a69d48c8c3": "0151efaeec7b294b9a0058e4be41d8aa",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c4/d93cd90ec053bd9b9237739524f6893e45481d": "aabb81acc76dd7d0d63f676fd9b2f7da",
".git/objects/33/e9fefd9129b7d8a3526a3923dad2fb481a4cce": "53b3ba6b72de75b2b14a6df9d875806c",
".git/objects/f9/8e901f0f7ed04cc27d45bd11a1cd12e2b6f5f7": "0305cf6377d4b9d836f2a5bba148b9fa",
".git/objects/af/823b2320c6956644923180aed9933ab47821eb": "6674e5e111c84b1bf151173968d5ec26",
".git/objects/9f/93cd69569accb5d0124b32dc577bba63414d0e": "dcdabe37699a1e39f8ee37a6c2266832",
".git/objects/73/339eab4c6fe7366f3e2f2a361884d366db2509": "60efe57ef4868d8f4bd1af38a2a01cda",
".git/objects/f2/399b6140e5b5cb9a1f157647e317b827e7c076": "99e288e60d75827969d349505be92bc3",
".git/objects/bd/9d0dfb366924458d2c44fbf49c8674fac7c948": "363520ee8223b0a7de212c1ad0c9ce28",
".git/objects/40/0eba60e5799fccc33a7ddf93dc7c5f34ad79d6": "3688d210eea5c2f23991a256f02100fe",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/13/db47c9beffd4cc228d36c839675b05c2416b70": "9a849a87251d62770217ce5cac328b39",
".git/objects/ca/5bcbdb9a0123c26525bf815b60d919ceef7a17": "6ddc3682d1912fdb5b77e2de0457e4c9",
".git/objects/7c/9c5bc8520654fd93f722753b9b975423e24311": "47f876296c9f8e05fd7fe1145c610921",
".git/objects/1f/47e52bda364c1f44fb0a0f78fd2fe3f9644adf": "43fc6dea627e4483da1690e8bde5f4af",
".git/objects/4e/83440c0920b7c21b8b371dc896ec3dbe4f4d36": "871f5ea65e3899e4bee3ec0b4f32aa61",
".git/objects/ab/042e8f7de1f7d6ed56a16161a4c2d9a8d15eee": "9537fc39c262ee04e1d68ec691be652a",
".git/objects/76/d33db5718b13d031020efea270550ce01cd69d": "242ed77a453fbedf9c823335862a0d51",
".git/objects/36/3c8d06c2d1f787765fcd8c15938183de7be8e0": "47032c78c41eaf1163768c205d473973",
".git/objects/36/036746388103b369ee89b30168197ef176b717": "fa7594c278d1b4fd89078141d0ba865b",
".git/objects/36/63d8baf8de4d6cab3fbacf4a04a485e363bbc6": "be595751988c49e08b116e4a0aeab921",
".git/objects/36/b96e59ae6a519c187b4086f11eef779246f910": "bca4165c2550660bea0c0837e9e0cefb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/dfd10b013f7d163e055865f6a970c1b883f69c": "5577294a52895fb6529b1ed234e9f6fb",
".git/objects/8d/867525118e3f6ea33d437c4a3e9645c40fb344": "a06a425e22fee6b6c028d01ca9758b0c",
".git/objects/94/e2d08f515967fe210b8712d6052b51f9213a40": "5318071af12585a77f56cce53ad1e654",
".git/objects/30/7d1dbdc50ac8d9f047443728c5edbd80e896e3": "16a795f0b3244faeda8f0f9a28cc01fd",
".git/objects/ed/a8fc0630e42e216d0c76b127c31cc90336b14d": "b47c1a3df15968b901c6d80de948d5ff",
".git/objects/ad/1c647b01510357ba49391ad802c7aaa95123a2": "cd56e91e0a76bd47c3d9ddd890a80251",
".git/objects/ba/48c6bc2f4c30cc1ba7bd75df38c91552576e68": "169952bd5b9911f39385f5fde50163db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ff/1df0bbf7f9145e2c67cc90c5fac43a063acc09": "dcb8c28f0520da2ec339449006241fbc",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/c3/99480f7b89a6d05a38b67d02e6856411ea31ff": "0140638ce47f2056f48923799e477c53",
".git/objects/d0/08fd2df716998faec3ec3b4bcb903ba33b2dff": "c8091c7f74141d5ca147c9a8a797de63",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "247dd68d39f32921fd6bbb2a420398b2",
".git/refs/heads/main": "247dd68d39f32921fd6bbb2a420398b2",
".git/logs/refs/remotes/origin/main": "583044d86471a18365c8c20dac84b7f4",
".git/logs/refs/heads/main": "f74926f569fd27aac9c7ffec0ace6341",
".git/logs/HEAD": "ee816637c84b9822f251f5afa9dc7659",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/config": "0dfdd0353390039575a8147609f28a0c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "1403352af545fc3b8a6de3759ed03949",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa"
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
