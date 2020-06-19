'use strict';

async function injectHTML(path, holderID) {
    const res = await fetch(path)
    .then((data) => data.text())
    .then((html) => {
        const shadow = document.getElementById(holderID).attachShadow({mode: "closed"});
        const e = document.createElement('link');
        e.setAttribute('rel', 'stylesheet');
        e.setAttribute('type', 'text/css');
        e.setAttribute('href', './htmlFragments/css/nav.css');
        shadow.append(e);
        shadow.innerHTML = html;
    })
    .catch((err) => console.error(err));
}


export {
    injectHTML,
};
