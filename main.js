const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e) {
        displayedImage.src =e.target.src    
    }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
    const btnClass = this.getAttribute('class')
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';

    }
    
}