package support;

import java.io.File;
import java.io.IOException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.apache.commons.io.FileUtils;

public class ExtentReportClass implements ITestListener, myConstants {

	public static ExtentReports extentReport = new ExtentReports();
	public static ExtentSparkReporter htmlReporter = new ExtentSparkReporter("Reports/myReport.html");
	public static ExtentTest extentTest;

	public static WebDriver driver;
    public static void setDriver(String currentDriver) {
		
		
		if (currentDriver.equalsIgnoreCase("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		} else if (currentDriver.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else if (currentDriver.equalsIgnoreCase("Edge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
	}
}
	
	public void onTestStart(ITestResult result) {
		extentReport.attachReporter(htmlReporter);
		
	}

	public void onTestSuccess(ITestResult result) {
		extentTest.log(Status.PASS, "All Steps are Passed");
	}

	public void onTestFailure(ITestResult result) {
		extentTest.log(Status.FAIL, "Test Fail");
		
		TakesScreenshot myScreenShot = (TakesScreenshot) driver;
		File source = myScreenShot.getScreenshotAs(OutputType.FILE);

		String destinationPath = System.getProperty("user.dir") + File.separator + "screenshots" + File.separator
				+ result.getName() + ".png";

		File finalDestination = new File(destinationPath);

		try {
			FileUtils.copyFile(source, finalDestination);
		} catch (IOException e) {
			e.printStackTrace();
		}

		extentTest.log(Status.FAIL, "Step is fail , see the screenshot please")
				.addScreenCaptureFromPath(destinationPath);
	}

	public void onFinish(ITestContext context) {
		extentTest.log(Status.INFO, "Test Done");
		extentReport.flush();
	}

}
