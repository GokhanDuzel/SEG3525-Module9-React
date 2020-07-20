import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "To get started, edit <1>src/App.js</1> and save to reload.",
            "Home":"Home",
            "Shop":"Shop",
            "Professional Reviews":"Professional Reviews",
            "Your friendly game reviewer":"Your friendly game reviewer",
            "Explore it!":"Explore it!",
            wow_home:"World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft fantasy universe. World of Warcraft takes place within the Warcraft world of Azeroth, approximately four years after the events at the conclusion of Blizzard's previous Warcraft release, Warcraft III: The Frozen Throne. The game was announced in 2001, and was released for the 10th anniversary of the Warcraft franchise on November 23, 2004. Since launch, World of Warcraft has had eight major expansion packs produced for it: The Burning Crusade, Wrath of the Lich King, Cataclysm, Mists of Pandaria, Warlords of Draenor, Legion, Battle for Azeroth, and Shadowlands.",
            f:"Final Fantasy XV is an action role-playing game developed and published by Square Enix as part of the  Final Fantasy series. It was released for the PlayStation 4 and Xbox One in 2016, Microsoft Windows in 2018,   and Stadia as a launch title in 2019. The game features an open world environment and action-based battle system, incorporating quick-switching weapons, elemental magic, and other features such as vehicle travel and camping. The base campaign was later expanded with downloadable content (DLC), adding further gameplay options such as additional playable characters and multiplayer.",
            s:"Styx: Master of Shadows is a stealth video game developed by Cyanide Studios for Microsoft Windows,  PlayStation 4 and Xbox One. The game is a prequel, and the second video game to take place in the world  established by 2012's Of Orcs and Men.",
            w:"The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer  CD Projekt and is based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the  2011 game The Witcher 2: Assassins of Kings and the third main installment in The Witcher's video game series, played in an open world with a third-person perspective.",
            i:"The Binding of Isaac is an indie roguelike video game designed by Edmund McMillen and Florian Himsl,  initially released in 2011 for Microsoft Windows; the game was later ported for OS X, and Linux. The game's title and plot are inspired by the Biblical story of the Binding of Isaac. In the game, Isaac's mother receives a message from God demanding the life of her son as proof of her faith, and Isaac, fearing for his life, flees into the monster-filled basement of their home where he must fight to survive.",
            v:"Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games,  for Microsoft Windows. Announced under the codename Project A in October 2019, the game began a closed  beta with limited access on April 7, 2020, and was fully released on June 2, 2020.",
            u:"Undertale is a role-playing video game created by indie developer Toby Fox. The player controls a child who  has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by  a magic barrier. The player meets various monsters during the journey back to the surface. Some monsters mightengagethe player in a fight.",

        }
      },
      fr: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
          "Home":"Accueil",
          "Shop":"Boutique",
          "Professional Reviews":"Critiques Professionels",
          "Your friendly game reviewer":"Votre critique de jeu amical",
          "Explore it!":"Explorez-le!",
          wow_home:"World of Warcraft (WoW) est un jeu de rôle en ligne massivement multijoueur (MMORPG) sorti en 2004 par Blizzard Entertainment. Il s'agit du quatrième jeu sorti dans l'univers fantastique de Warcraft. World of Warcraft se déroule dans le monde Warcraft d'Azeroth, environ quatre ans après les événements à la fin de la précédente version de Blizzard Warcraft, Warcraft III: The Frozen Throne. Le jeu a été annoncé en 2001 et a été lancé pour le 10e anniversaire de la franchise Warcraft le 23 novembre 2004. Depuis son lancement, World of Warcraft a produit huit packs d'extension majeurs: The Burning Crusade, Wrath of the Lich King, Cataclysm, Mists of Pandaria, Warlords of Draenor, Legion, Battle for Azeroth et Shadowlands.",
          f:"Final Fantasy XV est un jeu de rôle d'action développé et publié par Square Enix dans le cadre de la série  Final Fantasy. Il est sorti sur PlayStation 4 et Xbox One en 2016, Microsoft Windows en 2018,  et Stadia en tant que titre de lancement en 2019. Le jeu propose un environnement mondial ouvert et un système de combat basé sur l'action , incorporant armes à commutation rapide, magie élémentaire et autres fonctionnalités telles que le voyage en véhicule et le camping . La campagne de base a ensuite été élargie avec du contenu téléchargeable (DLC), ajoutant des options de gameplay supplémentaires telles que des personnages jouables supplémentaires et multijoueur.",
          s:"Styx: Master of Shadows est un jeu vidéo furtif développé par Cyanide Studios pour Microsoft Windows,   PlayStation 4 et Xbox One. Le jeu est une préquelle, et le deuxième jeu vidéo à avoir lieu dans le monde   créé par Of Orcs and Men en 2012.",
          w:"The Witcher 3: Wild Hunt est un jeu de rôle d'action 2015 développé et publié par le développeur polonais   CD Projekt et basé sur la série The Witcher de romans fantastiques d'Andrzej Sapkowski. Il s'agit de la suite du jeu   2011 The Witcher 2: Assassins of Kings et du troisième volet principal de la série de jeux vidéo The Witcher, joué dans un monde ouvert avec une perspective à la troisième personne.",
          i:"The Binding of Isaac est un jeu vidéo roguelike indépendant conçu par Edmund McMillen et Florian Himsl,   initialement publié en 2011 pour Microsoft Windows; le jeu a ensuite été porté pour OS X et Linux.   Le titre et l'intrigue du jeu sont inspirés de l'histoire biblique de La reliure d'Isaac. Dans le jeu, la mère d'Isaac reçoit un message de Dieu exigeant la vie de son fils comme preuve de sa foi, et Isaac, craignant pour sa vie, s'enfuit dans le sous-sol rempli de monstres de leur maison où il doit se battre pour survivre.",
          v:"Valorant est un jeu de tir tactique multijoueur gratuit à la première personne développé et publié par Riot Games,   pour Microsoft Windows. Annoncé sous le nom de code Project A en octobre 2019, le jeu a commencé une bêta fermée   avec un accès limité le 7 avril 2020 et a été entièrement publié le 2 juin 2020.",
          u:"Undertale est un jeu vidéo de rôle créé par le développeur indépendant Toby Fox. Le joueur contrôle un enfant qui   est tombé dans le métro: une grande région isolée sous la surface de la Terre, séparée par   une barrière magique. Le joueur rencontre différents monstres pendant le voyage de retour à la surface. Certains monstres pourraient engager le joueur dans un combat.",

        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
