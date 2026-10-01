const btn = document.getElementById('scroll-btn');
const target = document.getElementById('target-block');

btn.addEventListener('click', function() {
  target.scrollIntoView({ behavior: 'smooth' }); // 'smooth' делает прокрутку плавной
});