Feature: Login
  Description: This feature is to test the login functionality

  Scenario Outline: Successful Login with Valid Credentials
    Given User is on Home Page
    When User enters "<name>" and "<pasword>"
    And Clicks Go button
    Then He can visit the practice page
    And A message is displayed

    Examples: 
      | name           | pasword |
      | test@email.com | abcabc   |
      | kart@gmai.com  | jank     |
