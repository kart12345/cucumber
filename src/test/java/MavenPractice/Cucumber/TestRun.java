package MavenPractice.Cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin ={"pretty" , "html:target/CucumberReports"},
		features = "src/test/java/Feature",
		glue={"stepdefinition"}
		)
public class TestRun {

}
