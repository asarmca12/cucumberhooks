package com.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Stepdefinition.Hook;

public class TelecomHomePage {
	
	public TelecomHomePage() {
	   PageFactory.initElements(Hook.driver, this);
	}
	
	@FindBy(xpath="(//a[@href='addcustomer.php'])[1]")
	private WebElement addCustButton;
	
	@FindBy(xpath="//a[text()='Add Tariff Plan']")
	private WebElement addTariffButton;

	public WebElement getAddCustButton() {
		return addCustButton;
	}

	public WebElement getAddTariffButton() {
		return addTariffButton;
	}
	
	
	

}