const descriptions = {
    html: "HTML (HyperText Markup Language) structure le contenu d'un site web.",
    css: "CSS (Cascading Style Sheets) permet de styliser le contenu HTML.",
    js: "JavaScript rend le site web interactif et dynamique.",
    python: "Python est un langage polyvalent pour le développement web, data, IA.",
    git: "Git & GitHub permettent de versionner et collaborer sur du code."
};

const compteur = JSON.parse(localStorage.getItem('compteur')) || {
    html: 0, css: 0, js: 0, python: 0, git: 0
};

function afficherCompetence(tech) {
    document.getElementById("description").innerText = descriptions[tech];
    compteur[tech]++;
    localStorage.setItem('compteur', JSON.stringify(compteur));
    actualiserCompteur();
}

function actualiserCompteur() {
    const ul = document.getElementById("liste-compteur");
    ul.innerHTML = '';
    for (let tech in compteur) {
        const li = document.createElement("li");
        li.textContent = `${tech.toUpperCase()} (${compteur[tech]} clic${compteur[tech] > 1 ? 's' : ''})`;
        ul.appendChild(li);
    }
}

window.onload = () => {
    actualiserCompteur();

    // Gestion bouton mode sombre
    const toggleThemeBtn = document.getElementById('toggle-theme');
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleThemeBtn.textContent = 'Mode Clair';
        } else {
            toggleThemeBtn.textContent = 'Mode Sombre';
        }
    });
};
