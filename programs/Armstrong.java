
public class Armstrong {

    public static void main(String[] args) {
        int input = 153;
        int originalInput = input;
        int temp = input;
        int count = 0;
        //count of digits in a number
        while (input > 0) {
            count++;
            input = input / 10;
        }

        int sum = 0;

        while (originalInput > 0) {
            int rem = originalInput % 10;
            sum += Math.pow(rem, count);
            originalInput = originalInput / 10;
        }

        if (sum == temp) {
            System.out.println("Armstrong Number"); 
        }else {
            System.out.println("Not Armstrong Number");
        }
    }
}
