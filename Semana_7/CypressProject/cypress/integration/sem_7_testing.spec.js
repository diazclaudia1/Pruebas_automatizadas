const faker = require('faker');

describe("loginAleatorio", function () {
  it("Visit ghost and loginAleatorio", function () {
   cy.visit("http://localhost:2368/ghost/#/signin");  
    for(let i = 0 ; i< 16  ;i++ ){
      loginAleatorio(types[Math.floor(Math.random() * 5) + 1],types[Math.floor(Math.random() * 5) + 1]) ;
    }
  });
});

describe("loginPseudoAleatorio", function () {
  it("Visit ghost and loginPseudoAleatorio", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    for(let i = 0 ; i< 16  ;i++ ){
      loginPseudoAleatorio() 
    }
  });
});

describe("loginApriori", function () {
  it("Visit ghost and loginApriori", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    for(let i = 0 ; i< emailLogin.length  ;i++ ){
      loginApriori(emailLogin[i],passwordLogin[i]) 
    }
  });
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
  ""
];

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




