const searchInput = document.getElementById('searchInput');
const searchIcons = document.querySelector('.search-icons');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('focus', function() {
    searchInput.parentNode.classList.add('active');
});

searchInput.addEventListener('blur', function() {
    if (searchInput.value.trim() === '') {
        searchInput.parentNode.classList.remove('active');
    }
});

searchIcons.addEventListener('click', function(event) {
    const target = event.target.closest('button');
    if (!target) return;

    // Handle icon button clicks (replace with actual functionality)
    switch (target.firstChild.className) {
        case 'fas fa-search':
            console.log('Search clicked');
            break;
        case 'fas fa-users':
            console.log('Users clicked');
            break;
        case 'fas fa-bell':
            console.log('Bell clicked');
            break;
        default:
            break;
    }
});

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        // Simulating search results (replace with actual search logic)
        showSearchResults([
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
            { id: 3, name: 'Alex Johnson' }
            // Add more results as needed
        ]);
    } else {
        hideSearchResults();
    }
});

function showSearchResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Display the search results container
    searchResults.style.display = 'block';

    // Create list items for each result
    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.name;
        li.addEventListener('click', function() {
            // Handle click on search result (e.g., navigate to user profile)
            alert('Clicked on ' + result.name);
        });
        ul.appendChild(li);
    });

    // Append the list to the search results container
    searchResults.appendChild(ul);
}

function hideSearchResults() {
    // Hide the search results container
    searchResults.style.display = 'none';
}
