/**
 * Test Navigation Script for Samsara Saga
 * 
 * This script helps verify that all pages are properly linked and working.
 * It logs navigation events and checks for any errors.
 */

console.log('Test Navigation Script loaded');

// Function to check if all required files are loaded
function checkRequiredFiles() {
    const requiredFiles = [
        'styles/style.css',
        'styles/gameplay.css',
        'styles/character-profile.css',
        'js/main.js'
    ];
    
    const missingFiles = [];
    
    requiredFiles.forEach(file => {
        const link = document.querySelector(`link[href="${file}"]`);
        const script = document.querySelector(`script[src="${file}"]`);
        
        if (!link && !script) {
            missingFiles.push(file);
        }
    });
    
    if (missingFiles.length > 0) {
        console.error('Missing required files:', missingFiles);
    } else {
        console.log('All required files are loaded');
    }
}

// Function to check if all required elements are present
function checkRequiredElements() {
    const currentPage = window.location.pathname.split('/').pop();
    let requiredElements = [];
    
    if (currentPage === 'SS.html' || currentPage === '') {
        requiredElements = [
            '.game-title',
            '.mandala-container',
            '.cta-text'
        ];
    } else if (currentPage === 'CB.html') {
        requiredElements = [
            '.screen-title',
            '.options-grid',
            '.option'
        ];
    } else if (currentPage === 'character-profile.html') {
        requiredElements = [
            '.profile-name',
            '.profile-details',
            '.action-buttons'
        ];
    } else if (currentPage === 'Gameplay.html') {
        requiredElements = [
            '#story-text',
            '#choices-container',
            '.stats-grid'
        ];
    }
    
    const missingElements = [];
    
    requiredElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            missingElements.push(selector);
        }
    });
    
    if (missingElements.length > 0) {
        console.error('Missing required elements:', missingElements);
    } else {
        console.log('All required elements are present');
    }
}

// Run tests when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded:', window.location.pathname);
    checkRequiredFiles();
    checkRequiredElements();
});

// Log navigation events
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
        const link = e.target.tagName === 'A' ? e.target : e.target.closest('a');
        console.log('Navigating to:', link.href);
    }
    
    if (e.target.tagName === 'BUTTON' && e.target.id === 'action-button') {
        console.log('Action button clicked');
    }
    
    if (e.target.classList.contains('option')) {
        console.log('Option selected:', e.target.textContent.trim());
    }
});

console.log('Test Navigation Script initialized');