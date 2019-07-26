package com.Stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;


import com.objectrepository.AddCustomerPage;
import com.objectrepository.TelecomHomePage;
import com.resources.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddCustomer extends BaseClass{
	
	TelecomHomePage page1=new TelecomHomePage();
	AddCustomerPage page2=new AddCustomerPage();
	
	@Given("The user is in telecom home pages")
	public void the_user_is_in_telecom_home_pages() {
	
		launch("http://demo.guru99.com/telecom/");
	}

	@Given("The user click on add customer")
	public void the_user_click_on_add_customer() {
		btn(page1.getAddCustButton());
	}

	@When("The user is filling the valid details")
	public void the_user_is_filling_the_valid_details() {
		btn(page2.getRadioButton());
		type(page2.getFirstName(), "asar");
		type(page2.getLastName(), "sabik");
		type(page2.getEmail(), "as"	+ "@gmail.com");
		WebElement mess=Hook.driver.findElement(By.xpath("//textarea[@id='message']"));
		mess.sendKeys("abc");
		WebElement phone=Hook.driver.findElement(By.id("telephoneno"));
		phone.sendKeys("123");
	}
	
	@When("The user is filling the valid detail")
	public void the_user_is_filling_the_valid_detail(DataTable dataTable) {
	    
		List<String> customerDetails = dataTable.asList(String.class);
		WebElement radio1=Hook.driver.findElement(By.xpath("//label[@for='done']"));
		radio1.click();
		WebElement fname=Hook.driver.findElement(By.id("fname"));
		fname.sendKeys(customerDetails.get(0));
		WebElement lname=Hook.driver.findElement(By.id("lname"));
		lname.sendKeys(customerDetails.get(1));
		WebElement ename=Hook.driver.findElement(By.id("email"));
		ename.sendKeys(customerDetails.get(2));
		WebElement mess=Hook.driver.findElement(By.xpath("//textarea[@id='message']"));
		mess.sendKeys(customerDetails.get(3));
		WebElement phone=Hook.driver.findElement(By.id("telephoneno"));
		phone.sendKeys(customerDetails.get(4));
		
	}
	
	@When("The user is filling the valid detailss")
	public void the_user_is_filling_the_valid_detailss(DataTable dataTable) {
	    
		Map<String, String> customerDetails = dataTable.asMap(String.class,String.class);
		WebElement radio1=Hook.driver.findElement(By.xpath("//label[@for='done']"));
		radio1.click();
		WebElement fname=Hook.driver.findElement(By.id("fname"));
		fname.sendKeys(customerDetails.get("fName"));
		WebElement lname=Hook.driver.findElement(By.id("lname"));
		lname.sendKeys(customerDetails.get("lName"));
		WebElement ename=Hook.driver.findElement(By.id("email"));
		ename.sendKeys(customerDetails.get("email"));
		WebElement mess=Hook.driver.findElement(By.xpath("//textarea[@id='message']"));
		mess.sendKeys(customerDetails.get("addr"));
		WebElement phone=Hook.driver.findElement(By.id("telephoneno"));
		phone.sendKeys(customerDetails.get("phno"));
		
	}

	@When("The user click on submit button")
	public void the_user_click_on_submit_button() {
		WebElement submit=Hook.driver.findElement(By.xpath("//input[@type='submit']"));
		submit.click();
	}

	@Then("The user should display with customer id")
	public void the_user_should_display_with_customer_id() {
		Assert.assertTrue(Hook.driver.findElement(By.xpath("//table/tbody/tr//td/h3")).isDisplayed());
	}

}
