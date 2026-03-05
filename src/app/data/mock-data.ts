import { Ceca } from '../models/ceca.model';
const mintsIonia: Ceca[] = [
  {
    id: 10,
    nom: 'Ephesus',
    regio: 'Ionia',
    lat: 37.9484,
    lng: 27.3639,
    periode: 'c. 650–50 BC',
    descripcio:
      'One of the most prolific mints of the ancient world. Famous for its issues depicting the bee and the stag (symbols of Artemis). During the Hellenistic period it became the primary production centre for cistophori.',
    monedes: [
      'Electrum stater',
      'Didrachm with bee',
      'Rhodian-standard tetradrachm',
      'Cistophoric tetradrachm',
    ],
  },
  {
    id: 11,
    nom: 'Miletus',
    regio: 'Ionia',
    lat: 37.5311,
    lng: 27.2789,
    periode: 'c. 650–400 BC',
    descripcio:
      'Pioneer in the coining of electrum. Its most famous type is the roaring lion-head looking back. The city established one of the most influential weight standards of the Archaic period.',
    monedes: ['Electrum stater (lion)', 'Electrum trite', 'Silver obol'],
  },
  {
    id: 12,
    nom: 'Phocaea',
    regio: 'Ionia',
    lat: 38.6703,
    lng: 26.7553,
    periode: 'c. 600–400 BC',
    descripcio:
      "Mint known for its electrum hektai bearing the seal (phōkē) as a punning device. Its coins circulated widely across the Mediterranean thanks to the city's extensive colonial network.",
    monedes: ['Electrum hekte', 'Electrum stater with seal', 'Silver drachm'],
  },
  {
    id: 13,
    nom: 'Samos',
    regio: 'Ionia',
    lat: 37.6919,
    lng: 26.9392,
    periode: 'c. 600–200 BC',
    descripcio:
      'Island mint famous for the frontal lion-scalp on the obverse and the prow of a war-galley (samaina) on the reverse. The types reflect the naval power of Samos under the tyrant Polycrates.',
    monedes: ['Samian tetradrachm', 'Silver drachm', 'Electrum stater'],
  },
  {
    id: 14,
    nom: 'Clazomenae',
    regio: 'Ionia',
    lat: 38.3553,
    lng: 26.7761,
    periode: 'c. 600–400 BC',
    descripcio:
      'Notable for its magnificent 4th-century BC tetradrachms with a frontal Apollo and a swan — considered one of the masterpieces of Greek numismatic art.',
    monedes: [
      'Archaic didrachm',
      'Tetradrachm with Apollo',
      'Drachm with swan',
    ],
  },
  {
    id: 15,
    nom: 'Erythrae',
    regio: 'Ionia',
    lat: 38.3833,
    lng: 26.4833,
    periode: 'c. 600–200 BC',
    descripcio:
      'The mint frequently used the image of Heracles in the lion-skin with a quiver. Its output spans from Archaic electrum fractions to Hellenistic bronzes.',
    monedes: ['Electrum hekte', 'Drachm of Heracles', 'Hellenistic bronze'],
  },
  {
    id: 16,
    nom: 'Colophon',
    regio: 'Ionia',
    lat: 38.1158,
    lng: 27.1422,
    periode: 'c. 600–400 BC',
    descripcio:
      "A mint specialising in small silver denominations (drachms and hemidrachms) showing Apollo's head and a lyre. It was a consistent and homogeneous production centre.",
    monedes: ['Apollo drachm', 'Lyre hemidrachm', 'Tetradrachm (rare)'],
  },
  {
    id: 17,
    nom: 'Teos',
    regio: 'Ionia',
    lat: 38.1758,
    lng: 26.7842,
    periode: 'c. 600–300 BC',
    descripcio:
      'Recognised by its type of a seated griffin with one raised paw. The design closely resembles that of Abdera, since the Teians refounded that Thracian city.',
    monedes: ['Griffin stater', 'Silver drachm', 'Electrum hekte'],
  },
  {
    id: 18,
    nom: 'Magnesia ad Maeandrum',
    regio: 'Ionia',
    lat: 37.8522,
    lng: 27.4247,
    periode: 'c. 400–200 BC',
    descripcio:
      'Famous for its 2nd-century BC "stephanophoric" (laurel-wreathed) tetradrachms showing Artemis and a bull surrounded by a garland.',
    monedes: [
      'Stephanophoric tetradrachm',
      'Artemis drachm',
      'Themistocles tetradrachm',
    ],
  },
  {
    id: 19,
    nom: 'Priene',
    regio: 'Ionia',
    lat: 37.6597,
    lng: 27.2975,
    periode: 'c. 400–200 BC',
    descripcio:
      'The mint struck coins with a helmeted Athena head and the tripod of Apollo. Its Hellenistic issues typically carry clearly legible magistrate names.',
    monedes: ['Athena drachm', 'Priene bronze', 'Hellenistic tetradrachm'],
  },
];
const mintsThrace: Ceca[] = [
  {
    id: 20,
    nom: 'Abdera',
    regio: 'Thrace',
    lat: 40.9317,
    lng: 24.9839,
    periode: 'c. 545–350 BC',
    descripcio:
      'Mint founded by Teian colonists. Its coins are celebrated for the seated griffin, very similar to issues of the mother-city, but with detailed local magistrate names.',
    monedes: ['Griffin tetradrachm', 'Silver stater', 'Abdera drachm'],
  },
  {
    id: 21,
    nom: 'Byzantium',
    regio: 'Thrace',
    lat: 41.0082,
    lng: 28.9784,
    periode: 'c. 480–200 BC',
    descripcio:
      'Situated on the Bosphorus, the mint used a bull standing on a dolphin as its main emblem. In the Hellenistic period it mass-produced Lysimachean-type tetradrachms.',
    monedes: [
      'Siglos with bull',
      'Lysimachean tetradrachm',
      'Byzantium drachm',
    ],
  },
  {
    id: 22,
    nom: 'Maroneia',
    regio: 'Thrace',
    lat: 40.8775,
    lng: 25.5208,
    periode: 'c. 550–200 BC',
    descripcio:
      "Mint closely linked to the cult of Dionysus. Its coins often show a galloping horse or a bunch of grapes, symbol of the region's wine production.",
    monedes: ['Dionysos tetradrachm', 'Horse didrachm', 'Maroneia bronze'],
  },
  {
    id: 23,
    nom: 'Lysimachia',
    regio: 'Thrace',
    lat: 40.5833,
    lng: 26.8833,
    periode: 'c. 309–281 BC',
    descripcio:
      'Founded by Lysimachus of Thrace as his royal capital. The mint issued the iconic tetradrachms with a deified Alexander the Great bearing the horns of Ammon.',
    monedes: ['Lysimachean tetradrachm', 'Gold stater', 'Lysimachia bronze'],
  },
  {
    id: 24,
    nom: 'Ainos',
    regio: 'Thrace',
    lat: 40.7358,
    lng: 26.0817,
    periode: 'c. 475–350 BC',
    descripcio:
      'Considered one of the most artistically accomplished mints of antiquity. Outstanding for its frontal Hermes head wearing a petasos and a goat on the reverse.',
    monedes: ['Hermes tetradrachm', 'Goat drachm', 'Silver diobol'],
  },
  {
    id: 25,
    nom: 'Mesembria',
    regio: 'Thrace',
    lat: 42.6589,
    lng: 27.7353,
    periode: 'c. 480–200 BC',
    descripcio:
      'Doric colony on the Black Sea. Its most recognisable iconography is the frontal Corinthian helmet (a visual pun on the prefix "Mes-") and a wheel or sun on the reverse.',
    monedes: [
      'Helmet diobol',
      'Posthumous Alexander tetradrachm',
      'Sun bronze',
    ],
  },
  {
    id: 26,
    nom: 'Kypsela',
    regio: 'Thrace',
    lat: 40.9167,
    lng: 26.3833,
    periode: 'c. 400–350 BC',
    descripcio:
      "An important inland mint whose bronze issues show a cup (kypselē) — a punning device on the city's name.",
    monedes: ['Cup bronze', 'Hermes unit'],
  },
  {
    id: 27,
    nom: 'Sestos',
    regio: 'Thrace',
    lat: 40.3311,
    lng: 26.3969,
    periode: 'c. 400–200 BC',
    descripcio:
      'Controlled the Hellespont crossing. The mint is notable for depictions of Demeter and Hermes, as well as its later association with the legend of Hero and Leander.',
    monedes: ['Demeter bronze', 'Hermes drachm', 'Lyre unit'],
  },
];
const mintsPontus: Ceca[] = [
  {
    id: 30,
    nom: 'Sinope',
    regio: 'Pontus',
    lat: 42.0267,
    lng: 35.1511,
    periode: 'c. 490–100 BC',
    descripcio:
      'The most important mint of the Black Sea. Famous for its drachms with the head of the nymph Sinope and an eagle on a dolphin. It was the principal financial centre of the region.',
    monedes: ['Sinope drachm', 'Eagle didrachm', 'Mithradatic bronze'],
  },
  {
    id: 31,
    nom: 'Amisos',
    regio: 'Pontus',
    lat: 41.2928,
    lng: 36.3313,
    periode: 'c. 400–70 BC',
    descripcio:
      'A major bronze production centre under Mithradates VI. Its coins usually show a helmeted Athena or Perseus; the reverse features the aegis with the Gorgon head.',
    monedes: ['Silver siglos', 'Aegis bronze', 'Mithradatic tetradrachm'],
  },
  {
    id: 32,
    nom: 'Trapezus',
    regio: 'Pontus',
    lat: 41.0027,
    lng: 39.7167,
    periode: 'c. 400–200 BC',
    descripcio:
      "Situated at the far end of the silk route, its Archaic and Classical coinage often showed a table (trapeza) — a punning type on the city's name.",
    monedes: ['Table drachm', 'Silver stater', 'Hellenistic bronze'],
  },
  {
    id: 33,
    nom: 'Amaseia',
    regio: 'Pontus',
    lat: 40.65,
    lng: 35.8333,
    periode: 'c. 300–70 BC',
    descripcio:
      'The original capital of the Pontic kings. Struck mainly royal bronzes with Zeus or Hermes during the Mithradatic Wars.',
    monedes: ['Zeus bronze', 'Mithradates unit', 'Royal drachm'],
  },
  {
    id: 34,
    nom: 'Pharnakeia',
    regio: 'Pontus',
    lat: 40.91,
    lng: 38.38,
    periode: 'c. 180–70 BC',
    descripcio:
      'Founded by Pharnaces I. The mint produced high-quality bronzes with Perseus or the lunar deity Men, common in the Anatolian pantheon.',
    monedes: ['Perseus bronze', 'Men unit'],
  },
  {
    id: 35,
    nom: 'Komana Pontike',
    regio: 'Pontus',
    lat: 40.35,
    lng: 36.65,
    periode: 'c. 85–65 BC',
    descripcio:
      'A temple-city dedicated to the goddess Ma. Its late issues are bronzes celebrating local victories or religious cult.',
    monedes: ['Ma bronze', 'Victory unit'],
  },
  {
    id: 36,
    nom: 'Kerasos',
    regio: 'Pontus',
    lat: 40.9172,
    lng: 38.3878,
    periode: 'c. 180–70 BC',
    descripcio:
      'Colony of Sinope known for exporting cherries. Its monetary output is limited but follows the weight standards of the Pontic kingdom.',
    monedes: ['Kerasos bronze', 'Silver hemidrachm'],
  },
];

