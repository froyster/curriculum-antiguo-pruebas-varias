/* On pose la première fonction pour le img-wrapper de grande taille qui va permuter la classe à la détection du clic */

function toggleClass(el) {
  if(el.className == 'img-wrapper') {
    el.className = 'fullscreen'
  }
    else {
      el.className = 'img-wrapper';
    }
}

/* et la seconde, identique, pour l'autre classe */
function toggleClass2(el) {
  if(el.className == 'img-wrapper2') {
    el.className = 'fullscreen'
  }
    else {
      el.className = 'img-wrapper2';
    }
}