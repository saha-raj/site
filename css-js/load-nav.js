document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
    <div class="container">
        <nav id="top-navigation">
            <ul>
                <li><a href="index.html" data-page="index">about</a></li>
                <li><a href="generative.html" data-page="generative">gen</a></li>
                <li><a href="2d-art.html" data-page="2d-art">drawings</a></li>
                <li><a href="photography.html" data-page="photography">photography</a></li>
                <li><a href="visual-stories.html" data-page="visual-stories">visual stories</a></li>
                <li><a href="apps-projects.html" data-page="apps-projects">apps & projects</a></li>
            </ul>
        </nav>
    </div>
    `;
    
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
        
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        
        // Add active-link class to current page
        const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
        if (currentLink) {
            currentLink.classList.add('active-link');
        }
    }
});