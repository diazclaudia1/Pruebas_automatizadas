Feature:Crear una pagina

  @user1 @web
  Scenario: Crear una pagina
    Given I navigate to page "http://localhost:2368/ghost"
	Then I wait for 20 seconds
	Then I enter "enriquegamb9418@gmail.com" into input field having id "ember8"
	Then I enter "2530985@we" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I wait for 20 seconds
	Then I click on element having id "ember37"
	Then I wait for 20 seconds
	Then I click on element having id "ember88"
	Then I wait for 30 seconds
	Then I enter "Mi nueva pagina" into input field having id "ember103"
	Then I click on element having id "ember155"