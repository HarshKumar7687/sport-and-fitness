const fitnessQA = {
    "What is the best time to work out?": "The best time to work out is when it fits your schedule, but morning workouts can boost your metabolism.",
    "How much water should I drink daily?": "You should drink about 8-10 glasses of water daily, but it may vary based on your activity level and body needs.",
    "What is a good post-workout meal?": "A good post-workout meal includes protein and carbs, like chicken with sweet potatoes or a protein shake.",
    "How often should I do cardio?": "It depends on your goals, but 3-5 times a week for 20-30 minutes is generally recommended.",
    "What exercises are best for weight loss?": "High-intensity interval training (HIIT), running, and strength training are great for weight loss."
};

const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const iconImage = document.getElementById('icon-image');

chatIcon.addEventListener('click', function() {
    if (chatContainer.classList.contains('hidden')) {
        chatContainer.classList.remove('hidden');
        chatContainer.classList.add('visible');
        iconImage.src = 'cancel.jpg'; // Change to cancel icon
    } else {
        chatContainer.classList.remove('visible');
        chatContainer.classList.add('hidden');
        iconImage.src = 'chat box.png'; // Change back to message icon
    }
});

document.getElementById('send-btn').addEventListener('click', function() {
    const selectField = document.getElementById('question-select');
    const question = selectField.value;

    if (question) {
        addMessageToChat('user', question);
        selectField.selectedIndex = 0; // Reset the dropdown

        setTimeout(() => {
            const answer = fitnessQA[question] || "Sorry, I don't know the answer to that question.";
            addMessageToChat('bot', answer);
        }, 500);
    }
});

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}





const quotes = [
    "Sweat is just fat crying.",
    "The only bad workout is the one that didn't happen.",
    "Push yourself because no one else is going to do it for you.",
    "Your body can stand almost anything. It's your mind that you have to convince.",
    "Train insane or remain the same.",
    "You don't have to be extreme, just consistent.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Wake up with determination. Go to bed with satisfaction.",
    "The only bad workout is the one you didn't do."
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote');

function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
}

// Change quote every 10 seconds
setInterval(changeQuote, 15000);








let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}




document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const span = document.querySelector('nav span');
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        
        // Calculate the left position and the width of the span
        const leftPosition = linkRect.left - navRect.left;
        const spanWidth = linkRect.width;
        
        // Update the span position and width
        span.style.left = `${leftPosition}px`;
        span.style.width = `${spanWidth}px`;
    });

    link.addEventListener('mouseleave', () => {
        const span = document.querySelector('nav span');
        span.style.width = '0px';
    });
});

