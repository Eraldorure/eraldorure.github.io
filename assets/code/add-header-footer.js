document.body.innerHTML = `
    <header>
        <div id="header-eraldor" onclick="window.open('https://eraldorure.github.io', '_self')">
            <img src="/assets/media/eraldor-avatar.png" alt="Eraldor" id="eraldor-logo">
            <span id="eraldor-name">Eraldor</span>
        </div>
        <nav id="header-nav">
            <a class="nav-lnk" title="Test page" href="/tests/">Tests</a>
            <a class="nav-lnk" title="My projects" href="/projects/">My Projects</a>
            <a class="nav-lnk" title="About me">About Me</a>
        </nav>
    </header>
` + document.body.innerHTML + `
    <footer>
        <div id="ft-txt-div">
            <span class="ft-txt" id="ft-credits">Made by <b>Eraldor</b></span>
            <span class="ft-txt" id="see-lnk-msg">Check out my socials too!</span>
        </div>
        <div id="ft-lnk-div">
            <img src="/assets/media/youtube-logo.svg" alt="YouTube" class="lnk-icon" title="My YouTube" onclick="window.open('https://youtube.com/@Eraldor', '_blank')">
            <img src="/assets/media/github-logo.svg" alt="GitHub" class="lnk-icon" title="My GitHub" onclick="window.open('https://github.com/Eraldorure', '_blank')">
        </div>
    </footer>
`