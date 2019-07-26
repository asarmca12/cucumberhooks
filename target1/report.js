$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddTariffPlan.feature");
formatter.feature({
  "name": "Add Tariff Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg2"
    },
    {
      "name": "@reg3"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Tariff plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke1"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.step({
  "name": "The user is filling the valid detail\"\u003cMR\u003e\",\"\u003cFLC\u003e\",\"\u003cFIN\u003e\",\"\u003cFSM\u003e\",\"\u003cLC\u003e\",\"\u003cIC\u003e\",\"\u003cSMS\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user click on submit buttons",
  "keyword": "And "
});
formatter.step({
  "name": "The user should display congratulations you added tariff successfully.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MR",
        "FLC",
        "FIN",
        "FSM",
        "LC",
        "IC",
        "SMS"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "590",
        "600",
        "700"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Tariff plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg2"
    },
    {
      "name": "@reg3"
    },
    {
      "name": "@smoke1"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariff.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariff.the_user_click_on_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling the valid detail\"100\",\"200\",\"300\",\"400\",\"590\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariff.the_user_is_filling_the_valid_detail(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submit buttons",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariff.the_user_click_on_submit_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should display congratulations you added tariff successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariff.the_user_should_display_congratulations_you_added_tariff_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});