package pageObjects;

import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.Select;
import support.ExtentReportClass;
import support.myConstants;

public class Actions extends ExtentReportClass implements myConstants {

	FirefoxOptions firefoxOptions = new FirefoxOptions();
	ChromeOptions chromeOptions = new ChromeOptions();
	EdgeOptions edgeOptions = new EdgeOptions();

	public void maximizeBrowserWindow() {
		driver.manage().window().maximize();
	}

	public void visitWebiste() {

		driver.get("https://magento.softwaretestingboard.com");
	}

	public void closeBrowser() {
		driver.quit();
	}

	public void search(String product) {
		driver.findElement(By.id("search")).sendKeys(product + Keys.ENTER);
		driver.findElement(By.cssSelector("[data-ui-id=\"page-title-wrapper\"]"));
	}

	public void clickOnProductInfo() {
		Random random = new Random();
		int rand = random.nextInt(5)+1;
		System.out.println(rand);
		driver.findElement(By.cssSelector("[class=\"item product product-item\"]:nth-of-type(" + rand + ")")).click();
	}

	public void chooseSize() {
		Random random = new Random();
		int rand = random.nextInt(5)+1;
		System.out.println(rand);
		driver.findElement(By.cssSelector(".swatch-option.text:nth-of-type("+ rand + ")")).click();
	}

	public void chooseColor() {
		Random random = new Random();
		int rand = random.nextInt(3)+1;
		System.out.println(rand);
		driver.findElement(By.cssSelector(".swatch-option.color:nth-of-type("+ rand + ")")).click();
	}

	public void clickAddToCartButton() {
		driver.findElement(By.id("product-addtocart-button")).click();

	}

	public void clickCartIcon() {
		driver.findElement(By.className("showcart")).click();

	}

	public void clickProceedToCheckoutButton() {

		driver.findElement(By.id("top-cart-btn-checkout")).click();
	}

	public void typeInEmailTextField(String email) {

		driver.findElement(By.id("customer-email")).sendKeys(email);

	}

	public void typeInFirstNameTextField(String name) {

		driver.findElement(By.name("firstname")).sendKeys(name);

	}

	public void typeInLastNameTextField(String name) {

		driver.findElement(By.name("lastname")).sendKeys(name);

	}

	public void typeInCompanyTextField(String name) {

		driver.findElement(By.name("company")).sendKeys(name);

	}

	public void typeInStreetAddressTextField(String address) {

		driver.findElement(By.name("street[0]")).sendKeys(address);

	}

	public void typeInCityTextField(String city) {

		driver.findElement(By.name("city")).sendKeys(city);

	}

	public void typeInPostCodeTextField(String postCode) {

		driver.findElement(By.name("postcode")).sendKeys(postCode);

	}

	public void selectCountry(String country) {
		Select countryMenue = new Select(driver.findElement(By.name("country_id")));
		countryMenue.selectByVisibleText(country);
	}

	public void typeInPhoneNumberTextField(String phoneNumber) {

		driver.findElement(By.name("telephone")).sendKeys(phoneNumber);

	}

	public void clickCartNextButton() {

		driver.findElement(By.cssSelector("[data-role=\"opc-continue\"]")).click();
	}

	public void clickPlaceOrderButton() {
		driver.findElement(By.cssSelector("[class=\"action primary checkout\"]")).click();
	}

	public String PrintOrderNumber() {
		String orderNumber = driver.findElement(By.cssSelector(".checkout-success span")).getText();
		System.out.println("Order number is: " + orderNumber);
		return orderNumber;
	}

}
