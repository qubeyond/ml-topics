// Бампаем версию при заметных изменениях app shell, чтобы сбросить старый кэш.
const CACHE = "mltopics-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./site.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// SW не контролирует ту же страницу, что его зарегистрировала (первая
// загрузка идёт мимо fetch-хендлера) — поэтому весь контент качаем сюда
// сами при установке, иначе офлайн после единственного визита не сработает.
function precacheContent(cache){
  return fetch("./content/manifest.json").then((r) => r.json()).then((manifest) => {
    var urls = ["./content/manifest.json"];
    manifest.forEach((entry) => {
      urls.push("./content/ru/" + entry.file);
      urls.push("./content/en/" + entry.file);
    });
    return Promise.all(urls.map((u) => fetch(u).then((res) => {
      if (res.ok) return cache.put(u, res);
    }).catch(() => {})));
  }).catch(() => {});
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(APP_SHELL).then(() => precacheContent(cache)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Чужие origin (шрифты, api.github.com) — не трогаем, обычная сеть.
  if (url.origin !== self.location.origin) return;
  if (req.method !== "GET") return;

  // index.html и app shell: network-first — если онлайн, всегда свежая
  // версия; офлайн — отдаём то, что закэшировано с прошлого визита.
  if (req.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname === "/") {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((res) => res || caches.match("./index.html")))
    );
    return;
  }

  // content/*.md и manifest.json: stale-while-revalidate — отдаём из кэша
  // мгновенно, параллельно тянем свежую версию на будущее.
  if (url.pathname.includes("/content/")) {
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          const network = fetch(req).then((res) => {
            if (res.ok) cache.put(req, res.clone());
            return res;
          }).catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // Остальное (иконки, манифест, шрифт CSS и т.п.): cache-first.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
