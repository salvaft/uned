- All thumbnails are jpeg and can be converted to webp or avif
- Offscreen images can be lazyloaded

---

- There is an ~2 seconds avg long PUT request that is initiated by `app.js` which waterfalls into GET requests for all the video categories. All these GET request return application/json and should be compressed.

---

## ![image](/uxui/ejercicio-3/adminflix/img/get_requests.webp)

![image](/uxui/ejercicio-3/adminflix/img/profile.webp)
