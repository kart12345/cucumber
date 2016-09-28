$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "Description: This feature is to test the login functionality",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cname\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ],
      "line": 12,
      "id": "login;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "test@gmail.com",
        "abcabc"
      ],
      "line": 13,
      "id": "login;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "kart@gmai.com",
        "jank"
      ],
      "line": 14,
      "id": "login;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"test@gmail.com\" and \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 24183045667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 13
    },
    {
      "val": "abcabc",
      "offset": 34
    }
  ],
  "location": "Login.user_enters_and(String,String)"
});
formatter.result({
  "duration": 4412646949,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_Go_button()"
});
formatter.result({
  "duration": 3221990152,
  "status": "passed"
});
formatter.match({
  "location": "Login.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 141998005,
  "error_message": "org.openqa.selenium.WebDriverException: Element is not clickable at point (1070, 50). Other element would receive the click: \u003cdiv id\u003d\"memberLoginDialogblockingLayer\" class\u003d\"s20blockingLayer\" data-reactid\u003d\".0.$siteAspectsContainer.$memberLoginDialog.0\"\u003e\u003c/div\u003e\nCommand duration or timeout: 95 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Admin-PC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4b147104-88ea-4831-8f72-bdd994276e18\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat stepdefinition.Login.he_can_visit_the_practice_page(Login.java:50)\r\n\tat ✽.Then He can visit the practice page(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.a_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"kart@gmai.com\" and \"jank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 20375941661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kart@gmai.com",
      "offset": 13
    },
    {
      "val": "jank",
      "offset": 33
    }
  ],
  "location": "Login.user_enters_and(String,String)"
});
formatter.result({
  "duration": 4788925237,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_Go_button()"
});
formatter.result({
  "duration": 3316210501,
  "status": "passed"
});
formatter.match({
  "location": "Login.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 163057147,
  "error_message": "org.openqa.selenium.WebDriverException: Element is not clickable at point (1070, 50). Other element would receive the click: \u003cdiv id\u003d\"memberLoginDialogblockingLayer\" class\u003d\"s20blockingLayer\" data-reactid\u003d\".0.$siteAspectsContainer.$memberLoginDialog.0\"\u003e\u003c/div\u003e\nCommand duration or timeout: 120 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Admin-PC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 71cb84d0-be83-433a-abd6-ea653b296b18\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat stepdefinition.Login.he_can_visit_the_practice_page(Login.java:50)\r\n\tat ✽.Then He can visit the practice page(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.a_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
});