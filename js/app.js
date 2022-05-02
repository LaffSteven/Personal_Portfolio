let screenWidth = $( window ).width();
// mobile declarations
let mobileNavVisible = false;
const toggleMobileNav = () => {
  $('.mobile-link-container').slideToggle();
}

const $mobileHomeLink = $('<div>')
  .html(`<a href="index.html"><img src="/images/home.png" alt="home icon"></a>`)
  .addClass('mobile-nav-link')
const $mobileProjectsLink = $('<div>')
  .html(`<a href="projects.html"><img src="/images/projects.png" alt="projects icon"></a>`)
  .addClass('mobile-nav-link')
const $mobileResumeLink = $('<div>')
  .html(`<a href="resume.html"><img src="/images/resume.png" alt="resume icon"></a>`)
  .addClass('mobile-nav-link')
const $mobileAboutLink = $('<div>').html(`<a href="about.html"><img src="/images/about.png" alt="about icon"></a>`)
  .addClass('mobile-nav-link')

const toggleAboutText = () => {
  $('#more-about').slideToggle();
  $('#read-more').toggle();
  $('#read-less').toggle();
}

// desktop declarations
const showContactModal = () => {
  $('#contact-modal').show('slow');
}
const hideContactModal = () => {
  $('#contact-modal').hide('slow');
}
// Project Page Modals
  // Project Page modal closers
const hideProj1Modal = () => {
  if (true) {

  }
  $('#proj_1_modal').hide('medium');
}
const hideProj2Modal = () => {
  $('#proj_2_modal').hide('medium');
}
const hideProj3Modal = () => {
  $('#proj_3_modal').hide('medium');
}
const hideProj4Modal = () => {
  $('#proj_4_modal').hide('medium');
}
const hideProj5Modal = () => {
  $('#proj_5_modal').hide('medium');
}
const hideProj6Modal = () => {
  $('#proj_6_modal').hide('medium');
}
// Project Page modal openers
const showProj1Modal = () => {
  if (screenWidth < 600) {
    $('#proj-one-paragraph').slideToggle();
    $('#project-one-read-more').toggle();
    $('#project-one-read-less').slideToggle();
  } else {
    $('#proj_1_modal').show('medium');
      hideProj2Modal();
      hideProj3Modal();
      hideProj4Modal();
      hideProj5Modal();
      hideProj6Modal();
  }
}
const showProj2Modal = () => {
  if (screenWidth < 600) {
    $('#proj-two-paragraph').slideToggle();
    $('#project-two-read-more').toggle();
    $('#project-two-read-less').slideToggle();
  } else {
    $('#proj_2_modal').show('medium');
    hideProj3Modal();
    hideProj4Modal();
    hideProj5Modal();
    hideProj6Modal();
    hideProj1Modal();
  }

}
const showProj3Modal = () => {
  if (screenWidth < 600) {
    $('#proj-three-paragraph').slideToggle();
    $('#project-three-read-more').toggle();
    $('#project-three-read-less').slideToggle();
  } else {
    $('#proj_3_modal').show('medium');
    hideProj1Modal();
    hideProj2Modal();
    hideProj4Modal();
    hideProj5Modal();
    hideProj6Modal();
  }

}
const showProj4Modal = () => {
  if (screenWidth < 600) {
    $('#proj-four-paragraph').slideToggle();
    $('#project-four-read-more').toggle();
    $('#project-four-read-less').slideToggle();
  } else {
    $('#proj_4_modal').show('medium');
    hideProj1Modal();
    hideProj2Modal();
    hideProj3Modal();
    hideProj5Modal();
    hideProj6Modal();
  }

}
const showProj5Modal = () => {
  if (screenWidth < 600) {
    $('#proj-five-paragraph').slideToggle();
    $('#project-five-read-more').toggle();
    $('#project-five-read-less').slideToggle();
  } else {
    $('#proj_5_modal').show('medium');
    hideProj1Modal();
    hideProj2Modal();
    hideProj3Modal();
    hideProj4Modal();
    hideProj6Modal();
  }

}
const showProj6Modal = () => {
  if (screenWidth < 600) {
    $('#proj-six-paragraph').slideToggle();
    $('#project-six-read-more').toggle();
    $('#project-six-read-less').slideToggle();
  } else {
    $('#proj_6_modal').show('medium');
    hideProj1Modal();
    hideProj2Modal();
    hideProj3Modal();
    hideProj4Modal();
    hideProj5Modal();
  }

}


