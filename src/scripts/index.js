import { Unwatched } from '../../unwatched.js';
import { Watched } from '../../watched.js';
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
function app() {
    new Unwatched('.series-list');
    new Watched('.series-list--watched');
}
