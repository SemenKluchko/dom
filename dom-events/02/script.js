;
const div = document.querySelector('.div');
let text = document.querySelector('.text').innerHTML;
const textarea = document.createElement('textarea');

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        div.replaceWith(textarea);
        textarea.append(text);
    } 

    if (event.code == 'Equal'  && (event.ctrlKey || event.metaKey)) {
        textarea.replaceWith(div);
        document.querySelector('.text').innerHTML = textarea.value;
    }
});
