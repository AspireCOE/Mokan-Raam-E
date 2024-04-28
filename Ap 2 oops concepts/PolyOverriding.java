
class Vehicle {

    public void displayInfo() {
        System.out.println("This is a vehicle.");
    }
}


class Car extends Vehicle {
   

    public void displayInfo() {
        System.out.println("This is a car.");
    }

    public void start() {
        System.out.println("Car is starting...");
    }
}

class Motorcycle extends Vehicle {

    public void displayInfo() {
        System.out.println("This is a motorcycle.");
    }

    public void accelerate() {
        System.out.println("Motorcycle is accelerating...");
    }
}

public class PolyOverriding {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        Car car = new Car();
        Motorcycle motorcycle = new Motorcycle();

        vehicle.displayInfo();      // Output: "This is a vehicle."
        car.displayInfo();          // Output: "This is a car."
        motorcycle.displayInfo();   // Output: "This is a motorcycle."

        System.out.println(); // Blank line for separation

        Vehicle vehicle1 = new Car();         // Vehicle reference, Car object
        Vehicle vehicle2 = new Motorcycle();  // Vehicle reference, Motorcycle object

        vehicle1.displayInfo();  // Output: "This is a car." (Runtime polymorphism)
        vehicle2.displayInfo();  // Output: "This is a motorcycle." (Runtime polymorphism)

        // vehicle1.start();       // Compilation error: Vehicle reference cannot access start() method
        // vehicle2.accelerate();  // Compilation error: Vehicle reference cannot access accelerate() method
    }
}
