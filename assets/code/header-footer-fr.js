document.body.innerHTML = `
    <header>
        <div id="header-eraldor" onclick="window.open('https://eraldorure.github.io/fr/', '_self')">
            <img src="/assets/media/eraldor-avatar.png" alt="Eraldor" id="eraldor-logo">
            <span id="eraldor-name">Eraldor</span>
        </div>
        <nav id="header-nav">
            <a class="nav-lnk" title="Tests" href="/fr/tests/">Tests</a>
            <a class="nav-lnk" title="Mes projets" href="/fr/projets/">Mes projets</a>
            <a class="nav-lnk" title="À propos de moi (indisponible)" href="/404.html">À propos de moi</a>
            <span id="switch-lang" title="Accéder à la page en anglais" onclick="window.open(enLink, '_self')">EN</span>
        </nav>
    </header>
` + document.body.innerHTML + `
    <footer>
        <div id="ft-txt-div">
            <span class="ft-txt" id="ft-credits">Réalisé par <b style="font-size: inherit">Eraldor</b></span>
            <span class="ft-txt" id="see-lnk-msg">Venez me voir sur mes réseaux !</span>
        </div>
        <div id="ft-lnk-div">
            <img src="/assets/media/youtube-logo.svg" alt="YouTube" class="lnk-icon" title="YouTube" onclick="window.open('https://youtube.com/@Eraldor', '_blank')">
            <img src="/assets/media/github-logo.svg" alt="GitHub" class="lnk-icon" title="GitHub" onclick="window.open('https://github.com/Eraldorure', '_blank')">
        </div>
    </footer>
`
