$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
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
      "value": "#comentario"
    }
  ],
  "line": 5,
  "name": "Registro gamedb",
  "description": "",
  "id": "proyecto-velocity;registro-gamedb",
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
  "name": "entro a registro",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Registro como \"\u003cnombre\u003e\" \"\u003cemail\u003e\" and \"\u003cpass\u003e\":",
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
  "id": "proyecto-velocity;registro-gamedb;",
  "rows": [
    {
      "cells": [
        "nombre",
        "email",
        "pass"
      ],
      "line": 12,
      "id": "proyecto-velocity;registro-gamedb;;1"
    },
    {
      "cells": [
        "usr1",
        "usr1.c",
        "1234"
      ],
      "line": 13,
      "id": "proyecto-velocity;registro-gamedb;;2"
    },
    {
      "cells": [
        "",
        "usr1.c",
        "1234"
      ],
      "line": 14,
      "id": "proyecto-velocity;registro-gamedb;;3"
    },
    {
      "cells": [
        "usr1",
        "usr1.c",
        ""
      ],
      "line": 15,
      "id": "proyecto-velocity;registro-gamedb;;4"
    },
    {
      "cells": [
        "usr1",
        "usr1@gmai.com",
        "1234"
      ],
      "line": 16,
      "id": "proyecto-velocity;registro-gamedb;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4705953700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Registro gamedb",
  "description": "",
  "id": "proyecto-velocity;registro-gamedb;;2",
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
  "name": "entro a registro",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Registro como \"usr1\" \"usr1.c\" and \"1234\":",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.navigate_to_gamedb2()"
});
formatter.result({
  "duration": 8673528006,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.navigate_to_registro()"
});
formatter.result({
  "duration": 2328334228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usr1",
      "offset": 15
    },
    {
      "val": "usr1.c",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 35
    }
  ],
  "location": "TestCases.Ingreso_registro(String,String,String)"
});
formatter.result({
  "duration": 5026558518,
  "status": "passed"
});
formatter.after({
  "duration": 228982197,
  "status": "passed"
});
formatter.before({
  "duration": 2210289432,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Registro gamedb",
  "description": "",
  "id": "proyecto-velocity;registro-gamedb;;3",
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
  "name": "entro a registro",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Registro como \"\" \"usr1.c\" and \"1234\":",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.navigate_to_gamedb2()"
});
formatter.result({
  "duration": 8091498897,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.navigate_to_registro()"
});
formatter.result({
  "duration": 2333237697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "usr1.c",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 31
    }
  ],
  "location": "TestCases.Ingreso_registro(String,String,String)"
});
formatter.result({
  "duration": 5046897023,
  "status": "passed"
});
formatter.after({
  "duration": 219258697,
  "status": "passed"
});
formatter.before({
  "duration": 1827052170,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Registro gamedb",
  "description": "",
  "id": "proyecto-velocity;registro-gamedb;;4",
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
  "name": "entro a registro",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Registro como \"usr1\" \"usr1.c\" and \"\":",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.navigate_to_gamedb2()"
});
formatter.result({
  "duration": 8402994994,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.navigate_to_registro()"
});
formatter.result({
  "duration": 2308924469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usr1",
      "offset": 15
    },
    {
      "val": "usr1.c",
      "offset": 22
    },
    {
      "val": "",
      "offset": 35
    }
  ],
  "location": "TestCases.Ingreso_registro(String,String,String)"
});
formatter.result({
  "duration": 4926911043,
  "status": "passed"
});
formatter.after({
  "duration": 145949283,
  "status": "passed"
});
formatter.before({
  "duration": 1829888745,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Registro gamedb",
  "description": "",
  "id": "proyecto-velocity;registro-gamedb;;5",
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
  "name": "entro a registro",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Registro como \"usr1\" \"usr1@gmai.com\" and \"1234\":",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.navigate_to_gamedb2()"
});
formatter.result({
  "duration": 7822394289,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.navigate_to_registro()"
});
formatter.result({
  "duration": 2313618001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usr1",
      "offset": 15
    },
    {
      "val": "usr1@gmai.com",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "TestCases.Ingreso_registro(String,String,String)"
});
formatter.result({
  "duration": 5026093220,
  "status": "passed"
});
formatter.after({
  "duration": 146919224,
  "status": "passed"
});
});