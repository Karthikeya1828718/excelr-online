public class VariableProgram {
    static int testValue=10; //global variable
    public static void main(String[] args) {
        int testData=10;//local variable
        System.out.println(testData);
        System.out.println(testValue+" inside method");
    }
    public static void m1(){
        //  System.out.println(testData); //cant access outside of block 
         System.out.println(testValue+" inside another  method");

    }


}
