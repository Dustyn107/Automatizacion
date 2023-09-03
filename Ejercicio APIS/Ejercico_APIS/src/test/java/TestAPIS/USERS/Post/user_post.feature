Feature: post un usuario

  Scenario: Crear un usuario nuevo
    Given url "https://petstore.swagger.io/v2/user/createWithList"
    And request { "id": 2, "username": "jgarzox", "firstName": "juan", "lastName": "garzon", "email": "TEST@TESTING.COM", "password": "123456", "phone": "2345676", "userStatus": 0 }
    When method post
    Then status 200