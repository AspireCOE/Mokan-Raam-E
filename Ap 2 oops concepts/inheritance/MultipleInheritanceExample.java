package inheritance;

interface Flying {
    void fly();
}

interface Swimming {
    void swim();
}

class Bird implements Flying, Swimming {
    public void fly() {
        System.out.println("Bird is flying...");
    }

    public void swim() {
        System.out.println("Bird is swimming...");
    }
}

// Main class
public class MultipleInheritanceExample {
    public static void main(String[] args) {
        Bird bird = new Bird();
        bird.fly();   // Implements Flying interface
        bird.swim();  // Implements Swimming interface
    }
}

