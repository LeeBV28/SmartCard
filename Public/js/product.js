var optionBtns = document.querySelectorAll('.product .option img')
var prevEl = document.querySelector('.tag-nav .prev');
var nextEl = document.querySelector('.tag-nav .next');
var numberEls = document.querySelectorAll ('.tag-nav .number ul li');
var numberPage = numberEls.length;
var check;


optionBtns.forEach(function(item) {
    item.onclick = function() {
        this.classList.toggle('active');
        var imgItemE = this.closest('.img').children[0];
        var fontFace = imgItemE.children[0].getAttribute('src');
        var backFace = imgItemE.children[1].getAttribute('src');
        if(this.classList.contains("active")) {
            imgItemE.style = `transform: translateX(-287px);`;
            this.src = fontFace;
        }
        else {
            imgItemE.style = `transform: translateX(0);`;
            this.src = backFace;
        }
    };
});

function removeActive() {
    for(var i = 0; i < numberPage; i++) {
        if(numberEls[i].classList.contains("active")){
            numberEls[i].classList.remove('active')
        }
    }
}
function checkActive () {
    var liActive = document.querySelector ('.tag-nav .number ul li.active');
    return parseInt(liActive.innerText);
}
function hadlPrevNextBtn(check, index) {
    removeActive();
    if (check == 0) {
        numberEls[index -2].classList.add('active')
    }
    if (check == 1) {
        numberEls[index].classList.add('active')
    }
};

prevEl.onclick = function() {
    check = 0;
    if(checkActive() == 1) {
        return;
    }
    hadlPrevNextBtn(check, checkActive());
}
nextEl.onclick = function() {
    check = 1;
    if(checkActive() == numberPage) {
        return;
    }
    hadlPrevNextBtn(check, checkActive());
}
numberEls.forEach(function(item) {
    item.onclick = function() {
        removeActive();
        this.classList.add('active');
    }
})


var nameFrontFace = document.getElementById('nameFontFace');
var sloganFontFace = document.getElementById('sloganFontFace');
var nameBackFace = document.getElementById('nameBackFace');
var sloganBackFace = document.getElementById('sloganBackFace');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var mail = document.getElementById('mail');
var web = document.getElementById('web');

nameFrontFace.onkeyup = function() {
    document.getElementById('name-card-fontFace').innerText = nameFrontFace.value;
}
sloganFontFace.onkeyup = function() {
    document.getElementById('slogan-card-fontFace').innerText = sloganFontFace.value;
}
nameBackFace.onkeyup = function() {
    document.getElementById('name-card-backFace').innerText = nameBackFace.value;
    hanlReseze('name-card-backFace');
}
sloganBackFace.onkeyup = function() {
    document.getElementById('slogan-card-backCard').innerText = sloganBackFace.value;
    hanlReseze('slogan-card-backCard')
}
address.onkeyup = function() {
    document.getElementById('address-card').innerText = address.value;
}
phone.onkeyup = function() {
    document.getElementById('phone-card').innerText = phone.value;
}
mail.onkeyup = function() {
    document.getElementById('mail-card').innerText = mail.value;
}
web.onkeyup = function() {
    document.getElementById('web-card').innerText = web.value;
}


function hanlReseze(elementDom) {
    var element = document.getElementById(elementDom);
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    resizer.style.width = '10px';
    resizer.style.height = '10px';
    resizer.style.background = 'red';
    resizer.style.position = 'absolute';
    resizer.style.right = 0;
    resizer.style.bottom = 0;
    resizer.style.cursor = 'se-resize';
    resizer.style.opacity = 0;
    element.appendChild(resizer);
    resizer.addEventListener('mousedown', initResize, false);


    function initResize(e) {
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
    }
    function Resize(e) {
        document.getElementById(elementDom).style.fontSize = e.clientY/4.5 + 'px';
    }
    function stopResize(e) {
        window.removeEventListener('mousemove', Resize, false);
        window.removeEventListener('mouseup', stopResize, false);
    }
};


document.querySelector('.popup-setup .close').onclick = function() {
    document.querySelector('.popup-setup').style.display = 'none';
};
document.querySelector('.popup-setup').onclick = function(e) {
    var container = $(".popup-setup .container");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        this.style.display = 'none';
    }
};
document.querySelectorAll('.option button').forEach(function(item) {
    item.onclick = function() {
        document.querySelector('.popup-setup').style.display = 'block';
    }   
})

