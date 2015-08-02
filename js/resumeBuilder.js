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
    "welcomeMessage": "Hey there! Do you watch Covert Affairs?",
    "role": "Gifted Spy",
    "contactInfo": {
        "mobile": "top secret",
        "email": "anniewalker@",
        "github": "https://github.com/njpchin",
        "twitter": "https://twitter.com/covertaffairs",
        "location": "Danielle's guest house'"
    },
    "skills": [
        "Speaks seven languages", "Quick thinker", "Good fighter", "Target shooter"
    ]
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
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

if (bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);
   
   
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);
   
   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);
   
   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);
   
   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
 }
 
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
 
 //collect where the location of the clicks
 $(document).click(function(loc){
   var x = loc.pageX;
   var y = loc.pageY;
   
   logClicks(x,y);
 });
 
/*create function called inName() that takes in a string of two names and returns an internationalized version that looks like so: Annie WALKER*/

//append internationalizeButton to the main div
$("#main").append(internationalizeButton);
 
function inName() {
    var name = bio.name;
        
    //create a variable called names and set it into the array of the names after separating it
    var names = name.split(" ");
    
    //change the last name to be uppercase
    names[1] = names[1].toUpperCase();
    
    //join the first and last names back to be a string
    name = names.join(" ");
    
    //return the string
    return name;
};
