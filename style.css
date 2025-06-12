/* Estilos Reset Básico */
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    background-color: #000;
    overflow-x: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}

/* Classes base para as seções de altura total */
.full-height-section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1.2s ease-out, transform 1.2s ease-out;
    will-change: opacity, transform;
}

.full-height-section.section-visible {
    opacity: 1;
    transform: translateY(0);
}

.full-height-section:not(:last-of-type)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    pointer-events: none;
    z-index: 10;
}

/* Seção 1 */
.hero-section-1 {
    background-color: transparent;
}

.hero-section-1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
}

#video-background-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.6);
    opacity: 1;
    transition: opacity 1.5s ease-out;
}

.hero-section-1 .hero-content {
    position: relative;
    z-index: 1;
}

@keyframes textAscend {
    0% { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); text-shadow: none; }
    50% { opacity: 0.7; transform: translateY(-5px) scale(1.02); filter: blur(0); text-shadow: 0 0 10px rgba(0, 200, 200, 0.7), 0 0 20px rgba(0, 150, 150, 0.5); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); text-shadow: 0 0 15px rgba(0, 200, 200, 0.8), 0 0 25px rgba(0, 180, 180, 0.6), 0 0 35px rgba(0, 160, 160, 0.4); }
}

.slogan-main {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.8em;
    font-weight: bold;
    color: #00CCCC;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 1.2;
    margin-bottom: 10px;
    opacity: 0;
}

.slogan-sub {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8em;
    color: #B0E0E6;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-top: 15px;
    opacity: 0;
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    background-color: rgba(0, 170, 170, 0.7);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 40px;
    opacity: 0;
    backdrop-filter: blur(5px);
}

.btn:hover {
    background-color: rgba(0, 140, 140, 0.9);
    transform: translateY(-3px);
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.video-fallback-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 28px;
    background-color: rgba(0, 170, 170, 0.7);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    backdrop-filter: blur(5px);
    z-index: 10;
    cursor: pointer;
    border: none;
    font-size: 1.2rem;
}

.video-fallback-button:hover {
    background-color: rgba(0, 140, 140, 0.9);
    transform: translate(-50%, -50%) translateY(-3px);
}

/* Seção 2 */
.secao-minimalista-2 {
    background: radial-gradient(ellipse at center, #0a0a12 0%, #000000 70%);
    box-shadow: inset 0 0 100px rgba(0, 40, 80, 0.15);
    color: #d4d4d4;
    font-family: 'Inter', sans-serif;
    justify-content: flex-start;
    padding-top: 4rem;
}

.secao-minimalista-2 .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 0 2rem;
}

.neo-texto {
    max-width: 1000px;
    font-family: 'EB Garamond', serif;
    font-style: normal;
    font-size: 4.2rem;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.8px;
    color: #f0f0f0;
    opacity: 0;
    transform: translateY(60px) scale(0.95);
    transition: all 1.5s ease;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.15), 0 0 30px rgba(0, 157, 255, 0.05), 0 0 80px rgba(0, 157, 255, 0.03);
}

