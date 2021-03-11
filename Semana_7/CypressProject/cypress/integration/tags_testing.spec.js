describe("Filtrar Tags", function () {
  it("Visit ghost and filter tags", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    cy.wait(3000);
    listarTagsInternos1();//F02
    cy.wait(1000);    
    listarTagsPublicos1();//F04 (2)
    cy.wait(1000);
	borrarTags();//F03
    cy.wait(1000);
    crearTags();//F03
    cy.wait(1000);
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

function listarTagsInternos1() {
  cy.get('a[href="#/tags/"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-contentfilter gh-btn-group"]')
  .find('button[class="gh-btn "]')
  .click({force:true})
  .wait(1000);
  
  cy.get('li[class="gh-list-row gh-tags-list-item ember-view"]')
  .find('a[class="ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70"]')
  .first()
  .contains('Descripcion')
  .wait(1000);
}

function listarTagsPublicos1() {

  cy.get('div[class="gh-contentfilter gh-btn-group"]')
  .find('button[class="gh-btn "]')
  .click({force:true})
  .wait(1000);
  
  cy.get('li[class="gh-list-row gh-tags-list-item ember-view"]')
  .find('a[class="ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70"]')
  .first()
  .contains('Getting')
  .wait(1000);
}

function crearTags() {
   cy.get('a[class="ember-view gh-btn gh-btn-green"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type("Tagsito "+getRandomInt(0, 100))
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type("FFFFFF")
  .wait(1000);

  cy.get('section[class="view-actions"]')
  .contains('Save')
  .first()
  .click({force:true})

}

function borrarTags() {
  cy.get('li[class="gh-list-row gh-tags-list-item ember-view"]')
  .find('a[class="ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70"]')
  .last()
  .click({force:true})
  cy.get('section[class="gh-canvas"]')
  .find('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]')
   .click({force:true})
  cy.get('div[class="modal-footer"]')
  .find('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]')
   .last()
.contains("Delete")
 cy.get('a[class="close"]')
 .first()
 .click({force:true})
   cy.get('a[href="#/tags/"]')
  .first()
  .click({force:true})
  .wait(1000);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



