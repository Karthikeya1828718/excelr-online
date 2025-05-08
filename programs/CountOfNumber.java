public class CountOfNumber {
    
    public static void main(String[] args) {
        int input=456789;
        int count=0;
        if(input==0){
            System.out.println(1);
        }
        while(input>0){
            int rem=input%10;
            count++;
            input=input/10;
        }
        System.out.println(count);
    }
}
