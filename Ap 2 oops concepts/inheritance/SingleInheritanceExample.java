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

// Main class
public class SingleInheritanceExample {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // Inherited from Animal class
        dog.bark();  // Specific to Dog class
    }
}
