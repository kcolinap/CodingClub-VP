Feature: Proyecto Velocity

#Valida el ingreso a la aplicacion gamedb2

  Scenario Outline: Login gamedb
    Given Navego a gamedb
    And entro a Login
    When Ingreso como "<email>" , "<pass>" y valido "<condicion>"
    #Then Valido "<condicion>"

    Examples:
      |email|pass|condicion|
      |kel.@.com|1234|EmailBad|
      |test@example.com|2222|PassBad|
      |test@example.com|test|correcto|

    #Then Valido "<condicion>"
    #Examples: