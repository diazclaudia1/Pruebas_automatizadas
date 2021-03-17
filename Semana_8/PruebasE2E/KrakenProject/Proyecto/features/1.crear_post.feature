Feature:Crear un post

  @user1 @web
  Scenario: Crear un post
    Given I navigate to page "http://localhost:2368/ghost"
	Then I wait for 60 seconds
	Then I enter "enriquegamb9418@gmail.com" into input field having id "ember8"
	Then I enter "2530985@we" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I wait for 20 seconds
	Then I click on element having id "ember29"
	Then I wait for 15 seconds
	Then I enter "Probando Titulo" into input field having id "ember70"
	Then I wait for 30 seconds
	Then I click on element having id "ember124"
	Then I wait for 15 seconds
	Then I click on element having id "ember136"
	Then I wait for 20 seconds
	Then I click on element having id "ember67"
