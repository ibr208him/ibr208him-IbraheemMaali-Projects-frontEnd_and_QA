package appiumTask;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Actions extends Constants {

	public void addTwoNumbers(String a, String b) {
		for (int i = 0; i < a.length(); i++) {

			if (a.charAt(i) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + a.charAt(i))).click();
		}

		driver.findElement(By.id("com.google.android.calculator:id/op_add")).click();

		for (int j = 0; j < b.length(); j++) {
			if (b.charAt(j) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + b.charAt(j))).click();
		}
		driver.findElement(By.id("com.google.android.calculator:id/eq")).click();

	}

	public void subtractTwoNumbers(String a, String b) {
		for (int i = 0; i < a.length(); i++) {

			if (a.charAt(i) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + a.charAt(i))).click();
		}

		driver.findElement(By.id("com.google.android.calculator:id/op_sub")).click();

		for (int j = 0; j < b.length(); j++) {
			if (b.charAt(j) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + b.charAt(j))).click();
		}
		driver.findElement(By.id("com.google.android.calculator:id/eq")).click();

	}

	public void multiplyTwoNumbers(String a, String b) {
		for (int i = 0; i < a.length(); i++) {

			if (a.charAt(i) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + a.charAt(i))).click();
		}

		driver.findElement(By.id("com.google.android.calculator:id/op_mul")).click();

		for (int j = 0; j < b.length(); j++) {
			if (b.charAt(j) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + b.charAt(j))).click();
		}
		driver.findElement(By.id("com.google.android.calculator:id/eq")).click();

	}

	public void sqrt(String a) {
		driver.findElement(By.id("com.google.android.calculator:id/op_sqrt")).click();
		for (int i = 0; i < a.length(); i++) {

			if (a.charAt(i) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + a.charAt(i))).click();
		}

		driver.findElement(By.id("com.google.android.calculator:id/eq")).click();

	}

	public void powerOfTwoNumbers(String a, String b) {
		for (int i = 0; i < a.length(); i++) {

			if (a.charAt(i) == '.') {
				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + a.charAt(i))).click();
		}

		driver.findElement(By.id("com.google.android.calculator:id/op_pow")).click();

		for (int j = 0; j < b.length(); j++) {
			if (b.charAt(j) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + b.charAt(j))).click();
		}
		driver.findElement(By.id("com.google.android.calculator:id/eq")).click();

	}

	public void factorial(String a) {
		for (int i = 0; i < a.length(); i++) {

			if (a.charAt(i) == '.') {

				driver.findElement(By.id("com.google.android.calculator:id/dec_point")).click();
				continue;
			}
			driver.findElement(By.id("com.google.android.calculator:id/digit_" + a.charAt(i))).click();
		}
		driver.findElement(By.id("com.google.android.calculator:id/op_fact")).click();
		driver.findElement(By.id("com.google.android.calculator:id/eq")).click();

	}

	public void takeScreenshot() {
		TakesScreenshot myScreenShot = (TakesScreenshot) driver;
		Date currentDate = new Date();
		String currentdate = currentDate.toString().replace(':', '_').replace(" ", "");
		System.out.println(currentdate);

		File source = myScreenShot.getScreenshotAs(OutputType.FILE);
		String destinationPath = System.getProperty("user.dir") + File.separator + "screenshots" + File.separator
				+ currentdate + ".png";
		File finalDestination = new File(destinationPath);

		try {

			FileUtils.copyFile(source, finalDestination);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public int getFactorial(int n) {
		if (n < 0) {
			throw new IllegalArgumentException("Factorial is not defined for negative numbers");
		}
		int result = 1;
		for (int i = 2; i <= n; i++) {
			result *= i;
		}
		return result;
	}
}
