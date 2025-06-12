const sectionInitializers = {};

// Seção 1
sectionInitializers.initSection1 = function() {
    const sloganMain = document.querySelector('.hero-section-1 .slogan-main');
    const sloganSub = document.querySelector('.hero-section-1 .slogan-sub');
    const btn = document.querySelector('.hero-section-1 .btn');
    const videoBackground = document.getElementById('video-background-1');
    const heroContent = document.querySelector('.hero-section-1 .hero-content');
    
    if (videoBackground.dataset.initialized === 'true') return;
    videoBackground.dataset.initialized = 'true';

    const showFallbackButton = () => {
        if (document.getElementById('fallback-button-section1')) return;
        const fallbackButton = document.createElement('button');
        fallbackButton.id = 'fallback-button-section1';
        fallbackButton.className = 'video-fallback-button';
        fallbackButton.textContent = 'Tocar Vídeo';
        fallbackButton.onclick = () => {
            videoBackground.play().then(() => {
                fallbackButton.style.display = 'none';
            });
        };
        heroContent.appendChild(fallbackButton);
    };

    const startTextAnimations = () => {
        if (sloganMain && sloganMain.dataset.animated !== 'true') {
            sloganMain.style.animation = 'textAscend 2.5s ease-out forwards';
            sloganSub.style.animation = 'fadeIn 1.5s ease-out 2s forwards';
            btn.style.animation = 'fadeIn 1.5s ease-out 2.8s forwards';
            sloganMain.dataset.animated = 'true';
        }
    };
    
    const tryPlayVideo = () => {
        videoBackground.play().then(() => {
            const fallbackButton = document.getElementById('fallback-button-section1');
            if (fallbackButton) fallbackButton.style.display = 'none';
        }).catch(() => showFallbackButton());
    };

    startTextAnimations();
    
    videoBackground.addEventListener('loadeddata', tryPlayVideo, { once: true });
    if (videoBackground.readyState >= 2) tryPlayVideo();
    else videoBackground.load();
};

// Seção 2
sectionInitializers.initSection2 = function() {
    const sceneContainer = document.getElementById('scene-container-2');
    if (sceneContainer.dataset.initialized === 'true') return;
    sceneContainer.dataset.initialized = 'true';

    document.getElementById('neoTexto').classList.add('revealed');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
    camera.position.z = 4.5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    sceneContainer.appendChild(renderer.domElement);

    const globe = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.3, 2),
        new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true, shininess: 100 })
    );
    scene.add(globe);

    const pointMesh = new THREE.Points(
        new THREE.SphereGeometry(2.32, 64, 64),
        new THREE.PointsMaterial({ color: 0x00aaff, size: 0.03, transparent: true, opacity: 0.7 })
    );
    scene.add(pointMesh);

    scene.add(new THREE.AmbientLight(0x8888ff, 0.6));
    
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const onResize = () => {
        camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    };
    window.addEventListener("resize", onResize);
    onResize();

    const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.002;
        pointMesh.rotation.y += 0.002;
        globe.rotation.x += 0.001;
        pointMesh.rotation.x += 0.001;
        renderer.render(scene, camera);
    };
    animate();
};

// Seção 3
sectionInitializers.initSection3 = function() {
    const videoBackground = document.getElementById('videoBackground3');
    const sectionContent = document.getElementById('section3-content');
    const slogan1 = document.getElementById('slogan1');
    const slogan2 = document.getElementById('slogan2');
    const buttonContainer = document.getElementById('button-container');
    
    if (videoBackground.dataset.initialized === 'true') return;
    videoBackground.dataset.initialized = 'true';

    const showFallbackButton = () => {
        if (document.getElementById('fallback-button-section3')) return;
        const fallbackButton = document.createElement('button');
        fallbackButton.id = 'fallback-button-section3';
        fallbackButton.className = 'botao';
        fallbackButton.textContent = 'Ativar Vídeo';
        fallbackButton.style.marginTop = '20px';
        fallbackButton.onclick = () => videoBackground.play().then(() => fallbackButton.style.display = 'none');
        sectionContent.appendChild(fallbackButton);
    };

    const startContentAnimations = () => {
        if (sectionContent.dataset.animated === 'true') return;
        sectionContent.style.opacity = '1';

        setTimeout(() => {
            slogan1.style.opacity = '0';
            slogan1.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                slogan1.style.display = 'none';
                slogan2.style.opacity = '1';
                slogan2.style.transform = 'translateY(0)';
                setTimeout(() => {
                    buttonContainer.style.opacity = '1';
                    buttonContainer.style.transform = 'translateY(0)';
                }, 1000);
            }, 800);
        }, 2500);
        sectionContent.dataset.animated = 'true';
    };
    
    const tryPlayVideo = () => {
        videoBackground.play().then(() => {
            const fallbackButton = document.getElementById('fallback-button-section3');
            if (fallbackButton) fallbackButton.style.display = 'none';
            videoBackground.style.opacity = '1';
            videoBackground.style.transform = 'scale(1)';
            startContentAnimations();
        }).catch(() => {
            showFallbackButton();
            startContentAnimations();
        });
    };

    videoBackground.addEventListener('loadeddata', tryPlayVideo, { once: true });
    if (videoBackground.readyState >= 2) tryPlayVideo();
    else videoBackground.load();
};

