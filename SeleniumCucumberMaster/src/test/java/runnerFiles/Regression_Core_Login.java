package runnerFiles;

/**
 * Created by kcolinap on 20/03/17.
 */
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "src/test/java/features/Login/",glue = "stepDefs",tags = {"~@ignore"},
        plugin = {"pretty","json:Automation Reports/Latest Results/Json Reports/Test.json","html:Automation Reports/Latest Results/Html Reports/Login"})
public class Regression_Core_Login extends AbstractTestNGCucumberTests {
}
