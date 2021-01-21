document.getElementById('buscar').addEventListener('click',function (event) {
    window.location.href = 'https://www.google.com/search?q='+document.getElementById('textInput').value;
});
document.getElementById('lucky').addEventListener('click',function (event) {
    window.location.href = 'https://www.google.com/search?q='+document.getElementById('textInput').value+'&btnI';
});