const mintsAeolis: Ceca[] = [
  {
    id: 40,
    nom: 'Kyme',
    regio: 'Aeolis',
    lat: 38.8892,
    lng: 27.0583,
    periode: 'c. 480–200 BC',
    descripcio:
      'The largest and most important city of Aeolis. Its Hellenistic tetradrachms are distinguished by the Amazon Kyme on the obverse and a horse beside an oinochoe (wine-jug) on the reverse.',
    monedes: ['Amazon tetradrachm', 'Silver stater', 'Horse bronze'],
  },
  {
    id: 41,
    nom: 'Myrina',
    regio: 'Aeolis',
    lat: 38.8333,
    lng: 27.0167,
    periode: 'c. 400–200 BC',
    descripcio:
      'Known for its elegant Hellenistic tetradrachms depicting Apollo of Gryneum holding a laurel branch and a patera.',
    monedes: ['Apollo tetradrachm', 'Silver drachm', 'Bronze unit'],
  },
  {
    id: 42,
    nom: 'Mytilene',
    regio: 'Aeolis',
    lat: 39.1061,
    lng: 26.5544,
    periode: 'c. 550–400 BC',
    descripcio:
      'Situated on the island of Lesbos, it was a world centre for electrum hekte production, sharing a monetary convention with Phocaea to standardise weight and purity.',
    monedes: ['Electrum hekte', 'Silver stater', 'Billon (mixed silver)'],
  },
  {
    id: 43,
    nom: 'Methymna',
    regio: 'Aeolis',
    lat: 39.3672,
    lng: 26.175,
    periode: 'c. 550–400 BC',
    descripcio:
      'Second most important mint of Lesbos. Its Archaic iconography includes a boar and an Athena helmet, often with inscriptions in the early local alphabet.',
    monedes: ['Boar stater', 'Athena drachm', 'Hemidrachm'],
  },
  {
    id: 44,
    nom: 'Aigai',
    regio: 'Aeolis',
    lat: 38.8417,
    lng: 27.2,
    periode: 'c. 300–200 BC',
    descripcio:
      "A hill-town that issued coins with Apollo's head and a ferret or goat-head, playing visually on its name (aix = goat in Greek).",
    monedes: ['Aigai tetradrachm', 'Goat bronze', 'Hellenistic drachm'],
  },
  {
    id: 45,
    nom: 'Temnos',
    regio: 'Aeolis',
    lat: 38.5833,
    lng: 27.0833,
    periode: 'c. 400–200 BC',
    descripcio:
      'Famous for its posthumous Alexander tetradrachms, distinguishable by a mint mark comprising a wine-jug (oinochoe) and vine tendrils.',
    monedes: ['Alexander tetradrachm', 'Dionysus bronze', 'Silver drachm'],
  },
  {
    id: 46,
    nom: 'Larisa Phrikonis',
    regio: 'Aeolis',
    lat: 38.6667,
    lng: 27.0833,
    periode: 'c. 400–350 BC',
    descripcio:
      'Issued small bronze and silver coins with a three-quarter nymph Larisa head, imitating the celebrated designs from Larissa in Thessaly.',
    monedes: ['Nymph drachm', 'Amphora bronze'],
  },
];
const mintsDoris: Ceca[] = [
  {
    id: 50,
    nom: 'Knidos',
    regio: 'Doris',
    lat: 36.6853,
    lng: 27.3756,
    periode: 'c. 550–50 BC',
    descripcio:
      'The most important mint of Doris in Asia. Famous for its lion-head coins (Archaic) and the Aphrodite of Cnidus types. It was a vital centre of maritime worship and commerce.',
    monedes: [
      'Aphrodite drachm',
      'Silver tetradrachm',
      'Aphrodite Euploia stater',
    ],
  },
  {
    id: 51,
    nom: 'Kos',
    regio: 'Doris',
    lat: 36.8922,
    lng: 27.2872,
    periode: 'c. 480–50 BC',
    descripcio:
      'Island mint known for its crab and discus-thrower (discobolus) emblems. In the Hellenistic period its tetradrachms showed a Heracles head and a crab with a club.',
    monedes: ['Discobolus tetradrachm', 'Crab drachm', 'Asklepios bronze'],
  },
  {
    id: 52,
    nom: 'Rhodes',
    regio: 'Doris',
    lat: 36.4444,
    lng: 28.2222,
    periode: 'c. 408–50 BC',
    descripcio:
      'The dominant mint of the region. Its coins with a frontal radiate Helios head (sun god) and a rose (rhodon) on the reverse served as the "hard currency" of the Hellenistic Mediterranean.',
    monedes: ['Helios tetradrachm', 'Rose didrachm', 'Plinthophoric drachm'],
  },
  {
    id: 53,
    nom: 'Halikarnassos',
    regio: 'Doris',
    lat: 37.0378,
    lng: 27.4242,
    periode: 'c. 480–200 BC',
    descripcio:
      "City of the famous Mausoleum. Its mint issued coins with Apollo's head and an eagle or a ship's prow, reflecting its strategic and naval importance.",
    monedes: ['Apollo drachm', 'Mausolos tetradrachm', 'Carian bronze'],
  },
  {
    id: 54,
    nom: 'Lindos',
    regio: 'Doris',
    lat: 36.0914,
    lng: 28.0867,
    periode: 'c. 600–408 BC',
    descripcio:
      'One of the three cities of Rhodes before the synoikism. Its Archaic coinage is characterised by a roaring lion-head and geometric incuse squares on the reverse.',
    monedes: ['Lion stater', 'Silver triobol'],
  },
  {
    id: 55,
    nom: 'Ialysos',
    regio: 'Doris',
    lat: 36.4167,
    lng: 28.15,
    periode: 'c. 500 BC',
    descripcio:
      'Rhodian city that, before unification, struck coins with the fore-part or full body of a boar, often accompanied by an eagle.',
    monedes: ['Boar stater', 'Silver drachm'],
  },
  {
    id: 56,
    nom: 'Kameiros',
    regio: 'Doris',
    lat: 36.3333,
    lng: 27.9167,
    periode: 'c. 600–480 BC',
    descripcio:
      'Archaic mint famous for its fig-leaf (sykē) coins — an agricultural product key to the region in antiquity.',
    monedes: ['Fig-leaf stater', 'Silver didrachm'],
  },
];

