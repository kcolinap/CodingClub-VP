package runnerFiles;

/**
 * Created by kcolina on 22/03/2017.
 */
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "src/test/java/features/Game/",glue = "stepDefs",tags = {"~@ignore"},
        plugin = {"pretty","json:Automation Reports/Latest Results/Json Reports/Test.json","html:Automation Reports/Latest Results/Html Reports/Game"})
public class Regression_Core_Game extends AbstractTestNGCucumberTests {
}
