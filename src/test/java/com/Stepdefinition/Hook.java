package com.Stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
     public static WebDriver driver;
	
	@Before
	public void beforeBackground() {
		System.setProperty("webdriver.chrome.driver", "E:\\ProjectWorkspace\\cucumberhooks1\\driver\\chromedriver.exe");
		 driver=new ChromeDriver();
		

	}
	
	@After
	public void afterScenario() {
		
		driver.quit();

	}
}
