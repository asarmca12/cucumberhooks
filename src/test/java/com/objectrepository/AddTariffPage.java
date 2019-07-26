package com.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Stepdefinition.Hook;

public class AddTariffPage {
	public AddTariffPage() {
		PageFactory.initElements(Hook.driver, this);}	
	@FindBy(xpath="//input[@id='rental1']")
	private WebElement monthREntal;
	
	@FindBy(xpath="//input[@id='local_minutes']")
	private WebElement freeLocalMins;
	
	@FindBy(xpath="//input[@id='inter_minutes']")
	private WebElement freeIntrMins;
	
	@FindBy(xpath="//input[@id='sms_pack']")
	private WebElement freeSms;
	
	@FindBy(xpath="//input[@id='minutes_charges']")
	private WebElement localChgs;
	
	@FindBy(xpath="//input[@id='inter_charges']")
	private WebElement intnChgs;
	
	@FindBy(xpath="//input[@id='sms_charges']")
	private WebElement smsChgs;
	
	@FindBy(xpath="//input[@name='submit']")
	private WebElement subButton;

	public WebElement getMonthREntal() {
		return monthREntal;
	}

	public WebElement getFreeLocalMins() {
		return freeLocalMins;
	}

	public WebElement getFreeIntrMins() {
		return freeIntrMins;
	}

	public WebElement getFreeSms() {
		return freeSms;
	}

	public WebElement getLocalChgs() {
		return localChgs;
	}

	public WebElement getIntnChgs() {
		return intnChgs;
	}

	public WebElement getSmsChgs() {
		return smsChgs;
	}

	public WebElement getSubButton() {
		return subButton;
	}

}
