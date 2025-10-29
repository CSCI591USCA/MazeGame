const VERSION = 'v1.0.4';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './src/main.js',
  './src/config.js',
  './src/scenes/BootScene.js',
  './src/scenes/MenuScene.js',
  './src/scenes/GameScene.js',
  './src/maze/mazeGen.js',
  './src/entities/Player.js',
  './src/entities/Enemy.js',
  './src/entities/BulletPool.js',
  './src/systems/InputManager.js',
  './src/utils/device.js',
  'https://cdn.jsdelivr.net/npm/phaser@3.80.0/dist/phaser.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(APP_SHELL)).then(self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
    ).then(self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
