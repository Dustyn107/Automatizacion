Feature: Get de un usuario

  Scenario: Get a user
    Given url "https://petstore.swagger.io/v2/user/jgarzon"
    When method get
    Then status 200
