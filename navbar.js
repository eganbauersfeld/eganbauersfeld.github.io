// Shared navbar HTML
function loadNavbar() {
    const navbarHTML = `
        <div class="navbar">
            <a href="/index.html" class="name">Egan Bauersfeld</a>
            <div class="nav-links">
                <div class="dropdown">
                    <span class="dropdown-toggle">Engineering Projects ▾</span>
                    <div class="dropdown-content">
                        <a href="/projects/food-finder.html">Food Finder — Smart Shelf System</a>
                        <a href="/projects/truss-project.html">Truss Design Project</a>
                    </div>
                </div>

                <a href="#media">Media</a>
                <a href="https://www.walmart.com" target="_blank" rel="noopener noreferrer">Media</a>
                <a href="#resume">Resume</a>
                <a href="#fart">fart</a>
                <a href="https://www.linkedin.com/in/egan-bauersfeld" target="_blank">LinkedIn</a>
            </div>
        </div>
    `;

    document.getElementById('navbar-container').innerHTML = navbarHTML;
}

// Load navbar when page loads
document.addEventListener('DOMContentLoaded', loadNavbar);
