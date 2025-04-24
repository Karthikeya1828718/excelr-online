class SmallestNumber{
 public static void main(String[]args){
      int a=20;
      int b=9;
      int c=10;

int smallest=(a>b)? ((b>c)?c:b):   ((a>c)?c:a) ;
System.out.println("the smallest number is "+smallest);




}
}