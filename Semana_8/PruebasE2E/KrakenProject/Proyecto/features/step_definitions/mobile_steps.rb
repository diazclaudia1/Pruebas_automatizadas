if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I select option with value "(.*?)" for dropdown with id "(.*?)"$/) do |opValue, selId|
    drop = @driver.find_element(:id, selId)
    choose = Selenium::WebDriver::Support::Select.new(drop)
    choose.select_by(:value, opValue)
  end
  
  Then(/^I click on element having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).click
  end
  
  Then(/^I enter "([^\"]*)" into input field having name "([^\"]*)"$/) do |text, name|
	@driver.find_element(:name, name).send_keys(text)
    sleep 2
   end
  
  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end
​
  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end
  
end

