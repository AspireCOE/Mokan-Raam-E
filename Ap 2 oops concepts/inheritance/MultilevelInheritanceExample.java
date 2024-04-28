package inheritance;

class Animal {
    public void eat() {
        System.out.println("Animal is eating...");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.println("Dog is barking...");
    }
}

class Labrador extends Dog {
    public void color() {
        System.out.println("Labrador is golden in color.");
    }
}

// Main class
public class MultilevelInheritanceExample {
    public static void main(String[] args) {
        Labrador labrador = new Labrador();
        labrador.eat();   // Inherited from Animal class
        labrador.bark();  // Inherited from Dog class
        labrador.color(); // Specific to Labrador class
    }
}

