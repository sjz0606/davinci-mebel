// Davinci virtual showroom: real photos/video as planes in a scroll-driven corridor.
// Transition = "reeded glass" (fluted facade) refraction, borrowed from the fluted fronts of their own furniture.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const BG = 0x24211e;
const SP = 7;            // distance between bays
const CH = 3.2, CW = 2.4; // center plane (3:4)
const SH = 2.6, SW = 1.95; // side planes

const VERT = /* glsl */`
uniform float uVel;
varying vec2 vUv;
varying float vDepth;
void main(){
  vUv = uv;
  vec3 p = position;
  p.z += sin(uv.y * 3.14159) * uVel * 1.4;
  p.z += sin(uv.x * 3.14159) * abs(uVel) * 0.6;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}`;

const FRAG = /* glsl */`
uniform sampler2D uTex;
uniform float uImgA, uPlaneA, uReveal, uAlpha, uLoaded, uMirror, uTime;
uniform vec2 uLight;
uniform vec3 uFogColor;
uniform float uFogNear, uFogFar;
varying vec2 vUv;
varying float vDepth;
vec2 cover(vec2 uv){
  vec2 s = vec2(1.0);
  if (uImgA > uPlaneA) s.x = uPlaneA / uImgA; else s.y = uImgA / uPlaneA;
  return (uv - 0.5) * s + 0.5;
}
void main(){
  const float SL = 20.0;
  vec2 uv = vUv;
  float sx = fract(uv.x * SL);
  float sid = floor(uv.x * SL) / SL;
  float st = abs(sid + 0.5 / SL - 0.5) * 2.0;
  float open = smoothstep(st * 0.45, st * 0.45 + 0.55, uReveal);
  float k = 1.0 - open;
  // reeded glass: each flute squeezes the image toward its centre and shifts it
  float lensed = sid + 0.5 / SL + (sx - 0.5) / SL * (1.0 - 0.85 * k) + (sx - 0.5) * 0.09 * k;
  vec2 ruv = vec2(mix(uv.x, lensed, k), uv.y + (sx - 0.5) * 0.02 * k);
  vec3 col = texture2D(uTex, cover(ruv)).rgb;
  float edge = pow(abs(sx - 0.5) * 2.0, 3.0);
  col *= 1.0 - edge * 0.5 * k;
  col += vec3(1.0, 0.95, 0.88) * pow(max(0.0, 1.0 - abs(sx - 0.32) * 3.2), 6.0) * 0.22 * k;
  col *= mix(0.3, 1.0, open);
  // soft light that follows the pointer
  float d = distance(vUv, uLight);
  col += vec3(1.0, 0.94, 0.84) * smoothstep(0.6, 0.0, d) * 0.07;
  col = mix(uFogColor, col, uLoaded);
  float a = uAlpha;
  if (uMirror > 0.5) { a *= 0.2 * smoothstep(0.45, 0.0, vUv.y); col = mix(col, uFogColor, 0.3); }
  float fog = smoothstep(uFogNear, uFogFar, vDepth);
  col = mix(col, uFogColor, fog);
  gl_FragColor = vec4(col, a);
  #include <colorspace_fragment>
}`;

