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
 *  n! =1*(i+1)*............*n 
  * Function : factoriel
  * 
  * @param n integer
  */

function factoriel(n){
           
    var i = 0;
    var fact=1;
    while(i<n){
        i=i+1;
        fact=fact*i;    
    }
    return fact;
}

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

     function Division(a,b)
     {
         var rest=a;
         var quotient=0;
         while(rest >= b)
         {        
            quotient = quotient + 1;
            // { a = quotient * b + rest - b  }
            rest = rest - b;
         }
         return quotient;
     }

     var a=4;
     var b=2;
     var resultDiv= Division(a,b);
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
      * {Antécédent : x = alpha, y = beta}
      * {Conséquent : produit = x * y = alpha * beta}
      * 
      *  debut 
      * 
      *      fonction multiplication(Donnee x,y : naturel) :naturel
      *           variable p : naturel 
      *           p <- 0
      *           {alpha  * beta = p + x * y}
      *           tantque y > 0 faire
      *               {alpha  * beta = p + x * y  et y > 0 }
      *               tantque y est paire faire  
      *                   {alpha  * beta = p + x * y  et y = (y/2) * 2 > 0 }
      *                   {alpha  * beta = p + 2x * (y/2)  et y = (y/2) * 2 > 0 }
      *                   y<-y/2
      *                   {alpha  * beta = p + 2x * y  et y = (y/2) * 2 > 0 } 
      *                   {alpha  * beta = p + x * y }
      *                   x<-2*x
      *                   {alpha  * beta = p + x * y}
      *               fintantque 
      *               {alpha  * beta = p + (x-1) * y + y  et y > 0 et y impair }
      *               p<-p+x
      *               {alpha  * beta = p + x * y-1  et y impair }
      *               y<-y-1
      *               {alpha  * beta = p + x * y}
      *           fintantque
      *           {y = 0 et alpha * beta = p + x * y = p }
      *           rendre p 
      *      finfonction {multiplication}
      *  fin 
      */


       function multiplication(x,y) {

             var p = 0;

             while(y>0)
             {
                 while(y % 2 == 0)
                 {
                     y = y /2;
                     x= 2 * x;                      
                 }
                 p=p+x;
                 y=y-1;
             }
             return p;           
       }

      var ResMulti=multiplication(2,4);
      console.log(ResMulti);

 /**
      * Exemple sur les puissances 
      * 
      * {Antécédent : x = alpha, y = beta}
      * {Conséquent : puissance = x^{y} = alpha^{beta}}
      *   
      * debut 
      * 
      *        fonction puissance(donnee: x, y : naturel) : naturel
      *           
      *            p<-1
      *            {alpha^{beta} = p * x^{y} }
      *            tantque y > 0 faire 
      *                {alpha^{beta} = p * x^{y}}
      *         
      *        finfonction
      * fin
      * 
      **/
     
      function puissance(x,y) 
      {
             var p=1;
             while(y>0)
             {
                while(y % 2 == 0)
                {
                    y=y/2;
                    x=x*x;
                }
                p=p*x;
                y=y-1;
             }
             return p;
      }
     var ResulPuiss=puissance(2,3);
     console.log(ResulPuiss); 
    


                  /**
                 *   Exercice corrigee 
                 */


/**
 *   Exercice 1 
 * 
 *  Sinus(x)=x - x^{3}/3! + x^{5}/5! - x^{7}/7! + .......... 
 */

 /**
  *    appelant chaque fonction que nous avons cree 
  */

function sinus(x) 
{
    var n = 10;
    var res=0;
    while(n>0)
    { 
        for(var i=0;i<=n;i++)
        {
           res=res + multiplication(puissance(-1,i),puissance(x,2*i+1)) / factoriel(2*i+1);            
        }
        n=n-1;
        return res;
    }

}
var Ressinus = sinus(3);
console.log(" sinus = " + Ressinus);

                
/**
 *   Exericice 2 carre(n)
 *   
 *   n^2
 * 
 * Astuce : (n+1)^2=n^2+2*n+1 
 * 
 */

 