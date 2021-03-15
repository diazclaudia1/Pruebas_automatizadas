const faker = require('faker');
faker.locale = "es_MX";

const info = [
  {
    "email": "harryPotter",
	"user": "piplup@yahoo.com",
    "userFail": "831"
  },
  {
    "email": "hermioneGranger",
	"user": "hola@yahoo.com",
    "userFail": "#67"
  },
  {
    "email": "prueba1",
	"user": "eluroi@yahoo.com",
    "userFail": "u(9"
  },
  {
    "email": "hola",
	"user": "eluroi@yahoo.com",
    "userFail": "367"
  },
  {
    "email": "holaEstaEsUnaPrueba",
	"user": "piplup@yahoo.com",
    "userFail": "(7u"
  },
  ];

const types = [
  faker.random.number(),
  faker.internet.color().substring(1,7),
  faker.random.word(6),
  faker.internet.email(),
  faker.random.number(0,10),
  faker.lorem.paragraph(501),
  faker.name.firstName(), 
  faker.internet.password(8,10),
  faker.phone.phoneNumber(),
  faker.lorem.word(),
  faker.lorem.paragraph(),
  faker.name.jobTitle(),
  faker.internet.email()
];

describe("Navegacion a priori ", function () {
	for(let i=0;i<info.length;i++){
  it("Visit profile and save changes ", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	guardarCambios(i,"priori") 
    cy.wait(1000); 

  }),it("Visit profile and validate site error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	validarSitioWebFallido(i,"priori") 
    cy.wait(1000);   

  }),it("Visit profile and validate email error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");  
    login();  //F01	
	cy.wait(1000);
	validarCorreoFallido(i,"priori") //F04	
  })
}});

describe("Navegacion a seudo-dinamico ", function () {
	for(let i=0;i<16;i++){
  it("Visit profile and save changes ", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	guardarCambios(i,"seudo") 
    cy.wait(1000); 

  }),it("Visit profile and validate site error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	validarSitioWebFallido(i,"seudo") 
    cy.wait(1000);   

  }),it("Visit profile and validate email error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");  
    login();  //F01	
	cy.wait(1000);
	validarCorreoFallido(i,"seudo") //F04	
  })
}});

describe("Navegacion a aleatorio ", function () {
	for(let i=0;i<16;i++){
  it("Visit profile and save changes ", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	guardarCambios(i,"aleatorio") 
    cy.wait(1000); 

  }),it("Visit profile and validate site error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	validarSitioWebFallido(i,"aleatorio") 
    cy.wait(1000);   

  }),it("Visit profile and validate email error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");  
    login();  //F01	
	cy.wait(1000);
	validarCorreoFallido(i,"aleatorio") //F04	
  })
}});

function login() {        

        cy.get('input[name="identification"]')
        .first()
        .clear()
        .click({force: true })
        .type("enriquegamb9418@gmail.com")
        .wait(1000);

        cy.get('input[name="password"]')
        .first()
        .clear()
        .click({ force: true })
        .type("2530985@we")
        .wait(1000)
        .type("{enter}");
}


function guardarCambios(i,tipo) {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
 if (tipo == "priori") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(info[i].user)
  .wait(1000);
 }
  else if (tipo == "seudo") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(types[3])
  .wait(1000);
  }
  
    else if (tipo == "aleatorio") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0,13)])
  .wait(1000);
  }
  cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]')
  .contains('Save')
  .first()
  .click({force:true})
  .wait(1000);
 
}

function validarSitioWebFallido(i,tipo) {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
  if (tipo == "priori") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(info[i].userFail)
  .wait(1000);
  }
  
   else if (tipo == "seudo") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(types[9])
  .wait(1000);
  }
     else if (tipo == "aleatorio") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0,13)])
  .wait(1000);
  }
  
   cy.get('input[id="user-facebook"]')
  .first()
  .click({force:true})
   .wait(1000);
  
   cy.get('p[class="response"]')  
  .should('contain', 'Website is not a valid url')
  .wait(1000);

}

function validarCorreoFallido(i,tipo) {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
 
   if (tipo == "priori") {
   cy.get('input[id="user-email"]')  
  .first()
  .click({force:true})
  .clear()
  .type(info[i].email)
  .wait(1000);
   }
   else if (tipo == "seudo") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(types[1])
  .wait(1000);
  }
  
     else if (tipo == "aleatorio") {
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0,13)])
  .wait(1000);
  }
   
   cy.get('input[id="user-facebook"]')
  .first()
  .click({force:true})
   .wait(1000);
  
   cy.get('p[class="response"]')  
  .should('contain', 'Please supply a valid email address')
  .wait(1000);

}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



