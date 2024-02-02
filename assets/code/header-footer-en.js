document.body.innerHTML = `
    <header>
        <div id="header-eraldor" onclick="window.open('https://eraldorure.github.io/en/', '_self')">
            <img src="/assets/media/eraldor-avatar.png" alt="Eraldor" id="eraldor-logo">
            <span id="eraldor-name">Eraldor</span>
        </div>
        <nav id="header-nav">
            <a class="nav-lnk" title="Test page" href="/en/tests/">Tests</a>
            <a class="nav-lnk" title="My projects" href="/en/projects/">My Projects</a>
            <a class="nav-lnk" title="About me (unavailable)" href="/404.html">About Me</a>
            <span id="switch-lang" title="Go to the french version" onclick="window.open(frLink, '_self')">FR</span>
        </nav>
    </header>
` + document.body.innerHTML + `
    <footer>
        <div id="ft-txt-div">
            <span class="ft-txt" id="ft-credits">Made by <b style="font-size: inherit">Eraldor</b></span>
            <span class="ft-txt" id="see-lnk-msg">Check out my socials too!</span>
        </div>
        <div id="ft-lnk-div">
            <img src="/assets/media/youtube-logo.svg" alt="YouTube" class="lnk-icon" title="My YouTube" onclick="window.open('https://youtube.com/@Eraldor', '_blank')">
            <img src="/assets/media/github-logo.svg" alt="GitHub" class="lnk-icon" title="My GitHub" onclick="window.open('https://github.com/Eraldorure', '_blank')">
        </div>
    </footer>
`