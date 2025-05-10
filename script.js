document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', Event => {
        let answer = item.nextElementSibling;
        let image = item.lastElementChild;

        if(!item.classList.contains('open')){
            answer.classList = 'collapse-open';
            image.src = 'images/icon-minus.svg';
        }

        else{
            answer.classList = 'collapsed';
            image.src = 'images/icon-plus.svg'
        }

    item.classList.toggle('open');
    });
});
