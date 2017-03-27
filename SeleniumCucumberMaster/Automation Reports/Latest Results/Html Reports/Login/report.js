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
  "name": "Ingreso como \"\u003cemail\u003e\" , \"\u003cpass\u003e\" y valido \"\u003ccondicion\u003e\"",
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
      "cells": [
        "kel.@.com",
        "1234",
        "EmailBad"
      ],
      "line": 13,
      "id": "proyecto-velocity;login-gamedb;;2"
    },
    {
      "cells": [
        "test@example.com",
        "2222",
        "PassBad"
      ],
      "line": 14,
      "id": "proyecto-velocity;login-gamedb;;3"
    },
    {
      "cells": [
        "test@example.com",
        "test",
        "correcto"
      ],
      "line": 15,
      "id": "proyecto-velocity;login-gamedb;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4970836585,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "name": "Ingreso como \"kel.@.com\" , \"1234\" y valido \"EmailBad\"",
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
  "duration": 6127662828,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1813866609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kel.@.com",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 28
    },
    {
      "val": "EmailBad",
      "offset": 44
    }
  ],
  "location": "TestCases.ingreso_como_y_valido(String,String,String)"
});
formatter.result({
  "duration": 7137277940,
  "status": "passed"
});
formatter.after({
  "duration": 213610598,
  "status": "passed"
});
formatter.before({
  "duration": 2869100504,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login gamedb",
  "description": "",
  "id": "proyecto-velocity;login-gamedb;;3",
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
  "name": "Ingreso como \"test@example.com\" , \"2222\" y valido \"PassBad\"",
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
  "duration": 5771421153,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1824094416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@example.com",
      "offset": 14
    },
    {
      "val": "2222",
      "offset": 35
    },
    {
      "val": "PassBad",
      "offset": 51
    }
  ],
  "location": "TestCases.ingreso_como_y_valido(String,String,String)"
});
formatter.result({
  "duration": 7193771311,
  "status": "passed"
});
formatter.after({
  "duration": 132754906,
  "status": "passed"
});
formatter.before({
  "duration": 2358857978,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login gamedb",
  "description": "",
  "id": "proyecto-velocity;login-gamedb;;4",
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
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.navego_a_gamedb()"
});
formatter.result({
  "duration": 5286920479,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.entro_a_Login()"
});
formatter.result({
  "duration": 1795820907,
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
  "duration": 8371833226,
  "status": "passed"
});
formatter.after({
  "duration": 223365960,
  "status": "passed"
});
});