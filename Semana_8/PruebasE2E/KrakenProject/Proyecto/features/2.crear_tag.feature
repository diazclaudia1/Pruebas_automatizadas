Feature:Crear un tag

  @user1 @web
  Scenario: Crear un tag
    Given I navigate to page "http://localhost:2368/ghost"
	Then I wait for 20 seconds
	Then I enter "enriquegamb9418@gmail.com" into input field having id "ember8"
	Then I enter "2530985@we" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I wait for 30 seconds
	Then I click on element having id "ember38"
	Then I wait for 15 seconds
    Then I click on element having id "ember70"
	Then I wait for 30 seconds
	Then I enter "#nuevoTag" into input field having id "tag-name"
	Then I enter "0000FF" into input field having id "ember83"
	Then I enter "Descripcion del tag de prueba" into input field having id "tag-description"
	Then I click on element having id "ember79"
	Then I wait for 10 seconds
	Then I click on element having id "ember38"