const mintsLydia: Ceca[] = [
  {
    id: 60,
    nom: 'Sardes',
    regio: 'Lydia',
    lat: 38.4883,
    lng: 28.0403,
    periode: 'c. 650–50 BC',
    descripcio:
      'The most important mint in numismatic history. Here the first electrum staters were struck, along with the famous "Croeseids" showing a confronted lion and bull. It continued as a royal mint under Persians, Seleucids, and Romans.',
    monedes: [
      'Gold Croeseid',
      'Silver Croeseid',
      'Electrum stater',
      'Cistophoric tetradrachm',
    ],
  },
  {
    id: 61,
    nom: 'Tralles',
    regio: 'Lydia',
    lat: 37.8608,
    lng: 27.8428,
    periode: 'c. 400–50 BC',
    descripcio:
      'A regionally important mint that flourished especially in the Hellenistic period. One of the main cistophoric emission centres, producing coins marked with the sacred basket (cista mystica) of Dionysus.',
    monedes: ['Cistophoric tetradrachm', 'Tralles didrachm', 'Zeus bronze'],
  },
  {
    id: 62,
    nom: 'Philadelphia',
    regio: 'Lydia',
    lat: 38.3511,
    lng: 28.5164,
    periode: 'c. 200–50 BC',
    descripcio:
      'Late Hellenistic mint known for bronze coins with Hermes or Zeus and Nike on the reverse. Many issues carry legible local magistrate names.',
    monedes: ['Philadelphia bronze', 'Helios unit', 'Hellenistic drachm'],
  },
  {
    id: 63,
    nom: 'Magnesia ad Sipylum',
    regio: 'Lydia',
    lat: 38.6122,
    lng: 27.4261,
    periode: 'c. 300–50 BC',
    descripcio:
      'Scene of the famous battle between Rome and the Seleucids (190 BC). Its mint issued silver and bronze with Artemis on the bust and Apollo leaning on a tripod.',
    monedes: ['Magnesia tetradrachm', 'Artemis bronze', 'Silver drachm'],
  },
  {
    id: 64,
    nom: 'Thyatira',
    regio: 'Lydia',
    lat: 38.9211,
    lng: 27.8406,
    periode: 'c. 300–50 BC',
    descripcio:
      'A Macedonian colony that became an active commercial centre. Its Hellenistic monetary production focuses on bronze, often with Apollo or Heracles heads.',
    monedes: ['Thyatira bronze', 'Heracles unit', 'Cistophorus (rare)'],
  },
  {
    id: 65,
    nom: 'Blaundos',
    regio: 'Lydia',
    lat: 38.3533,
    lng: 29.2133,
    periode: 'c. 200–50 BC',
    descripcio:
      'Mint on the Phrygian border. Its coins show influences from both regions, with Apollo motifs and the legend BLAUNDEON in Greek characters.',
    monedes: ['Blaundos bronze', 'Apollo unit'],
  },
];

