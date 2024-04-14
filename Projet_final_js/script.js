var selectedContinent = null;
var selectedMeta = null;

// Exemple de métas et de continents (peut être remplacé par des données réelles)
const metaData = [
    { title: "Bornes et panneaux", description: "", imageSrc: "images/metas/bornes/borne.png" },
    { title: "Carte du Monde des Marquages au sol", description: "", imageSrc: "images/metas/marquageausolcartedumonde/marquage.png" },
    { title: "Carte Europe Panneau de ville", description: "", imageSrc: "images/metas/panneauville/panneauville.png" },
    { title: "Carte Europe Panneau passage piéton", description: "", imageSrc: "images/metas/panneaupassagepieton/passagepieton.png" },    
    { title: "Chevrons", description: "", imageSrc: "images/metas/chevrons/chevron.png" },
    { title: "Circulation", description: "", imageSrc: "images/metas/circulation/circulation.jpg" },
    { title: "Drapeau", description: "", imageSrc: "images/metas/drapeau/france.png" },
    { title: "Google-car", description: "", imageSrc: "images/metas/googlecar/googlecar.png" },
    { title: "Langue", description: "", imageSrc: "images/metas/langue/panneau.png" },
    { title: "Limites de vitesse", description: "", imageSrc: "images/metas/limitesdevitesse/vitesse.jpg" },
    { title: "Marquage au sol", description: "", imageSrc: "images/metas/marquageausol/marquage.png" },
    { title: "Noms de domaine", description: "", imageSrc: "images/metas/nomsdedomaine/lien.png" },
    { title: "Panneaux de danger", description: "", imageSrc: "images/metas/panneauxdedanger/danger.png" },
    { title: "Panneau Route", description: "", imageSrc: "images/metas/panneau/panneauroute.png" },
    { title: "Pays Street View", description: "", imageSrc: "images/metas/streetview/streetview.jpg" },
    { title: "Paysages", description: "", imageSrc: "images/metas/paysages/paysages.jpg" },
    { title: "Plaque", description: "", imageSrc: "images/metas/plaque/plaque.png" },
    { title: "Poteau électrique", description: "", imageSrc: "images/metas/poteauelectrique/poteauelectrique.png" },
    { title: "Rues", description: "", imageSrc: "images/metas/rue/rue.jpg" },
    { title: "Stop", description: "", imageSrc: "images/metas/stop/stop.jpg" },  
];