.neo-texto.revealed {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.neo-texto span {
    display: block;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
}

.neo-texto.revealed span:nth-child(1) { transition-delay: 0.3s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(2) { transition-delay: 0.6s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(3) { transition-delay: 0.9s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(4) { transition-delay: 1.2s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(5) { transition-delay: 1.5s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(6) { transition-delay: 1.8s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(7) { transition-delay: 2.1s; opacity: 1; transform: none; }
.neo-texto.revealed span:nth-child(8) { transition-delay: 2.4s; opacity: 1; transform: none; }

.highlight-global {
    color: #009dff;
    text-shadow: 0 0 18px rgba(0, 157, 255, 0.5), 0 0 40px rgba(0, 80, 120, 0.3);
    animation: pulse-glow 4s infinite ease-in-out;
}

.linha-divisoria {
    width: 90px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(170, 170, 170, 0.7), transparent);
    margin: 2.5rem auto;
    opacity: 0;
    transform: scaleX(0.4);
    transition: all 1.2s ease;
    box-shadow: 0 0 15px rgba(100, 180, 255, 0.15);
}

.neo-texto.revealed ~ .linha-divisoria {
    opacity: 0.8;
    transform: scaleX(1);
}

#scene-container-2 {
    width: 100%;
    max-width: 1000px;
    height: 50vh;
    margin-top: 3rem;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.secao-minimalista-2 canvas {
    display: block;
    margin: auto;
    width: 100% !important;
    height: 100% !important;
}

/* Seção 3 */
.hero-section-3 {
    font-family: 'Outfit', sans-serif;
    background-color: #000;
}

.video-background-3 {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: 1;
    filter: brightness(0.6);
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 2.5s ease-out, transform 2.5s ease-out;
}

.overlay-3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    z-index: 2;
    color: white;
    opacity: 0;
    transition: opacity 2s ease-out;
    flex-direction: column;
}

.slogan-principal {
    font-size: 3.8rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 20px;
    background: linear-gradient(to right, #e0f2f7, #a8e6cf, #e0f2f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 4px 20px rgba(100, 255, 255, 0.6);
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.slogan-secundario {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.5px;
    color: #e6f7ff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    position: relative;
}

.botao-container {
    margin-top: 3rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    position: relative;
}

.botao {
    padding: 18px 48px;
    font-size: 1.15rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6a1b9a 0%, #ab47bc 100%);
    color: #ffffff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(100, 0, 150, 0.6), inset 0 0 15px rgba(255, 150, 255, 0.3);
    transform: scale(1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.botao:hover {
    background: linear-gradient(135deg, #7b29a8 0%, #c158d6 100%);
    transform: scale(1.08);
    box-shadow: 0 12px 35px rgba(150, 0, 200, 0.7), inset 0 0 20px rgba(255, 180, 255, 0.5);
}

.botao::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: 0.6s;
}

.botao:hover::before {
    left: 100%;
}

/* Seção 4 */
.secao-octahedrons-4 {
    background: url('https://www.transparenttextures.com/patterns/concrete-wall.png') repeat;
    background-color: #fff;
    font-family: 'Inter', sans-serif;
}

.secao-octahedrons-4 .center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    width: 90%;
    max-width: 900px;
    color: #111;
}

#animated-title {
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
    color: #111;
    font-weight: 800;
    position: relative;
    z-index: 2;
    line-height: 1.3;
    padding: 0 20px;
    opacity: 0;
}

#animated-title span {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px) scale(0.9);
    animation: riseUp 0.5s ease forwards;
    animation-delay: calc(0.03s * var(--i));
    white-space: nowrap;
}

@keyframes riseUp {
    to { opacity: 1; transform: translateY(0) scale(1); }
}

.secao-octahedrons-4 p {
    margin-top: 0.8rem;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: #333;
    font-weight: 500;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
    opacity: 0;
    transition: opacity 0.8s ease 0.5s;
}

.cta-button {
    margin-top: 1.8rem;
    padding: 0.8rem 2rem;
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-weight: 600;
    background-color: #111;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s;
    opacity: 0;
    transition: opacity 0.8s ease 1s;
}

.cta-button:hover {
    transform: translateY(-2px);
}

#bg-canvas-4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

/* Seção 5 */
.hero-section-5 {
    background: #0c0f1d;
}

.video-container-5 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
}

.video-bg-5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    opacity: 0;
    transition: opacity 2s ease-in-out;
}

.overlay-5 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
    transition: opacity 1.5s ease-in-out;
}

.content-5 {
    position: relative;
    z-index: 3;
    text-align: center;
    max-width: 900px;
    padding: 0 20px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease 0.5s;
}

.content-5.visible {
    opacity: 1;
    transform: translateY(0);
}

.content-5.second-take {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 1.5s ease;
}

.content-5.second-take.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.subtitle-5 {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease 0.8s;
}

.content-5.visible .subtitle-5 {
    opacity: 1;
    transform: translateY(0);
}

.content-5 h1 {
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 30px;
    color: #ffffff;
    text-shadow: 0 5px 15px rgba(0,0,0,0.3);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease 1s;
}

.content-5.visible h1 {
    opacity: 1;
    transform: translateY(0);
}

.message-5 {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 5px rgba(0,0,0,0.3);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease 1.2s;
}

.content-5.visible .message-5 {
    opacity: 1;
    transform: translateY(0);
}

.scrolldown-5 {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    opacity: 0;
    transition: opacity 1s ease 1.8s;
}

.content-5.visible + .scrolldown-5 {
    opacity: 1;
}

.scrolldown-5 span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

.scrolldown-5 span:nth-child(2) {
    animation-delay: -0.2s;
}

.scrolldown-5 span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% { opacity: 0; transform: rotate(45deg) translate(-20px,-20px); }
    50% { opacity: 1; }
    100% { opacity: 0; transform: rotate(45deg) translate(20px,20px); }
}

.social-links-5 {
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: 3;
    display: flex;
    gap: 20px;
}

.social-links-5 a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.social-links-5 a:hover {
    color: #fff;
    transform: translateY(-3px);
}

.logo-5 {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 3;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.transition-overlay-5 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 4;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1.5s ease-in-out;
}

.transition-overlay-5.active { opacity: 1; }

/* Media Queries */
@media (max-width: 1024px) {
    .slogan-main { font-size: 3em; }
    .slogan-sub { font-size: 1.5em; }
}

@media (max-width: 768px) {
    .slogan-main { font-size: 2.2em; letter-spacing: 2px; }
    .slogan-sub { font-size: 1.2em; letter-spacing: 0.5px; }
    .btn, .video-fallback-button { padding: 10px 20px; font-size: 0.95em; }
    .neo-texto { font-size: 2.8rem; }
    #scene-container-2 { height: 40vh; }
    .slogan-principal { font-size: 2.5rem; letter-spacing: -0.5px; }
    .slogan-secundario { font-size: 1.3rem; }
    .botao { padding: 15px 38px; font-size: 1.05rem; }
    .content-5 h1 { font-size: 3.5rem; }
    .subtitle-5 { font-size: 1.1rem; letter-spacing: 4px; }
    .message-5 { font-size: 1.1rem; }
    .social-links-5, .logo-5 { top: 25px; right: 25px; left: 25px; }
    .social-links-5 { justify-content: flex-end; }
}

@media (max-width: 480px) {
    .slogan-main { font-size: 1.6em; letter-spacing: 1px; word-break: break-word; }
    .slogan-sub { font-size: 1em; }
    .hero-content { padding: 15px; }
    .neo-texto { font-size: 2rem; line-height: 1.3;}
    #scene-container-2 { height: 35vh; }
    .slogan-principal { font-size: 1.8rem; line-height: 1.2; }
    .slogan-secundario { font-size: 1rem; }
    .botao { padding: 12px 28px; font-size: 0.9rem; }
    .content-5 h1 { font-size: 2.8rem; }
    .subtitle-5 { font-size: 0.9rem; letter-spacing: 3px; }
}

@keyframes pulse-glow {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
}
