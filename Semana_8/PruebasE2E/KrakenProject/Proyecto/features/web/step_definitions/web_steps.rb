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
end