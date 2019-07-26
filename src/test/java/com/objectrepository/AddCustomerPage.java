package com.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Stepdefinition.Hook;

public class AddCustomerPage {
	
	public AddCustomerPage() {
		PageFactory.initElements(Hook.driver, this);
	}

	@FindBy(xpath="//label[@for='done']")
	private WebElement radioButton;
	
	@FindBy(id="fname")
	private WebElement firstName;
	
	@FindBy(id="lname")
	private WebElement lastName;
	
	@FindBy(id="email")
	private WebElement email;
	
	@FindBy(xpath="//textarea[@id='message']")
	private WebElement address;
	
	@FindBy(id="telephoneno")
	private WebElement phno;
	
	@FindBy(xpath="//input[@type='submit']")
	private WebElement button;

	public WebElement getRadioButton() {
		return radioButton;
	}

	public WebElement getFirstName() {
		return firstName;
	}

	public WebElement getLastName() {
		return lastName;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getPhno() {
		return phno;
	}

	public WebElement getButton() {
		return button;
	}
}
