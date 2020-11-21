
var $menuButton = $('.menuButton');
var $menu = $('.toggleMenu');

$menuButton.on("click", menuToggle);

function menuToggle(){
  $menu.toggleClass('menuClose');
  console.log('triggered');
}
