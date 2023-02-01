# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

Rien à installer ici, il suffit d'ouvrir le fichier `index.html`.

## Objectifs du projet

- Récupération des données avec la méthode Fetch
- Amélioration des pages index.html et photographer.html avec les données récupéreés

## Compétences évaluées

- Gérer les évènements d'un site avec JavaScript
- Assurer l'accessibilité d'un site web
- Ecrire du code JavaScript maintenable
- Développer une application web modulaire avec des design patterns

## Définition et usage du design pattern Factory sur le projet

Le design pattern Factory est un modèle de conception de logiciel qui permet de créer des objets sans spécifier leur classe concrète. Cela permet de centraliser la logique de création d'objets dans une seule classe appelée factory. La factory peut être utilisée pour créer des objets de différentes classes en fonction des besoins du programme, sans que le code appelant la factory ne connaisse les détails de la classe concrète créée. Cela offre une plus grande flexibilité et une meilleure maintenance du code.

### GalleryFactory :

Cette classe définit une factory appelée "GalleryFactory". Elle a une fonction "builder" qui construit une galerie en utilisant les différents médias fournis dans les données (dataMedia) et en utilisant la classe "Lightbox".

Lorsque la méthode builder est appelée, elle parcourt les données média et crée une section pour chaque élément qui correspond à l'ID du photographe dans l'URL. Pour chaque élément, un élément "article" est créé, puis le média correspondant est rendu en utilisant une instance de la classe "MediaFactory".

Sa méthode "builder" retourne l'objet "GalleryFactory" courant.

### MediaFactory :

Cette classe définit une factory appelée "MediaFactory". Elle a une fonction "renderMedia" qui permet de déterminer si un élément sélectionné est une image ou une vidéo.

Lorsque la méthode "renderMedia" est appelée avec un élément (el), elle vérifie si l'élément a une propriété "image". Si c'est le cas, elle crée une instance de la classe "ImageFactory". Sinon, si l'élément a une propriété "video", elle crée une instance de la classe "VideoFactory". L'utilité de cette classe est de fournir une abstraction pour la création d'objets HTML correspondant à des images ou des vidéos, en fonction du type d'élément.

### ImageFactory :

Cette classe crée des éléments HTML img avec des attributs spécifiques selon la structure qu'on lui donne en paramètre.

### VideoFactory :

Cette classe crée des éléments HTML video avec des attributs spécifiques selon la structure qu'on lui donne en paramètre.

## Outils pour vérifier l'accessibilité

- [ACHECKER] (https://achecker.achecks.ca/checker/index.php)
- Plugin chrome : WAVE Evaluation Tool
