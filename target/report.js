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
  "name": "The user is filling the valid detail\"\u003e\",\"\u003cFLC\u003e\",\"\u003cFIN\u003e\",\"\u003cFSM\u003e\",\"\u003cLC\u003e\",\"\u003cIC\u003e\",\"\u003cSMS\u003e\"",
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
  "name": "The user is filling the valid detail\"\u003e\",\"200\",\"300\",\"400\",\"590\",\"600\",\"700\"",
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
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : please fill all fields Correct Value}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TPBPP5D\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\Laptop\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64441}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 1aa8db755d0d8bfbdf105ec3c53a6ea1\n*** Element info: {Using\u003dxpath, value\u003d//h2[text()\u003d\u0027Congratulation you add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.Stepdefinition.AddTariff.the_user_should_display_congratulations_you_added_tariff_successfully(AddTariff.java:43)\r\n\tat ✽.The user should display congratulations you added tariff successfully.(src/test/resources/Feature/AddTariffPlan.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});