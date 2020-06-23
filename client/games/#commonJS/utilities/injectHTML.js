'use strict';

export async function injectHTML(path, holderID, cssPath = null) {
    const res = await fetch(path)
    .then((data) => data.text())
    .then((html) => {
        const shadow = document.getElementById(holderID).attachShadow({mode: "closed"});

        if(cssPath) {
            const e = document.createElement('link');
            e.setAttribute('rel', 'stylesheet');
            e.setAttribute('href', cssPath);
            shadow.append(e);
            console.log(e);
        }

        shadow.innerHTML = html;
    })
    .catch((err) => console.error(err));
}
