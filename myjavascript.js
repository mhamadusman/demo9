// search bar
// form-handler.js
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission which refreshes the page
            this.form.submit(); // Submit the form
            // You can also add any other logic here if needed, e.g., validation or sending data via AJAX
        }
    });
});










