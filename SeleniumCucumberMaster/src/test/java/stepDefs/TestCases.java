package stepDefs;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.Map;

import com.googlecode.totallylazy.collections.ListMap;
import org.apache.velocity.runtime.directive.Break;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.vpcodingclub.constants.WebDriverTest;
import org.openqa.selenium.WebElement;
import stepDefs.BrowserSetUpAndTearDown;
import cucumber.api.java.en.*;


import static org.testng.Assert.assertEquals;


public class TestCases extends WebDriverTest {

    private WebDriver driver;

    public TestCases(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }
    
//###########################################################################################\
@Given("^Navego a gamedb$")
public void navego_a_gamedb() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   try{
       driver.get("http://gamedb2.herokuapp.com/");
       Thread.sleep(2000);
   }catch (Exception e){
       e.printStackTrace();
   }
}

    @Given("^entro a Login$")
    public void entro_a_Login() throws Throwable {
        try{
            driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[2]/a")).click();
            Thread.sleep(1500);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    //Caso de feature Login
    @When("^Ingreso como \"([^\"]*)\" , \"([^\"]*)\" y valido \"([^\"]*)\"$")
    public void ingreso_como_y_valido(String email, String pass, String condicion) throws Throwable {
        try{
            WebElement txtEmail, txtPass, etiqueta;
            txtEmail = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/input"));
            txtEmail.sendKeys(email);
            Thread.sleep(800);

            txtPass= driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/input"));
            txtPass.sendKeys(pass);
            Thread.sleep(1000);

            //Click login
            WebElement btnLogin;
            btnLogin = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[4]/button"));
            //System.out.println(driver.getCurrentUrl()+"  handled antes de login "+driver.getWindowHandle());
            btnLogin.click();


            //Validar accion
            switch (condicion){
                case ("EmailBad"):
                    System.out.println("");
                    System.out.println("");
                    System.out.println("***********************************************************");
                    System.out.println("***********************************************************");
                    System.out.println("EJECUTANDO CASO 1. CONDICION: "+condicion);
                    etiqueta=driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/p[2]"));
                    if (etiqueta.isDisplayed()){
                        System.out.println(etiqueta.getText()+" - Caso exitoso");
                    }
                    System.out.println("FINALIZANDO CASO 1. CONDICION: "+condicion);
                    System.out.println("***********************************************************");
                    System.out.println("***********************************************************");
                    System.out.println("");
                    System.out.println("");
                    Thread.sleep(4000);
                    break;
                case ("PassBad"):
                    System.out.println("");
                    System.out.println("");
                    System.out.println("***********************************************************");
                    System.out.println("***********************************************************");
                    System.out.println("EJECUTANDO CASO 2. CONDICION: "+condicion);
                    etiqueta=driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/div[3]/p[3]"));
                    if (etiqueta.isDisplayed()){
                        System.out.println(etiqueta.getText()+" - Caso exitoso");
                    }
                    System.out.println("FINALIZANDO CASO 2. CONDICION: "+condicion);
                    System.out.println("***********************************************************");
                    System.out.println("***********************************************************");
                    System.out.println("");
                    System.out.println("");
                    Thread.sleep(4000);
                    break;
                case ("correcto"):
                    WebElement etq1, etq2;
                    Thread.sleep(1000);
                    try{

                        etq1 = driver.findElement(By.xpath("//*[@id=\"navbar-main\"]/ul[1]/li[3]/a"));
                        etq2 = driver.findElement(By.xpath("//*[@id=\"navbar-main\"]/ul[2]/li[3]/p"));
                        System.out.println("");
                        System.out.println("");
                        System.out.println(etq1.getText());
                        System.out.println(etq2.getText());
                        System.out.println("***********************************************************");
                        System.out.println("***********************************************************");
                        System.out.println("EJECUTANDO CASO 3. CONDICION: "+condicion);
                        if (etq1.isDisplayed() && etq2.isDisplayed()){
                            System.out.println("Felicidades, ha iniciado sesion correctamente, caso exitoso");
                        }else{
                            System.out.println("Usted no ha iniciado sesion. Caso fallido");
                        }
                        System.out.println("FINALIZANDO CASO 3. CONDICION: "+condicion);
                        System.out.println("***********************************************************");
                        System.out.println("***********************************************************");
                        System.out.println("");
                        System.out.println("");
                        Thread.sleep(4000);
                    }catch (Exception e){
                        e.printStackTrace();
                    }
                    break;
            }


        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^Entro a la seccion Games$")
    public void entro_a_la_seccion_Games() throws Throwable {
       try{
           WebElement btnGame;
           btnGame = driver.findElement(By.xpath("html/body/navbar/div/div/div[2]/ul[1]/li[3]/a"));
           btnGame.click();
           Thread.sleep(1500);
       }catch (Exception e){
           e.printStackTrace();
       }
    }

   /* @Then("^Ingreso \"([^\"]*)\" , \"([^\"]*)\" and \"([^\"]*)\"$")
    public void ingreso_and(String gameName, String platform, String genre) throws Throwable {
       try {
           WebElement txtGameName, txtPlatform, txtGenre;

           txtGameName = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[1]/input"));
           txtGameName.sendKeys(gameName);
           Thread.sleep(800);

           txtPlatform = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[2]/input"));
           txtPlatform.sendKeys(platform);
           Thread.sleep(800);

           txtGenre = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[3]/input"));
           txtGenre.sendKeys(genre);
           Thread.sleep(1000);
       }catch (Exception e){
           e.printStackTrace();
       }
    }*/

   /* @Then("^Click agregar$")
    public void click_agregar() throws Throwable {
        try {
            WebElement btnAgregar;
            btnAgregar = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[4]/button"));
            btnAgregar.click();
            Thread.sleep(1500);

            //Valido agregado
            if ((driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr/td[7]/button[1]")).isDisplayed()) &&
                    (driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr/td[7]/button[2]")).isDisplayed())){
                System.out.println("");
                System.out.println("");
                System.out.println("***********************************************************");
                System.out.println("***********************************************************");
                System.out.println("Juego agregado exitosamente");
                System.out.println("***********************************************************");
                System.out.println("***********************************************************");
            }else{
                System.out.println("");
                System.out.println("");
                System.out.println("***********************************************************");
                System.out.println("***********************************************************");
                System.out.println("Error agregando juego");
                System.out.println("***********************************************************");
                System.out.println("***********************************************************");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }*/

    @Given("^Ingreso con un usuario registrado:$")
    public void ingreso_como_user_registrado(List<Map<String,String>> arg1) throws Throwable {
        try{
            String email = arg1.get(0).get("user");
            String pass = arg1.get(0).get("pass");
            WebElement txtEmail, txtPass, btnIngresar;

            txtEmail = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/input"));
            txtEmail.sendKeys(email);
            Thread.sleep(800);

            txtPass= driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/input"));
            txtPass.sendKeys(pass);
            Thread.sleep(800);

            btnIngresar=driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[4]/button"));
            btnIngresar.click();
            Thread.sleep(1000);

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^Escribo los datos del juego:$")
    public void escribo_los_datos_del_juego(List<Map<String,String>> arg1) throws Throwable {
        try {

            WebElement txtGameName, txtPlatform, txtGenre, btnAgregar;
            String name, platform, genre;

            name = arg1.get(0).get("Name");
            platform = arg1.get(0).get("Plattform");
            genre = arg1.get(0).get("Genre");

            txtGameName = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[1]/input"));
            txtGameName.sendKeys(name);
            Thread.sleep(800);

            txtPlatform = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[2]/input"));
            txtPlatform.sendKeys(platform);
            Thread.sleep(800);

            txtGenre = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[3]/input"));
            txtGenre.sendKeys(genre);
            Thread.sleep(1000);

            btnAgregar = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[4]/button"));
            btnAgregar.click();
            Thread.sleep(1500);

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^Valido si hay juego registrado con accion <(\\d+)>:$")
    public void valido_si_hay_juego_registrado_con_accion(int opc) throws Throwable {
        try{
            WebElement table = driver.findElement(By.className("table-striped"));
            List<WebElement> filas = table.findElements(By.className("ng-scope"));

            if(filas.size()>0){
                switch (opc){
                    case 1:
                        Accion(opc, filas.size());
                        break;
                    case 2:
                        Accion(opc,filas.size());
                        break;
                    default:
                        break;
                }
            }else{
                System.out.println("No ha registrado juegos");
            }

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void Accion(int opc, int nroFilas){
        try {
            WebElement btnAccion, txtGame, btnSave;
            String nombreJuego="";

            switch (opc)   {
                case 1:
                    for (int i=0; i< nroFilas; i++){
                        nombreJuego = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr["+(i+1)+"]/td[1]")).getText();
                        btnAccion = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr[" + (i + 1) + "]/td[7]/button[1]"));
                        btnAccion.click();
                        Thread.sleep(900);
                        txtGame = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr["+(i+1)+"]/td[2]/input"));
                        txtGame.clear();
                        Thread.sleep(200);
                        txtGame.sendKeys("Modificando juego: " + nombreJuego);
                        nombreJuego="";
                        Thread.sleep(300);
                        btnSave = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr["+(i+1)+"]/td[8]/button[1]"));
                        btnSave.click();
                        Thread.sleep(1000);
                    }

                    System.out.println("");
                    System.out.println("Nombre de juegos modificados de manera exitosa");
                    System.out.println("");
                    break;
                case 2:
                    for (int i=nroFilas; i> 0; i--) {
                        nombreJuego = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr["+i+"]/td[1]")).getText();
                        btnAccion = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[1]/tr["+i+"]/td[7]/button[2]"));
                        btnAccion.click();
                        Thread.sleep(400);
                        System.out.println("Eliminando juego: "+nombreJuego);
                    }
                    System.out.println("");
                    System.out.println("Juegos eliminados de manera exitosa");
                    System.out.println("");
                    break;
                default:
                    break;
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }

}