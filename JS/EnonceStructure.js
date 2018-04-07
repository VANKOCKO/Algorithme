
/**
 *      Auteur : van kocko 
 *      Date: 06-04-2018  
 */


                /**
                 *    Theorie 
                 */

/**
 * Chapitre :   Enonce composee et Enonce de choix 
 *   
 * 
 *  Enonce composee 
 * Structure algo
 * 
 *      debut E1,E2,E3
 *              
 *      fin  
 *
 * Regle de deduction 
 * 
 *    si {P} => {P1} E1 => {Q1} => {P2} E2 => {Q2}............ {Pn} En => {Qn} =>{Qn}
 *    alors 
 *    {P} debut {P1} E1 {Q1} {P2} E2 {Q2}.........{Pn} En {Qn} => Q 
 * 
 * Enonce de choix 
 * 
 * Structure algo
 *  
 * 
 *     debut
 *        
 *         choix expr parmi
 *             val1:E1
 *             val2:E2
 *             .
 *             .
 *             .
 *             valn:En 
 *         fin choix  
 *     fin 
 * 
 *     Exemple 
 *     debut 
 *           
 *            choix couleur du feux parmi
 *                   rouge: s'arreter 
 *                   vert: passe 
 *                   orange:s'arreter si possible si non passer  
 *            finchoix
 *     fin  
 * 
 *  Enonce de si
 *  
 *  algo 
 *    
 *      debut 
 *       
 *           choix mon salaire augmente parmi
 *                
 *                vrai : je reste
 *                faux: je change 
 *  
 *           finchoix  
 *      fin
 *   
 *   autre formulation 
 *  
 *   debut   
 * 
 *      si mon salaire augmmente
 *          alors je reste 
 *          sinon je part 
 *      finsi
 * 
 *   fin     
 *
 */


                /**
                 *    Pratique 
                 */

function FeuxDeRoute(){
        couleurDuFue=
        [ 
            rouge = "arreter",
            vert ="avancer",
            orange="avancer ou arreter"
        ];
         console.log(couleurDuFue);
        switch(couleurDuFue)
        {
            case 1:rouge; break;
            case 2:avancer;break;
            case 3:orange; break;
        }
}

FeuxDeRoute();


/**
 *    Resolution d'une equation du second degre 
 *     
 *             y= ax^{2}+bx+c
 *             delta= b^{2}- 4ac  
 *            si delta positif => delta > 0 
 *               
 *                 racine 1 = -b + sqrt(delta) / 2a
 *                 racine 2 = -b - sqrt(delta) / 2a
 *           
 *   algo 
 * 
 *   debut 
 * 
 *      variables  
 *            a,b,c,delta,racine1,racine2 type reel 
 *            delta <-(b*b) - (4*a*c) 
 * 
 *      si delta > 0
 *          
 *            si b > 0
 *                 alors  racine 1 <- -b + sqrt(delta) / 2*a
 *            sinon 
 *                 alors racine 2 <-  b + sqrt(delta) / 2*a
 *            finsi
 *         
 *      sinon  
 *          racine complexe 
 *      finsi 
 *   fin 
 * 
 */


 

 function EquationDuSecondegre(a,b,c)
 {           
              var racine,delta,racine1,racine2;
              delta =(b*b) - (4*a*c);
              if(delta == 0)
              { 
                racine  = -b/2*a
                console.log( "delta = " + delta + " et  "+ "racine = "+ racine);
              }
              if(delta>0)
              {  
                   if(b>0)
                   {
                    racine1 = -b + sqrt(delta) / 2*a ;
                    console.log("delta"+delta + " et  "+ +"racine1"+ racine1);
                   }
                   else{
                    racine2  = -b - sqrt(delta) / 2*a ;
                    console.log("delta"+delta + " et " + "racine2"+ racine2);
                    }
              } 
              if(delta < 0)
              {
                console.log("delta ="+delta+"delta negatif racine complexe ");
              }
            
 }

EquationDuSecondegre(2,3,4);




                /**
                 *    Exerice et correction 
                 */

  /**
   * Exercice 1. 
   * On possède un compte bancaire avec un solde positif. 
   * On veut écrire un programme qui lit une opération représentée par un caractère,
   * 'd' pour dépôt ou 'r' pour retrait, ainsi qu'un entier positif qui indique la somme à transférer.
   *  Dans le cas d'un retrait, la somme à transférer devra être nécessairement inférieure au solde. 
   * Si l'opération a pu aboutir, on écrit le nouveau solde.
   **/

   /**
    *  Solution
    */

    soldActuel=1500;

    function retrait(retrait)
    {      
           var retrait;
           if(retrait > soldActuel)
             {
               console.log("retrait impossible");
             }
             else{
                 soldActuel = soldActuel - retrait;
                 console.log("r");
                 console.log("solde : "+soldActuel);
             }
    }
    function depot(depot){
         soldActuel=soldActuel + depot;
         console.log("d");
         console.log("solde : "+soldActuel);
    }
   depot(200);
   retrait(300);
  
   


