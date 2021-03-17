describe("Los estudiantes under monkeys", function () {
  it("visits los estudiantes and survives monkeys", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    /*loginFail1() ;  
    cy.wait(1000);
    loginFail2() ; 
    cy.wait(1000);
    loginFail3();  
    cy.wait(1000);*/
    login();
    cy.wait(1000);
    /*filterPost1();
    cy.wait(1000);
    filterPost2();
    cy.wait(1000);
    filterPost3();
    cy.wait(1000);
    filterPost4();
    cy.wait(1000);*/
    filterPages1();
    cy.wait(1000);
    filterPages2();
    cy.wait(1000);
    filterPages3();
    cy.wait(1000);
    filterPages4();
    cy.wait(1000);
  });
});

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

function loginFail1(){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true }) 
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })  
  .wait(1000)
  .type("{enter}");  

  
}

function loginFail2(){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type("wrong@uniandes.edu.co")
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })
  .type("1234")
  .wait(1000)
  .type("{enter}");

  

}

function loginFail3(){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type("wrong@uniandes.edu.co")
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })  
  .wait(1000)
  .type("{enter}");

  

}

function filterPost1(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/posts/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-type "]')  
  .contains('All posts')
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Draft post')
  .first()
  .click()
  ;


}

function filterPost2(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/posts/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-author "]')  
  .contains('All authors')
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Ghost')
  .first()
  .click({ force: true })    ;

  

}

function filterPost3(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/posts/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-sort"]')    
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Oldest')
  .first()
  .click({ force: true })    ;
  
}

function filterPost4(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/posts/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-type "]')  
  .contains('All posts')
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Published post')
  .first()
  .click({ force: true })    ;
  

}

function filterPages1(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/pages/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-type "]')  
  .contains('All pages')
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Draft pages')
  .first()
  .click({ force: true })    ;
  

}

function filterPages2(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/pages/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-author "]')  
  .contains('All authors')
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Ghost')
  .click({ force: true })    ;
  
}

function filterPages3(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/pages/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-sort"]')    
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Oldest')
  .first()
  .click({ force: true })    ;
  
}

function filterPages4(){
  cy.visit("http://localhost:2368/ghost/");
  cy.get('a[href="#/pages/"]')  
  .first()
  .click()  
  .wait(1000);

  cy.get('div[class="gh-contentfilter-menu gh-contentfilter-type "]')  
  .contains('All pages')
  .first()
  .click()  
  .wait(1000);

  cy.get('li')  
  .contains('Published pages')
  .first()
  .click({ force: true })    ;
  
}