const mintsCaria: Ceca[] = [
  {
    id: 70,
    nom: 'Halikarnassos',
    regio: 'Caria',
    lat: 37.0378,
    lng: 27.4242,
    periode: 'c. 480–200 BC',
    descripcio:
      'Capital of the Carian kingdom under the Hekatomnids. Celebrated for the Mausolos tetradrachms showing a frontal Apollo head and Zeus Labraundos holding a double-headed axe (labrys).',
    monedes: ['Mausolos tetradrachm', 'Apollo drachm', 'Pixodaros tetradrachm'],
  },
  {
    id: 71,
    nom: 'Knidos',
    regio: 'Caria',
    lat: 36.6853,
    lng: 27.3756,
    periode: 'c. 550–50 BC',
    descripcio:
      'Part of the Dorian Hexapolis integrated into Caria. Famous for the Aphrodite of Cnidus. Its coins are artistic benchmarks from the Archaic to the late Hellenistic period.',
    monedes: ['Aphrodite drachm', 'Lion tetradrachm', 'Silver stater'],
  },
  {
    id: 72,
    nom: 'Mylasa',
    regio: 'Caria',
    lat: 37.3131,
    lng: 27.7842,
    periode: 'c. 400–200 BC',
    descripcio:
      'Ancient capital of Caria before the move to Halikarnassos. Issued coins with the labrys (double axe) motif and later Hellenistic series with the Helios head.',
    monedes: ['Helios tetradrachm', 'Zeus Labraundos bronze', 'Silver drachm'],
  },
  {
    id: 73,
    nom: 'Kaunos',
    regio: 'Caria',
    lat: 36.8258,
    lng: 28.6225,
    periode: 'c. 550–400 BC',
    descripcio:
      'Known for its enigmatic Archaic series showing a winged running goddess; the reverse features a griffin or geometric incuse.',
    monedes: ['Winged goddess stater', 'Griffin drachm', 'Silver hemidrachm'],
  },
  {
    id: 74,
    nom: 'Aphrodisias',
    regio: 'Caria',
    lat: 37.7083,
    lng: 28.7233,
    periode: 'c. 200–50 BC',
    descripcio:
      "City dedicated to Aphrodite. In the Hellenistic period it began issuing bronzes with the goddess's bust and an eagle or Eros, though its peak came in the Imperial era.",
    monedes: ['Aphrodite bronze', 'Eros unit'],
  },
  {
    id: 75,
    nom: 'Alabanda',
    regio: 'Caria',
    lat: 37.5933,
    lng: 27.9158,
    periode: 'c. 300–200 BC',
    descripcio:
      'Active mint that issued Alexander-type tetradrachms and later coins with Pegasus and the city ethnic (ALABANDEON).',
    monedes: ['Pegasus tetradrachm', 'Apollo drachm', 'Hellenistic bronze'],
  },
  {
    id: 76,
    nom: 'Iasos',
    regio: 'Caria',
    lat: 37.2769,
    lng: 27.4289,
    periode: 'c. 480–300 BC',
    descripcio:
      'Coastal city famous for its obverse type of a youth swimming with a dolphin, based on a well-known local legend.',
    monedes: ['Dolphin drachm', 'Artemis bronze', 'Silver hemidrachm'],
  },
];
const mintsLycia: Ceca[] = [
  {
    id: 80,
    nom: 'Xanthos',
    regio: 'Lycia',
    lat: 36.3567,
    lng: 29.3183,
    periode: 'c. 500–300 BC',
    descripcio:
      'Capital of the Lycian League. The principal dynastic mint, famous for its triskeles coins and Lycian-alphabet legends identifying rulers such as Kuprlli or Erbbina.',
    monedes: ['Triskeles stater', 'Silver didrachm', 'Silver fractions'],
  },
  {
    id: 81,
    nom: 'Phaselis',
    regio: 'Lycia',
    lat: 36.525,
    lng: 30.5522,
    periode: 'c. 550–200 BC',
    descripcio:
      "An important port city. Its mint is unmistakable for its canting type: the prow of a warship (galley), alluding to the city's naval power.",
    monedes: [
      'Ship-prow stater',
      'Posthumous Alexander tetradrachm',
      'Silver drachm',
    ],
  },
  {
    id: 82,
    nom: 'Olympos',
    regio: 'Lycia',
    lat: 36.3917,
    lng: 30.475,
    periode: 'c. 200–50 BC',
    descripcio:
      'Member of the Lycian League. Its Hellenistic issues follow the federal coinage pattern: Apollo head and lyre.',
    monedes: ['Lycian League drachm', 'Apollo bronze', 'Hemidrachm'],
  },
  {
    id: 83,
    nom: 'Patara',
    regio: 'Lycia',
    lat: 36.2608,
    lng: 29.3131,
    periode: 'c. 480–200 BC',
    descripcio:
      "Home of the oracle of Apollo. The mint struck coins with Apollo's head and the tripod, often with the inscription PATA in Greek or Lycian script.",
    monedes: ['Silver stater', 'Apollo drachm', 'League bronze'],
  },
  {
    id: 84,
    nom: 'Myra',
    regio: 'Lycia',
    lat: 36.2589,
    lng: 29.9847,
    periode: 'c. 200–50 BC',
    descripcio:
      "One of the six largest cities of the League. Its coins show Apollo's head and, on the reverse, Artemis Ephesia or the city's own local symbol.",
    monedes: ['Federal drachm', 'Artemis bronze', 'League unit'],
  },
  {
    id: 85,
    nom: 'Telmessos',
    regio: 'Lycia',
    lat: 36.6217,
    lng: 29.115,
    periode: 'c. 480–200 BC',
    descripcio:
      'Border mint with Caria. Struck coins for local dynasts and later Alexander-type tetradrachms with a tripod as the mint mark.',
    monedes: ['Silver tetradrachm', 'Apollo bronze', 'Dynastic stater'],
  },
  {
    id: 86,
    nom: 'Limyra',
    regio: 'Lycia',
    lat: 36.3433,
    lng: 30.1683,
    periode: 'c. 390–360 BC',
    descripcio:
      "Base of the dynast Perikles, who led the Satraps' Revolt. Its mint is known for remarkably realistic three-quarter portraits of the ruler.",
    monedes: ['Perikles dynastic stater', 'Limyra bronze', 'Silver hemidrachm'],
  },
];

