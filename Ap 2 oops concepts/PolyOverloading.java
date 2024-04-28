
public class PolyOverloading {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public String add(String s1, String s2) {
        return s1 + s2;
    }

    public double multiply(double x, double y) {
        return x * y;
    }

    public double calculateArea(double sideLength) {
        return sideLength * sideLength;
    }

    public double calculateArea(double length, double width) {
        return length * width;
    }

    public String getResult(int num) {
        return "Result: " + num;
    }

    public String getResult(double num) {
        return "Result: " + num;
    }

    public static void main(String[] args) {
        PolyOverloading poly = new PolyOverloading();

        System.out.println("Sum of 5 and 10: " + poly.add(5, 10));

        System.out.println("Sum of 2, 3, and 4: " + poly.add(2, 3, 4));

        System.out.println("Concatenation of 'Hello' and 'World': " + poly.add("Hello", "World"));

        System.out.println("Product of 3.5 and 2.0: " + poly.multiply(3.5, 2.0));

        System.out.println("Area of a square with side length 4.5: " + poly.calculateArea(4.5));

        System.out.println("Area of a rectangle with length 5.0 and width 3.0: " + poly.calculateArea(5.0, 3.0));

        System.out.println(poly.getResult(10));

        System.out.println(poly.getResult(3.14));
    }
}
