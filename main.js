
const signUPButton =  document.getElementById('signup');
const signInButton = document.getElementById('signin');
const main = document.getElementById('main1');

signUPButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', ()=>{
    main.classList.remove("right-panel-active");
})

document.getElementById('click-in-1').addEventListener('click', function() {
document.getElementById('signin1').style.display = 'none';
document.getElementById('click-div').style.display = 'block';
});

document.getElementById('click-in-2').addEventListener('click', function() {
document.getElementById('signin1').style.display = 'block';
document.getElementById('click-div').style.display = 'none';
});

document.getElementById('signup').addEventListener('click', function() {
document.getElementById('signin1').style.display = 'block';
document.getElementById('click-div').style.display = 'none';
});

document.getElementById('login-btn').addEventListener('click', function() {
document.getElementById('main1').style.display = 'block';
});
document.getElementById('close-login').addEventListener('click', function() {
document.getElementById('main1').style.display = 'none';
});

document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('nave-hi').style.opacity = 'rgb(19, 19, 19, 0.6)'; 
    document.getElementById('home-text-h').style.opacity = 'rgb(19, 19, 19, 0.6)';
    document.getElementById('home-img-h').style.opacity = 'rgb(19, 19, 19, 0.6)'; 
});

document.getElementById('img-card1-id').style.display = 'block';
document.getElementById('card1-id').style.backgroundImage = 'linear-gradient(to bottom left, #2167B2 60%, #01519bcf)';

function showImage(cardId, imgId) {
    document.getElementById(cardId).addEventListener('click', function() {
        document.getElementById(imgId).style.display = 'block';
        document.getElementById(cardId).style.backgroundImage = 'linear-gradient(to bottom left, #2167B2 60%, #01519bcf)';

        
        const allCardIds = ['card1-id', 'card2-id', 'card3-id', 'card4-id', 'card5-id', 'card6-id'];
        allCardIds.forEach(id => {
            if (id !== cardId) {
                document.getElementById(id).style.backgroundImage = 'none';
            }
        });
        
        const allImgIds = ['img-card1-id', 'img-card2-id', 'img-card3-id', 'img-card4-id', 'img-card5-id', 'img-card6-id'];
        allImgIds.forEach(id => {
            if (id !== imgId) {
                document.getElementById(id).style.display = 'none';
            }
        });
    });
}

showImage('card1-id', 'img-card1-id');
showImage('card2-id', 'img-card2-id');
showImage('card3-id', 'img-card3-id');
showImage('card4-id', 'img-card4-id');
showImage('card5-id', 'img-card5-id');
showImage('card6-id', 'img-card6-id');
