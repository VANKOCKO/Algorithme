/**
 *      Auteur : van kocko 
 *      Date: 06-04-2018  
 */


                /**
                 *    Theorie 
                 */

/**
 * Chapitre :   Iteratif
 *   
 * 
 *  
 * Structure algo
 *      
 *      iterer)
 * 
 *      debut
 *           
 *          iterer
 *                 E1 
 *                 arret si B 
 *                 E2
 *          finiterer     
 *      fin  
 *
 *     tantque) 
 * 
 *     debut
 *           
 *          tantque  B  
 *              faire  E1 
 *          fintanque     
 *      fin 
 * 
 * 
 *     tantque) 
 * 
 *     debut
 *           
 *          tantque  B  
 *              faire  E1 
 *          fintanque     
 *      fin 
 *  
 * 
 **/

                 /**
                 *   Pratique 
                 */


     /**
      *  Exemple sur minimal et maximal
      *              
      *            Xmin<=val<=Xmax
      */            

      function minmax(n){

            for(var i=0;i<9; i++)
            {
                if(n<=i && n>=i)
                {
                    /**
                     *  Pour un pas de 0.5 
                     */

                     console.log("Valmax de n :"+ (i+1));
                     console.log("Valmin de n :"+ (i-1));
                }
            }
      }
      minmax(8);



      /**
      *  Exemple la division entiere
      *              
      *          pour tout nombre a>=0,b>0, a/b => a=Quotient * b + rest  avec rest>= 0 et rest<b
      */  

     function DivisionEntiere(a,b)
     {
         var rest=a;
         var quotient;
         while(rest >= b)
         {        
            quotient = quotient + 1;
            // { a = quotient * b + rest - b  }
            rest = rest - b;
            console.log(a+"/"+b+"="+quotient);
         }
     }


     DivisionEntiere(4,2);