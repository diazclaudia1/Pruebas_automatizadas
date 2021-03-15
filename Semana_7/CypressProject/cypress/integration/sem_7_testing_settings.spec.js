const faker = require('faker');

describe("generalSettingsAleatorio", function () {
  for(let i = 0 ; i< 16  ;i++ ){
    it(i+" Visit ghost and settings", function () {
      cy.visit("http://localhost:2368/ghost/#/signin");        
      login();
      cy.wait(1000);
      generalSettingsAleatorio() ;         
    });
  }
});

describe("generalSettingsPseudoAleatorio", function () {
   for(let i = 0 ; i< 16  ;i++ ){
    it(i+" Visit ghost and settings", function () {
      cy.visit("http://localhost:2368/ghost/#/signin");        
      login();
      cy.wait(1000); 
      generalSettingsPseudoAleatorio() ;      
      });
  }
});

describe("generalSettingsAPriori", function () {
  for(let i = 0 ; i< 5  ;i++ ){    
    it(i+" Visit ghost and settings", function () {
      cy.visit("http://localhost:2368/ghost/#/signin");        
      login();
      cy.wait(1000);       
      generalSettingsAPriori() ;      
      });
  }
});



let types = [
  faker.internet.email(),
  faker.random.number(0,10),
  faker.name.firstName(), 
  faker.internet.password(8,10),
  faker.phone.phoneNumber(),
  faker.company.companyName(),
  faker.lorem.paragraph(),
  faker.name.jobTitle(),
  faker.internet.email()
];

let settingsTitle = [
  "Test claudia",
  "Nuevo post",
  "123456",
  "!#$%$%&$%/%()/=",
  "1=1"
];

let settingsDescription = [
  "..-.-.-.,-.*/-*+><",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  "1=1",
  "654987654",
  "Descripción"
];

let settingsMeta = [
  "test",
  "claudia",
  "blog",
  "ghost",
  "#$%TEST/(("
];

let settingsMetaD = [
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  ".",
  "#&$%&%&(//(&/()/()/(/*-+><",
  "1=1",
  "Meta datos" 
];

let settingsTwitterT = [
  "https://twitter.com/?lang=es",
  "https://www.facebook.com/ghost",
  "123456789",
  "1=1",
  "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
];

let settingsTwitterD = [
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  "654987",
  "#&$%&%&(//(&/()/()/(/*-+><",
  "1=1",
  "Twitter" 
];

let settingsFacebookT = [
  "https://twitter.com/?lang=es",
  "https://www.facebook.com/ghost",
  "********",
  "1=1",
  "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
];

let settingsFacebookD = [
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  "321654",
  "#&$%&%&(//(&/()/()/(/*-+><",
  "1=1",
  "Facebook" 
];

let settingsSocialFace = [
  "https://losestudiantes.com/",
  "https://www.coursera.org/learn/pruebas-automatizadas-software",
  "https://uniandes.edu.co/",
  "http://localhost:2368/ghost/#/settings/general",
  "https://app.slack.com/client/T016SMWPSQ5/C01L43M90JU"
];

let settingsSocialTwitter = [
  "##$$%%&/()==",
  "1=1",
  "98765432",
  "https://github.com/MISW-4104-Web",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
];

function login() {        

  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type("cx.diaz@uniandes.edu.co")
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })
  .type("3167782178+caya")
  .wait(1000)
  .type("{enter}");
}

