//ex1
function sommeDeN(n){
    var s=0;
    var nombre=0;
    while(nombre<=n){
        s= s+nombre;
        nombre++;

    }
    return s;
}
sommeDeN(4);




//ex2

function factorielleDeN(n){
    var s=1;
    var nombre=1;
    while(nombre<=n){
        s= s*nombre;
        nombre++;
        
    }
    return s;
}
factorielleDeN(4);


//ex3

function répéterChaine(chaine, nombre){
    var compteur=1;
    var s="";
    while(compteur<=nombre){
        s=s+chaine;
        compteur++;
        
    }return s;
}
répéterChaine("Hi", 5);  
répéterChaine("dog", 3);

//ex4

function sommeMinÀMax(minimum, maximum){
    
    var s=0;
    while(maximum<=maximum ){
        s= s+minimum;
        minimum++;
        
    }
    return s;
}
sommeMinÀMax(1, 5);
sommeMinÀMax(3, 7);



function sommeMinÀMax(minimum, maximum){
    
    var s=0;
    var compteur=1;
    if(compteur!==minimum){
        compteur++;
    }
    while(compteur>=minimum && compteur<=maximum ){
        
        s= s+compteur;
        compteur++;
        
    }
    return s;
}
sommeMinÀMax(1, 5);
sommeMinÀMax(3, 7);





//ex5

function produitMinÀMax(minimum, maximum){
    
    var s=1;
    var compteur=1;
    if(compteur!==minimum){
        compteur++;
    }
    while(compteur>=minimum && compteur<=maximum ){
        
        s= s*compteur;
        compteur++;
        
    }
    return s;
}
produitMinÀMax(1, 5);
produitMinÀMax(3, 7); 