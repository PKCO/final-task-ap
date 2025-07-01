function showFrame(frameId) {
    // Hide all frames
    document.querySelectorAll('iframe').forEach(frame => {
        frame.classList.remove('active-frame');
    });
    
    // Show selected frame
    document.getElementById(`${frameId}-frame`).classList.add('active-frame');
    
    // Update active tab
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Find the button that matches the frameId and add active class
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        if (button.querySelector('span').textContent.toLowerCase() === frameId || 
            (frameId === 'google' && button.querySelector('span').textContent === 'Gemini')) {
            button.classList.add('active');
        }
    });
}

// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.querySelector('i').classList.toggle('fa-sun');
    this.querySelector('i').classList.toggle('fa-moon');
});

// Initialize with JARVIS frame visible
document.addEventListener('DOMContentLoaded', function() {
    showFrame('jarvis');
});