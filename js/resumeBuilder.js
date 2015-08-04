/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var work = {
    "jobs": [
        {
            "employer": "CIA",
            "title": "CIA Officer",
            "location": "Washington, DC",
            "dates": "2012 to now",
            "description": "Annie Walker is a CIA operative with gorgeous girl-next-door looks and the instincts and intelligence of a gifted spy. A brilliant linguist with a thirst for adventure, Annie was plucked from CIA training at the Farm to work in the Agency's Domestic Protection Division, taking on cases both close to home and across the world. Calm under fire and quick on her feet, Annie quickly proved herself to be a resourceful and effective agent, whether recruiting new assets or facing down ruthless enemies of the state."
        },
        {
            "employer": "CIA2",
            "title": "CIA Officer2",
            "location": "secret",
            "dates": "don't know'",
            "description": "Top secret missions"
        }
    ]
}
 
var projects = {
    "projects": [
        {
            "title": "Operation retrieve information from a Russian spy at a hotel",
            "dates": "Season 1 Episode 1",
            "description": "Because of her ability to speak six languages fluently, the CIA wants Annie to make contact with a Russian assassin, Stas, who is holed up at a motel in Washington DC. She is to use a gadget to transmit and store sensitive intelligence from his smartphone. Of course, her first day is anything but routine when a sniper takes out Stas and nearly kills Annie in a hail of bullets; from here on out, Annie's training will come on the job. ",
            "images": [
                "http://www.usanetwork.com/sites/usanetwork/files/101-22.jpg"
            ]
        },
        {
            "title": "Pose as a potential recruit for diamond smugglers in London and convince them to hire her",
            "dates": "Season 1 Episode 10",
            "description": "DPD has its sights on a pharmacist, Don Ridley, who has been a major conduit for an Angolan diamond smuggling ring from the UK to the U.S. After the FBI captures Ridley at an airport, Joan wants to keep the smuggling ring going so they can find out who is masterminding the operation. Now, Annie and Jai must pack their bags for London. ",
            "images": [
                "http://www.usanetwork.com/sites/usanetwork/files/ca_110-8.jpg"
            ]
        },
        {
            "title": "Protect an Estonian tennis player",
            "dates": "Season 2 Episode 1",
            "description": "Annie is tasked to bring down an Estonian mobster named Morozov. He's connected to Russian arms dealers and murders. The CIA has been receiving intelligence about Morozov through his mistress, a pro tennis player named Nadia. But when Annie approaches Nadia for more information, she makes it known that she no longer wants to work with the CIA.",
            "images": [
                "http://www.usanetwork.com/sites/usanetwork/files/covertaffairs_201-9.JPG"
            ]
        }
    ]
}
  
  
var bio = {
    "name": "Annie Walker",
    "role": "Gifted Spy",
    "contacts": {
        "mobile": "top secret",
        "email": "anniewalker@",
        "github": "https://github.com/njpchin",
        "twitter": "https://twitter.com/covertaffairs",
        "location": "Danielle's guest house'"
    },
    "welcomeMessage": "Hey there! Do you watch Covert Affairs?",
    "skills": [
        "Speaks seven languages", "Quick thinker", "Good fighter", "Target shooter"],
    "biopic": "images/fry.jpg"
}
 
 
 var education = {
    "schools": [
        {
            "name": "University of Maryland University College",
            "location": "Adelphi, MD",
            "degree": "Bachelor of Science",
            "majors": [
                "Criminal Justice"
            ],
            "dates": 2010,
            "url": "http://www.umuc.edu/academic-programs/bachelors-degrees/criminal-justice-major.cfm"
        }
    ],
    "onlineCourses": [
        {
            "title": "CIA training",
            "school": "CIA",
            "dates": 2012,
            "url": "#"
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





