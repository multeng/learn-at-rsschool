import Reveal from 'reveal.js';
import 'sass/main.scss';

document.body.innerHTML = `<div class="reveal">
<div class="slides">
    <!--inject:slides-->
</div>
</div>`;

Reveal.initialize({
  controls: true,
  touch: true,
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
  ],
});