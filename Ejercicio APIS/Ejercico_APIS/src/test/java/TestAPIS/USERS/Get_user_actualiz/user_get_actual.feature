Feature: Get un usuario actualizado

  Scenario: Get a user
    Given url "https://petstore.swagger.io/v2/user/jgarzon"
    When method get
    Then status 200
    And match $.firstName == "jose"