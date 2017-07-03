/**
 * Created by anmol on 3/7/17.
 */


// console.log("hello")

let preload;
let counter;
let id;
let about;
let qualification;
let trainings;
let projects;
let skills;
$(function(){

 preload=$('#preloaded');
 counter=0;
 id=setInterval(frame,1000);
})

function frame(){

    if(counter==100){
        clearInterval(id);
        preload.empty();
        start();
    }
    else{
        counter+=50;
    }
}


function start(){


    let body=$(`
    
    
      <div class="row">
           <div class="col text-center">
               <img src="images/profile.png" height="150px" alt="Anmol Dua">
               <br>
               <br>
               <h1>Anmol Dua</h1>
               <h6>(Specials are born but extraordinary are made)</h6>
               <br>
           </div>
       </div>

       <br>
       <br>

       <div class="row">
           <div class="col text-center">
               <div id="About" class="jumbotron">
                   <h4>About</h4>
               </div>
           </div>
           <div class="col">
               <div id="Qualification" class="jumbotron">
                   <h4>Qualify</h4>
               </div>
           </div>
           <div class="col">
               <div id="Trainings" class="jumbotron">
                   <h4>Trainings</h4>
               </div>
           </div>
           <div class="col">
               <div id="Skills" class="jumbotron">
                   <h4>Skills</h4>
               </div>
           </div>
           <div class="col">
               <div id="Projects" class="jumbotron">
                   <h4>Projects</h4>
               </div>
           </div>
           <div class="col">
               <div id="Contacts" class="jumbotron">
                   <h4>Contacts</h4>
               </div>
           </div>
       </div>
`);

    preload.append(body);

    preload.css('background','orchild');

    about=$('#About');
    qualification=$('#Qualification');
    trainings=$('#Trainings')
    skills=$('#Skills')
    about.hover(function(){

        about.empty();
        let ab=$(`
                 <h6>Find Who I am</h6>
              `);
        about.append(ab);
        about.css('background','red').css('color','white').css('transition','background 1s');

    },function(){

        about.empty();
        let ab=$(`
                 <h4>About</h4>
              `);
        about.append(ab);
        about.css('background','white').css('color','#292B2C');

    });

    qualification.hover(function(){

        qualification.empty();
        let ab=$(`
                 <h6>My qualifications</h6>
              `);
        qualification.append(ab);
        qualification.css('background','orange').css('color','white').css('transition','background 1s');

    },function(){

        qualification.empty();
        let ab=$(`
                 <h4>Qualify</h4>
              `);
        qualification.append(ab);
        qualification.css('background','white').css('color','#292B2C');

    });

    trainings.hover(function(){

        trainings.empty();
        trainings.css('height','300px').css('background','yellow').css('color','white').css('transition','height 1s');
        let body=$(`
           
              <h5>Udacity</h5>
              <h5>Udemy</h5>
              <h5>Coding Blocks</h5>
          `)
        trainings.append(body)



    },function(){

        trainings.empty()
        trainings.css('height','200px').css('background','white').css('color','#292B2C').css('transition','height 0.5s');
        let body=$(`
               
              <h4>Trainings</h4>

         `)
        trainings.append(body)


    })





    skills.hover(function(){

        skills.empty();
        skills.css('height','350px').css('background','darkgreen').css('color','white').css('transition','height 1s');
        let body=$(`
           
              <h5>C++</h5>
              <h5>C</h5>
              <h5>Java</h5>
              <h5>Android</h5>
              <h5>Html</h5>
              <h5>CSS</h5>
              <h5>Javascript</h5>
              <h5>Node Js</h5>

          `)
        skills.append(body)

    },function(){
        skills.empty()
        skills.css('height','200px').css('background','white').css('color','#292B2C').css('transition','height 0.5s');
        let body=$(`
               
              <h4>Skills</h4>

         `)
        skills.append(body)
    });


    about.click(aboutClick);
    qualification.click(qualifyClick);

}


function aboutClick(ev){

  window.open("about.html","_self");

}

function qualifyClick(){
    window.open("qualification.html","_self");
}
