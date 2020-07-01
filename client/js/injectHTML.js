'use strict';

/*
* Generic function for loading an HTML fragment and injecting it into the given holder
*/
export async function injectHTML(path, holderID, cssPath = null) {
    // fetch request for the file of the HTML fragment
    const res = await fetch(path)
    .then((data) => data.text())
    .then((html) => {
        // Create a ShadowDOM object of the fragment to be appended
        const shadow = document.getElementById(holderID).attachShadow({mode: "closed"});

        // If a cssPath was given, append it to the shadow Element
        if(cssPath) {
            const e = document.createElement('link');
            e.setAttribute('rel', 'stylesheet');
            e.setAttribute('href', cssPath);
            shadow.append(e);
            // Log to console: FOR DEBUGGING ONLY
            console.log(e);
        }

        // Inject the HTML into it
        shadow.innerHTML = html;
    })
    // Errors at any point log the error for debugging
    .catch((err) => console.error(err));
}
