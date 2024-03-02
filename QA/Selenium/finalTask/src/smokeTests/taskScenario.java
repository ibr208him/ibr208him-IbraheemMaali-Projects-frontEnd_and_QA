package smokeTests;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Listeners;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import com.aventstack.extentreports.Status;
import pageObjects.Actions;
import pageObjects.Assertions;
import support.ExtentReportClass;

@Listeners
public class taskScenario extends Actions {

	Actions Action = new Actions();
	Assertions Assertion = new Assertions();
	ExtentReportClass extentReportClass = new ExtentReportClass();

	@SuppressWarnings("static-access")
	@Parameters("myBrowser")
	@BeforeTest
	public void myBefore(String myBrowser) throws InterruptedException {
		extentReportClass.setDriver(myBrowser);
		System.out.println("Testing started with the browser "+"("+myBrowser+")");
		Action.maximizeBrowserWindow();
		Action.visitWebiste();
		Thread.sleep(2000);
	}

	@Parameters("myBrowser")
	@Test
	public void placeOrderFunctionality(String myBrowser) throws InterruptedException {

		extentTest = extentReport.createTest("Place Order Testing with " + myBrowser);
		extentTest.log(Status.INFO, "Place Order Testing starts with " + myBrowser);

		Action.search("Shirt");
		Thread.sleep(8000);
		Action.clickOnProductInfo();
		Thread.sleep(5000);
		Action.chooseSize();
		Thread.sleep(4000);
		Action.chooseColor();
		Thread.sleep(6000);
		Action.clickAddToCartButton();
		Thread.sleep(5000);
		Action.clickCartIcon();
		Thread.sleep(5000);
		Action.clickProceedToCheckoutButton();

		Thread.sleep(10000);
		extentTest.log(Status.INFO, "Start adding the order required details");

		Action.typeInEmailTextField(email);
		Action.typeInFirstNameTextField(firtName);
		Action.typeInLastNameTextField(lastName);
		Action.typeInCompanyTextField(company);
		Action.typeInStreetAddressTextField(streetAddress);
		Action.typeInCityTextField(city);
		Action.typeInPostCodeTextField(postalCode);
		Action.selectCountry(country);
		Thread.sleep(3000);
		Action.typeInPhoneNumberTextField(phoneNumber);
		Thread.sleep(2000);

		Action.clickCartNextButton();
		Thread.sleep(8000);
		Action.clickPlaceOrderButton();
		Thread.sleep(5000);
		Assertion.verifyOrderIsPlaced(myBrowser);
		Thread.sleep(2000);
		extentTest.log(Status.INFO, "Now, the Order number should be printed in the Eclipse Console which is ["
				+ Action.PrintOrderNumber() + "]");

	}

	@AfterTest
	public void myAfter() throws InterruptedException {
		Thread.sleep(3000);
		Action.closeBrowser();
	}
}
