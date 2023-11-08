document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch data from the API
    function fetchData() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(data => displayData(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to display data in the HTML document
    function displayData(data) {
        const container = document.getElementById('data-container');

        // Manipulate the data as needed and create HTML elements
        const dataList = data.map(item => `<p>${item.name}: ${item.value}</p>`).join('');

        // Insert the HTML into the container
        container.innerHTML = dataList;
    }

    // Call the fetchData function when the page loads
    fetchData();
});

