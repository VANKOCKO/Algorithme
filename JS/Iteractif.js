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
      *          pour tout nombre 
      *     {Antecedent: a>=0,b>0} 
      *     {Consequent : a=Quotient * b + rest  avec rest>= 0 et rest<b }
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
            return quotient;
         }
     }

     var a=1;
     var b=2;
     var resultDiv= DivisionEntiere(a,b);
     console.log(a+"/"+b+"="+resultDiv);

      /**
      *  Exemple du plus commun diviseur 
      *              
      *     { Antecedent : a>0 et b<0 }
      *     {Consequent : pgcd(a,b)=pgcd(a-b,b)  et a>b 
      *                            =pgcd(a,b-a)   et a<b }
      * 
      * 
      *   debut 
      *    
      *      fonction pgcd(donnees a,b:naturel) : naturel
      * 
      *          tantque a!=b faire 
      *                {   pgcd(a,b) = pgcd(a-b,b) et a>b 
      *                            = pgcd(a,b-a) et a<b }
      *               si a>b alors 
      *
      *                   { pgcd(a,b) = pgcd(a-b,b) et a>b  }
      *                       a <- a - b                                 
      *               sinon 
      *                       b <- b - a
      *                 {pgcd(a,b) = pgcd(b-a,b) et b>a}
      *                 
      *                rendre a  
      *          fintanque 
      *           
      *             { a=b pgcd(a,b)   }
      *      finfonction  
      * 
      *   fin
      */  

      function pgcd(a,b)
      {
          var a,b;
          while(a != b)
          {
              if(a>b)
              {
                  a = a-b;
                  return a; 
              }
              else
              { 
                  b = b-a;
                return b;
              } 
          }
      }

     var res= pgcd(2,4);
     console.log(res);


     /**
      * Exemple sur la multiplication 
      * 
      * {Antécédent : x = alpha, y = omega}
      * {Conséquent : produit = x * y = alpha * omega}
      * 
      *  debut 
      * 
      *      fonction multiplication(Donnee x,y : naturel) :naturel
      *      
      *           variable p : naturel 
      *           p <- 0
      *           {alpha }
      * 
      * 
      *  fin 
      */