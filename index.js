const formNode = document.getElementById('form');


formNode.addEventListener('submit', event => {
    event.preventDefault();
    const formFromData = new FormData(formNode);
    const textArray = formFromData.get('textArea').split(' ');
    console.log(textArray);
})