export function createHall(canvas, bays, { onPick } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(BG, 1);

  const scene = new THREE.Scene();
  const fogColor = new THREE.Color(BG);
  scene.fog = new THREE.Fog(BG, 6, 24);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 80);
  const N = bays.length;
  const loader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const FLOOR = -2.05;

  const mats = []; const pickables = [];
  function makeMat(src, planeA) {
    const u = {
      uTex: { value: null }, uImgA: { value: 0.75 }, uPlaneA: { value: planeA }, uReveal: { value: 0 }, uAlpha: { value: 1 },
      uLoaded: { value: 0 }, uMirror: { value: 0 }, uTime: { value: 0 }, uVel: { value: 0 }, uLight: { value: new THREE.Vector2(0.5, 0.6) },
      uFogColor: { value: fogColor }, uFogNear: { value: 8 }, uFogFar: { value: 22 },
    };
    const m = new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide });
    loader.load(src, tex => {
      tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = Math.min(4, maxAniso);
      u.uTex.value = tex; u.uImgA.value = tex.image.width / tex.image.height; m._fadeIn = true;
    });
    mats.push(m);
    return m;
  }

  const geoC = new THREE.PlaneGeometry(CW, CH, 24, 24);
  const geoS = new THREE.PlaneGeometry(SW, SH, 16, 16);
  const items = []; // per bay
  bays.forEach((b, i) => {
    const z = -i * SP;
    const group = new THREE.Group(); group.position.z = z; scene.add(group);
    const mc = makeMat(b.src[0], CW / CH);
    const center = new THREE.Mesh(geoC, mc); center.position.set(0, 0.15, 0); center.userData.bay = i; group.add(center); pickables.push(center);
    // glossy floor reflection (same real image, mirrored)
    const mr = mc.clone(); mr.uniforms = THREE.UniformsUtils.clone(mc.uniforms); mr.uniforms.uMirror.value = 1; mr.uniforms.uFogColor.value = fogColor;
    const refl = new THREE.Mesh(geoC, mr); refl.scale.y = -1; refl.position.set(0, FLOOR - (0.15 - FLOOR), 0); group.add(refl);
    const ml = makeMat(b.src[1], SW / SH), mrr = makeMat(b.src[2], SW / SH);
    const left = new THREE.Mesh(geoS, ml); left.userData.bay = i; group.add(left); pickables.push(left);
    const right = new THREE.Mesh(geoS, mrr); right.userData.bay = i; group.add(right); pickables.push(right);
    // doorway frame: thin brass outline marking the next room
    const fw = 6.4, fh = 4.5;
    const pts = [new THREE.Vector3(-fw / 2, FLOOR, 0), new THREE.Vector3(-fw / 2, FLOOR + fh, 0), new THREE.Vector3(fw / 2, FLOOR + fh, 0), new THREE.Vector3(fw / 2, FLOOR, 0)];
    const frame = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xb48f5a, transparent: true, opacity: 0.55, fog: true }));
    frame.position.z = 2.6; group.add(frame);
    items.push({ group, center, refl, left, right, mc, mr, ml, mrr, frame, z });
  });

  // video for the showroom bay (real IG video), swapped in once it has frames
  let video = null, vtex = null;
  const vb = bays.findIndex(b => b.video);
  if (vb >= 0) {
    video = document.createElement('video');
    Object.assign(video, { muted: true, loop: true, playsInline: true, preload: 'none', crossOrigin: 'anonymous' });
    video.setAttribute('muted', ''); video.setAttribute('playsinline', '');
    video.src = bays[vb].video;
  }

  // environment: grid ceiling (like their showroom), floor, LED lines, dust
  const len = N * SP + 30;
  const gpos = [];
  for (let x = -7; x <= 7; x += 1.4) gpos.push(x, 2.7, 12, x, 2.7, -len);
  for (let z = 12; z >= -len; z -= 1.4) gpos.push(-7, 2.7, z, 7, 2.7, z);
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(gpos, 3));
  scene.add(new THREE.LineSegments(gg, new THREE.LineBasicMaterial({ color: 0x5b544c, fog: true })));
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, len + 12), new THREE.MeshBasicMaterial({ color: 0x2c2824, fog: true }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, FLOOR - 0.001, -len / 2 + 12); floor.renderOrder = -2; scene.add(floor);
  [-3.9, 3.9].forEach(x => { const l = new THREE.Mesh(new THREE.PlaneGeometry(0.035, len + 12), new THREE.MeshBasicMaterial({ color: 0xc9a46c, fog: true })); l.rotation.x = -Math.PI / 2; l.position.set(x, FLOOR + 0.002, -len / 2 + 12); scene.add(l); });
  const DN = 420; const dpos = new Float32Array(DN * 3);
  for (let i = 0; i < DN; i++) { dpos[i * 3] = (Math.random() - 0.5) * 10; dpos[i * 3 + 1] = FLOOR + Math.random() * 4.6; dpos[i * 3 + 2] = 8 - Math.random() * len; }
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: 0xefe6d6, size: 0.018, transparent: true, opacity: 0.55, fog: true, depthWrite: false }));
  scene.add(dust);

  // layout depends on aspect + the free "band" between page text (box in px: cx, cy, w, h)
  let D = 6, W = 1, H = 1, aspect = 1, box = null, leftDim = 0;
  function applyBox() {
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const b = box || { cx: W / 2, cy: H / 2, w: W * (aspect < 0.8 ? 0.7 : 0.8), h: H * (aspect < 0.8 ? 0.44 : 0.56) };
    const Dh = (CH / Math.max(0.15, b.h / H)) / (2 * tan);
    const Dw = (CW / Math.max(0.15, b.w / W)) / (2 * tan * aspect);
    D = Math.max(Dh, Dw);
    camera.setViewOffset(W, H, -(b.cx - W / 2), -(b.cy - H / 2), W, H);
    scene.fog.near = D + 1; scene.fog.far = D + SP * 2.1;
    mats.forEach(m => { m.uniforms.uFogNear.value = D + 1.5; m.uniforms.uFogFar.value = D + SP * 2.1; });
    items.forEach(it => { it.mr.uniforms.uFogNear.value = D + 1.5; it.mr.uniforms.uFogFar.value = D + SP * 2.1; });
  }
  function layout() {
    W = canvas.clientWidth || innerWidth; H = canvas.clientHeight || innerHeight; aspect = W / H;
    camera.fov = aspect < 0.8 ? 50 : 40; camera.aspect = aspect; camera.updateProjectionMatrix();
    renderer.setSize(W, H, false);
    applyBox();
    const sx = aspect < 0.8 ? 1.75 : Math.min(3.4, 2.0 + aspect * 0.6);
    const ry = aspect < 0.8 ? 0.55 : 0.72;
    items.forEach(it => {
      it.left.position.set(-sx, 0.05, -1.3); it.left.rotation.y = ry;
      it.right.position.set(sx, 0.05, -1.3); it.right.rotation.y = -ry;
    });
  }
  layout();
  const ro = new ResizeObserver(() => { layout(); if (!running) renderOnce(); }); ro.observe(canvas);

  // input
  let target = 0, cur = 0, prev = 0, vel = 0;
  const ptr = new THREE.Vector2(0, 0), ptrS = new THREE.Vector2(0, 0);
  let hasPointer = false;
  addEventListener('pointermove', e => { if (e.pointerType === 'mouse') { hasPointer = true; ptr.set((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1)); } }, { passive: true });
  const ray = new THREE.Raycaster(); let down = null;
  canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', e => {
    if (!down) return; const dx = e.clientX - down.x, dy = e.clientY - down.y; const dt = performance.now() - down.t; down = null;
    if (dx * dx + dy * dy > 64 || dt > 500) return;
    const r = canvas.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
    const hit = ray.intersectObjects(pickables, false).find(h => h.object.material.uniforms.uAlpha.value > 0.5);
    if (hit && onPick) onPick(hit.object.userData.bay);
  });
  canvas.style.cursor = 'pointer';

  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const clock = new THREE.Clock();
  let running = false, raf = 0, videoOn = false;

  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05); const time = clock.elapsedTime;
    cur += (target - cur) * Math.min(1, dt * 5.5);
    vel += ((cur - prev) / Math.max(dt, 1e-3) * 0.05 - vel) * 0.15; prev = cur;
    const bend = THREE.MathUtils.clamp(vel, -0.35, 0.35);
    const camZ = -cur * SP + D;
    // idle sway on touch devices, pointer parallax on desktop
    if (!hasPointer) ptr.set(Math.sin(time * 0.35) * 0.25, Math.sin(time * 0.27) * 0.15);
    ptrS.lerp(ptr, Math.min(1, dt * 3));
    camera.position.set(ptrS.x * 0.35, 0.05 + ptrS.y * 0.12, camZ);
    camera.rotation.set(ptrS.y * 0.035, -ptrS.x * 0.07, 0);
    const lightUv = new THREE.Vector2(0.5 + ptrS.x * 0.45, 0.55 + ptrS.y * 0.4);

    items.forEach((it, i) => {
      const dist = camZ - it.z; // distance from camera to bay plane
      const enter = ss(D + SP * 1.15, D + SP * 0.15, dist);
      const exit = ss(D * 0.18, D * 0.62, dist);
      const rev = Math.min(enter, exit);
      const alpha = ss(D * 0.12, D * 0.45, dist) * ss(D + SP * 2.6, D + SP * 1.4, dist);
      const sDist = dist + 1.3;
      const sRev = Math.min(ss(D + SP * 1.0, D + SP * 0.1, sDist), ss(-0.5, 2.2, sDist));
      const sAlpha = ss(-1.2, 0.6, sDist) * ss(D + SP * 2.6, D + SP * 1.4, sDist);
      const set = (m, r, a) => { const u = m.uniforms; if (m._fadeIn) u.uLoaded.value = Math.min(1, u.uLoaded.value + dt * 2.2); u.uReveal.value = r; u.uAlpha.value = a; u.uVel.value = bend; u.uLight.value.copy(lightUv); u.uTime.value = time; };
      set(it.mc, rev, alpha); set(it.ml, sRev, sAlpha * (i === 0 ? 1 - leftDim : 1)); set(it.mrr, sRev, sAlpha);
      const ur = it.mr.uniforms; ur.uTex.value = it.mc.uniforms.uTex.value; ur.uImgA.value = it.mc.uniforms.uImgA.value; ur.uLoaded.value = it.mc.uniforms.uLoaded.value; ur.uReveal.value = rev; ur.uAlpha.value = alpha; ur.uVel.value = bend;
      const vis = alpha > 0.002 || sAlpha > 0.002;
      it.group.visible = vis;
      it.frame.material.opacity = 0.5 * ss(-0.5, 2.5, dist + 2.6) * ss(D + SP * 2.5, D + SP * 0.8, dist);
      // gentle float
      it.center.position.y = 0.15 + Math.sin(time * 0.6 + i) * 0.03;
    });

    // showroom video only when near
    if (video) {
      const near = Math.abs(cur - vb) < 1.2;
      if (near && !videoOn) { videoOn = true; video.play().then(() => { if (!vtex) { vtex = new THREE.VideoTexture(video); vtex.colorSpace = THREE.SRGBColorSpace; } }).catch(() => {}); }
      if (!near && videoOn) { videoOn = false; video.pause(); }
      if (vtex && video.readyState >= 2) { const u = items[vb].mc.uniforms; if (u.uTex.value !== vtex) { u.uTex.value = vtex; u.uImgA.value = (video.videoWidth || 9) / (video.videoHeight || 16); } }
    }
    dust.rotation.y = Math.sin(time * 0.05) * 0.02; dust.position.y = Math.sin(time * 0.2) * 0.05;
    renderer.render(scene, camera);
  }
  function loop() { frame(); raf = requestAnimationFrame(loop); }
  function renderOnce() { frame(); }

  function setActive(on) {
    if (on && !running) { running = true; clock.getDelta(); loop(); }
    else if (!on && running) { running = false; cancelAnimationFrame(raf); if (video && videoOn) { video.pause(); videoOn = false; } }
  }
  setActive(true);

  return {
    setProgress(f) { target = f; },
    setBox(b, dim = 0) { box = b; leftDim = dim; applyBox(); },
    setActive,
    dispose() { setActive(false); ro.disconnect(); renderer.dispose(); },
  };
}
