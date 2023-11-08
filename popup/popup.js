document.addEventListener('DOMContentLoaded', function() {
    const duckImage = document.getElementById('duckImage');
    const newDuckButton = document.getElementById('newDuck');
    
    // Function to fetch a new duck image
    function fetchNewDuck() {

        duckImage.src = 'https://random-d.uk/api/randomimg?t=' + new Date().getTime();
    
    }
  
    // Fetch a new duck image when the button is clicked
    newDuckButton.addEventListener('click', function() {
      fetchNewDuck();
    });
  
    // Fetch a new duck image when the popup is loaded
    fetchNewDuck();
});