// Associer chaque méta à une liste spécifique de pays
const metaToCountriesMap = [
    { 
        "Google-car": [
            { country: "Guatemala", info : "Pays hispanique avec barres et rétro", image: "images/metas/googlecar/ggcar-guatemala.png" },
            { country: "Republique Dominicaine", info : "Pays hispanique avec barres sans rétro", image: "images/metas/googlecar/ggcar-repudominicaine.png" },
            { country: "Iles vierges américaines", info : "Gros Pickup avec des barres, île du nord: blanc et île du sud : rouge ", image: "images/metas/googlecar/ggcar-ilesvierges.png" },
            { country: "Curacao", info : "voiture noir avec des barres et du blanc sur la barre avant gauche", image: "images/metas/googlecar/ggcar-curacao.png" },
            { country: "Bermudes", info : "Voiture noir avec rétro", image: "images/metas/googlecar/ggcar-bermudes.jpg" },
            { country: "Puerto rico", info : "longue antenne à l'avant droit ", image: "images/metas/googlecar/ggcar-puertorico.jpg" },
            { country: "Argentine/Uruguay", info : "Voiture noir", image: "images/metas/googlecar/ggcar-argentine.jpg" },
            { country: "Ukraine", info : "Avant de voiture rouge", image: "images/metas/googlecar/ggcar-ukraine.jpg" },
            { country: "Serbie/Macédoine du nord", info : "Pas d'antenne", image: "images/metas/googlecar/ggcar-serbie.jpg" },
            { country: "Iles Feroes", info : "Paysage type Islande avec barres et retro", image: "images/metas/googlecar/ggcar-feroe.png" },
            { country: "Kirghizistan", info : "Paysage Asie central voiture blanche barres et rétro", image: "images/metas/googlecar/ggcar-kirghizistan.png" },
            { country: "Mongolie", info : "Paysage Asie central voiture google barres et rétro avec reflet vert OU barre et équipements", image: "images/metas/googlecar/ggcar-mongolie.png" },
            { country: "Jordanie", info : "Paysage moyen orient et voiture noir", image: "images/metas/googlecar/ggcar-jordanie.jpg" },
            { country: "Laos", info : "Asie du sud: Barre et retro", image: "images/metas/googlecar/ggcar-laos.png" },
            { country: "Sri lanka", info : "Avant de la voiture blanc avec du rouge à droite", image: "images/metas/googlecar/ggcar-srilanka.jpg" },
            { country: "Senegal", info : "Pickup gris ou blanc avec barreaux noir ou simple barres ou flou", image: "images/metas/googlecar/ggcar-senegal.png" },
            { country: "Ghana", info : "Barre avec scotch noir à l'avant droit", image: "images/metas/googlecar/ggcar-ghana.png" },
            { country: "Kenya", info : "Avant de Pickup gris avec ou sans tuba ou retro en tuba et barres", image: "images/metas/googlecar/ggcar-kenya.jpg" },
            { country: "Ile de la Reunion", info : "Barre avec scotch noir à l'arrière droit", image: "images/metas/googlecar/ggcar-reunion.png" },
            { country: "Nigeria", info : "Voiture de police derrière", image: "images/metas/googlecar/ggcar-nigeria.png" },
            { country: "Ouganda", info : "Vehicule blanc visible à droite et à gauche", image: "images/metas/googlecar/ggcar-ouganda.png" },
            { country: "Rwanda", info : "Pickup noir ou blanc avec barreaux", image: "images/metas/googlecar/ggcar-rwanda.jpg" },
            { country: "Guam/Iles Mariannes du nord", info : "Grande antenne à l'avant droit", image: "images/metas/googlecar/ggcar-guam.jpg" },
            { country: "Ile Christmas", info : "Petite remorque blanche", image: "images/metas/googlecar/ggcar-ilechristmas.png" },
            { country: "Samoa Américaines", info : "Petite remorque noire", image: "images/metas/googlecar/ggcar-samoa.png" },
        ]
    },
    {
        "Panneau Route": [
            {country: "Carte de l'Europe", info : "",  image: "images/metas/panneau/route.png" },
        ]
    },

    { 
        "Langue": [
            {country: "Carte du monde", info : "",  image: "images/metas/langue/alphabet.png" },
        ]
    },
    { 
        "Plaque": [
            { country: "Colombie", info: "Plaque jaune Amérique du sud", image: "images/metas/plaque/plaque-colombie.jpg" },
            { country: "Belgique", info: "Plaque européenne rougeatre", image : "images/metas/plaque/plaque-belgique.jpg" },
            { country: "Bhoutan", info: "Plaque rouge", image : "images/metas/plaque/plaque-bhoutan.jpg" },
            { country: "Tunisie", info: "Suivi par une voiture avec plaque rouge et noir", image : "images/metas/plaque/plaque-tunisie.png" },
            { country: "Royaume-Uni", info: "Plaque blanche à l'avant et jaune à l'arrière", image : "images/metas/plaque/plaque-uk.jpg" },
            { country: "Pays-Bas/Luxembourg", info: "Plaque européenne jaune", "image": "images/metas/plaque/plaque-paysbas.jpg" },
            { country: "Italie/Albanie/France", info: "Plaque blanche avec bleu des deux côtés", image : "images/metas/plaque/plaque-italie.jpg" },
            { country: "Portugal", info: "Plaque européenne avec jaune de l'autre coté", image : "images/metas/plaque/plaque-portugal.jpg" },
            { country: "Israël", info: "Plaque jaune", image : "images/metas/plaque/plaque-israel.jpg" },
            { country: "Île de Man", info: "Plaque jaune à l'arrière et rouge à l'avant avec du rouge à gauche", image : "images/metas/plaque/plaque-iledeman.jpg" },
            { country: "Brésil (camion)", info: "Plaque de camion rouge", image : "images/metas/plaque/plaque-bresil.jpg" },
            { country: "Puerto Rico", info: "Pas de plaque à l'avant", image : "images/metas/plaque/plaque-puertorico.jpg" },
            { country: "Eswatini", info: "Bande horizontale vert/jaune en bas de la plaque", image : "images/metas/plaque/plaque-eswatini.png" },
            { country: "Argentine", info: "Plaque blanche avec un rond noir au milieu", image : "images/metas/plaque/plaque-argentine.jpg" }
        ]
    },
    { 
        "Poteau électrique": [
            { country: "Roumanie", info: "Trous carrés jusqu'en bas et bas blanc", image : "images/metas/poteauelectrique/pote-roumanie.jpg" },
            { country: "Hongrie", info: "Trous carrés jusqu'en bas", image : "images/metas/poteauelectrique/pote-bulgarie.jpg" },
            { country: "Tunisie", info: "Poteau de moins en moins large vers le haut", image : "images/metas/poteauelectrique/pote-tunisie.jpg" },
            { country: "Malaisie", info: "Plaque noir sur la partie continentale", image : "images/metas/poteauelectrique/pote-malaisie.jpg" },
            { country: "Japon", info: "Bandes verticales noires et jaune", image : "images/metas/poteauelectrique/pote-japon.jpg" },
            { country: "Corée du Sud", info: "Bandes obliques noire jaune", image : "images/metas/poteauelectrique/pote-corée.jpg" },
            { country: "Taiwan", info: "Bandes obliques noire jaune plus orangeatre et plus long que la Corée", image : "images/metas/poteauelectrique/pote-taiwan.jpg" },
            { country: "Pologne", info: "Trous uniquement au mileu", image : "images/metas/poteauelectrique/pote-pologne.jpg" },
            { country: "Mexique", info: "Poteau octogonale", image : "images/metas/poteauelectrique/pote-mexique.jpg" },
        ]
    },
    { 
        "Bornes et panneaux": [
            { country: "Andorre", info: "", image: "images/metas/bornes/bornes-andorre.png" },
            { country: "Autriche", info: "", image: "images/metas/bornes/bornes-autriche.png" },
            { country: "Baltiques", info: "Les bornes kilométriques ont un angle différent suivant le pays (Estonie 90° – Lettonie 0° – Lituanie : 45°)", image: "images/metas/bornes/bornes-baltiques.png" },
            { country: "Canada", info: "Panneau avec MAXIMUM", image: "images/metas/bornes/bornes-canada.jpg" },
            { country: "États-Unis", info: "Panneau avec SPEED LIMITE", image: "images/metas/bornes/bornes-usa.jpg" },
            { country: "Islande", info: "", image: "images/metas/bornes/bornes-islande.png" },
            { country: "Pologne", info: "", image: "images/metas/bornes/bornes-pologne.png" },
            { country: "Pérou", info: "Poteau de panneaux noir et blanc", image: "images/metas/bornes/bornes-perou.jpg" },
            { country: "Russie", info: "Beaucoup de bornes aux carrefours", image: "images/metas/bornes/bornes-russie.png" },
            { country: "Serbie", info: "", image: "images/metas/bornes/bornes-serbie.png" },
            { country: "Slovaquie/Tchéquie", info: "Double bande orange fluo ou losange blanc dans du noir", image: "images/metas/bornes/bornes-slovaquie.png" },
            { country: "Uruguay", info: "Poteau de panneaux blanc", image: "images/metas/bornes/bornes-uruguay.jpg" }
        ]
    },
    { 
        "Chevrons": [
            {country: "Carte du monde",  info : "", image:  "images/metas/chevrons/chevronseurope.jpg" },
        ]
    },
    { 
        "Stop": [
            {country: "Carte du monde",  info : "", image:  "images/metas/stop/panneaustop.jpg" },
        ]
    },

    { 
        "Drapeau": [
            {country: "Carte du Monde",  info : "", image:  "images/metas/drapeau/drapeaux-monde.png" },
            {country: "Carte de l'Amérique",  info : "", image:  "images/metas/drapeau/drapeaux-amerique.png" },
            {country: "Carte de l'Asie / Océanie",  info : "", image:  "images/metas/drapeau/drapeaux-asie-oceanie.png" },
            {country: "Carte de l'Europe",  info : "", image:  "images/metas/drapeau/drapeaux-europe.png" },
            {country: "Carte de l'Afrique / Moyen-Orient",  info : "", image:  "images/metas/drapeau/drapeaux-afrique-moyen-orient.png" },
        ]
    },
    { 
        "Limites de vitesse": [
            {country: "Carte du monde",  info : "", image:  "images/metas/limitesdevitesse/limites-vitesse.png" },
        ]
    },
    { 
        "Panneaux de danger": [
            {country: "Carte du monde",  info : "", image:  "images/metas/panneauxdedanger/panneaux-danger-monde.png" },
        ]
    },
    { 
        "Marquage au sol": [
            { country: "Norvège", info: "Ligne centrale jaune en Europe", "image": "images/metas/marquageausol/ms-norvege.jpg" },
            { country: "Kenya", info: "Ligne centrale jaune en Afrique", "image": "images/metas/marquageausol/ms-kenya.jpeg" },
            { country: "Finlande/Argentine Uruguay/Philipines", info: "Ligne centrale jaune dans les virage", "image": "images/metas/marquageausol/ms-finlande.jpg" },
            { country: "Irlande", info: "Ligne latérale jaune pointillé", "image": "images/metas/marquageausol/ms-irlande.jpg" },
            { country: "Suède/France Sénégal/Tunisie", info: "Ligne latérale blanche pointillé", "image": "images/metas/marquageausol/ms-suede.jpg" },
            { country: "Danemark", info: "Tout petits pointillés", "image": "images/metas/marquageausol/ms-danemark.jpg" },
            { country: "Philippines", info: "Route avec des plaques", "image": "images/metas/marquageausol/ms-philippines.png" },
            { country: "Afrique du Sud Botswana/Eswatini Lesotho", info: "Ligne latérale jaune en Afrique", "image": "images/metas/marquageausol/ms-afriquedusud.jpg" },
            { country: "Jordanie/UAE Israel/Palestine", info: "Ligne latérale jaune au Moyen-Orient", "image": "images/metas/marquageausol/ms-jordanie.jpg" },
            { country: "Chili", info: "Lignes uniquement blanche en amérique", "image": "images/metas/marquageausol/ms-chili.jpg" },
        ]
    },
    { 
        "Noms de domaine": [
            {country: "Carte du monde",  info : "", image:  "images/metas/nomsdedomaine/noms-domaine.png" },
        ]
    },
    { 
        "Rues": [
            {country: "Carte de l'Europe",  info : "", image:  "images/metas/rue/rue.png" },
        ]
    },
    { 
        "Circulation": [
            {country: "Carte du monde des sens de circulation",  info : "En bleu roule à gauche, en rouge à droite", image:  "images/metas/circulation/circulation.png" },
        ]
    },
    { 
        "Pays Street View": [
            {country: "Carte du monde",  info : "", image:  "images/metas/streetview/streetview.png" },
        ]
    },
    { 
        "Paysages": [
            { country: "Ouganda/Sénégal Brésil", info: "Terre orange", "image": "images/metas/paysages/bresil.jpg" },
            { country: "Albanie Monténégro", info: "Faille dans le ciel", "image": "images/metas/paysages/albanie.jpg" },
            { country: "Sénégal", info: "Faille dans le ciel à certains endroits", "image": "images/metas/paysages/senegal.jpg" },
            { country: "Monaco", info: "Ville de Monaco, riche et portuaire", "image": "images/metas/paysages/monaco.jpg" },
            { country: "Gibraltar", info: "Rocher de Gibraltar", "image": "images/metas/paysages/gibraltar.png" },
            { country: "Andorre", info: "Très montagneux et maisons typiques", "image": "images/metas/paysages/andorre.jpg" },
            { country: "Bhoutan", info: "Montagneux, bloc sur le bord des routes et architecture typique", "image": "images/metas/paysages/bhoutan.png" },
            { country: "Suisse", info: "Montagneux et architecture typique", "image": "images/metas/paysages/suisse.jpg" },
            { country: "Mongolie", info: "", "image": "images/metas/paysages/mongolie.png" },
            { country: "Malte", info: "Maison bloc blanc et beige", "image": "images/metas/paysages/malte.jpg" },
            { country: "Cambodge", info: "Maison sur pillotis et publicité de bières", "image": "images/metas/paysages/cambodge.jpg" },
            { country: "Japon", info: "Architecture typique", "image": "images/metas/paysages/japon.jpg" },
            { country: "Bolivie/Perou", info: "Maison en brique rouge", "image": "images/metas/paysages/bolivie.jpg" },
            { country: "Lesotho", info: "Montagnes plates", "image": "images/metas/paysages/lesotho.jpg" },
            { country: "Qatar", info: "Stades et constructions", "image": "images/metas/paysages/qatar.jpg" },
            { country: "Mexique", info: "Cuve noire sur les toits", "image": "images/metas/paysages/mexique.jpg" },
            { country: "Scandinavie", info: "Cabanes rouges", "image": "images/metas/paysages/scandinavie.jpg" },
            { country: "Portugal", info: "Toits orange", "image": "images/metas/paysages/portugal.jpg" },
        ]
    },
    {
        "Carte du Monde des Marquages au sol": [
            {country: "Carte du monde",  info : "", image:  "images/metas/marquageausolcartedumonde/marquage-sol-monde.png" },
        ]
    },
    {
        "Carte Europe Panneau de ville": [
            {country: "Carte 1",  info : "", image:  "images/metas/panneauville/panneau1.png" },
            {country: "Carte 2",  info : "", image:  "images/metas/panneauville/panneau2.png" },
        ]
    },
    {
        "Carte Europe Panneau passage piéton": [
            {country: "Carte de l'Europe",  info : "", image:  "images/metas/panneaupassagepieton/pieton.png" },
        ]
    },
];

