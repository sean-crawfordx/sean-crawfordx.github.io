import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.module.js";
import { animate, frame } from "https://cdn.jsdelivr.net/npm/motion@12.7.3/+esm";

const main = document.getElementById("three-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  25,
  main.offsetWidth / main.offsetHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(main.offsetWidth, main.offsetHeight);
renderer.setClearColor(0x000000, 0); // Transparent background
main.appendChild(renderer.domElement);

// Add a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x4ff0b7 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 2, 2);
scene.add(ambientLight);
scene.add(directionalLight);

camera.position.z = 5;

function rad(degrees) {
  return degrees * (Math.PI / 180);
}

// Render loop
frame.render(() => renderer.render(scene, camera), true);

// Animate cube rotation
animate(
  cube.rotation,
  { y: rad(360), z: rad(360) },
  { duration: 10, repeat: Infinity, ease: "linear" }
);
    
  