// Starborn: Mars Defense service worker (own cache namespace; only ever touches 'sb-' caches)
const C='sb-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icon-192.png','icon-512.png','icon-180.png','fonts/exo2.woff2','fonts/orbitron.woff2'].map(u=>new Request(u,{cache:'reload'})))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('sb-')&&x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);const so=u.origin===location.origin;if(so&&!u.pathname.startsWith(new URL(self.registration.scope).pathname))return;e.respondWith((so?fetch(e.request.url,{cache:'no-cache',credentials:'same-origin'}):fetch(e.request)).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))});
