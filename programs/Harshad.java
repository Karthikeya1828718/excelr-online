
public class Harshad {

    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            int num = i;
            int temp = num;
            int sum = 0;
            while (num > 0) {
                int digit = num % 10;
                sum += digit;
                num /= 10;
            }
            if (temp % sum == 0) {
                System.out.println(temp + " is a Harshad number");
            }

        }
    }
}
