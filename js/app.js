


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

const $projectOne = $('<div>')
  .addClass('project-card')
  .attr('id', 'project-one')
  .css('display', 'block')
  .html(`<img src="/images/project_one.png" alt=""> <h2>Project One</h2>`);
const $projectTwo = $('<div>')
  .addClass('project-card')
  .attr('id', 'project-two')
  .css('display', 'block')
  .html(`<img src="/images/project_two.png" alt=""> <h2>Project Two</h2>`);
const $projectThree = $('<div>')
  .addClass('project-card')
  .attr('id', 'project-three')
  .css('display', 'block')
  .html(`<img src="/images/project_three.png" alt=""> <h2>Project Three</h2>`);
const $projectFour = $('<div>')
  .addClass('project-card')
  .attr('id', 'project-four')
  .css('display', 'block')
  .html(`<img src="/images/project_four.png" alt=""> <h2>Project Four</h2>`);
const $projectFive = $('<div>')
  .addClass('project-card')
  .attr('id', 'project-five')
  .css('display', 'block')
  .html(`<img src="/images/project_five.png" alt=""> <h2>Project Five</h2>`);
const $projectSix = $('<div>')
  .addClass('project-card')
  .attr('id', 'project-six')
  .css('display', 'block')
  .html(`<img src="/images/project_six.png" alt=""> <h2>Project Six</h2>`);

const projectArray = [$projectOne, $projectTwo, $projectThree, $projectFour, $projectFive, $projectSix];

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$(() => {

  $('.contact').on('click', showModal);
  // $('#contact-conatiner').on('click', showModal);
  $('#close-button').on('click', hideModal);

  $('.carousel-projects').append($projectOne, $projectTwo, $projectThree);

  const numberOfProjects = 5;
  let carouselIndex = 3;

  $('#next').on('click', () => {

    if (carouselIndex <= numberOfProjects) {
      $('.carousel-projects').append(projectArray[carouselIndex]);
      $('.carousel-projects').children().eq(0).remove();
      carouselIndex++;
    } else {
      carouselIndex = 0;
      $('.carousel-projects').append(projectArray[carouselIndex]);
      $('.carousel-projects').children().eq(0).remove();
      carouselIndex++;
    }

  })

  $('.previous').on('click', () => {

  })


})
