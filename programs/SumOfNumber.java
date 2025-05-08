
public class SumOfNumber {

    public static void main(String[] args) {
        int a = 726;
        int sum = 0;
        while (a > 0) {
            int rem = a % 10;
            sum += rem;
            a /= 10;

        }
        System.out.println(sum);

    }
}

/**
 * product of a number
 * reverse of a number  if input : 124  output : 421
 */