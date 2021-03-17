Feature:Realizar Login

  @user1 @web
  Scenario: Realiza login correctamente
    Given I navigate to page "http://localhost:2368/ghost"
	Then I wait for 20 seconds
	Then I enter "enriquegamb9418@gmail.com" into input field having id "ember8"
	Then I enter "2530985@we" into input field having id "ember10"
	Then I click on element having id "ember12"
	Then I should see text "Thoughts, stories and ideas"
