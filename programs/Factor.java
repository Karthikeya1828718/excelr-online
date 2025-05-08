
import java.util.Scanner;
class Factor {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                System.out.println(i);
            }
        }
    }
}


/*
 * 
 * 4- 1 2 4
 * 8 - 1 2 4 8
 * 9 - 1 3 9
 * 11 - 1 11
 * 
 * 
 * given number -->n 
 * iterate(loop) - 1 to n 
 * condition : n%i==0
 */
