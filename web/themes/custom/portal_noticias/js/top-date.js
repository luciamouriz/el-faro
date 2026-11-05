/**
 * @file
 * Pinta la fecha de hoy en la barra superior. Se calcula en el navegador
 * para que nunca quede congelada por la caché de la página.
 */
(function (Drupal, once) {
  Drupal.behaviors.topDate = {
    attach(context) {
      once('top-date', '[data-top-date]', context).forEach((el) => {
        const hoy = new Date();
        const texto = new Intl.DateTimeFormat('es-ES', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(hoy);
        el.textContent = texto.charAt(0).toUpperCase() + texto.slice(1);
        el.setAttribute('datetime', hoy.toISOString().slice(0, 10));
      });
    },
  };
}(Drupal, once));
