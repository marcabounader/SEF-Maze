let stars = document.getElementById('stars');
let sprite = document.getElementById('sprite');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    sprite.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 6 + 'px';
    text.style.marginRTop = value * 3 + 'px';
    btn.style.marginRTop = value * 3 + 'px';
    header.style.top = value * 0.5 + 'px';
})