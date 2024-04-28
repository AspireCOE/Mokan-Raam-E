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

class Cat extends Animal {
    public void meow() {
        System.out.println("Cat is meowing...");
    }
}

// Main class
public class HierarchicalInheritanceExample {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // Inherited from Animal class
        dog.bark();  // Specific to Dog class

        System.out.println();

        Cat cat = new Cat();
        cat.eat();   // Inherited from Animal class
        cat.meow();  // Specific to Cat class
    }
}

