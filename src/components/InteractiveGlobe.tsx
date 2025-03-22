// src/components/InteractiveGlobe.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthTexture from '../assets/images/earth-texture.jpg';

const InteractiveGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(600, 600);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const texture = new THREE.TextureLoader().load(earthTexture);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const markers = [
      { lat: 59.3293, lon: 18.0686, name: 'Stockholm' },
      { lat: 57.7089, lon: 11.9746, name: 'Göteborg' },
    ];

    markers.forEach(marker => {
      const { lat, lon, name } = marker;
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -5 * Math.sin(phi) * Math.cos(theta);
      const y = 5 * Math.cos(phi);
      const z = 5 * Math.sin(phi) * Math.sin(theta);

      const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);
      markerMesh.position.set(x, y, z);
      markerMesh.userData = { name };
      globe.add(markerMesh);
    });

    camera.position.z = 15;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    // Enable auto-rotation by default
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0; // Adjust speed (default 2.0, lower is slower)

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(globe.children);
      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        if (clickedObject.userData.name) {
          alert(`You clicked on ${clickedObject.userData.name}`);
        }
      }
    };

    renderer.domElement.addEventListener('click', onClick);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Updates auto-rotation and user interaction
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.domElement.removeEventListener('click', onClick);
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '600px', height: '600px' }} />;
};

export default InteractiveGlobe;