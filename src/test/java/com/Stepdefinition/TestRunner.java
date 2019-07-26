package com.Stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature",glue="com.Stepdefinition",
                       plugin= {"html:target","json:src/test/resources/report.json",
                    		   "rerun:src/test/resources/failed.txt"},
                       dryRun=false, tags= {"@smoke1","@sanity"})

public class TestRunner {
}