const mintsMysia: Ceca[] = [
  {
    id: 90,
    nom: 'Kyzikos',
    regio: 'Mysia',
    lat: 40.3858,
    lng: 27.8819,
    periode: 'c. 600–300 BC',
    descripcio:
      'Famous for its "Cyzicenes" — electrum staters that were one of the most important trade coins of antiquity. Always identifiable by the presence of a tunny fish (thunnos) beneath the main obverse type.',
    monedes: ['Electrum stater', 'Electrum hekte', 'Silver tetradrachm'],
  },
  {
    id: 91,
    nom: 'Pergamon',
    regio: 'Mysia',
    lat: 39.1325,
    lng: 27.1842,
    periode: 'c. 400–50 BC',
    descripcio:
      'Capital of the Attalid kingdom. The main emission centre of cistophori — silver coins bearing the cista mystica and serpents — which dominated the Asian market in the Hellenistic era.',
    monedes: [
      'Cistophoric tetradrachm',
      'Philetairos tetradrachm',
      'Attalid bronze',
    ],
  },
  {
    id: 92,
    nom: 'Lampsakos',
    regio: 'Mysia',
    lat: 40.3431,
    lng: 26.6811,
    periode: 'c. 500–200 BC',
    descripcio:
      'A high-quality mint known for its gold staters with the fore-part of Pegasus. Later issued artistically refined Lysimachean tetradrachms.',
    monedes: ['Gold Pegasus stater', 'Electrum stater', 'Silver tetradrachm'],
  },
  {
    id: 93,
    nom: 'Parion',
    regio: 'Mysia',
    lat: 40.4167,
    lng: 27.0667,
    periode: 'c. 480–50 BC',
    descripcio:
      "Port city on the Hellespont. Its Archaic drachms with a full-face Gorgoneion (Medusa sticking out her tongue) are icons of the region's numismatics.",
    monedes: ['Gorgoneion drachm', 'Silver hemidrachm', 'Hellenistic bronze'],
  },
  {
    id: 94,
    nom: 'Abydos',
    regio: 'Mysia',
    lat: 40.1947,
    lng: 26.4047,
    periode: 'c. 550–200 BC',
    descripcio:
      'Situated at the narrowest point of the Hellespont. The mint showed a standing eagle; in the Hellenistic period, an Artemis bust and an eagle with spread wings.',
    monedes: ['Electrum stater', 'Artemis tetradrachm', 'Eagle drachm'],
  },
  {
    id: 95,
    nom: 'Adramyteion',
    regio: 'Mysia',
    lat: 39.5833,
    lng: 27.0167,
    periode: 'c. 400–50 BC',
    descripcio:
      'Mint on the gulf of the same name. Issued cistophori and bronzes with Zeus or Athena, often linked to local cult.',
    monedes: ['Cistophoric tetradrachm', 'Athena drachm', 'Adramyteion bronze'],
  },
  {
    id: 96,
    nom: 'Alexandria Troas',
    regio: 'Mysia',
    lat: 39.7525,
    lng: 26.1603,
    periode: 'c. 300–50 BC',
    descripcio:
      'Founded by Antigonus and renamed by Lysimachus. Famous for its large Hellenistic tetradrachms with Apollo Smintheus and a grazing horse.',
    monedes: ['Apollo tetradrachm', 'Horse drachm', 'Troad bronze'],
  },
];

