$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Game.feature");
formatter.feature({
  "line": 1,
  "name": "Proyecto Velocity",
  "description": "",
  "id": "proyecto-velocity",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Realiza el registro de juegos gamedb2"
    }
  ],
  "line": 5,
  "name": "Registro de juego",
  "description": "",
  "id": "proyecto-velocity;registro-de-juego",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navego a gamedb",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "entro a Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Ingreso como \"\u003cemail\u003e\" , \"\u003cpass\u003e\" y valido \"\u003ccondicion\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Entro a la seccion Games",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Ingreso \"\u003cgameName\u003e\" , \"\u003cplatform\u003e\" and \"\u003cgenre\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click agregar",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "proyecto-velocity;registro-de-juego;",
  "rows": [
    {
      "cells": [
        "email",
        "pass",
        "condicion",
        "gameName",
        "platform",
        "genre"
      ],
      "line": 13,
      "id": "proyecto-velocity;registro-de-juego;;1"
    },
    {
      "cells": [
        "test@example.com",
        "test",
        "correcto",
        "Mortal Kombat",
        "PS",
        "Fight"
      ],
      "line": 14,
      "id": "proyecto-velocity;registro-de-juego;;2"
    },
    {
      "cells": [
        "test@example.com",
        "test",
        "correcto",
        "BattleField",
        "PC",
        "Shooter-War"
      ],
      "line": 15,
      "id": "proyecto-velocity;registro-de-juego;;3"
    },
    {
      "cells": [
        "test@example.com",
        "test",
        "correcto",
        "Mario",
        "Nintendo",
        "Adventure"
      ],
      "line": 16,
      "id": "proyecto-velocity;registro-de-juego;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2011835223,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Registro de juego",
  "description": "",
  "id": "proyecto-velocity;registro-de-juego;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navego a gamedb",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "entro a Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Ingreso como \"test@example.com\" , \"test\" y valido \"correcto\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Entro a la seccion Games",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Ingreso \"Mortal Kombat\" , \"PS\" and \"Fight\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click agregar",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCases.navego_a_gamedb()"
});
formatter.result({
  "duration": 5851026938,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1620904019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@example.com",
      "offset": 14
    },
    {
      "val": "test",
      "offset": 35
    },
    {
      "val": "correcto",
      "offset": 51
    }
  ],
  "location": "TestCases.ingreso_como_y_valido(String,String,String)"
});
formatter.result({
  "duration": 7365603827,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_la_seccion_Games()"
});
formatter.result({
  "duration": 1609117548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mortal Kombat",
      "offset": 9
    },
    {
      "val": "PS",
      "offset": 27
    },
    {
      "val": "Fight",
      "offset": 36
    }
  ],
  "location": "TestCases.ingreso_and(String,String,String)"
});
formatter.result({
  "duration": 2896716030,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.click_agregar()"
});
formatter.result({
  "duration": 1731969727,
  "status": "passed"
});
formatter.after({
  "duration": 862442957,
  "status": "passed"
});
formatter.before({
  "duration": 1321963608,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Registro de juego",
  "description": "",
  "id": "proyecto-velocity;registro-de-juego;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navego a gamedb",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "entro a Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Ingreso como \"test@example.com\" , \"test\" y valido \"correcto\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Entro a la seccion Games",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Ingreso \"BattleField\" , \"PC\" and \"Shooter-War\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click agregar",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCases.navego_a_gamedb()"
});
formatter.result({
  "duration": 6126271564,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1595053839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@example.com",
      "offset": 14
    },
    {
      "val": "test",
      "offset": 35
    },
    {
      "val": "correcto",
      "offset": 51
    }
  ],
  "location": "TestCases.ingreso_como_y_valido(String,String,String)"
});
formatter.result({
  "duration": 7290057258,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_la_seccion_Games()"
});
formatter.result({
  "duration": 1605449912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BattleField",
      "offset": 9
    },
    {
      "val": "PC",
      "offset": 25
    },
    {
      "val": "Shooter-War",
      "offset": 34
    }
  ],
  "location": "TestCases.ingreso_and(String,String,String)"
});
formatter.result({
  "duration": 2926142436,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.click_agregar()"
});
formatter.result({
  "duration": 1709087655,
  "status": "passed"
});
formatter.after({
  "duration": 764772218,
  "status": "passed"
});
formatter.before({
  "duration": 1318346328,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Registro de juego",
  "description": "",
  "id": "proyecto-velocity;registro-de-juego;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navego a gamedb",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "entro a Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Ingreso como \"test@example.com\" , \"test\" y valido \"correcto\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Entro a la seccion Games",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Ingreso \"Mario\" , \"Nintendo\" and \"Adventure\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click agregar",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCases.navego_a_gamedb()"
});
formatter.result({
  "duration": 4856369467,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1622562233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@example.com",
      "offset": 14
    },
    {
      "val": "test",
      "offset": 35
    },
    {
      "val": "correcto",
      "offset": 51
    }
  ],
  "location": "TestCases.ingreso_como_y_valido(String,String,String)"
});
formatter.result({
  "duration": 7338411039,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_la_seccion_Games()"
});
formatter.result({
  "duration": 1604549921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mario",
      "offset": 9
    },
    {
      "val": "Nintendo",
      "offset": 19
    },
    {
      "val": "Adventure",
      "offset": 34
    }
  ],
  "location": "TestCases.ingreso_and(String,String,String)"
});
formatter.result({
  "duration": 2964358017,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.click_agregar()"
});
formatter.result({
  "duration": 1726616935,
  "status": "passed"
});
formatter.after({
  "duration": 768028669,
  "status": "passed"
});
});