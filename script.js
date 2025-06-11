document.addEventListener('DOMContentLoaded', function () {
  // Texto animado seção 4
  const textoAnimado = "Precisão. Imersão. Autoridade.";
  const titulo = document.getElementById('animated-title');
  let index = 0;

  function escreverTexto() {
    if (index < textoAnimado.length) {
      titulo.innerHTML += textoAnimado.charAt(index);
      index++;
      setTimeout(escreverTexto, 100);
    }
  }

  escreverTexto();

  // Transição seção 5
  const content1 = document.getElementById('firstTakeContent');
  const content2 = document.getElementById('secondTakeContent');
  const transitionOverlay = document.getElementById('transitionOverlay5');

  setTimeout(() => {
    transitionOverlay.style.opacity = '1';
    setTimeout(() => {
      content1.style.display = 'none';
      content2.style.display = 'block';
      transitionOverlay.style.opacity = '0';
    }, 1500);
  }, 9000);

  // Efeito scrolldown bolinha
  const scrollSpans = document.querySelectorAll('.scrolldown-5 span');
  scrollSpans.forEach((span, i) => {
    span.style.animationDelay = `${i * 0.2}s`;
  });

  // -------------------------------
  // CENA 3D (Seção 4 - bg-canvas-4)
  // -------------------------------
  const canvas = document.getElementById('bg-canvas-4');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Criando octaedros
  const geometry = new THREE.OctahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.7,
    roughness: 0.2,
  });

  const group = new THREE.Group();

  for (let i = 0; i < 25; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
    mesh.rotation.set(Math.random(), Math.random(), Math.random());
    mesh.scale.setScalar(Math.random() * 0.5 + 0.5);
    group.add(mesh);
  }

  scene.add(group);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.001;
    group.rotation.x += 0.001;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });

  // -------------------------------
  // CENA ANIMADA (Seção 2 - scene-container-2)
  // -------------------------------
  const container = document.getElementById('scene-container-2');
  if (container) {
    const scene2 = new THREE.Scene();
    const camera2 = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer2 = new THREE.WebGLRenderer({ alpha: true });
    renderer2.setSize(container.clientWidth, container.clientHeight);
    renderer2.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer2.domElement);

    const sphereGeometry = new THREE.IcosahedronGeometry(1.5, 1);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene2.add(sphere);

    const light2 = new THREE.PointLight(0xffffff, 1);
    light2.position.set(5, 5, 5);
    scene2.add(light2);

    camera2.position.z = 4;

    function animate2() {
      requestAnimationFrame(animate2);
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.003;
      renderer2.render(scene2, camera2);
    }

    animate2();

    window.addEventListener('resize', () => {
      camera2.aspect = container.clientWidth / container.clientHeight;
      camera2.updateProjectionMatrix();
      renderer2.setSize(container.clientWidth, container.clientHeight);
    });
  }
});