// Home Page Navigation Buttons
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


// Home Page Project Carousel Cards
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

const numberOfProjects = projectArray.length -1;
let nextIndex = 3;
let previousIndex = -1;
let middleIndex = 0;
let mobileIndex = 4;

// fix the index range for the project carousel
const fixIndexRange = () => {
  if (nextIndex < 0) {
    nextIndex = numberOfProjects;
  }
  if (nextIndex > numberOfProjects) {
    nextIndex = 0;
  }
  if (previousIndex > numberOfProjects) {
    previousIndex = 0;
  }
  if (previousIndex < 0) {
    previousIndex = numberOfProjects;
  }
}

// const fixMobileIndex = () => {
//   if (mobileIndex > numberOfProjects) {
//     mobileIndex = 0;
//   }
//   if (mobileIndex < 0) {
//     mobileIndex = numberOfProjects;
//   }
//   console.log(mobileIndex);
// }

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$(() => {

  $( window ).resize( () => {
    screenWidth = $( window ).width();
    console.log(screenWidth);
  })
  // Home Page Button Listeners
  $('#project-container').on('click', goToProjects);
  $('#about-container').on('click', goToAbout);

  // Modal Listeners

    // Contact Modal Listeners on All Pages
  $('.contact').on('click', showContactModal);
  $('.close-modal-button').on('click', hideContactModal);

  // Project Modal Listeners on Projects Page
    // project 1
  $('#proj_1').on('click', showProj1Modal);
  $('#proj_1_modal_close').on('click', hideProj1Modal);
    // project 2
  $('#proj_2').on('click', showProj2Modal);
  $('#proj_2_modal_close').on('click', hideProj2Modal);
    // project 3
  $('#proj_3').on('click', showProj3Modal);
  $('#proj_3_modal_close').on('click', hideProj3Modal);
    // project 4
  $('#proj_4').on('click', showProj4Modal);
  $('#proj_4_modal_close').on('click', hideProj4Modal);
    // project 5
  $('#proj_5').on('click', showProj5Modal);
  $('#proj_5_modal_close').on('click', hideProj5Modal);
    // project 6
  $('#proj_6').on('click', showProj6Modal);
  $('#proj_6_modal_close').on('click', hideProj6Modal);



  // Project Carousel on Home Page
  $('.carousel-projects').append($projectOne, $projectTwo, $projectThree);
  // $('.mobile-carousel-projects').append($projectOne);

  $('#next').on('click', () => {
    fixIndexRange();
    if (nextIndex <= numberOfProjects) {
      $('.carousel-projects').append(projectArray[nextIndex]);
      $('.carousel-projects').children().eq(0).remove();
      nextIndex++;
      previousIndex++;
    }

  })
  $('#previous').on('click', () => {
    fixIndexRange();
    if (previousIndex >= 0) {
      $('.carousel-projects').children().eq(2).remove();
      $('.carousel-projects').prepend(projectArray[previousIndex]);
      previousIndex--;
      nextIndex--;
    }

  })

// apppend mobile nave links to header on pge load
  $mobileHomeLink.appendTo($('.mobile-link-container'));
  $mobileProjectsLink.appendTo($('.mobile-link-container'));
  $mobileResumeLink.appendTo($('.mobile-link-container'));
  $mobileAboutLink.appendTo($('.mobile-link-container'));
// mobile event listeners
  $('#mobile-menu-button').on('click', toggleMobileNav);
  $('#read-more').on('click', toggleAboutText);
  $('#read-less').on('click', toggleAboutText);



})
