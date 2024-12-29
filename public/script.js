
if(document.getElementById('playButton')){                  
    document.getElementById('playButton').addEventListener('click', function() {
        const overlay = document.getElementById('gameOverlay');
        const iframe = document.getElementById('gameIframe');
        
        // Hide overlay immediately
        overlay.style.display = 'none';
        
        // Show iframe
        iframe.classList.remove('opacity-10');
    });
}