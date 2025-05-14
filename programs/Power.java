
import java.util.Scanner;

public class Power {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the number");
        int number = sc.nextInt();
        System.out.println("enter the power");
        int power = sc.nextInt();
        int out=1;
        for(int i=1;i<=power;i++){
            out=out*number;
        }
        System.out.println(out);

    
    }

}
