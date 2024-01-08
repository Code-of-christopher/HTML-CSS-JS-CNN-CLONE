const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const allBody = document.getElementById('body');
const tooSection = document.getElementById('too');

openBtn.addEventListener('click', () =>{
    openBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    allBody.style.display = 'none';
    tooSection.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
    closeBtn.style.display = 'none';
    openBtn.style.display = 'flex';
    allBody.style.display = 'block';
    tooSection.style.display = 'none';
});