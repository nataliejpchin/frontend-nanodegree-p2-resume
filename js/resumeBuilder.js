/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var work = {
    "jobs": [
        {
            "employer": "University of Nebraska-Lincoln Center on Children, Families, and the Law (CCFL)",
            "title": "E-Learning Developer",
            "location": "Lincoln, NE",
            "dates": "June 2011 to present",
            "description": "Develop instructional materials for online trainings. Design and produce graphics, audio, and video for print and online trainings. Provide technical assistance for websites and learning management systems. Design websites for various clients."
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Nebraska Parent Educator Professionals Website",
            "dates": "2014",
            "description": "Designed a Drupal website for Nebraska Parent Educator Professionals Website",
            "images": [
                "images/pepteam.png"
            ]
        },
        {
            "title": "Nebraska Home Visiting Online Training",
            "dates": "2011",
            "description": "Develop online training for home visitors in Nebraska. This course has been nationally recognized by Zero to Three and is currently being adapted for Florida Home Visiting curriculum.",
            "images": [
                "images/ne-home-visiting.png"
            ]
        }
    ]
}


var bio = {
    "name": "Natalie Chin",
    "role": "Aspiring Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "natalie.j.chin@gmail.com",
        "github": "https://github.com/njpchin",
        "twitter": "https://twitter.com/njpchin",
        "location": "Lincoln, NE'"
    },
    "welcomeMessage": "Hello!",
    "skills": [
        "HTML", "CSS", "Javascript", "Git"],
    "biopic": "images/natalie.jpg"
}


 var education = {
    "schools": [
        {
            "name": "University of Nebraska-Lincoln",
            "location": "Lincoln, NE",
            "degree": "Master of Arts",
            "majors": [
                "Management Information Systems"
            ],
            "dates": 2010,
            "url": "http://www.unl.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
}

//Encapsulate display() within the bio object and append all of the information to the bio section
bio.display = function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  for (var contact in bio.contacts) {

    //replace placeholder text with contact label and value
    var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);

    //insert contact info at the topContacts and footerContacts divs
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
  };

  if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills){

      //replace placeholder text with skills
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

      //insert skills at the skills div
      $("#skills").append(formattedSkill);
    }
  }
}

//calling the bio.display function to display bio information
bio.display();


//Encapsulate display() within the work object and append all of the work to the work section
work.display = function(){

  for (job in work.jobs){

  //create new div for work experience
  $("#workExperience").append(HTMLworkStart);

  //replace %data% in HTMLworkEmployer with each job's employer
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

  //replace %data% in HTMLworkTitle with each job's title
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

  //replace %data% in HTMLworkLocation with each job's location
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

  //replace %data% in HTMLworkDates with each job's dates
  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

  //replace %data% in HTMLworkDescription with each job's description
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  //append a concatenation of employer and title each to the element with class work-entry:last
  $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescription);
  }
}

//calling the work.display function to display work information
work.display();


//collect where the location of the clicks
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


//Encapsulate display() within the education object and append all of the education information to the education section
education.display = function() {

  for (school in education.schools){

    //create new div for education
    $("#education").append(HTMLschoolStart);

    //replace placeholder text with school name
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

    //replace placeholder text with school location
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

    //replace placeholder text with school degree
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

    //replace placeholder text with school dates attended
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

    //replace placeholder text with school major
    if (education.schools[school].majors.length > 0){
      for (major in education.schools[school].majors){
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      }
    }

    //append project information to with class project-entry:last
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree + formattedSchoolDates + formattedSchoolMajor);

  }

  //insert online classes header
  $("#education").append(HTMLonlineClasses);

  for (onlineCourse in education.onlineCourses){

    //create new div for education
    $("#education").append(HTMLschoolStart);

    //replace placeholder text with online course title
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

    //replace placeholder text with online course school
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

    //replace placeholder text with online course dates finished
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

    //replace placeholder text with online course URL
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

   //append project information to with class project-entry:last
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
  }
}

//calling the projects.display function to display project information
education.display();


//Encapsulate display() within the projects object and append all of the projects to the projects section
projects.display = function() {

  for (project in projects.projects){

    //create new div for projects
    $("#projects").append(HTMLprojectStart);

    //replace %data% in HTMLworkEmployer with each project's title
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

    //replace %data% in HTMLprojectDates with each project's title'
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

    //replace %data% in HTMLprojectDescription with each project's description'
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    //replace %data% in HTMLprojectImage with each project's images
    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      }
    }

    //append project information to with class project-entry:last
    $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
  }
}

//calling the projects.display function to display project information
projects.display();


//show Google Map
$("#mapDiv").append(googleMap);