// Seção 4
sectionInitializers.initSection4 = function() {
    const canvas = document.getElementById('bg-canvas-4');
    if (canvas.dataset.initialized === 'true') return;
    canvas.dataset.initialized = 'true';

    const container = document.getElementById("animated-title");
    const subtitle = document.getElementById("section4-subtitle");
    const button = document.getElementById("section4-button");
    const titleLines = ["Magnológica.", "Nós Somos o Coração", "do Novo Poder"];
    let charCount = 0;

    titleLines.forEach((line, lineIndex) => {
        const lineSpan = document.createElement("div");
        lineSpan.className = lineIndex > 0 ? "line-break" : "";
        Array.from(line).forEach(char => {
            const charSpan = document.createElement("span");
            charSpan.textContent = char === " " ? "\u00A0" : char;
            charSpan.style.setProperty('--i', charCount++);
            lineSpan.appendChild(charSpan);
        });
        container.appendChild(lineSpan);
    });

    container.style.opacity = '1';
    setTimeout(() => {
        subtitle.style.opacity = '1';
        button.style.opacity = '1';
    }, charCount * 30 + 500);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const octa1 = new THREE.Mesh(
        new THREE.OctahedronGeometry(1),
        new THREE.MeshStandardMaterial({ color: 0x111111, flatShading: true })
    );
    octa1.scale.set(0.35, 0.35, 0.35);
    octa1.position.set(-1.8, 0, -1);
    scene.add(octa1);

    const octa2 = new THREE.Mesh(
        new THREE.OctahedronGeometry(1),
        new THREE.MeshStandardMaterial({ color: 0x111111, flatShading: true })
    );
    octa2.scale.set(0.35, 0.35, 0.35);
    octa2.position.set(1.8, 0, -1);
    scene.add(octa2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5;
    const animate = () => {
        requestAnimationFrame(animate);
        octa1.rotation.y += 0.004;
        octa1.rotation.x += 0.001;
        octa2.rotation.y -= 0.004;
        octa2.rotation.x -= 0.001;
        renderer.render(scene, camera);
    };
    
    const onResize = () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', onResize);
    onResize();
    animate();
};

// Seção 5
sectionInitializers.initSection5 = function() {
    const video = document.getElementById('bgVideo5');
    const firstContent = document.getElementById('firstTakeContent');
    const secondContent = document.getElementById('secondTakeContent');
    const transitionOverlay = document.getElementById('transitionOverlay5');
    const scrolldown = document.querySelector('#section5 .scrolldown-5');
    
    if (video.dataset.initialized === 'true') return;
    video.dataset.initialized = 'true';

    const playVideoAndAnimate = () => {
        video.play().then(() => {
            video.style.opacity = '1';
            setTimeout(() => {
                firstContent.classList.add('visible');
                setTimeout(() => {
                    transitionOverlay.classList.add('active');
                    setTimeout(() => {
                        firstContent.classList.remove('visible');
                        secondContent.classList.add('visible');
                        setTimeout(() => {
                            transitionOverlay.classList.remove('active');
                            scrolldown.style.opacity = '1';
                        }, 500);
                    }, 1500);
                }, 5000);
            }, 300);
        }).catch(() => {
            setTimeout(() => {
                firstContent.classList.add('visible');
                setTimeout(() => {
                    transitionOverlay.classList.add('active');
                    setTimeout(() => {
                        firstContent.classList.remove('visible');
                        secondContent.classList.add('visible');
                        setTimeout(() => {
                            transitionOverlay.classList.remove('active');
                            scrolldown.style.opacity = '1';
                        }, 500);
                    }, 1500);
                }, 5000);
            }, 300);
        });
    };

    video.addEventListener('loadeddata', playVideoAndAnimate, { once: true });
    if (video.readyState >= 2) playVideoAndAnimate();
    else video.load();

    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
    });
};

// Observer
const sections = document.querySelectorAll('section.full-height-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            const initializer = sectionInitializers['init' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1)];
            if (initializer) initializer();
            
            const video = entry.target.querySelector('video');
            if (video && video.paused) video.play();
        } else {
            entry.target.classList.remove('section-visible');
            const video = entry.target.querySelector('video');
            if (video && !video.paused) video.pause();
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('section1');
    if (section1 && section1.getBoundingClientRect().top < window.innerHeight) {
        sectionInitializers.initSection1();
        section1.classList.add('section-visible');
    }
});

document.body.addEventListener('click', () => {
    document.querySelectorAll('video').forEach(video => {
        if (video.paused) video.play().catch(console.error);
    });
}, { once: true });
