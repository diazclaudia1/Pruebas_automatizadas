const faker = require('faker');
faker.locale = "es_MX";

const tags = [
  {
    "color": "FFFFFF",
	"errorColor": "yuy8932o",
    "name": "Tag a priori 1",
    "description": "734082304809840923750928598'592'98402837'9409180487283708237508237508723085720572837502875028509820"
  },
  {
    "color": "3D6A21",
	"errorColor": "@9845k",
    "name": "Tag a priori 2 ",
    "description": "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  },
  {
    "color": "59B421",
	"errorColor": "984050u",
    "name": "Tag a priori 3 ",
    "description": ""
  },
  {
    "color": "3D6A21",
	"errorColor": "9.8032",
    "name": "Tag a priori 4",
    "description": "Descripcion de prueba"
  },
  {
    "color": "69216A",
	"errorColor": "919223",
    "name": "Tag a priori 5 ",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus quis nisl egestas volutpat tempus sit amet augue. Proin in viverra risus. Sed volutpat, augue ac venenatis pulvinar, lacus leo consequat dui, quis ornare odio felis at ligula. Mauris tortor erat, vulputate vitae lacus et, gravida commodo nunc. Nulla vel scelerisque diam. Sed a consectetur magna. Curabitur neque felis, finibus vel arcu non, porttitor ultrices metus. Vestibulum dapibus est vel lectus fringilla tincidunt.Nam condimentum urna at libero mollis, ac laoreet lacus lacinia. Quisque augue quam, vulputate non eros at, consequat auctor augue. Donec non lobortis elit. Praesent in est eu ex tincidunt viverra. Integer elementum eu sem nec porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ultricies nisl id nulla eleifend, a fringilla nulla efficitur. Maecenas quis lobortis velit, dapibus condimentum tellus. Vivamus consectetur placerat elit sodales tempor. Sed dictum congue lorem id tincidunt. Aliquam non faucibus libero.Maecenas vel libero tortor. Sed ornare mi diam, sit amet vestibulum ligula consectetur et. Curabitur cursus non turpis at porta. Maecenas lobortis orci a neque feugiat, tincidunt dignissim dolor elementum. Ut et ligula vitae odio interdum auctor nec vel sapien. Praesent commodo ante lectus, eu vestibulum mi suscipit vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis venenatis augue, non faucibus urna. Mauris velit diam, condimentum vel sagittis eget, porta ut massa. Curabitur sodales miarcu, nec malesuada ante lacinia vitae. Curabitur dapibus purus et diam tristique, sit amet malesuada mauris scelerisque.Sed malesuada massa ex, at aliquam est facilisis ut. Morbi consectetur vel elit vel mollis. Morbi semper malesuada mauris a varius. Etiam eu lobortis nisi, vitae rhoncus urna. Quisque in mollis elit. Vestibulum quis vestibulum libero, et consequat enim. Nullam pharetra diam et maximus porta. Integer faucibus arcu sollicitudin ligula volutpat, at feugiat turpis vehicula.Proin molestie libero et egestas interdum. Maecenas ac nisl tellus. Proin non sagittis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ornare eleifend enim non mollis. Integer porta, augue a sodales consequat, metus sem elementum erat, sit amet porta augue ex in nunc. Suspendisse pretium fermentum iaculis. Phasellus commodo, ante id pretium finibus, arcu felis gravida justo, vel gravida lorem dolor ac urna. Nunc rhoncus ante nisi, sed posuere mauris facilisis ac. Curabitur eget arcu ut ex luctus iaculis vitae et turpis. Integer venenatis accumsan sem, sit amet imperdiet quam tristique sed.Donec mollis, mi non bibendum porttitor, justo mi porttitor nunc, quis maximus lacus libero lacinia nibh. Vivamus at erat euismod, ultricies ex quis, suscipit neque. Nulla facilisi. Donec sed nibh eget lectus pellentesque bibendum. In ultricies tempus ultrices. Cras erat ante, pharetra sed imperdiet sed, placerat eget purus. Nulla vel ligula vitae enim condimentum fermentum sed at augue. Nunc congue massa quis tellus congue porta. Sed hendrerit rhoncus fringilla. Aenean non erat ligula. Nunc in dignissim ligula, vitae rutrum mauris. Vestibulum congue lacus at quam semper hendrerit."
  }
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
  faker.company.companyName(),
  faker.lorem.paragraph(),
  faker.name.jobTitle(),
  faker.internet.email()
];
describe("Crear Tags a Priori", function () {
	for(let i=0;i<tags.length;i++){
  it("Visit ghost and create tag", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTags(i,"priori");//F03
    cy.wait(1000);
  }), it("Visit ghost and create tag with erronious colour", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTagsConHexFormatEroneo(i,"priori");//F03
    cy.wait(1000);
  }),it("Visit ghost and create tag with description", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTagsConDescripcion(i,"priori");//F03
    cy.wait(1000);
  });
	}});
	
