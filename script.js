var apple = document.querySelector('.apple');
var money = document.querySelector('.score');
var realMoney = localStorage.getItem('money') || 0;
var click = localStorage.getItem('click') || 1;
var wrapper1Item = document.querySelector('.wrapper-1-item');
var wrapper2Item = document.querySelector('.wrapper-2-item');
var wrapper3Item = document.querySelector('.wrapper-3-item');
var shopBtn = document.querySelector('.shop-btn');
var backBtn = document.querySelector('.back-btn');
var shopWrapper = document.querySelector('.wrapper');

money.textContent = realMoney + '$';
localStorage.setItem('money', realMoney);

apple.addEventListener('click', function() {
    realMoney = parseInt(realMoney);
    click = parseInt(click);
    realMoney += click;
    money.textContent = realMoney + '$';  
    localStorage.setItem('money', realMoney);
});


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function buyPlay() {
    var buyAudio = document.getElementById("buy-audio");
    buyAudio.play();
}

shopBtn.addEventListener('click', function() {
    apple.classList.add('close');
    shopBtn.style.display = 'none';
    backBtn.style.display = 'flex';
    
});

backBtn.addEventListener('click', function() {
    apple.classList.remove('close');
    shopBtn.style.display = 'flex';
    backBtn.style.display = 'none';
});


if(realMoney >= 20) {
    wrapper1Item.style.opacity = '1';
    wrapper1Item.addEventListener('click', function() {
        click ++;
        realMoney = parseInt(realMoney);
        realMoney -= 20;
        money.textContent = realMoney + '$';   
        wrapper1Item.classList.add('used');
    });
} else {
    console.log('not work');
};

if(realMoney >= 119) {
    wrapper2Item.style.opacity = '1';
    wrapper2Item.addEventListener('click', function() {
        click += 3;
        realMoney = parseInt(realMoney);
        realMoney -= 120;
        money.textContent = realMoney + '$';   
        wrapper2Item.classList.add('used');
    });
} else {
    console.log('not work');
};

if(realMoney >= 250) {
    wrapper2Item.style.opacity = '1';
    wrapper2Item.addEventListener('click', function() {
        click += 5;
        realMoney = parseInt(realMoney);
        realMoney -= 250;
        money.textContent = realMoney + '$';   
        wrapper2Item.classList.add('used');
    });
} else {
    console.log('not work');
};

money.textContent = realMoney + '$';
