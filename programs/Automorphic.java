
public class Automorphic {

    public static void main(String[] args) {
        int num = 5;
        int sqr = num * num;
        // String numStr = String.valueOf(num);
        // String sqrStr = String.valueOf(sqr);
        // if (sqrStr.endsWith(numStr)) {
        //     System.out.println(num + " is an automorphic number");
        // }
        boolean isAutomorphic = false;
        int temp=num;
        while (num > 0) {
            int numrem = num % 10;   
            int sqrrem = sqr % 10;
            if (numrem != sqrrem) {
                isAutomorphic = false;
                break;
            } else {
                isAutomorphic = true;
            }
            num /= 10;
            sqr /= 10;
        }
        if (isAutomorphic) {
            System.out.println(temp + " is an automorphic number");
        } 

    }
}
