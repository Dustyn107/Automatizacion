Feature: Delete de un usuario

  Scenario: Delete a user
    Given url "https://petstore.swagger.io/v2/user/jgarzon"
    When method delete
    Then status 200