self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pos-cache").then((cache) => {
      return cache.addAll([
        "/POS/",           // ชื่อ repo ของคุณ
        "/POS/index.html",
        "/POS/icon.png",
        "/POS/icon192.png",
        "/POS/icon512.png",
        "/POS/apple-icon.png",
        "/POS/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
