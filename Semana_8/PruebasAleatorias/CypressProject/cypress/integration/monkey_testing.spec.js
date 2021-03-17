describe("Los estudiantes under monkeys", function () {
  it("visits los estudiantes and survives monkeys", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    loginFail();//F01
    cy.wait(1000);
    login();  //F01
    cy.wait(3000);
    generalSettings1();//F02
    cy.wait(1000);    
    profile();//F04 (2)
    cy.wait(1000);
    writePost();//F03
    cy.wait(1000);
    generalSettings2();//F02
    cy.wait(1000);
    writePost2();//F03
    cy.wait(1000);
    randomClick(10);//F05
    cy.wait(1000);
    logout();   //F01
    cy.wait(3000); 
    login();
    cy.wait(1000);
    randomEvent(5);//F05
    cy.wait(1000);
  });
});

function randomClick(monkeysLeft) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var monkeysLeftFunction = monkeysLeft;

  if (monkeysLeft == monkeysLeftFunction) {
    cy.visit("http://localhost:2368/");   
   
  }

  
  if (monkeysLeftFunction > 0) {
    cy.get("a").then(($links) => {
      var randomLink = $links.get(getRandomInt(0, $links.length));
      if (!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({ force: true });
        monkeysLeftFunction = monkeysLeftFunction - 1;
      }
      cy.wait(1000);
      randomClick(monkeysLeftFunction);
    });
  }
}

function randomEvent(monkeysLeft) {
  var monkeysLeftFunction = monkeysLeft;

  if (monkeysLeft == monkeysLeftFunction) {
    cy.visit("http://localhost:2368/");   
   
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var random = getRandomInt(2, 4);

  cy.log("monkeysLeftFunction " + monkeysLeftFunction);
  if (monkeysLeftFunction > 0) {
    if (random == 0) {
      cy.log("llenar texto");
      cy.get("input")
        .first()
        .click({ multiple: true, force: true })
        .type("Universidad industrial de santander")
        .wait(1000)
        .type("{enter}");
        monkeysLeftFunction = monkeysLeftFunction - 1;
      cy.wait(1000);
      randomEvent(monkeysLeftFunction);
    } else if (random == 2) {
      cy.log("hacer click");
      cy.get("a").then(($links) => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if (!Cypress.dom.isHidden(randomLink)) {
          cy.wrap(randomLink).click({ force: true });
        }
        monkeysLeftFunction = monkeysLeftFunction - 1;
        cy.wait(1000);
        randomEvent(monkeysLeftFunction);
      });
    } else if (random == 3) {
      cy.log("combobox");

      cy.get("select").then(($links) => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if (!Cypress.dom.isHidden(randomLink)) {
          cy.wrap(randomLink).click({ force: true });
        }
        monkeysLeftFunction = monkeysLeftFunction - 1;
        cy.wait(1000);
        randomEvent(monkeysLeftFunction);
      });
    } else if (random == 4) {
      cy.log("button");

      cy.get("button").then(($links) => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if (!Cypress.dom.isHidden(randomLink)) {
          cy.wrap(randomLink).click({ force: true });
        }
        monkeysLeftFunction = monkeysLeftFunction - 1;
        cy.wait(1000);
        randomEvent(monkeysLeftFunction);
      });
    } else {
      monkeysLeftFunction = monkeysLeftFunction - 1;
      cy.wait(1000);
      randomEvent(monkeysLeftFunction);
    }
  }
}

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

function loginFail(){
  cy.get('input[name="identification"]')
  .first()
  .click({force: true })
  .type("wrong@uniandes.edu.co")
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .click({ force: true })
  .type("1234")
  .wait(1000)
  .type("{enter}");
}

function generalSettings1() {
  cy.get('a[href="#/settings/general/"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-setting-first"]')
  .find('button')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-setting-content-extended"]')
  .find('div[id="ember99"]')
  .find('input[id="ember100"]')
  .first()
  .click({force:true})
  .clear()
  .type("test "+getRandomInt(0, 100))
  .wait(1000);

  cy.get('section[class="view-actions"]')
  .contains('Save settings')
  .first()
  .click({force:true})
  .wait(1000);

}

function generalSettings2() {
    cy.get('a[href="#/settings/general/"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="flex flex-column br3 shadow-1 bg-grouped-table pa5"]')
  .find('button[class="gh-btn"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-setting-content"]')
  .find('div[id="ember606"]')
  .find('input[id="ember607"]')
  .first()
  .click({force:true})
  .clear()
  .type("test"+getRandomInt(0, 100))
  .wait(1000);

  cy.get('section[class="view-actions"]')
  .contains('Save settings')
  .first()
  .click({force:true})
  .wait(1000);

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function profile(){
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

  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Your Profile')
  .first()
  .click()  
  .wait(1000);

  cy.get('input[id="user-location"]')  
  .first()
  .click({force:true})
  .clear()
  .type("test"+getRandomInt(0, 100))
  .wait(1000);

  cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]')
  .contains('Save')
  .first()
  .click({force:true})
  .wait(1000);
}

function logout(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('div[class="flex-auto flex items-center"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('Sign Out')
  .first()
  .click()  
  .wait(10000);

  cy.visit("http://localhost:2368/ghost/#/signin");    

  cy.wait(10000);

}

function writePost(){
  cy.get('a[href="#/posts/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a')  
  .contains('New post')
  .first()
  .click()  
  .wait(1000);

  cy.get('textarea')  
  .first()
  .click({force:true})
  .clear()
  .type("test"+getRandomInt(0, 100))
  .wait(1000);

  cy.visit("http://localhost:2368/ghost/#/posts?type=draft");

}

function writePost2(){

  cy.get('a[href="#/posts/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]')  
  .first()
  .click({force:true}) 
  .wait(1000);
 
  cy.get('textarea')  
  .first()
  .click({force:true})
  .clear()
  .type("test"+getRandomInt(0, 100))
  .wait(1000);

  cy.visit("http://localhost:2368/ghost/#/posts?type=draft");

}