const faker = require('faker');

describe("loginAleatorio", function () {  
  for(let i = 0 ; i< 16  ;i++ ){    
    it(i+" Visit ghost and loginAleatorio", function () {
      cy.wait(1000);
      cy.visit("http://localhost:2368/ghost/#/signin");        
      loginAleatorio(types[getRandomInt(1,5)],types[getRandomInt(1,5)]) ;
      
    });
  }
});

describe("loginPseudoAleatorio", function () {
  for(let i = 0 ; i< 16  ;i++ ){
    it(i+" Visit ghost and loginPseudoAleatorio", function () {
      cy.wait(1000);
      cy.visit("http://localhost:2368/ghost/#/signin");    
      loginPseudoAleatorio()       
    });
  }
});

describe("loginApriori", function () {
  for(let i = 0 ; i< emailLogin.length ;i++ ){
    it(i+" Visit ghost and loginApriori", function () {
      cy.wait(1000);         
      cy.visit("http://localhost:2368/ghost/#/signin");
      loginApriori(emailLogin[i],passwordLogin[i]) 
      
    });
  }
});

let emailLogin = [  
  "kikegamba@gmail.com",
  "wrong@gmail.com",
  "test@gmail.com",  
  "prove@gmail.com",
  "cx.diaz@uniandes.edu.co"
]

let passwordLogin = [
  "123456",
  "login+",
  "test@",
  "love99877",
  "3167782178+caya"
]

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

function loginApriori(user, password) {        

        cy.get('input[name="identification"]')
        .first()
        .clear()
        .click({force: true })
        .type(user)
        .wait(1000);

        cy.get('input[name="password"]')
        .first()
        .clear()
        .click({ force: true })
        .type(password)
        .wait(1000)
        .type("{enter}");
}

function loginPseudoAleatorio() {        
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type(types[0])
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })
  .type(types[3])
  .wait(1000)
  .type("{enter}");
}

function loginAleatorio(user, password){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type(user)
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })
  .type(password)
  .wait(1000)
  .type("{enter}");
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
