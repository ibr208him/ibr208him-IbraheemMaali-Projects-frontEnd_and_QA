package appiumTask;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URI;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class appiumTesting extends Constants {

	Actions Action = new Actions();
	Assertions Assertion = new Assertions();
	String num1;
	String num2;

	@BeforeTest
	public void setup() {

		caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Maali2");
		caps.setCapability(MobileCapabilityType.APP,
				System.getProperty("user.dir") + File.separator + "app" + File.separator + "calculator.apk");
	}

	@Test(description = "addTwoNumbers", enabled = true)
	public void addTwoNumbers() throws MalformedURLException {

		var appiumServerUrl = URI.create("http://127.0.0.1:4723/wd/hub").toURL();
		driver = new AndroidDriver(appiumServerUrl, caps);

		Action.addTwoNumbers("5", "3");
		Assertion.assertCalculator("8");

		Action.addTwoNumbers("2.2", "6.258");
		Assertion.assertCalculator("8.458");

	}

	@Test(description = "subtractTwoNumbers", enabled = false)
	public void subtractTwoNumbers() throws MalformedURLException {

		var appiumServerUrl = URI.create("http://127.0.0.1:4723/wd/hub").toURL();
		driver = new AndroidDriver(appiumServerUrl, caps);

		Action.subtractTwoNumbers("5", "3");
		Assertion.assertCalculator("2");

		Action.subtractTwoNumbers("8.2", "6.258");
		Assertion.assertCalculator("1.942");

	}

	@Test(description = "multiplyTwoNumbers", enabled = false)
	public void multiplyTwoNumbers() throws MalformedURLException {

		var appiumServerUrl = URI.create("http://127.0.0.1:4723/wd/hub").toURL();
		driver = new AndroidDriver(appiumServerUrl, caps);

		Action.multiplyTwoNumbers("5", "3");
		Assertion.assertCalculator("15");

		Action.multiplyTwoNumbers("8.2", "6.258");
		Assertion.assertCalculator("51.3156");
	}
	
	@Test(description = "square root", enabled = false)
	public void sqrt() throws MalformedURLException {

		var appiumServerUrl = URI.create("http://127.0.0.1:4723/wd/hub").toURL();
		driver = new AndroidDriver(appiumServerUrl, caps);

		Action.sqrt("4");
		Assertion.assertCalculator("2");
	}

	@Test(description = "powerOfTwoNumbers", enabled = false)
	public void powerOfTwoNumbers() throws MalformedURLException {
		
		var appiumServerUrl = URI.create("http://127.0.0.1:4723/wd/hub").toURL();
		driver = new AndroidDriver(appiumServerUrl, caps);

		num1="4";
		num2="2";
		Action.powerOfTwoNumbers(num1, num2);
		Assertion.assertCalculator("16");
	}

	@Test(description = "factorial", enabled = false)
	public void factorial() throws MalformedURLException, InterruptedException {
		
		var appiumServerUrl = URI.create("http://127.0.0.1:4723/wd/hub").toURL();
		driver = new AndroidDriver(appiumServerUrl, caps);
		
		num1="5";
		Action.factorial(num1);
		Assertion.assertFactorial(num1);

	}

	@AfterTest
	public void myAfter() {
	// driver.close();

	}

}
