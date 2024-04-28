abstract class Car {
    private String model;
    private String color;

    public Car(String model, String color) {
        this.model = model;
        this.color = color;
    }

    public abstract void start();

    public abstract void stop();

    public void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
    }
}

class Sedan extends Car {
    public Sedan(String model, String color) {
        super(model, color);
    }

    public void start() {
        System.out.println("Starting Sedan...");
    }

    public void stop() {
        System.out.println("Stopping Sedan...");
    }
}

class SUV extends Car {
    public SUV(String model, String color) {
        super(model, color);
    }

    public void start() {
        System.out.println("Starting SUV...");
    }

    public void stop() {
        System.out.println("Stopping SUV...");
    }
}

public class Abstraction {
    public static void main(String[] args) {

        Car sedan = new Sedan("Toyota", "Silver");
        sedan.displayInfo();
        sedan.start();
        sedan.stop();

        System.out.println(); // Blank line for separation

        Car suv = new SUV("Ford", "Black");
        suv.displayInfo();
        suv.start();
        suv.stop();
    }
}