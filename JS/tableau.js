/**
 *      Auteur : van kocko 
 *      Date: 06-04-2018  
 */


                /**
                 *    Theorie 
                 */

/**
 * Chapitre :   tableau
 * 
 * 
 * 
 * Algorithme de rechercher lineaire 
 * 
 * 
 *    {Antecedent : x entier a rechercher dans le tableau tab }
 *    {Consequent : renvoie x appartient a tab }
 *    
 *    debut 
 *      
 *        fonction rechercheTab(donnee x : naturel) : naturel
 *             
 *    fin
 */

function MoyTab()
{
        var tab = [1,2,3,4];
        var somme=0;
        var taille = tab.length;
        var moy;
        for(var i=0;i<=taille;i++)
        {
          somme=somme + tab[i];
        }
        moy=somme/taille;
        return moy;
 }
 var ResMoy = MoyTab();
 console.log("Moyenne :" + ResMoy);



 
