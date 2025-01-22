module es.iesclaradelrey.da2d1e2425.prueba {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.web;

    requires org.controlsfx.controls;
    requires com.dlsc.formsfx;
    requires net.synedra.validatorfx;
    requires org.kordamp.ikonli.javafx;
    requires org.kordamp.bootstrapfx.core;
    requires eu.hansolo.tilesfx;
    requires com.almasb.fxgl.all;

    opens es.iesclaradelrey.da2d1e2425.prueba to javafx.fxml;
    exports es.iesclaradelrey.da2d1e2425.prueba;
}