const continentsData = [
    { name: "Afrique", image: "images/metas/drapeau/drapeaux-afrique-moyen-orient.png" },
    { name: "Asie", image: "images/metas/drapeau/drapeaux-asie-oceanie.png" },
    { name: "Europe", image: "images/metas/drapeau/drapeaux-europe.png" },
    { name: "Amérique du Nord", image: "images/metas/drapeau/drapeaux-amerique.png" },
    { name: "Amérique du Sud", image: "images/metas/drapeau/drapeaux-amerique.png" },
    { name: "Océanie", image: "images/metas/drapeau/drapeaux-asie-oceanie.png" },
  ];
  
  const continentToCountriesMap = [
    {
        "Afrique": [
            { country: "Afrique du Sud Botswana/Lesotho Eswatini", meta: "Ligne latérale jaune en Afrique", image: "images/metas/marquageausol/ms-afriquedusud.jpg" },
            { country: "Botswana", meta: "Plaque blanche à l'avant et jaune à l'arrière", image: "images/continents/reste/botswana.png" },
            { country: "Eswatini", meta: "Bande horizontale vert/jaune en bas de la plaque", image: "images/metas/plaque/plaque-eswatini.png" },
            { country: "Ghana", meta: "Barre avec scotch noir à l'avant droit", image: "images/metas/googlecar/ggcar-ghana.png" },
            { country: "Île de la Réunion", meta: "Barre avec scotch noir à l'arrière droit", image: "images/metas/googlecar/ggcar-reunion.png" },
            { country: "Kenya", meta: "Avant de Pickup gris avec ou sans tuba ou retro en tuba et barres", image: "images/metas/googlecar/ggcar-kenya.jpg" },
            { country: "Lesotho", meta: "Montagnes plates", image: "images/metas/paysages/lesotho.jpg" },
            { country: "Nigeria", meta: "Voiture de police derrière", image: "images/metas/googlecar/ggcar-nigeria.png" },
            { country: "Ouganda", meta: "Vehicule blanc visible à droite et à gauche", image: "images/metas/googlecar/ggcar-ouganda.png" },
            { country: "Ouganda/Rwanda Sénégal", meta: "Terre Orange", image: "images/metas/paysages/bresil.jpg" },
            { country: "Rwanda", meta: "Pickup noir ou blanc avec barreaux", image: "images/metas/googlecar/ggcar-rwanda.jpg" },
            { country: "Sénégal", meta: "Pickup gris ou blanc avec barreaux noir ou simple barres ou flou", image: "images/metas/googlecar/ggcar-senegal.png" },
            { country: "Sénégal", meta: "Faille dans le ciel à certains endroits", image: "images/metas/paysages/senegal.jpg" },
            { country: "Tunisie", meta: "Suivi par une voiture avec plaque rouge et noir", image: "images/metas/plaque/plaque-tunisie.png" }
        ]
    },
    {
        "Amérique du Nord": [
            { country: "Bermudes", meta: "Voiture noir avec rétro", image: "images/metas/googlecar/ggcar-bermudes.jpg" },
            { country: "Canada", meta: "Panneau avec Maximum", image: "images/metas/bornes/bornes-canada.jpg" },
            { country: "Costa Rica", meta: "Pas de coverage officiel donc placé sur des espaces pour piétons", image: "images/continents/reste/costarica.png" },
            { country: "Curaçao", meta: "voiture noir avec des barres et du blanc sur la barre avant gauche", image: "images/metas/googlecar/ggcar-curacao.png" },
            { country: "États-Unis", meta: "Pannneu avec SPEED LIMIT", image: "images/metas/bornes/bornes-usa.jpg" },
            { country: "Guatemala", meta: "Pays hispanique avec barres et rétro", image: "images/metas/googlecar/ggcar-guatemala.png" },
            { country: "Îles Vierges britanniques", meta: "Gros Pickup avec des barres, île du nord: blanc et île du sud : rouge ", image: "images/metas/googlecar/ggcar-ilesvierges.png" },
            { country: "Mexique", meta: "Poteau octogonale", image: "images/metas/poteauelectrique/pote-mexique.jpg" },
            { country: "Mexique", meta: "Cuve noire sur les toits", image: "images/metas/paysages/mexique.jpg" },
            { country: "Puerto Rico", meta: "longue antenne à l'avant droit", image: "images/metas/googlecar/ggcar-puertorico.jpg" },
            { country: "Puerto Rico", meta: "Pas de plaque à l'avant", image: "images/metas/plaque/plaque-puertorico.jpg" },
            { country: "République dominicaine", meta: "Pays hispanique avec barres sans rétro", image: "images/metas/googlecar/ggcar-repudominicaine.png" }
        ]
    },
    {
        "Amérique du Sud": [
            { country: "Argentine", meta: "Plaque blanche avec un rond noir au milieu", image: "images/metas/plaque/plaque-argentine.jpg" },
            { country: "Argentine/Uruguay", meta: "Voiture noire", image: "images/metas/googlecar/ggcar-argentine.jpg" },
            { country: "Bolivie", meta: "Maison en brique rouge", image: "images/metas/paysages/bolivie.jpg" },
            { country: "Brésil", meta: "Terre orange", image: "images/metas/paysages/bresil.jpg" },
            { country: "Chili", meta: "Lignes uniquement blanche en Amérique", image: "images/metas/marquageausol/ms-chili.jpg" },
            { country: "Colombie", meta: "Plaque jaune en amérique du sud", image: "images/metas/plaque/plaque-colombie.jpg" },
            { country: "Équateur", meta: "Mur de brique grises et sol avec hexagones gris", image: "images/continents/reste/equateur.png" },
            { country: "Pérou", meta: "Poteau de panneaux noir et blanc", image: "images/metas/bornes/bornes-perou.jpg" },
            { country: "Uruguay", meta: "Poteau de panneaux blanc", image: "images/metas/bornes/bornes-uruguay.jpg" }
        ]
    },
    {
        "Asie": [
            { country: "Bangladesh", meta: "Beaucoup de tuktuks vert", image: "images/continents/reste/bangladesh.png" },
            { country: "Bhoutan", meta: "Plaque rouge", image: "images/metas/plaque/plaque-bhoutan.jpg" },
            { country: "Cambodge", meta: "Maison sur pillotis et publicité de bières", image: "images/metas/paysages/cambodge.jpg" },
            { country: "Corée du Sud", meta: "Bandes obliques noire jaune", image: "images/metas/poteauelectrique/pote-corée.jpg" },
            { country: "Émirats arabes unis", meta: "Arrère de la voiture blanc sans antenne", image: "images/continents/reste/emirats.png" },
            { country: "Hong Kong", meta: "Grands immeubles avec du chinois et de l'anglais", image: "images/continents/reste/hongkong.png" },
            { country: "Inde", meta: "Google car soit avec un énorme flou rond, soit flou à l'avant et arrière truck noir, rouge ou blanc", image: "images/continents/reste/inde.jpg" },
            { country: "Indonésie", meta: "Poteau électrique à 3 bulbes", image: "images/continents/reste/indonesia.jpg" },
            { country: "Israël", meta: "Plaque jaune", image: "images/metas/plaque/plaque-israel.jpg" },
            { country: "Israël", meta: "Antenne à l'arrière", image: "images/continents/reste/israel.png" },
            { country: "Japon", meta: "Bandes verticales noires et jaune", image: "images/metas/poteauelectrique/pote-japon.jpg" },
            { country: "Jordanie", meta: "Arrère de la voiture noir sans antenne", image: "images/metas/googlecar/ggcar-jordanie.jpg" },
            { country: "Kazakhstan", meta: "Pickup blanc avec barreaux", image: "images/continents/reste/kazakhstan.png" },
            { country: "Kirghizistan", meta: "Paysage Asie central voiture blanche barres et rétro", image: "images/metas/googlecar/ggcar-kirghizistan.png" },
            { country: "Laos", meta: "Asie du sud: Barre et retro (pas toujours le cas)", image: "images/metas/googlecar/ggcar-laos.png" },
            { country: "Macao", meta: "Grands immeubles avec du chinois et du portugais", image: "images/continents/reste/macao.png" },
            { country: "Malaisie", meta: "Plaque noir sur la partie continentale", image: "images/metas/poteauelectrique/pote-malaisie.jpg" },
            { country: "Mongolie", meta: "Paysage Asie central voiture google barres et rétro avec reflet vert OU barre et équipements", image: "images/metas/googlecar/ggcar-mongolie.png" },
            { country: "Philippines", meta: "Route avec des plaques", image: "images/metas/marquageausol/ms-philippines.png" },
            { country: "Qatar", meta: "Stades et constructions", image: "images/metas/paysages/qatar.jpg" },
            { country: "Singapour", meta: "Double ligne jaune latérale", image: "images/continents/reste/singapour.png" },
            { country: "Sri Lanka", meta: "Avant de la voiture blanc avec du rouge à droite", image: "images/metas/googlecar/ggcar-srilanka.jpg" },
            { country: "Taïwan", meta: "Bandes obliques noire jaune plus orangeatre et plus long que la Corée", image: "images/metas/poteauelectrique/pote-taiwan.jpg" },
            { country: "Thaïlande", meta: "Petits trous tout le long des poteaux éléctriques", image: "images/continents/reste/thailande.png" },
            { country: "Turquie", meta: "Panneau stop DUR", image: "images/continents/reste/turquie.jpg" }
        ]
    },
    {
        "Europe": [
            { country: "Aland", meta: "Route rouge", image: "images/continents/reste/aland.png" },
            { country: "Albanie", meta: "Plaque blanche avec bleu des deux côtés", image: "images/metas/plaque/plaque-italie.jpg" },
            { country: "Allemagne", meta: "Bollard deux côtés de la route, rectangle blanc à droite, deux points blanc à gauche", image: "images/continents/reste/allemagne.jpg" },
            { country: "Andorre", meta: "Très montagneux et maisons typiques", image: "images/metas/paysages/andorre.jpg" },
            { country: "Autriche", meta: "Bollard avec bande rouge foncée", image: "images/continents/reste/autriche.jpg" },
            { country: "Belgique", meta: "Plaque européenne rougeatre", image: "images/metas/plaque/plaque-belgique.jpg" },
            { country: "Bulgarie", meta: "Cyrillique et plaque europénne", image: "images/continents/reste/bulgarie.png" },
            { country: "Croatie", meta: "Maisons à deux étages", image: "images/continents/reste/croatie.png" },
            { country: "Danemark", meta: "Ligne avec des petits pointillés", image: "images/metas/marquageausol/ms-danemark.jpg" },
            { country: "Espagne", meta: "Espagnol en europe", image: "images/continents/reste/espagne.png" },
            { country: "Estonie", meta: "Fleurs blanches", image: "images/continents/reste/estonie.png" },
            { country: "Finlande", meta: "Ligne centrale jaune dans les virage", image: "images/metas/marquageausol/ms-finlande.jpg" },
            { country: "France", meta: "Bollard blanc avec une bande circulaire rouge ou grise", image: "images/continents/reste/france.jpg" },
            { country: "Gibraltar", meta: "Rocher de Gibraltar", image: "images/metas/paysages/gibraltar.png" },
            { country: "Grèce", meta: "Bug dans le ciel", image: "images/continents/reste/grece.png" },
            { country: "Hongrie", meta: "Poteaux électriques à trous carrés jusqu'en bas", image: "images/metas/poteauelectrique/pote-bulgarie.jpg" },
            { country: "Île de Man", meta: "Plaque jaune à l'arrière et rouge à l'avant avec du rouge à gauche", image: "images/metas/plaque/plaque-iledeman.jpg" },
            { country: "Îles Féroé", meta: "Paysage type Islande avec barres et retro", image: "images/metas/googlecar/ggcar-feroe.png" },
            { country: "Irlande", meta: "Ligne latérale jaune pointillé", image: "images/metas/marquageausol/ms-irlande.jpg" },
            { country: "Islande", meta: "Paysages sans arbre", image: "images/continents/reste/islande.png" },
            { country: "Italie", meta: "Plaque blanche avec bleu des deux côtés", image: "images/metas/plaque/plaque-italie.jpg" },
            { country: "Jersey", meta: "Français et anglais", image: "images/continents/reste/jersey.png" },
            { country: "Lettonie", meta: "Poteau électrique à trois crochets", image: "images/continents/reste/lettonie.jpg" },
            { country: "Lituanie", meta: "Bollard avec bande réfléchissante orange", image: "images/continents/reste/lituanie.jpg" },
            { country: "Luxembourg", meta: "Plaque européenne jaune", image: "images/metas/plaque/plaque-paysbas.jpg" },
            { country: "Macédoine du Nord", meta: "Pas d'antenne", image: "images/metas/googlecar/ggcar-serbie.jpg" },
            { country: "Malte", meta: "Maison bloc blanc et beige", image: "images/metas/paysages/malte.jpg" },
            { country: "Monaco", meta: "Ville de Monaco, riche et portuaire", image: "images/metas/paysages/monaco.jpg" },
            { country: "Monténégro", meta: "Faille dans le ciel", image: "images/metas/paysages/albanie.jpg" },
            { country: "Norvège", meta: "Ligne centrale jaune en Europe", image: "images/metas/marquageausol/ms-norvege.jpg" },
            { country: "Pays-Bas", meta: "Plaque européenne jaune", image: "images/metas/plaque/plaque-paysbas.jpg" },
            { country: "Pologne", meta: "Poteaux électriques avec trous uniquement au mileu", image: "images/metas/poteauelectrique/pote-pologne.jpg" },
            { country: "Portugal", meta: "Plaque européenne avec jaune de l'autre coté", image: "images/metas/plaque/plaque-portugal.jpg" },
            { country: "République tchèque", meta: "Double bande orange fluo ou losange blanc dans du noir", image: "images/metas/bornes/bornes-slovaquie.png" },
            { country: "Roumanie", meta: "Trous carrés jusqu'en bas et bas blanc", image: "images/metas/poteauelectrique/pote-roumanie.jpg" },
            { country: "Royaume-Uni", meta: "Plaque blanche à l'avant et jaune à l'arrière", image: "images/metas/plaque/plaque-uk.jpg" },
            { country: "Russie", meta: "Beaucoup de bornes aux carrefours", image: "images/metas/bornes/bornes-russie.png" },
            { country: "Saint-Marin", meta: "Ligne continue blanche et beaucoup de bollard", image: "images/continents/reste/saintmarin.png" },
            { country: "Serbie", meta: "Pas d'antenne", image: "images/metas/googlecar/ggcar-serbie.jpg" },
            { country: "Slovaquie", meta: "Double bande orange fluo ou losange blanc dans du noir", image: "images/metas/bornes/bornes-slovaquie.png" },
            { country: "Slovénie", meta: "Beaucoup de forêt", image: "images/continents/reste/slovenie.png" },
            { country: "Suède", meta: "Ligne latérale blanche des pointillés", image: "images/metas/googlecar/ggcar-serbie.jpg" },
            { country: "Suisse", meta: "Montagneux et architecture typique", image: "images/metas/paysages/suisse.jpg" },
            { country: "Ukraine", meta: "Avant de voiture rouge", image: "images/metas/googlecar/ggcar-ukraine.jpg" }
        ]
    },
    {
        "Océanie": [
            { country: "Australie", meta: "Ligne centrale et latéral blanche dont centrale souvant double", image: "images/continents/reste/australie.png" },
            { country: "Guam", meta: "Grande antenne à l'avant droit", image: "images/metas/googlecar/ggcar-guam.jpg" },
            { country: "Îles Christmas", meta: "Petite remorque blanche", image: "images/metas/googlecar/ggcar-ilechristmas.png" },
            { country: "Îles Cocos", meta: "Remorque et forme de pot retourné à l'avant droit", image: "images/continents/reste/ilescocos.png" },
            { country: "Îles Mariannes du Nord", meta: "Grande antenne à l'avant droit", image: "images/metas/googlecar/ggcar-guam.jpg" },
            { country: "Nouvelle-Zélande", meta: "Bollard planche avec carré rouge à droite et carré rouge coupé par du blanc à gauche", image: "images/continents/reste/nouvellezelande.jpg" },
            { country: "Samoa américaines", meta: "Petite remorque noire", image: "images/metas/googlecar/ggcar-samoa.png" }
        ]
    }
];




