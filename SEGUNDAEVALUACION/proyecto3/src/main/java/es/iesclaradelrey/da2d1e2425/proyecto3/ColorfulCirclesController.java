package es.iesclaradelrey.da2d1e2425.proyecto3;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class ColorfulCirclesController {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }
}