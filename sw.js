// Star King: Mars Defense service worker. Isolated: only touches its own 'sb-' caches and only handles requests under its own scope path.
const P='sb-',C=P+'v6',SCOPE=new URL(self.registration.scope).pathname;
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icon-192.png','icon-512.png','icon-180.png','fonts/exo2.woff2','fonts/orbitron.woff2'].map(u=>new Request(u,{cache:'reload'})))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith(P)&&x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url),so=u.origin===location.origin;if(so&&!u.pathname.startsWith(SCOPE))return;
 e.respondWith((so?fetch(q.url,{cache:'no-cache',credentials:'same-origin'}):fetch(q)).then(r=>{if(r&&(r.ok||r.type==='opaque')){const x=r.clone();caches.open(C).then(c=>c.put(q,x))}return r}).catch(()=>caches.open(C).then(c=>c.match(q))))});