// Fonction pour afficher les métas sur la page
function displayMetaData(metaData) {
    const carteContainer = document.querySelector('.carte-container');

    // Vider et afficher l'élément .carte-container si présent
    if (carteContainer) {
        carteContainer.innerHTML = '';
        carteContainer.style.display = 'none';
    }
    
    const blockContainer = document.getElementById('block-container');
    blockContainer.innerHTML = '';
    metaData.forEach(meta => {
        const blockItem = document.createElement('div');
        blockItem.classList.add('block');
        blockItem.innerHTML = `
            <h2>${meta.title}</h2>
            <p>${meta.description}</p>      
        `;
        
        // Ajout d'un événement de clic à chaque bloc de méta
        blockItem.addEventListener('click', function() {
            displayCountriesForMeta(meta.title);
        });

        // Ajouter l'image dans chaque bloc
        const image = document.createElement('img');
        image.src = meta.imageSrc;
        image.classList.add('block-image');
        blockItem.appendChild(image);

        blockContainer.appendChild(blockItem);
    });
}

function displayMetaList() {
    const blockContainer = document.getElementById('block-container');
    blockContainer.innerHTML = '';
    displayMetaData(metaData);
}

// Fonction pour afficher les pays associés à une méta spécifique
function displayCountriesForMeta(metaTitle) {
    const blockContainer = document.getElementById('block-container');
    blockContainer.innerHTML = '';
    window.selectedMeta = metaTitle;

    // Trouver l'objet correspondant à la méta dans metaToCountriesMap
    const metaObj = metaToCountriesMap.find(obj => obj.hasOwnProperty(metaTitle));

    if (metaObj) {
        // Récupérer la liste de pays associée à la méta
        const countries = metaObj[metaTitle];

        // Vérifier si la liste de pays existe et n'est pas vide
        if (countries && countries.length > 0) {
            // Récupérer l'élément .carte-container
            const carteContainer = document.querySelector('.carte-container');

            // Vider et afficher l'élément .carte-container si présent
            if (carteContainer) {
                carteContainer.innerHTML = '';
                carteContainer.style.display = 'block';
            }

            countries.forEach(countryData => {
                const blockItem = document.createElement('div');
                blockItem.classList.add('block');

                // Vérifier si le nom du pays contient le mot "carte"
                if (countryData.country.toLowerCase().includes('carte')) {
                    blockItem.innerHTML = `
                        <h2>${countryData.country}</h2>
                        <p>${countryData.info}</p>
                        <img src="${countryData.image}" alt="${countryData.country}" class="block-image">
                    `;
                    // Ajouter le bloc au conteneur .carte-container
                    if (carteContainer) {
                        carteContainer.appendChild(blockItem);
                    }
                } else {
                    blockItem.innerHTML = `
                        <h2>${countryData.country}</h2>
                        <p>${countryData.info}</p>
                        <img src="${countryData.image}" alt="${countryData.country}" class="block-image">
                    `;
                    // Ajouter le bloc au conteneur principal
                    blockContainer.appendChild(blockItem);
                }
            });
        } else {
            const errorItem = document.createElement('div');
            errorItem.classList.add('block');
            errorItem.textContent = "Aucun pays associé à cette méta.";
            blockContainer.appendChild(errorItem);
        }
    } else {
        const errorItem = document.createElement('div');
        errorItem.classList.add('block');
        errorItem.textContent = "Méta non trouvée.";
        blockContainer.appendChild(errorItem);
    }

    // Ajouter le bouton "retour"
    const backButton = document.createElement('button');
    backButton.textContent = "Retour";
    backButton.addEventListener('click', displayMetaList); // Appelle la fonction pour afficher la liste des métas
    blockContainer.appendChild(backButton);
    selectedMeta = null;
}


