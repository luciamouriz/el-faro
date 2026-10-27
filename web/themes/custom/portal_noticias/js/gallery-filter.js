/**
 * @file
 * Filtra las piezas del mosaico por tipo (Todo, Fotos, Vídeos, Podcasts).
 */
(function (Drupal, once) {
  Drupal.behaviors.galleryFilter = {
    attach(context) {
      once('gallery-filter', '.gallery-head .chips', context).forEach((chips) => {
        const block = chips.closest('.block') || document;
        chips.addEventListener('click', (event) => {
          const button = event.target.closest('button[data-kind]');
          if (!button) {
            return;
          }
          chips.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
          const kind = button.dataset.kind;
          block.querySelectorAll('.views-row').forEach((row) => {
            const tile = row.querySelector('.tile');
            row.hidden = Boolean(tile) && kind !== 'all' && tile.dataset.kind !== kind;
          });
        });
      });
    },
  };
}(Drupal, once));
