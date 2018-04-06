
 
 
/**
  * Function :
  * @param n integer
  */

function factoriel(n){
           
        var i = 0;
        var fact=1;
        while(i<n){
            i=i+1;
            fact=fact*i;
            console.log(n+"!="+fact);        
}

 }

factoriel(4);

/**
 *  Algoritme de tri
 */

function permuter(tab, i,j){
        
    var a =tab[i];  // la position i je la recupere dans une variable a
    tab[i]=tab[j];  // la position j je la met dans la position i
    tab[j]=a;       // la position i je la met dans la position j au travers de la variable intermediare a 
    console.log(tab);        
 }

 tab = [1,2,3,4,5,8];
 permuter(tab,1,2);