const mintsBithynia: Ceca[] = [
  {
    id: 100,
    nom: 'Nikomedeia',
    regio: 'Bithynia',
    lat: 40.7667,
    lng: 29.9167,
    periode: 'c. 264–74 BC',
    descripcio:
      'Capital of the Bithynian kingdom, founded by Nikomedes I. Its royal mint produced high-quality tetradrachms with realistic portraits of the Bithynian kings and Zeus on the reverse.',
    monedes: [
      'Nikomedes II tetradrachm',
      'Prusias tetradrachm',
      'Royal bronze',
    ],
  },
  {
    id: 101,
    nom: 'Kalchedon',
    regio: 'Bithynia',
    lat: 40.9911,
    lng: 29.0272,
    periode: 'c. 480–200 BC',
    descripcio:
      'Situated opposite Byzantium. Its mint shared iconography with its neighbour: a bull standing on an ear of wheat or a dolphin, symbolising agricultural and maritime wealth.',
    monedes: [
      'Posthumous Lysimachean tetradrachm',
      'Bull drachm',
      'Silver siglos',
    ],
  },
  {
    id: 102,
    nom: 'Kios',
    regio: 'Bithynia',
    lat: 40.4333,
    lng: 29.15,
    periode: 'c. 400–300 BC',
    descripcio:
      "A vital commercial port. Its gold and silver coins are famous for the Apollo head and ship's prow with a magistrate name, linked to Hellespont trade routes.",
    monedes: ['Gold stater', 'Prow drachm', 'Apollo hemidrachm'],
  },
  {
    id: 103,
    nom: 'Herakleia Pontike',
    regio: 'Bithynia',
    lat: 41.2831,
    lng: 31.4167,
    periode: 'c. 400–300 BC',
    descripcio:
      'One of the most powerful Greek colonies on the Black Sea. Outstanding for coins of its tyrants (e.g. Klearchos) with Heracles and Dionysus heads.',
    monedes: ['Heracles didrachm', 'Dionysus drachm', 'Silver tetradrachm'],
  },
  {
    id: 104,
    nom: 'Prusa ad Olympum',
    regio: 'Bithynia',
    lat: 40.1833,
    lng: 29.0667,
    periode: 'c. 230–74 BC',
    descripcio:
      'Founded by king Prusias I. The mint struck mainly bronzes with the royal portrait or Athena, and Zeus or Heracles on the reverse.',
    monedes: ['Prusias bronze', 'Heracles unit', 'Hellenistic drachm'],
  },
  {
    id: 105,
    nom: 'Nikaia',
    regio: 'Bithynia',
    lat: 40.4286,
    lng: 29.7189,
    periode: 'c. 300–74 BC',
    descripcio:
      "Rival city of Nikomedeia. Its Hellenistic output includes bronzes with a Dionysus head and motifs relating to the city's foundation by Antigonus or Lysimachus.",
    monedes: ['Dionysus bronze', 'Victory unit', 'Tetradrachm (rare)'],
  },
  {
    id: 106,
    nom: 'Astakos',
    regio: 'Bithynia',
    lat: 40.7167,
    lng: 29.9,
    periode: 'c. 500 BC',
    descripcio:
      'Archaic mint predating the foundation of Nikomedeia. Its coins are very rare and typically show a lobster or crab (astakos in Greek) as a canting device.',
    monedes: ['Lobster drachm', 'Silver fraction'],
  },
];

export const CEQUES_MOCK: Ceca[] = [
  ...mintsIonia,
  ...mintsThrace,
  ...mintsPontus,
  ...mintsAeolis,
  ...mintsDoris,
  ...mintsLydia,
  ...mintsCaria,
  ...mintsLycia,
  ...mintsMysia,
  ...mintsBithynia,
];
