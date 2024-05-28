window.addEventListener('load', function() {
    var loader = document.querySelector('.loader-wrapper');
    var content = document.querySelector('.content');
    var titleHeader = document.querySelector('.title-header h1');

    loader.style.display = 'none';
    content.style.display = 'block';
    titleHeader.classList.add('fadeInFromRight');
});
 
function toggleGame(event) {
    var targetId = event.currentTarget.getAttribute("data-target");
    var gameDiv = document.getElementById(targetId);

    if (gameDiv.classList.contains("fade-in")) {
        // Start fade-out animation
        gameDiv.classList.remove("fade-in");
        gameDiv.classList.add("fade-out");
        setTimeout(function() {
            gameDiv.style.display = "none";
            gameDiv.classList.remove("fade-out");
        }, 500); // Match this to the duration of fadeOut animation
    } else {
        // Start fade-in animation
        gameDiv.style.display = "block";
        gameDiv.classList.add("fade-in");
    }
}
