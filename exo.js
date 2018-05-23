
// VARIABLES

// exo 1

// a <- 5
// b <- 6 
// resultat = a + b

// resultat=11

// exo 2

// a <- 5
// b <- 6 
// c <- 3
// a <- c
// resultat = a * b

// resultat = 30

// exo 3

// a <- "Sim"
// b <- "plon" 
// resultat = a + b

// resultat = Simplon

// exo 4

// a <- "150"
// b <- "368" 
// resultat = a + b

// resultat = "150368"

// exo 5

// A votre tour de nous poser la question. Déclarer plusieurs variables, faites une ou plusieurs opérations et faites-nous devinez le résultat.

// a <- 20

// b <- 20

// c <- "non"

// resultat = a+b+c



// CONDITIONS


// exo 1

// SI 15 < 20 ALORS
//     Affiche("Team Captain America")
// SINON
//     Affiche("Iron Man")
// FINSI

// resultat = "Team Captain America"



// exo 2

// age <- 17
// SI age < 18 ALORS
//     Affiche ("Vous êtes mineur")
// SINON
//     Affiche ("Vous êtes majeur")
// FINSI

// resultat = "Vous êtes mineur"



// exo 3

// age <- 99
// SI age < 18 ALORS
//     Affiche("Vous êtes mineur")
// SINON
//     Affiche("Vous êtes majeur")
// FINSI

// resultat = "Vous êtes majeur"



// exo 4

// animal  <- "chat"
// couleur <- "marron"
// SI animal = "chat" ET couleur = "marron" ALORS
//     Affiche ("C'est mon chat")
// SINON
//     Affiche ("Ce n'est pas mon chat")
// FINSI

// resultat = "C' est mon chat"



// exo 5

// animal  <- "chat"
// couleur <- "blanc"
// SI animal = "chat" ET couleur = "blanc" ALORS
//     Affiche("C'est mon chat")
// SINON
//     Affiche("Ce n'est pas mon chat")
// FINSI

// resultat = "C'est mon chat"



// exo 6

// cadeau  <- "Iphone"
// SI cadeau = "Galaxy S7" OU cadeau = "Galaxy S8" ALORS
//     Affiche("Merci !!! Ca me fait trop plaisir !")
// SINON
//     SI cadeau = "Iphone" ALORS
//         Affiche("Jette moi ça !!!")
//     SINON
//         Affiche("Merci :)")
//     FINSI
// FINSI

// resultat = "Jette moi ça !!!"



// exo 7

// cadeau  <- "Galaxy S7"
// SI cadeau = "Galaxy S7" OU cadeau = "Galaxy S8" ALORS
//     Affiche("Merci !!! Ca me fait trop plaisir !")
// SINON
//     SI cadeau = "Iphone" ALORS
//         Affiche("Jette moi ça !!!")
//     SINON
//         Affiche("Merci :)")
//     FINSI
// FINSI

// resultat = "Merci !!! Ca me fait trop plaisir !"



// exo 8

// Compléter la condition ci-dessous pour afficher C'est mon animal quand l'animal est un chat de couleur gris ou un chien de couleur "marron".

// animal  <- "chien"
// couleur <- "noir"
// SI ..................  ALORS
//     Affiche("C'est mon animal")
// SINON
//     Affiche("Ce n'est pas mon animal")
// FINSI

//       ---------------------------

// animal  <- "chien"
// couleur <- "noir"
// SI (animal = "chat" et couleur = "gris") ou (animal = "chien" et couleur ="marron")  ALORS
//     Affiche("C'est mon animal")
// SINON
//     Affiche("Ce n'est pas mon animal")
// FINSI





// exo 9

// Compléter la condition ci-dessous pour afficher C'est mon animal quand l'animal est un chat de couleur gris ou de couleur marron.

// animal  <- "chien"
// couleur <- "noir"
// SI ..................  ALORS
//     Affiche("C'est mon animal")
// SINON
//     Affiche("Ce n'est pas mon animal")
// FINSI

//   ----------------------------

