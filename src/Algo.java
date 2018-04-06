import java.io.IOException;

public class Algo {

	
	/**
	 * Factoriel 
	 * @param integer n
	 */
	public static  void  factoriel(int n) 
	{
		int incfac=0;
		int fac=1;
		while(incfac<n)
		{
			incfac=incfac+1;
			fac=fac*incfac;	
			System.out.println("***************************************************************************"); 
	        System.out.println(n+"!="+fac); 
		}	
	}
	
	/**
	 * permuter 
	 * @param array t, int i , int j
	 */
	public static void permuter(int[]t, int i, int j) {
           
		 int a = t[i];   
		 t[i]=t[j];     
     	 t[j]= a;      
     	 
     	 for(int k=0;i<t.length;k++) 
     	 {	
 		          System.out.println(t[k]); 
     	 }
	}
	public static void main (String[] args ) throws IOException 
	{
		int[] t={4,3,6,1,2,8};
	
		 //permuter(t, 0, 3);
    
		// Trie a bulles 
        
        for(int k=1;k<t.length;k++) 
   	      {	
        	if(t[k-1]>t[k])
        	{
              // permuter(t, k-1, k);      
        	}      	
   	     }
        factoriel(4);
	}
}