// Fonction pour afficher les continents sur la page
function displayContinents(continents) {
    const carteContainer = document.querySelector('.carte-container');

            // Vider et afficher l'élément .carte-container si présent
            if (carteContainer) {
                carteContainer.innerHTML = '';
                carteContainer.style.display = 'none';
            }

    const blockContainer = document.getElementById('block-container');
    blockContainer.innerHTML = '';
    continents.forEach(continent => {
        const blockItem = document.createElement('div');
        blockItem.classList.add('block');
        blockItem.innerHTML = `
            <h2>${continent.name}</h2>  
            <img src="${continent.image}" alt="${continent.name}" class="block-image">
        `;

        // Ajout d'un événement de clic à chaque bloc de méta
        blockItem.addEventListener('click', function() {
            displayCountriesForContinent(continent.name);
        });

        blockContainer.appendChild(blockItem);
    });
}

// Fonction pour afficher les pays en fonction des continents
function displayCountriesForContinent(continentTitle) {
    const blockContainer = document.getElementById('block-container');
    blockContainer.innerHTML = '';
    window.selectedContinent = continentTitle;

    // Trouver l'objet correspondant à la méta dans continentToCountriesMap
    const continentObj = continentToCountriesMap.find(obj => obj.hasOwnProperty(continentTitle));

    if (continentObj) {
        // Récupérer la liste de pays associée au continent
        const countries = continentObj[continentTitle];
        // Vérifier si la liste de pays existe et n'est pas vide
        if (countries && countries.length > 0) {
            // Récupérer l'élément .carte-container
            const carteContainer = document.querySelector('.carte-container');

            // Vider et afficher l'élément .carte-container si présent
            if (carteContainer) {
                carteContainer.innerHTML = '';
                carteContainer.style.display = 'block';
            }

            countries.forEach(countryData => {
                const blockItem = document.createElement('div');
                blockItem.classList.add('block');
                blockItem.innerHTML = `
                    <h2>${countryData.country}</h2>
                    <p>${countryData.meta}</p>
                    <img src="${countryData.image}" alt="${countryData.country}" class="block-image">
                `;

                // Ajouter le bloc au conteneur principal
                blockContainer.appendChild(blockItem);
            });
        } else {
            const errorItem = document.createElement('div');
            errorItem.classList.add('block');
            errorItem.textContent = "Aucun pays associé à ce continent.";
            blockContainer.appendChild(errorItem);
        }
    } else {
        const errorItem = document.createElement('div');
        errorItem.classList.add('block');
        errorItem.textContent = "Continent non trouvé.";
        blockContainer.appendChild(errorItem);
    }

    // Ajouter le bouton "retour"
    const backButton = document.createElement('button');
    backButton.textContent = "Retour";
    backButton.addEventListener('click', displayContinentList); // Appelle la fonction pour afficher la liste des continent
    blockContainer.appendChild(backButton);
    selectedContinent = null;
}