// animal  <- "chien"
// couleur <- "noir"
// SI (animal = "chat" et couleur ="gris") ou (animal = "chat" et couleur="marron")  ALORS
//     Affiche("C'est mon animal")
// SINON
//     Affiche("Ce n'est pas mon animal")
// FINSI



// BOUCLES

// EXO 1

// Qu'affiche le code ci-dessous

// POUR i<- 0 à 100 PAS 3
//     Afficher(i)
// FINPOUR

// resultat = Cela affichera les nombres de 3 en 3 de 0 à 100.




// exo 2

// boucle <- true
// i <- 0
// TANT QUE boucle = true
//     Afficher(i)
//     i <- i + 1
//     SI i > 10)
//         boucle = false
//     FINSI
// FINPOUR

// resultat = false



// TABLEAU

// d'après la définition du tableau ci-dessous :

// plats <- ["Rougail saucisses", "Rougail la mourue", "Carry bichique", "Carry poulet", "Pain bouchon gratiné", "Samoussas" ]

// EXO 1

// Répondez aux questions suivantes :

//     Quelle est la taille du tableau ?
//     Quelle est l'indice du Rougail saucisse ?
//     Quelle est l'indice du Samoussas ?

// ------------------------

// taille du tableau = 6

// indice du Rougail saucisse = 0

// indice du Samoussas = 5



// exo 2


//     Remplacer l'élément du tableau Pain bouchon gratiné par Pain bouchon gratiné piment mayonnaise
//     Intervertissez les éléments Samoussas et Carry poulet
//     Créer votre propre tableau avec vos plats préférés




// plats[3] <- "Samoussas"
// plats[5] <- "Carry poulet"  

// plats <- ["Rougail saucisses", "Rougail la mourue", "Carry bichique", "Samoussas", "Pain bouchon gratiné piment mayonnaise", "Carry poulet" ]



// plats <- ["Rougail saucisses", "Samoussas", "Pain bouchon gratiné piment mayonnaise", "Carry poulet" 






// algo


// exo 1

// mot = "lolol"
// alphabet = "abcdefghijklmnopqrstuvwxyz"
// resultat= ""


// pour i=0 a i< 5 i pas 1
//     pour j= 0 j<26 j pas 1
//         si mot[i]= alphabet[j]
//             resultat <- resultat+alphabet[j+1]
//         fin si
//     fin pour
//     afficher (resultat)
// fin pour


// exo 2

// mot = "lolol"
// alphabet = "abcdefghijklmnopqrstuvwxyz"
// resultat = ""
// decale = ""


// enter decale

// pour i =0 a i<5 i pas 1
//     pour j=0 a j<26 j pas 1
//         si mot[i] = alphabet[j]
//             f=j+decale
//             si f > 26
//             f= f %26 


//             fin si
//             resultat = resultat + alphabet[f]
//         fin si   
//     fin pour
//     afficher resultat
// fin pour


// exo 3

// mot = "LOLOL"
// alphabet = "HYLUJPVREAKBNDOFSQZCWMGITX"
// resultat = ""
// decale = ""


// enter decale

// pour i =0 a i<5 i pas 1
//     pour j=0 a j<26 j pas 1
//         si mot[i] = alphabet[j]
//             f=j+decale
//             si f > 26
//             f= f %26 
//             fin si
//             resultat = resultat + alphabet[f]
//         fin si   
//     fin pour
//     afficher resultat
// fin pour


// autre solu

// mot ="LOLOL"
// alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// resultat =""
// decale =12

// pour i =0 a i < 5 pas 1
//     pour j =0 a <26 pas 1
    
//         si mot[i] = alphabet[j]
//         resultat = resultat + alphabet[(j+decale )%26]
//         fin si
//     fin pour

//     afficher (resultat)
// fin pour    









// autre exo 



var douleur = "gorge";
var fievre = true;
var resultat;

if (douleur === "abdomen"){
    resultat = "appendicite"
} 

else if (douleur === "gorge"){
    if (fievre === true){

        resultat = "rhume"
    } 

    else resultat = "mal de gorge"
    } 
alert(resultat);


