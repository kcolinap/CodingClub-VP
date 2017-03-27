$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Game.feature");
formatter.feature({
  "line": 1,
  "name": "Proyecto Velocity",
  "description": "",
  "id": "proyecto-velocity",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2015245948,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#Eliminar los juegos registrados"
    },
    {
      "line": 60,
      "value": "#@ignore"
    }
  ],
  "line": 61,
  "name": "Eliminar juego",
  "description": "",
  "id": "proyecto-velocity;eliminar-juego",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "Navego a gamedb",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "entro a Login",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Ingreso con un usuario registrado:",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 65
    },
    {
      "cells": [
        "test@example.com",
        "test"
      ],
      "line": 66
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Entro a la seccion Games",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Valido si hay juego registrado con accion \u003c2\u003e:",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.navego_a_gamedb()"
});
formatter.result({
  "duration": 5708584738,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1614305160,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.ingreso_como_user_registrado(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2977716425,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_la_seccion_Games()"
});
formatter.result({
  "duration": 1598991216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "TestCases.valido_si_hay_juego_registrado_con_accion(int)"
});
formatter.result({
  "duration": 1649404134,
  "status": "passed"
});
formatter.after({
  "duration": 792937162,
  "status": "passed"
});
});