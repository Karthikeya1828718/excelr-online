
public class PrimeNumber {

    public static void main(String[] args) {
        int n = 12;
        int count = 0;
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                count++;
                break;
            }
        }
        if (count == 0) {
            System.out.println(n + "is a prime"); 
        }else {
            System.out.println(n + "is not  a prime");
        }

    }
}
/**
 *
 * prime numbers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
 * 59, 61, 67, 71, 73, 79, 83, 89, 97 - the number have only 2 factors - 1 and
 * itself - factor program
 *
 */
