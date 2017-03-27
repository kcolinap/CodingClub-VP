Feature: Proyecto Velocity

#comentario

  Scenario Outline: Registro gamedb
    Given Navego a gamedb
    And entro a registro
    When Registro como "<nombre>" "<email>" and "<pass>":
    #Then Valido "<condicion>"

      Examples:
      |nombre|email|pass|
      |usr1|usr1.c|1234|
      | |usr1.c|1234|
      |usr1|usr1.c| |
      |usr1|usr1@gmai.com|1234|

    Then Valido "<condicion>"
      Examples:
        |condicion





