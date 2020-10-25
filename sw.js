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
    "url": "webpack-runtime-2ed3923140e0c27731b6.js"
  },
  {
    "url": "styles.4cda2cc011b8eba18b8a.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-62486be4e7163c2939b7.js"
  },
  {
    "url": "c6802b5e-c22d94067a450d98f4ce.js"
  },
  {
    "url": "9f92645c-6ce53252c079428f48f2.js"
  },
  {
    "url": "9598fa14-83c98bc42a12eb60cab6.js"
  },
  {
    "url": "a1bc03cf-434e6f001a27b3bb324c.js"
  },
  {
    "url": "app-2024a8a93de8c5161c71.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9edf788b3f094c83a2e928ae0b9be994"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8153cacf8ae837316f5f.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "3ad26d01f711b240c2e2928515a0c15d"
  },
  {
    "url": "page-data/sq/d/1013078630.json",
    "revision": "7e3d19d49c77bd9f18c69cdd42e6b7e8"
  },
  {
    "url": "page-data/sq/d/2126155663.json",
    "revision": "02c065135836b84dfd61a3058a685c22"
  },
  {
    "url": "page-data/sq/d/2135897355.json",
    "revision": "b23d15c239487ae3eb738d8bc91a7c80"
  },
  {
    "url": "page-data/sq/d/2823672990.json",
    "revision": "e7aaf3f95bd739a5b56acf7722b76648"
  },
  {
    "url": "page-data/sq/d/3216105679.json",
    "revision": "b17a7073192f9d114930c7ad1d87f192"
  },
  {
    "url": "page-data/sq/d/3235971795.json",
    "revision": "d12e895936492b6c07a60592c74bb33f"
  },
  {
    "url": "page-data/sq/d/727480955.json",
    "revision": "11855235cd917c7dd8c42e6f0f155647"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "8934e18453278d93f8341d974e094a20"
  },
  {
    "url": "polyfill-47e517e1ab47dcb70921.js"
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
  if (!resources || !(await caches.match(`/chicago-docs-demo/app-2024a8a93de8c5161c71.js`))) {
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
