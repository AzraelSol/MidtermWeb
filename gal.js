let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let currentIndex = 0;
let items = document.querySelectorAll('.item');

next.addEventListener('click', function(){
    currentIndex = (currentIndex + 1) % items.length;
    document.querySelector('.slide').appendChild(items[currentIndex]);
});

prev.addEventListener('click', function(){
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    document.querySelector('.slide').prepend(items[currentIndex]); 
});

// Auto transition every 5 seconds
let autoInterval = setInterval(function() {
    currentIndex = (currentIndex + 1) % items.length;
    document.querySelector('.slide').appendChild(items[currentIndex]);
}, 5000);

// Clear the interval when user clicks on next or prev manually
next.addEventListener('click', function() {
    clearInterval(autoInterval);
});

prev.addEventListener('click', function() {
    clearInterval(autoInterval);
});
