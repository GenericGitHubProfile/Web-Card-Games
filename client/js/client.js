import * as Inject from './injectHTML.js';

window.addEventListener('load', startup());

function startup() {
    Inject.injectHTML('./htmlFragments/nav.html', 'nav');
}
