function rainFoxes(event) {
    event.preventDefault();
    for (var i = 0; i < 50; i++) {
        createFox(i);
    }
}

function createFox(num) {
    var p = document.createElement('p');
    var t = document.createTextNode('🦊');
    p.appendChild(t);
    p.className = 'fox';
    var xPos = Math.floor((Math.random() * 100) + 1);
    console.log(xPos);
    p.style.left = '' + xPos + 'vw';
    console.log(p.style.left);
    var yPos = Math.floor((Math.random() * 100) + 1);
    p.style.top = '-' + yPos * 100 + 'vh';
    var dur = Math.floor((Math.random() * 7) + 5);
    p.style.animationDuration = dur + 's';
    var del = Math.floor((Math.random() * 2) + 0);
    p.style.animationDelay = del + 's';
    document.body.appendChild(p);
}
