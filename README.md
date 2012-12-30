# [Picrop jQuery Plugin]

Picrop est un plugin Jquery permettant de retailler les images sans pour autant déteriorer leurs qualités.

## Mise en place

1. Installer [jQuery 1.7+](http://docs.jquery.com/Downloading_jQuery) et [picrop](https://github.com/jeanbadel/picrop)
2. Appeler les scripts suivants dans l'en-tête <head> de votre document HTML:

        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="jquery.picrop.min.js"></script>
        
3. Inclure le fichier CSS suivant:

        <link rel="stylesheet" href="jquery.picrop.css">
        
4. Appeler .picrop() sur l'élément parent avec les dimensions de votre choix

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

Vous pouvez nous écrire pour toutes améliorations ou bug: https://github.com/jeanbadel/picrop/issues


## Développeur

Vous avez la possiblité de configurer de manière générale ou individuelle des comportements spécifiques.
        
### Paramètrage global

        $('.picrop').picrop({
        	'fx'		: false, //true|false de l'effet de fondu
        	'duration'	: 400, // duré de l'effet
        	'loader'	: 'loading', //nom de la class de chargement
        	'dirx'		: 'center', //center|left|right|xxx en px. Forcer l'orientation horizontale de l'image
        	'diry'		: 'center', //center|top|bottom|xxx en px. Forcer l'orientation verticale de l'image
        	'onCrop'	: function(pic, wrappic){ // evenement sur chaque redimentionnement effectué
                
                },
        });
        
### Paramètrage sur l'image

        <img src="..."
                data-fx="true"
                data-duration="2000"
                data-loader="loading"
                data-dirx="left"
                data-diry="top"
                data-src="..." //Cf explication
        >
        
Petite explication sur "data-src". Cet attribut permet de spécifier le chemin de l'image sans pour autant charger dans le DOM cette dernière. Elle sera donc chargée lorsque vous appelez la librairie picrop.
Cela optimise ainsi les chargements des images.


## Auteurs

**Jean-Baptiste Delhommeau**
