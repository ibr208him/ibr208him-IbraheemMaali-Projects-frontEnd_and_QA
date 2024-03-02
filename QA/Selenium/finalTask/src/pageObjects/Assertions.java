package pageObjects;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Assertions extends Actions {

	public void verifyOrderIsPlaced(String currentDriver) {

		String placingOrderMessage = driver.findElement(By.cssSelector("[data-ui-id=\"page-title-wrapper\"]")).getText();
		Assert.assertEquals(placingOrderMessage, "Thank you for your purchase!");

		String placingOrderMessage2 = driver.findElement(By.cssSelector(".checkout-success p:nth-of-type(2)")).getText();
		Assert.assertEquals(placingOrderMessage2,"We'll email you an order confirmation with details and tracking info.4");
	}

}
