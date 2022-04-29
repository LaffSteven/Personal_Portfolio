


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

const $projectOne = $('<a>')
  .addClass('project-card').addClass('clickable')
  .attr('id', 'project-one').attr('href', 'projects.html')
  .css('display', 'block')
  .html(`<img src="/images/project_one.png" alt=""> <h2>Project One</h2>`);
const $projectTwo = $('<a>')
  .addClass('project-card').addClass('clickable')
  .attr('id', 'project-two').attr('href', 'projects.html')
  .css('display', 'block')
  .html(`<img src="/images/project_two.png" alt=""> <h2>Project Two</h2>`);
const $projectThree = $('<a>')
  .addClass('project-card').addClass('clickable')
  .attr('id', 'project-three').attr('href', 'projects.html')
  .css('display', 'block')
  .html(`<img src="/images/project_three.png" alt=""> <h2>Project Three</h2>`);
const $projectFour = $('<a>')
  .addClass('project-card').addClass('clickable')
  .attr('id', 'project-four').attr('href', 'projects.html')
  .css('display', 'block')
  .html(`<img src="/images/project_four.png" alt=""> <h2>Project Four</h2>`);
const $projectFive = $('<a>')
  .addClass('project-card').addClass('clickable')
  .attr('id', 'project-five').attr('href', 'projects.html')
  .css('display', 'block')
  .html(`<img src="/images/project_five.png" alt=""> <h2>Project Five</h2>`);
const $projectSix = $('<a>')
  .addClass('project-card').addClass('clickable')
  .attr('id', 'project-six').attr('href', 'projects.html')
  .css('display', 'block')
  .html(`<img src="/images/project_six.png" alt=""> <h2>Project Six</h2>`);

const projectArray = [$projectOne, $projectTwo, $projectThree, $projectFour, $projectFive, $projectSix];

const numberOfProjects = 5;
let nextIndex = 3;
let previousIndex = -1;
let middleIndex = 0;


const fixIndexRange = () => {
  if (nextIndex < 0) {
    nextIndex = 5;
  }
  if (nextIndex > numberOfProjects) {
    nextIndex = 0;
  }
  if (previousIndex > numberOfProjects) {
    previousIndex = 0;
  }
  if (previousIndex < 0) {
    previousIndex = 5;
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$(() => {

  $('.contact').on('click', showModal);
  // $('#contact-conatiner').on('click', showModal);
  $('#close-button').on('click', hideModal);

  $('.carousel-projects').append($projectOne, $projectTwo, $projectThree);

  $('#next').on('click', () => {
    fixIndexRange();
    if (nextIndex <= numberOfProjects) {
      $('.carousel-projects').append(projectArray[nextIndex]);
      $('.carousel-projects').children().eq(0).remove();
      nextIndex++;
      previousIndex++;
    }
    // console.log(`Previous is Project: ${previousIndex + 1}`);
    // console.log(`Next is Project: ${nextIndex + 1}`);
  })

  $('#previous').on('click', () => {
    fixIndexRange();
    if (previousIndex >= 0) {
      $('.carousel-projects').children().eq(2).remove();
      $('.carousel-projects').prepend(projectArray[previousIndex]);
      previousIndex--;
      nextIndex--;
    }
    // console.log(`Previous is Project: ${previousIndex + 1}`);
    // console.log(`Next is Project: ${nextIndex + 1}`);
  })


})
