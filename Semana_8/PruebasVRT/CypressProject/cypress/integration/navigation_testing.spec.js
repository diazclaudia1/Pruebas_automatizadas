describe("Navegacion 1 ", function () {
  it("Visit profile and validate Site Web", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
    irAlPerfil();//F02
    cy.wait(1000);   
	
  });
});

describe("Navegacion 2 ", function () {
  it("Visit profile and save changes ", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	guardarCambios() 
    cy.wait(1000); 

  });
});

describe("Navegacion 3 ", function () {
  it("Visit profile and validate site error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
	validarSitioWebFallido() 
    cy.wait(1000);   

  });
});

describe("Navegacion 4", function () {
  it("Visit profile and validate email error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");  
    login();  //F01	
	cy.wait(1000);
	validarCorreoFallido() //F04

	
  });
});

describe("Navegacion 5", function () {
  it("Visit profile and validate name error", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");  
    login();  //F01	
	cy.wait(1000);
	validarNombreFallido() //F04

	
  });
});



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

function irAlPerfil() {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
    .should('contain', 'Your Profile')

}

function guardarCambios() {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
  
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type("test"+getRandomInt(0, 100)+".com")
  .wait(1000);

  cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]')
  .contains('Save')
  .first()
  .click({force:true})
  .wait(1000);
 
}

function validarSitioWebFallido() {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
  
    cy.get('input[id="user-website"]')  
  .first()
  .click({force:true})
  .clear()
  .type("com")
  .wait(1000);
  
   cy.get('input[id="user-facebook"]')
  .first()
  .click({force:true})
   .wait(1000);
  
   cy.get('p[class="response"]')  
  .should('contain', 'Website is not a valid url')
  .wait(1000);

}

function validarCorreoFallido() {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
  
   cy.get('input[id="user-email"]')  
  .first()
  .click({force:true})
  .clear()
  .type("Hello")
  .wait(1000);
  
   cy.get('input[id="user-facebook"]')
  .first()
  .click({force:true})
   .wait(1000);
  
   cy.get('p[class="response"]')  
  .should('contain', 'Please supply a valid email address')
  .wait(1000);

}

function validarNombreFallido() {
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);
  
   cy.get('input[id="user-name"]')  
  .first()
  .click({force:true})
  .clear()
  .wait(1000);
  
   cy.get('input[id="user-facebook"]')
  .first()
  .click({force:true})
   .wait(1000);
  
   cy.get('p[class="response"]')  
  .should('contain', 'Please enter a name.')
  .wait(1000);

}





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



