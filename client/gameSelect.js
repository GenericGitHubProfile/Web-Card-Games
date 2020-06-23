let games = document.getElementById('container').children;
Object.values(games).forEach((el) => {
    el.addEventListener('click', (e) => {
        if(el.classList.contains("faceDown")) {
            alert("Unable to see");
        } else {
            window.location.href = `./games/${el.attributes.name.value}`;
        }
    });
});
