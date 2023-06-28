public class Human{
    String gender;
    int age;
    String name;

    Human(String gender,int age,String name){
        this.gender=gender;
        this.age=age;
        this.name=name;
    }
    public void display(){
        System.out.println(this);
    }
}

public class Student{
    Human human;
    int roll_no;
    int grad_year;

    Student(String gender,int age,String name,int roll_no,int grad_year){
        human = new Human(gender,age, name);
        this.roll_no=roll_no;
        this.grad_year=grad_year;

    }
    public Human getHuman() {
        return human;
    }
    
    public void display(){
        // super.display();
        System.out.println(this);
    }

}

public class Main{
    public static void main(String[] args) {
        Student s1=new Student("MAle", 22, "raj", 22, 2023);
        s1.display();
        s1.getHuman().display();
    }
}