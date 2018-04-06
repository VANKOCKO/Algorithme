
/**
 *      Auteur : van kocko 
 *      Date: 06-04-2018  
 */


                /**
                 *    Theorie 
                 */

/**
 * Chapitre 5   Enonce composee et Enonce de choix 
 *   
 * 
 * 5.2.1 Enonce composee 
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
 * 5.2.2 Enonce de choix 
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
 *  5.2.2 Enonce de si
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
              var delta,racine1,racine2;
              discri =(b*b) - (4*a*c);
              
              if(delta>0)
              {  
                   if(b>0)
                   {
                    racine1 = -b + sqrt(delta) / 2*a    
                   }
                   else{
                    racine2  = -b - sqrt(delta) / 2*a
                   }
              } 
              else{
                console.log("delta ="+delta+"delta negatif racine complexe ");
              }
 }

 EquationDuSecondegre(2,4,5);

