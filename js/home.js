const menuOpen = document.getElementById('open-sidebar-button');
const menuClose = document.getElementById('close-sidebar-button');
const primaryNav = document.getElementById('primary-navigation');
const overlay = document.getElementById('overlay');

const media = window.matchMedia('(width < 43.75rem');

media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
    const isMobile = e.matches;
    if(isMobile) {
        primaryNav.setAttribute('inert', '');
    } else {
        primaryNav.removeAttribute('inert');
    }
}

function closeSidebar() {
    primaryNav.classList.remove('show');
    menuOpen.setAttribute('aria-epanded', 'false');
    primaryNav.setAttribute('inert', '');
}

menuOpen.addEventListener('click', () => {
    primaryNav.classList.add('show');
    menuOpen.setAttribute('aria-epanded', 'true');
    primaryNav.removeAttribute('inert');
});
menuClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

updateNavbar(media);

// Some extras, for in-page navlinks
const primaryNavLinks = document.querySelectorAll('primary-navigation a');
primaryNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    })
});