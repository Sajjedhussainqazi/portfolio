const video = document.querySelector('#intro-video');
const playButton = document.querySelector('#play-intro');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches) video.play().catch(() => {});
playButton.addEventListener('click', async () => {
  video.muted = false;
  video.currentTime = 0;
  video.loop = false;
  try {
    await video.play();
    playButton.querySelector('small').textContent = 'Playing · sound on';
  } catch {
    playButton.querySelector('small').textContent = 'Use the video controls to play';
    video.focus();
  }
});
video.addEventListener('ended', () => { playButton.querySelector('small').textContent = 'Watch again · sound on'; });
video.addEventListener('pause', () => { if (!video.ended) playButton.querySelector('small').textContent = 'Replay introduction · 10 seconds'; });
video.addEventListener('volumechange', () => { if (!video.paused) playButton.querySelector('small').textContent = video.muted ? 'Playing · muted' : 'Playing · sound on'; });

const projects = {
  luggage: {
    eyebrow: '01 / COMPUTER VISION · MCA THESIS · 2025',
    title: 'Luggage Recognition System',
    description: 'A live-video luggage detection system built for my MCA thesis, connecting computer vision inference to a web dashboard.',
    features: ['Process live video using YOLOv8 and OpenCV to detect luggage.', 'Expose inference results through FastAPI REST and WebSocket endpoints.', 'Display detection results in a React dashboard.', 'Deploy the backend on Render and the frontend on Vercel.'],
    stack: 'Python · YOLOv8 · OpenCV · FastAPI · React · WebSockets'
  },
  rag: {
    eyebrow: '02 / AI · DOCUMENT RETRIEVAL · 2025',
    title: 'RAG Document Query App',
    description: 'A retrieval-augmented generation application for querying information in PDF, PPT, and CSV files.',
    features: ['Connect document ingestion, indexing, and retrieval with answer generation.', 'Use LangChain, PostgreSQL, and Elasticsearch for the document and retrieval workflow.', 'Serve a React interface through a FastAPI backend.', 'Containerize the application with Docker.'],
    stack: 'Python · FastAPI · React · LangChain · PostgreSQL · Elasticsearch · Docker'
  },
  bookmarks: {
    eyebrow: '03 / FULL-STACK WEB APPLICATION · 2026',
    title: 'Smart Bookmark App',
    description: 'A responsive bookmark application built with Next.js and Supabase, with authentication and real-time synchronization.',
    features: ['Sign in with Google OAuth and manage user sessions.', 'Save bookmarks in persistent Supabase storage.', 'Synchronize bookmark changes in real time.', 'Use a responsive interface styled with Tailwind CSS.'],
    stack: 'Next.js · Supabase · Tailwind CSS · Google OAuth'
  }
};
const dialog = document.querySelector('#project-dialog');
let lastProjectButton;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  lastProjectButton = button;
  document.querySelector('#dialog-eyebrow').textContent = project.eyebrow;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-stack').textContent = project.stack;
  document.querySelector('#dialog-features').replaceChildren(...project.features.map(text => {
    const li = document.createElement('li'); li.textContent = text; return li;
  }));
  document.body.classList.add('dialog-open');
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastProjectButton?.focus(); });

const sections = ['home', 'about', 'work', 'contact'].map(id => document.getElementById(id));
const navLinks = [...document.querySelectorAll('.nav-link')];
let scheduled = false;
function updateNavigation() {
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
  let current = 'home';
  for (const section of sections) if (section.getBoundingClientRect().top < window.innerHeight * .4) current = section.id;
  if (atBottom) current = 'contact';
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === '#' + current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
updateNavigation();
