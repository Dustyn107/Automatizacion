Feature: Put a un usuario creado

  Scenario: put a user
    Given url "https://petstore.swagger.io/v2/user/jgarzon"
    And request { "id": 3, "username": "jgarzon", "firstName": "jose", "lastName": "garzon", "email": "personal@test.com", "password": "123456", "pone": "2345676", "userStatus": 0 }
    When method put
    Then status 200