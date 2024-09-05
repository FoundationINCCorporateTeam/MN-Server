// script.js
document.getElementById('proxy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const url = document.getElementById('url-input').value;
    if (!url.startsWith('http')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }

    // Load the proxied URL into the iframe
    document.getElementById('proxy-frame').src = `/proxy?url=${encodeURIComponent(url)}`;
});
