public class ElseIfLadder {   
    public static void main(String[] args) {
        int age=29;
        //child age 0-12
        //teen age  13-19
        //adult age 20-50
        //senior citizen age 50-150
        if(age>=0 && age<=12){
            System.out.println("child");
        }
        else if(age>=13 && age<=19){
            System.out.println("teen");
        }
        else if(age>=20 && age<=50){
            System.out.println("adult");
        }
        else if(age>=51 && age<=150){
            System.out.println("senior citizen");
        }
        else{
            System.out.println("reached to god");
        }





    }
}
