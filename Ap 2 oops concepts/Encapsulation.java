public class Encapsulation {
    private String name;
    private int age;
    private String address;

    public Encapsulation(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0 && age < 150) { // Validate age (assuming realistic age range)
            this.age = age;
        } else {
            System.out.println("Invalid age. Age must be between 1 and 149.");
        }
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
    }

    public static void main(String[] args) {

        Encapsulation student = new Encapsulation("Lingamoorthy", 24, "123 salem");

        System.out.println("Student Information:");
        student.displayInfo();

        student.setName("Mokan Raam");
        student.setAge(22);
        student.setAddress("155/ff2 Trichy");

        System.out.println("\nUpdated Student Information:");
        student.displayInfo();
    }
}