function displayContinentList() {
    const blockContainer = document.getElementById('block-container');
    blockContainer.innerHTML = '';
    displayContinents(continentsData);
}

// Afficher les métas lors du chargement initial de la page
window.onload = function() {
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');

    sortSelect.addEventListener('change', function() {
        updateContent();
    });

    searchInput.addEventListener('input', function() {
        updateContent();
    });

    updateContent();
}

// Fonction pour mettre à jour le contenu en fonction de la sélection de tri et de la recherche
function updateContent() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const sortSelect = document.getElementById('sort-select');
    const selectedSort = sortSelect.options[sortSelect.selectedIndex].value;

    try {
        if (selectedSort === 'continent') {
            if(selectedContinent != null){
                const filteredCountriesForContinentData = continentToCountriesMap.filter(countries => countries.name.toLowerCase().includes(searchTerm));
                displayContinents(filteredCountriesForContinentData);
            }
            else{
                const filteredContinentsData = continentsData.filter(continent => continent.name.toLowerCase().includes(searchTerm));
                displayContinents(filteredContinentsData);
            }
        } else {
            // Filtrer les métadonnées en fonction du titre, de la description (et éventuellement de la catégorie si elle existe)
            const filteredMetaData = metaData.filter(meta => {
                return meta.title.toLowerCase().includes(searchTerm) ||
                       meta.description.toLowerCase().includes(searchTerm) ||
                       (meta.category && meta.category.toLowerCase().includes(searchTerm));
            });
            displayMetaData(filteredMetaData);
        }
    } catch (error) {
        console.error(error); // Gérer les erreurs de manière appropriée
        // Afficher un message d'erreur à l'utilisateur
    }
}
