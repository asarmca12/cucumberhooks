
@regression 
Feature: Adding customer functionality
  This is a add new customer into telecome
  
  Background:
  Given The user is in telecom home pages
    And   The user click on add customer
  

@smoke
 Scenario: Add customer
   
    When  The user is filling the valid details
    And   The user click on submit button
    Then  The user should display with customer id
    
 @sanity   
  Scenario: Add customer1

    When  The user is filling the valid detail
    |test|test|kr@gmail.com|tanjore|7847454547|
    And   The user click on submit button
    Then  The user should display with customer id
  
  @smoke @sanity  
  Scenario: Add customer2
    
    When  The user is filling the valid detailss
   |fName  |test|
   |lName| test|
   |email|kr@gmail.com|
   |addr|  madurai|
   |phno| 7847454547|
    And   The user click on submit button
    Then  The user should display with customer id
	