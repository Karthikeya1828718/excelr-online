class ExtractNumber{
    public static void main(String[] args) {
        int a =13;
	    while(a>0){
	      int rem=a%10;
	      System.out.println(rem);
	      a/=10;
	      
	    }
    }
}

/**
 * 4312
 * 
 * -4
 * -3
 * -1
 * -2
 */