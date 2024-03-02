package appiumTask;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Assertions extends Constants {
	
    public static int factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial is not defined for negative numbers");
        }
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
	public void assertFactorial(String numberstring) {
		
		if(numberstring.matches("\\d(\\.\\d)")) {
			System.out.println("number should be integer");
		}
		else {
			
			String result = driver.findElement(By.id("com.google.android.calculator:id/result_final")).getText();
			Assert.assertEquals(result, Integer.toString(factorial(Integer.parseInt(numberstring))));
		}
	}



public void assertCalculator(String expectedResult) {
	
	String result = driver.findElement(By.id("com.google.android.calculator:id/result_final")).getText();
	Assert.assertEquals(result,expectedResult);
}


}