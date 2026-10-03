const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.getElementById('quoteForm');
form.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);
  const text=[
    'Hello Jackenet Building & Projects, I would like a quote.',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Area: ${data.get('area')}`,
    `Service: ${data.get('service')}`,
    `Project details: ${data.get('message')}`
  ].join('\n');
  window.open(`https://wa.me/27790345498?text=${encodeURIComponent(text)}`,'_blank','noopener');
});
