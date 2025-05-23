public class Abundant {
    public static void main(String[] args) {
         int num=12;//1 2 3 4 6 12
         int sum=0;
         for(int i=1;i<num;i++){
            if(num%i==0){
               sum+=i;
            }
         }
         if(sum>num)
         System.out.println(num+" is an abundant number");
         

    }
}
