class Program8{

public static void main(String[]args){
  int a=10;
  int b=20;
 boolean value1 =a>b;
 boolean value2 =b>a;
System.out.println(value1);//false
System.out.println(value2);//true
System.out.println("====== not operator =======");
System.out.println(!value2);//false
System.out.println(!value1);//true
System.out.println("====== and operator =======");
System.out.println(value1&&value1);//false&&false --false
System.out.println(value1&&value2);//false&&true --false
System.out.println(value2&&value1);//true&&false --false
System.out.println(value2&&value2);//true&&true --true
System.out.println("====== or operator =======");
System.out.println(value1||value1);//false||false --false
System.out.println(value1||value2);//false||true --true
System.out.println(value2||value1);//true||false --true
System.out.println(value2||value2);//true||true --true
System.out.println("====== logical  operator  task=======");
System.out.println(!true);//false
System.out.println((10>9)&&(9<10));//true
System.out.println((10%2==0)||(10%2==1));//true










}
}


/*
logical operator : used to evaluate boolean expressions
   1.&&(logical and operator)
   2.||(logical or operator)
   3.!(logical not operator)
      !true =false;
      !false=true;



operators:
---------------------------------------------------
arthitmetic  -- +,-,*,/,%
logical      -- &&, || ,!
unary        -- ++a , a++, --a , a--; 
relational   -- > ,< ,==, !=, >= ,<=
assignment   -- += ,-=, *=, /= ,%=
conditional operator/ternary operator
      
*/