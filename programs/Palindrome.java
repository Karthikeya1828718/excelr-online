
class Palindrome {

    public static void main(String[] args) {
        int n = 12345;
        int temp = n;
        int reverse = 0;
        while (n > 0) {
            int rem = n % 10;
            reverse = reverse * 10 + rem;
            n = n / 10;
        }
        if (temp == reverse) {
            System.out.println("palindrome"); 
        }else {
            System.out.println("not palindrome");
        }
    }
}
