$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
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
      "value": "#Valida el ingreso a la aplicacion gamedb2"
    }
  ],
  "line": 5,
  "name": "Login gamedb",
  "description": "",
  "id": "proyecto-velocity;login-gamedb",
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
  "name": "Ingreso como \"\u003cemail\u003e\" \"\u003cpass\u003e\" y valido \"\u003ccondicion\u003e\":",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 9,
      "value": "#Then Valido \"\u003ccondicion\u003e\""
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "proyecto-velocity;login-gamedb;",
  "rows": [
    {
      "cells": [
        "email",
        "pass",
        "condicion"
      ],
      "line": 12,
      "id": "proyecto-velocity;login-gamedb;;1"
    },
    {
      "comments": [
        {
          "line": 13,
          "value": "#|kel.@.com|1234|EmailBad|"
        },
        {
          "line": 14,
          "value": "#|test@example.com|2222|PassBad|"
        }
      ],
      "cells": [
        "test@example.com",
        "test",
        "correcto"
      ],
      "line": 15,
      "id": "proyecto-velocity;login-gamedb;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2024696486,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#|kel.@.com|1234|EmailBad|"
    },
    {
      "line": 14,
      "value": "#|test@example.com|2222|PassBad|"
    }
  ],
  "line": 15,
  "name": "Login gamedb",
  "description": "",
  "id": "proyecto-velocity;login-gamedb;;2",
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
  "name": "Ingreso como \"test@example.com\" \"test\" y valido \"correcto\":",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.navego_a_gamedb()"
});
formatter.result({
  "duration": 26330061915,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1613419603,
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
      "offset": 33
    },
    {
      "val": "correcto",
      "offset": 49
    }
  ],
  "location": "TestCases.ingreso_como_y_valido(String,String,String)"
});
formatter.result({
  "duration": 7328332818,
  "status": "passed"
});
formatter.after({
  "duration": 843626235,
  "status": "passed"
});
});