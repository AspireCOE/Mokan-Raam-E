interface Drawable {
    void draw();
}

class Circle implements Drawable {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }

    public double getRadius() {
        return radius;
    }
}

public class Interface {
    public static void main(String[] args) {
        // Create a Circle object
        Circle circle = new Circle(5.0);

        circle.draw();

        System.out.println("Radius of the circle: " + circle.getRadius());
    }
}