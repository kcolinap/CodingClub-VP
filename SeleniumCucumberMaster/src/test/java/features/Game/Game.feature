Feature: Proyecto Velocity

  #Se debe ejecutar el scenario de registro de juego para poder ejecutar el de modificar y/o eliminar


  #ejemplo con scenario outline
  #########################################
  #########################################
  ### NO EJECUTAR SCENARIO OUTLINE #######
  #########################################
  #########################################
  @ignore
  Scenario Outline: Registro de juego
    Given Navego a gamedb
    And entro a Login
    And Ingreso como "<email>" , "<pass>" y valido "<condicion>"
    Then Entro a la seccion Games
    And Ingreso "<gameName>" , "<platform>" and "<genre>"
    Then Click agregar
      Examples:
        |email           |pass|condicion|gameName     |platform|genre      |
        |test@example.com|test|correcto |Mortal Kombat|PS      |Fight      |
        |test@example.com|test|correcto |BattleField  |PC      |Shooter-War|
        |test@example.com|test|correcto |Mario        |Nintendo|Adventure  |

  #ejemplo sin outline
  #
  @ignore
  Scenario: Registro de juego
    Given Navego a gamedb
    And entro a Login
    And Ingreso con un usuario registrado:
      |user            |pass|
      |test@example.com|test|
    Then Entro a la seccion Games
    And Escribo los datos del juego:
      |Name         |Plattform   |Genre|
      |Mortal Kombat|Play Station|Fight|
    And Escribo los datos del juego:
      |Name         |Plattform   |Genre|
      |BattleField  |PC          |WAR|
    And Escribo los datos del juego:
      |Name         |Plattform   |Genre|
      |Mario        |Nintendo    |Adventure|

  #Modificar los nombres de los juegos registrados
  #
  @ignore
  Scenario: Modificar juego.
    Given Navego a gamedb
    And entro a Login
    And Ingreso con un usuario registrado:
      |user            |pass|
      |test@example.com|test|
    Then Entro a la seccion Games
    And Valido si hay juego registrado con accion <1>:


  #Eliminar los juegos registrados
  #@ignore
  Scenario: Eliminar juego
    Given Navego a gamedb
    And entro a Login
    And Ingreso con un usuario registrado:
      |user            |pass|
      |test@example.com|test|
    Then Entro a la seccion Games
    And Valido si hay juego registrado con accion <2>: