


const showModal = () => {
  $('.contact-modal').show('slow');
}

const hideModal = () => {
  $('.contact-modal').hide();
}

const goToHome = (url) => {
  $(location).attr('href', 'index.html');
}
const goToProjects = (url) => {
  $(location).attr('href', 'projects.html');
}
const goToResume = (url) => {
  $(location).attr('href', 'resume.html');
}
const goToAbout = (url) => {
  $(location).attr('href', 'about.html');
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$(() => {

  $('#contact').on('click', showModal);
  $('#contact-conatiner').on('click', showModal);
  $('#close-button').on('click', hideModal);


})
