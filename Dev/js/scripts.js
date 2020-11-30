
var $menuButton = $('.menuButton');
var $menu = $('.toggleMenu');

$menuButton.on("click", menuToggle);

function menuToggle(){
  $menu.toggleClass('menuClose');
}

// var $signupButton = $('#signupButton');
// var $signupForm = $('#signup');
// var $signupClose = $('#signup .signup__close');
//
// $signupButton.on("click", signupToggle);
// $signupClose.on("click", signupToggle);
//
//
// function signupToggle(){
//   $signupForm.toggleClass('signupClose');
//   // console.log('triggered');
// }
