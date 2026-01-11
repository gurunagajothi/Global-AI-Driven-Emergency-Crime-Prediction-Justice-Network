if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("pwa/sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.error("SW failed", err));
}
