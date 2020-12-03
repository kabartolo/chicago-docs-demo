/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fff463d6a478d1bda383.js"
  },
  {
    "url": "styles.599224586f67484e0722.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-a882ea00be054f4407c4.js"
  },
  {
    "url": "c6802b5e-b2934afc45338b06aa59.js"
  },
  {
    "url": "9f92645c-ee06cee2b0e6da3da138.js"
  },
  {
    "url": "9598fa14-14667736b15e08c79157.js"
  },
  {
    "url": "a1bc03cf-f91182491ff25c8b714e.js"
  },
  {
    "url": "app-46cd2a7592ba314769e1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8d6b1fa59e45172e5bda94e91e48896c"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8e03ed25f55e17579bf6.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "4aecab3c174b2b1ae1d14d4a76330d83"
  },
  {
    "url": "page-data/sq/d/1013078630.json",
    "revision": "49b7c949d2f88f7ea6e5ba655f871fff"
  },
  {
    "url": "page-data/sq/d/1203941282.json",
    "revision": "4e549fdfe9c338d7c5a91436f8f3b4bf"
  },
  {
    "url": "page-data/sq/d/2135897355.json",
    "revision": "c0b31cf6055f1d650ed1be1596ba400b"
  },
  {
    "url": "page-data/sq/d/3216105679.json",
    "revision": "654d8b412b85cce75f31dac42c42e169"
  },
  {
    "url": "page-data/sq/d/3235971795.json",
    "revision": "240c3c21c76f4dfea457316e3b6947a8"
  },
  {
    "url": "page-data/sq/d/3883998633.json",
    "revision": "cbc558081b1e90ab72116e417ed22768"
  },
  {
    "url": "page-data/sq/d/727480955.json",
    "revision": "38f21f24ecb0c3326e4b8680869307a5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "19ac6908ab0b0b7a9d727a03734566c2"
  },
  {
    "url": "polyfill-a02033c5d790f660842d.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "462b6da4c24abb995396e5adf0b1855f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/chicago-docs-demo`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/chicago-docs-demo/app-46cd2a7592ba314769e1.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/chicago-docs-demo/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