describe("Crear Tags a seudo-aleatorio", function () {
	for(let i=0;i<16;i++){
  it("Visit ghost and create tag", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTags(i,"seudo");//F03
    cy.wait(1000);
  }), it("Visit ghost and create tag with erronious colour", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTagsConHexFormatEroneo(i,"seudo");//F03
    cy.wait(1000);
  }),it("Visit ghost and create tag with description", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTagsConDescripcion(i,"seudo");//F03
    cy.wait(1000);
  });
	}});
	
describe("Crear Tags a aleatorio", function () {
	for(let i=0;i<16;i++){
  it("Visit ghost and create tag", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTags(i,"aleatorio");//F03
    cy.wait(1000);
  }), it("Visit ghost and create tag with erronious colour", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTagsConHexFormatEroneo(i,"aleatorio");//F03
    cy.wait(1000);
  }),it("Visit ghost and create tag with description", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    login();  //F01
    crearTagsConDescripcion(i,"aleatorio");//F03
    cy.wait(1000);
  });
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

function crearTags(i,tipo) {
	
	cy.get('a[href="#/tags/"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-contentfilter gh-btn-group"]')
  .find('button[class="gh-btn "]')
  .click({force:true})
  .wait(1000);
  
   cy.get('a[class="ember-view gh-btn gh-btn-green"]')
  .first()
  .click({force:true})
  .wait(1000);

if (tipo == "priori") {
  console.log(tipo);
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(tags[i].name)
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(tags[i].color)
  .wait(1000);
}
else if (tipo == "aleatorio") {
  console.log(tipo);
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0, 13)])
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0, 13)])
  .wait(1000);
}else  if (tipo == "seudo") {
  console.log(tipo);
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[2])
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[1])
  .wait(1000);
}

  cy.get('section[class="view-actions"]')
  .contains('Save')
  .should('contain', 'Save')
  .first()
  .click({force:true})

  
}

function crearTagsConDescripcion(i,tipo) {
	
cy.get('a[href="#/tags/"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-contentfilter gh-btn-group"]')
  .find('button[class="gh-btn "]')
  .click({force:true})
  .wait(1000);
  
   cy.get('a[class="ember-view gh-btn gh-btn-green"]')
  .first()
  .click({force:true})
  .wait(1000);
if (tipo == "priori") {
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(tags[i].name)
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(tags[i].color)
  .wait(1000);
  
   cy.get('textarea[id="tag-description"]')
  .click({force:true})
  .clear()
  .type(tags[i].description)
  .wait(1000);
}
else if (tipo == "seudo") {
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[2])
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[1])
  .wait(1000);
  
   cy.get('textarea[id="tag-description"]')
  .click({force:true})
  .clear()
  .type(types[5])
  .wait(1000);
}

else if (tipo == "aleatorio") {
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[2])
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0, 13)])
  .wait(1000);
  
   cy.get('textarea[id="tag-description"]')
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0, 13)])
  .wait(1000);
}
  cy.get('section[class="view-actions"]')
  .contains('Save')
  .should('contain', 'Save')
  .first()
  .click({force:true})
  
}

function crearTagsConHexFormatEroneo(i,tipo) {
	
  cy.get('a[href="#/tags/"]')
  .first()
  .click({force:true})
  .wait(1000);

  cy.get('div[class="gh-contentfilter gh-btn-group"]')
  .find('button[class="gh-btn "]')
  .click({force:true})
  .wait(1000);
  
   cy.get('a[class="ember-view gh-btn gh-btn-green"]')
  .first()
  .click({force:true})
  .wait(1000);
  
  if (tipo == "priori") {
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(tags[i].name)
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(tags[i].errorColor)
  .wait(1000);
}
else if (tipo == "seudo") {
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[2])
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[1])
  .wait(1000);
} else if (tipo == "aleatorio") {
  cy.get('div[class="form-group ember-view mr2 flex-auto"]')
  .find('input[name="name"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0, 13)])
   cy.get('div[class="input-color"]')
   .find('input[name="accent-color"]')
  .first()
  .click({force:true})
  .clear()
  .type(types[getRandomInt(0, 13)])
  .wait(1000);
}

  cy.get('section[class="view-actions"]')
  .contains('Save')
  .should('contain', 'Save')
  .first()
  .click({force:true})
  
    
  cy.get('p[class="response"]')
  .should('contain', 'The color should be in valid hex format')
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



