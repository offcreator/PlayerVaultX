// Search bar functionality
document.getElementById('search').addEventListener('keyup', function () {
    let input = this.value.toLowerCase(); // Get the search value
    let games = document.querySelectorAll('.game'); // Select all games

    games.forEach(game => {
        let gameName = game.getAttribute('data-name').toLowerCase(); // Get the game's data-name attribute
        
        // Show games that match the input, hide the rest
        if (gameName.includes(input)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});
