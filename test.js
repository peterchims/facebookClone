document.getElementById('toggleButton').addEventListener('click', function() {
    var section = document.getElementById('mySection');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        this.textContent = 'Hide Section';
    } else {
        section.style.display = 'none';
        this.textContent = 'Show Section';
    }
});