function generalSettingsAleatorio() {  
  cy.get('a[href="#/settings/general/"]')
  .first()
  .click({force:true})
  .wait(1000);

  //metadata
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[6]).parent().within(() => {
      cy.get("button").click({force: true});
      cy.wait(500);
    });
  });
  cy.get("#metaTitle").scrollIntoView();
  cy.get("#metaTitle").clear({force: true}).type(types[getRandomInt(0,8)]);
	cy.get("#metaDescription").clear({force: true}).type(types[getRandomInt(0,8)]);

  //twitter
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[7]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  cy.get("#twitterTitle").scrollIntoView();
	cy.get("#twitterTitle").clear({force: true}).type(types[getRandomInt(0,8)]);
	cy.get("#twitterDescription").clear({force: true}).type(types[getRandomInt(0,8)]);

  //facebook
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[8]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  cy.get("#ogTitle").scrollIntoView();
	cy.get("#ogTitle").clear({force: true}).type(types[getRandomInt(0,8)]);
	cy.get("#ogDescription").clear({force: true}).type(types[getRandomInt(0,8)]);

  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[9]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

   //save
  cy.get('section[class="view-actions"]')
  .scrollIntoView()
  .contains('Save settings')
  .click({force:true})
  .wait(1000);
  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generalSettingsAPriori() {
  cy.get('a[href="#/settings/general/"]')
  .first()
  .click({force:true})
  .wait(1000);

  //titulo y descripción
  cy.get('div[class="gh-setting-first"]')
  .find('button')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get(".gh-setting-first input").then($elements => {
    cy.wrap($elements[0]).clear({force: true}).type(settingsTitle[getRandomInt(0,5)],{force: true});
    cy.wrap($elements[1]).clear({force: true}).type(settingsDescription[getRandomInt(0,5)],{force: true});
    cy.wait(500);
  });  

  //metadata
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[6]).parent().within(() => {
      cy.get("button").click({force: true});
      cy.wait(500);
    });
  });
  cy.get("#metaTitle").scrollIntoView();
  cy.get("#metaTitle").clear({force: true}).type(settingsMeta[getRandomInt(0,5)]);
	cy.get("#metaDescription").clear({force: true}).type(settingsMetaD[getRandomInt(0,5)]);

  //twitter
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[7]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  cy.get("#twitterTitle").scrollIntoView();
	cy.get("#twitterTitle").clear({force: true}).type(settingsTwitterT[getRandomInt(0,5)]);
	cy.get("#twitterDescription").clear({force: true}).type(settingsTwitterD[getRandomInt(0,5)]);

  //facebook
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[8]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  cy.get("#ogTitle").scrollIntoView();
	cy.get("#ogTitle").clear({force: true}).type(settingsFacebookT[getRandomInt(0,5)]);
	cy.get("#ogDescription").clear({force: true}).type(settingsFacebookD[getRandomInt(0,5)]);

  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[9]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  

  //save
  cy.get('section[class="view-actions"]')
  .scrollIntoView()
  .contains('Save settings')
  .click({force:true})
  .wait(1000);

}

function generalSettingsPseudoAleatorio() {
  cy.get('a[href="#/settings/general/"]')
  .first()
  .click({force:true})
  .wait(1000);

  //titulo y descripción
  cy.get('div[class="gh-setting-first"]')
  .find('button')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get(".gh-setting-first input").then($elements => {
    cy.wrap($elements[0]).clear({force: true}).type(types[6],{force: true});
    cy.wrap($elements[1]).clear({force: true}).type(types[7],{force: true});
    cy.wait(500);
  });  

  //metadata
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[6]).parent().within(() => {
      cy.get("button").click({force: true});
      cy.wait(500);
    });
  });
  cy.get("#metaTitle").scrollIntoView();
  cy.get("#metaTitle").clear({force: true}).type(types[7]);
	cy.get("#metaDescription").clear({force: true}).type(types[6]);

  //twitter
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[7]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  cy.get("#twitterTitle").scrollIntoView();
	cy.get("#twitterTitle").clear({force: true}).type(types[5]);
	cy.get("#twitterDescription").clear({force: true}).type(types[6]);

  //facebook
  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[8]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

  cy.get("#ogTitle").scrollIntoView();
	cy.get("#ogTitle").clear({force: true}).type(types[7]);
	cy.get("#ogDescription").clear({force: true}).type(types[6]);

  cy.get(".gh-setting-content").then($elements => {
    cy.wrap($elements[9]).parent().within(() => {
      cy.get("button").click({force: true});      
      cy.wait(500);
    });
  });

 
  //save
  cy.get('section[class="view-actions"]')
  .scrollIntoView()
  .contains('Save settings')
  .click({force:true})
  .wait(1000);

}
