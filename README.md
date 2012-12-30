# [Picrop jQuery Plugin]

Picrop est un plugin Jquery permettant de retailler les images sans pour autant déteriorer la qualité de l'image.
L'image s'adapte simplement à la taille désiré en centrant son contenu.


## Mise en place

1. Installer [jQuery 1.7+](http://docs.jquery.com/Downloading_jQuery) and [picrop](https://github.com/jeanbadel/picrop/master)
2. Appelez les scripts suivants dans l'en-tête <head> de votre document HTML:

        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="jquery.picrop.min.js"></script>
        
3. Inclure le fichier CSS suivant:

        <link rel="stylesheet" href="jquery.picrop.css">
        
4. Appelez .picrop() sur l'élement parent avec les dimentions de votre choix

        Ex:
        <div class="picrop">
          <img ...>
        </div>
        <script>
          $(function(){
            $('.picrop').picrop();
          });
        </script>

## Bug ou amélioration

Vous pouvez nous écrire pour toutes amélioration ou bug: https://github.com/jeanbadel/picrop/issues


## Développeur

Prochainement...

## Auteurs

**Jean-Baptiste Delhommeau**
