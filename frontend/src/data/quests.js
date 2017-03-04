const quests = [
  {
    password: 'Pixels',
    icon: 'favorite',
    title: 'Loading... 0%',
    media: '0.jpg',
    description: 'Bienvenida a tu propia gymkana de aniversario portátil! La primera prueba es facilita para que te sirva de toma de contacto. También he creado tu propio avatar en 8bits! No he conseguido sacarte más parecida, así que es lo que hay.',
    tags: ['Avatar', 'Nombre'],
    clues: ['Vir', 'Mujer']
  },
  {
    password: 'Virginia',
    icon: 'theaters',
    title: 'Delorean',
    media: 'delorean.gif',
    description: 'Vas a tener que usar tu flamante coche nuevo para resolver algunas de las pruebas más cabronas, pero eso será más adelante. Este vehículo también era híbrido, y solo consumía 1,21GW por viaje! Aunque se estropeaba fácilmente...',
    tags: ['California', 'Placa'],
    clues: ['Coche', 'Matrícula']
  },
  {
    password: '1656JVS',
    icon: 'tv',
    title: 'Familia unida',
    media: 'sherlock.jpg',
    description: 'No sería un juego de acertijos completo sin nuestro detective favorito, verdad? Una pena que haya terminado la serie, aunque la tercera película está al caer. Y, viendo el lado bueno, al menos Mary ya está MUERTA!',
    tags: ['Familiar', 'Perdido'],
    clues: ['Nombre', 'Mujer']
  },
  {
    password: 'Eurus',
    icon: 'theaters',
    title: 'Atracciones',
    media: 'park.gif',
    description: 'Recuerdo perfectamente gritar como una nenaza y esconderme debajo de la butaca del cine cuando salió el tiranosaurio a comerse a los niños del coche. Pedazo efectos especiales había entonces. Solo tenía 7 años, vale?!',
    tags: ['Bastón', 'Piedra'],
    clues: ['Mosquito', 'Savia']
  },
  {
    password: 'Ambar',
    icon: 'games',
    title: 'Woka Woka Woka',
    media: 'pacman.gif',
    description: 'Sabías que este videojuego de recreativas está inspirado en las películas de Alien? Se supone que los fantasmas representan al bicho, mientras huyes de él por la nave recuperando instrumental valioso. A que es curioso?',
    tags: ['Color', 'Favorito'],
    clues: ['Fantasma', 'Nombre']
  },
  {
    password: 'Blinky',
    icon: 'brush',
    title: 'Luz! Fuego!',
    media: 'goku.gif',
    description: 'Destrucción! El mundo puede ser una ruina! No lo podemos permitir! Esto sí eran dibujos animados y no la mierda que echan hoy en día. Aunque irónicamente siempre pensé que promovían un pelín la violencia entre unos jóvenes bastante impresionables.',
    tags: ['Nombre', 'Verdadero'],
    clues: ['Japonés', 'Hombre']
  },
  {
    password: 'Kakaroto',
    icon: 'tv',
    title: 'Infiltrados',
    media: 'cylon.gif',
    description: 'Lo mejor de esta serie de ciencia ficción era que muchos Cylons no sabían que lo eran y se creían humanos. Te dejaba con el culo torcido cuando se descubría un nuevo modelo que había estado latente desde el principio de la serie. Sabías que es un remake de otra serie más antigua de los 80?',
    tags: ['Rubia', 'Modelo'],
    clues: ['Clave', 'Mujer']
  },
  {
    password: 'Caprica6',
    icon: 'theaters',
    title: 'Cómete esto!',
    media: 'ash.gif',
    description: 'Aunque tiene algunas escenas especialmente brutas (como por ejemplo la del árbol haciendole cositas a la chica), te ríes de lo lindo con la saga original. El remake de la peli que hicieron el año pasado es absolutamente desagradable, porque pierde el rollo comedia negra y pasa totalmente al terror. Pero la serie me encanta porque precisamente sigue esa línea! Si hasta tiene videojuegos!',
    tags: ['Libro', 'Piel'],
    clues: ['Muertos', 'Nombre']
  },
  {
    password: 'Necronomicon',
    icon: 'brush',
    title: 'Alquimia',
    media: 'alchemist.gif',
    description: 'La verdad es que no está nada mal, la voy a colocar en el tercer puesto, justo detrás de Naruto Shippuden. La historia está bastante bien y es muy original. Es cierto que no tiene nada de relleno y que van directo al grano.',
    tags: ['Color', 'Favorito'],
    clues: ['Apellido', 'Personaje']
  },
  {
    password: 'Mustang',
    icon: 'chrome_reader_mode',
    title: 'Dunas',
    media: 'dune.gif',
    description: 'Una novela río repleta de familias nobles, traiciones, conspiraciones y luchas por el poder. Y gusanos de arena! No pude terminar la saga de libros original porque empezó a repetirse siempre lo mismo, pero tal vez debería volver a intentarlo.',
    tags: ['Droga', 'Gusano'],
    clues: ['Especia', 'Arrakis']
  },
  {
    password: 'Melange',
    icon: 'theaters',
    title: 'Me duele el pecho',
    media: 'alien.gif',
    description: 'Esto sí que era suspense y claustrofobia en estado puro. Las películas de ciencia ficción de los 80 tienen un hueco especial en mi corazón. Luego lo mezclaron con Predator y se jodió. Luego hicieron Prometeus y se jodió todavía más. Veremos este año con Covenant si pueden salvarla del olvido. Pero siempre nos quedarán las originales!',
    tags: ['Familia', 'Especie'],
    clues: ['Alien', 'Nombre']
  },
  {
    password: 'Xenomorfo',
    icon: 'games',
    title: 'Dame madera',
    media: 'aoe2.jpg',
    description: 'Al ataque! Rush de escorpiones! Touche de torres! Empalizad sus recursos! Matad a sus aldeanos! Violad a sus caballos y huíd en sus mujeres, eso les confundirá! Llegamos a un nivel de competición tal en el que si no matabas al jabalí antes del minuto 1.30, habías perdido.',
    tags: ['Truco', 'Recurso'],
    clues: ['Chat', 'Palabra']
  },
  {
    password: 'WOODSTOCK',
    icon: 'tv',
    title: 'Almas de metal',
    media: 'westworld.gif',
    description: 'Así es como se titula en latinoamérica. Y me gusta mucho la sinpsis: "Una oscura odisea sobre el amanecer de la conciencia artificial y el futuro del pecado". Me recuerda mucho a los Cylon de Galactica, nunca sabes quién puede ser uno de ellos. Hasta los caballos! Te acuerdas del spoiler de BernArnold? Oops...',
    tags: ['Parque', 'Nombre'],
    clues: ['Empresa', 'Atracciones']
  },
  {
    password: 'Delos',
    icon: 'games',
    title: 'Oddworld',
    media: 'oddworld.jpg',
    description: 'Una auténtica maravilla de saga. Los rompecabezas, la dificultad, los paisajes de los distintos mundos y los fondos diseñados a mano. Y esa mezcla de mundo avanzado tecnológicamente y al mismo tiempo obsoleto y tribal que me encanta en las obras de ciencia ficción. Sin duda es mi juego favorito de todos los tiempos.',
    tags: ['Raza', 'Pueblo'],
    clues: ['Abe', 'Protagonista']
  },
  {
    password: 'Mudokon',
    icon: 'theaters',
    title: 'Tambores',
    media: 'jumanji.gif',
    description: 'Esto sí que era un juego de mesa. Ni apostando dinero ni hostias. La verdad es que la idea molaba un montón. Sabías que hay segunda parte? Y que están planeando hacer un remake de la original?',
    tags: ['Secuela', 'Película'],
    clues: ['Nombre', 'Espacio']
  },
  {
    password: 'Zathura',
    icon: 'chrome_reader_mode',
    title: 'Kvothe',
    media: 'kvothe.jpg',
    description: 'Una de mis sagas de lectura favoritas. Sus explicaciones, aprendizaje y representación de la magia es la más descriptiva que he leído. Muy alquimica y original. A ver si sale el tercero de una vez!',
    tags: ['Viento', 'Sabio'],
    clues: ['Tercero', 'Libro']
  },
  {
    password: 'Piedra',
    icon: 'tv',
    title: 'Su puta madre',
    media: 'himym.gif',
    description: 'Tantos años esperando para conocer a la madre de los chicos y mujer de Ted, y al final va y se muere, para volver con Robin como tendría que haber sido desde el principio. Spoiler!',
    tags: ['Spoiler', 'Madre'],
    clues: ['Nombre', 'Muerta']
  },
  {
    password: 'Tracy',
    icon: 'toys',
    title: 'Playmobil',
    media: 'playmobil.jpg',
    description: 'Bueno, eso de "mobil" no se yo. Pobrecillos, no tenían codos. No podían beber. Ni comer. Ni masturbarse! La verdad es que yo tenía el mítico barco. Pero lo cierto es que me molaban más construir con los bloques de Lego que montar escenas de personajes.',
    tags: ['Marca', 'Española'],
    clues: ['Empresa', 'Licencia']
  },
  {
    password: 'Famobil',
    icon: 'games',
    title: 'Fatality',
    media: 'fatality.gif',
    description: 'Un machacabotones para los que no sabíamos los combos más poderosos. Sabías que su éxito fue el uso pionero de la captura de movimientos usando cámaras stop motion con maestros de artes marciales de verdad?',
    tags: ['Personaje', 'Lagarto'],
    clues: ['Outworld', 'Saurian']
  },
  {
    password: 'Reptile',
    icon: 'theaters',
    title: 'Ack, ack, ack!',
    media: 'mars.gif',
    description: 'Como los guionistas no sabían lo que iban a decir los marcianos cuando estaban escribiendo el guión, escribieron "ack ack ack" para sustituirlo después, pero luego se conservó durante la filmación porque hizo gracia, y se quedó para la versión final.',
    tags: ['Idea', 'Original'],
    clues: ['Juego', 'Tipo']
  },
  {
    password: 'Cartas',
    icon: 'chrome_reader_mode',
    title: 'Cimientos',
    media: 'foundation.jpg',
    description: 'Otra novela río, esta vez futurista, sobre conspiraciones, partidos políticos, cultos religiosos, ansias de poder, y mucha intriga. Ah, y científicos capaces de analizar el curso de la historia para predecir cientos o miles de años de futuro por delante. Yo creo que se equivocaron al traducirla, porque Foundation significa Cimientos.',
    tags: ['Nombre', 'Ciclo'],
    clues: ['Trilogía', 'Libro']
  },
  {
    password: 'Trantor',
    icon: 'brush',
    title: 'Caída de gravedad',
    media: 'gravity.jpg',
    description: 'El simple nombre sugiere misterio. El dibujo, el guión, y el punto cómico a esta loca historia de sucesos paranormales y sobrenaturales a lo Expediente X en un pequeño pueblecito de las montañas, la convierten en una de las mejores series de animación que he visto. Pero solo tiene 2 temporadas.',
    tags: ['Dipper', 'Mabel'],
    clues: ['Familia', 'Apellido']
  },
  {
    password: 'Pines',
    icon: 'tv',
    title: 'Quiero creer',
    media: 'believe.jpg',
    description: 'Tenía algunos capítulos bastante escabrosos que luego no me dejaban dormir. Hasta la musiquita acojonaba cuando eras un crío. Y ahora un poco también.',
    tags: ['Serie', 'Final'],
    clues: ['Capítulo', 'Nombre']
  },
  {
    password: 'Verdad',
    icon: 'theaters',
    title: 'El Germano',
    media: 'sleepy.gif',
    description: 'Aunque me gustó leer el cuento original, la película es bastante más interesante y con una trama más enrevesada. De mis favoritas. Sin embargo la serie es una bazofia terrible.',
    tags: ['Nombre', 'Inspector'],
    clues: ['Crane', 'Protagonista']
  },
  {
    password: 'Ichabod',
    icon: 'place',
    title: 'Loading... 25%',
    media: '25.jpg',
    description: 'Vas por el 25% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs... Aunque si no quieres, siempre puedes hacer trampas y llamar para conseguir cumplir la misión, no me importa.',
    tags: ['Mapa', 'Saldaña'],
    clues: ['Laura', 'Socky']
  },
  {
    password: 'Ornitorrinco',
    icon: 'theaters',
    title: 'Scott Pilgrim',
    media: 'scott.gif',
    description: 'Una divertida película de frikis basada en su precedente cómic. El hecho de ver la vida como una partida de videojuego siempre me ha hecho mucha gracia. Las vidas extra son muy importantes para luchar contra exnovios celosos...',
    tags: ['Novia', 'Nombre'],
    clues: ['Pelo', 'Rosa']
  },
  {
    password: 'Ramona',
    icon: 'chrome_reader_mode',
    title: 'El elfo oscuro',
    media: 'drizzt.jpg',
    description: 'Otra de mis sagas de fantasía favoritas. En concreto me gusta el tema de la Antípoda Oscura subterránea, reino malvado y corrupto gobernado por mujeres, y que un Drow de buen corazón, que da la casualidad de ser el mejor espadachín del mundo, se exilie a la superficie buscando su lugar.',
    tags: ['Noble', 'Casa'],
    clues: ['Nombre', 'Drow']
  },
  {
    password: 'Menzoberranzan',
    icon: 'theaters',
    title: 'Los Guardianes',
    media: 'gotg.jpg',
    description: 'Lo confieso, no los conocía de nada hasta que salieron en el cine, pero desde entonces me encantan y hasta colecciono sus cómics! Este año sale la segunda parte, y tenemos que ir a verla.',
    tags: ['Rocket', 'Expediente'],
    clues: ['Experimento', 'Clave']
  },
  {
    password: '89P13',
    icon: 'tv',
    title: 'Uve',
    media: 'v.jpg',
    description: 'Muy buena e infravalorada, a mi parecer. Me refiero a la nueva claro, la vieja no había por dónde cogerla. Un duelo de inteligencia entre dos mujeres y un plan maesto de alienígenas reptilianos comedores de ratones que quieren apoderarse del planeta. Con aparición estelar de la anterior reina!',
    tags: ['Rubia', 'Pelirroja'],
    clues: ['Anna', 'Apellido']
  },
  {
    password: 'Baccarin',
    icon: 'games',
    title: 'Media Vida',
    media: 'hl.jpg',
    description: 'Una de mis teorías favoritas con respecto a tu trabajo (porque tengo varias) es que también tenéis un Departamento de Materiales Anómalos, con elementos extraterrestres inestables con los que experimentáis y conseguís abrir portales interdimensionales! Sería más divertido, no?',
    tags: ['Base', 'Nombre'],
    clues: ['Instalaciones', 'Complejo']
  },
  {
    password: 'Blackmesa',
    icon: 'theaters',
    title: 'No los mojes',
    media: 'gremlin.gif',
    description: 'Per mira qué peluchones. Eran tan mooonos... Hasta que los mojabas, les daba el sol o les alimentabas después de media noche. Luego se convertían en una especie de bichos ávidos de sangre humana. O algo así era, no?',
    tags: ['Nombre', 'Raza'],
    clues: ['Bicho', 'Original']
  },
  {
    password: 'Mogwai',
    icon: 'games',
    title: 'Fontanero',
    media: 'mario.gif',
    description: '"Lo siento Mario, la princesa está en otro castillo." Pues ya podías habermelo dicho antes de venir, no? Tras 30 años, sigue siendo la saga de videojuegos más vendida de la historia.',
    tags: ['Enemigo', 'Apellido'],
    clues: ['Rey', 'Koopa']
  },
  {
    password: 'Morton',
    icon: 'tv',
    title: 'Jabones y teclados',
    media: 'robot.jpg',
    description: 'Aunque sea muy moderna, esta serie sobre hacking (en mi opinion un remake del club de la lucha) no podía faltar si estamos haciendo un juego de acertijos sobre la cultura friki. Además, es como jugar al Watch Dogs! Por cierto vaya spoiler de cartel no?',
    tags: ['Hackers', 'Grupo'],
    clues: ['Activista', 'Nombre']
  },
  {
    password: 'fsociety',
    icon: 'theaters',
    title: 'Gemelos',
    media: 'starwars.jpg',
    description: 'Todos sabemos que existen un montón de escenas eliminadas de Star Wars, pero no fue hasta que, cuando empecé a comprar Legos en AliExpress, me enviaron un droide bastante diferente al que yo recordaba. Pues resulta que existió de verdad!',
    tags: ['Droide', 'Nombre'],
    clues: ['Números', 'Letras']
  },
  {
    password: 'R2Q5',
    icon: 'games',
    title: 'Recreativas',
    media: 'slug.gif',
    description: 'Una viciada de las recreativas. Tardes y monedas de 25 pesetas tiradas matando todo lo matable y muriendo todo lo morible. Te acuerdas de que encontramos una recreativa en un bar del Húmedo que aún lo tiene?',
    tags: ['Enemigo', 'Final'],
    clues: ['Militar', 'General']
  },
  {
    password: 'Morden',
    icon: 'brush',
    title: 'Finn & Jake',
    media: 'time.jpg',
    description: 'Una gran serie animada para niños y no tan niños, con una trama principal perfectamente hilada si te vas fijando bien en cada episodio. Concretamente, la triste historia del loco Rey Hielo es acojonante, de verdad.',
    tags: ['Animal', 'Enemigo'],
    clues: ['Todos', 'Capítulos']
  },
  {
    password: 'Caracol',
    icon: 'tv',
    title: 'A metamorfosearse!',
    media: 'rangers.gif',
    description: 'Esta serie era casposa de cojones, pero creo que todos la veíamos cuando éramos niños. Al parecer tiene tantas secuelas que resulta absurdo intentar ver todos los episodios.',
    tags: ['Enemigos', 'Chustas'],
    clues: ['Desechables', 'Inútiles']
  },
  {
    password: 'Masillas',
    icon: 'theaters',
    title: 'Deep Thought',
    media: 'deep.jpg',
    description: 'Esta respuesta al sentido de la vida, el universo y todo lo demás es la más famosa del cine. Es el único código que temía que descubieras introduciendo cosas al azar, así que si has llegado aquí así, vuelve atrás y no hagas trampas!',
    tags: ['Ordenador', 'Respuesta'],
    clues: ['Número', 'Todo']
  },
  {
    password: '42',
    icon: 'games',
    title: 'Zombies lentos',
    media: 'resident.gif',
    description: 'Otra de las teorías que tengo sobre tu trabajo (ya te dije que tenía varias) es que desarrolláis en secreto armas biológicas experimentales basadas en la mutación con virus carnívoros muy agresivos. Como Bernadette en Big Bang Theory!',
    tags: ['Nombre', 'Empresa'],
    clues: ['Corporación', 'Maligna']
  },
  {
    password: 'Umbrella',
    icon: 'theaters',
    title: 'Es hora de morir',
    media: 'runner.gif',
    description: '"Todos estos momentos se perderán en el tiempo como lágrimas en la lluvia". Otra de esas frases épicas que pasaron a la historia hace años y nunca pierden su significado. Todos queremos vivir eternamente y ser recordados.',
    tags: ['Modelo', 'Replicante'],
    clues: ['Roy', 'Robot']
  },
  {
    password: 'Nexus6',
    icon: 'games',
    title: 'Crash',
    media: 'crash.gif',
    description: 'Otro de los grandes de mi infancia. Ya sabes que siempre suelo pasarme todos los juegos que tengan la opción en difícil y al 100%, no? Es como un mini ToC que padezco. Pues este me lo pude pasar al 105%, literalmente.',
    tags: ['Gemelo', 'Máscara'],
    clues: ['Malvado', 'Nombre']
  },
  {
    password: 'UkaUka',
    icon: 'chrome_reader_mode',
    title: 'Fújur!',
    media: 'neverending.gif',
    description: 'Otra preciosa historia infantil de dragones, princesas en castillos, reinos encantados y un héroe con la misión de salvar a todo el mundo. En sí misma es una apología a la lectura y al poder de la imaginación que tienen todos los niños y no deberíamos perder al crecer.',
    tags: ['Cura', 'Enfermedad'],
    clues: ['Amuleto', 'Nombre']
  },
  {
    password: 'Auryn',
    icon: 'games',
    title: 'Guerra',
    media: 'wow.jpg',
    description: 'Otra viciada de juego. El WoW no estaba mal, pero el Warcraft III era una maravilla. Te descojonabas con los Orcos haciendo el gañán y diciendo bobadas según ibas jugando.',
    tags: ['Espada', 'Hielo'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Frostmourne',
    icon: 'theaters',
    title: 'Vampiros',
    media: 'blade.gif',
    description: 'En mi humilde opinión, y aunque hay varias bastante decentes, esta es la única saga de vampiros que merece algo la pena, en el terreno de la ciencia ficción pura. Van Helsing no está mal tampoco.',
    tags: ['Personaje', 'Nombre'],
    clues: ['Real', 'Brooks']
  },
  {
    password: 'Eric',
    icon: 'tv',
    title: 'Ciencia límite',
    media: 'fringe.jpg',
    description: 'Otra de obligado visionado. Para mí, es bastante bastante mejor que Expendiente X. Todos los capítulos son de un tema tabú de la ciencia ficción llevado al extremo del peligro, pero también tiene una historia por detrás que une todos los episodios.',
    tags: ['Calvos', 'Enemigos'],
    clues: ['Inglés', 'Sombreros']
  },
  {
    password: 'Observers',
    icon: 'theaters',
    title: 'Rien de rien',
    media: 'inception.gif',
    description: 'La representación del subconsciente de cada uno en el mundo de los sueños y el poder "hackear" una mente para obtener información sin que el objetivo lo sepa, me resulta fascinante y extremadamente original. Y aunque es opinión personal, yo creo que la peonza acaba cayendo.',
    tags: ['Escaleras', 'Infinitas'],
    clues: ['Nombre', 'Dibujante']
  },
  {
    password: 'Penrose',
    icon: 'games',
    title: 'Fuego++',
    media: 'ff.jpg',
    description: 'Espadas y magia, la base de mi frikismo. Somos de mundos muy distintos. Tú, del Legend of Zelda y Nintendo. Yo, del Final Fantasy y Sony. Pero frikis al fin y al cabo.',
    tags: ['Personaje', 'Apellido'],
    clues: ['FF9', 'Nombre']
  },
  {
    password: 'Ornitier',
    icon: 'theaters',
    title: 'Simios',
    media: 'apes.jpg',
    description: 'Y otra de mis teorías favoritas sobre tu trabajo (ya te dije que tenía varias) es que experimentáis con modificadores de la inteligencia para intentar curar el alzheimer y que se os va de las manos creando simios superintelgentes que se rebelarán y nos matarán a todos.',
    tags: ['Doctor', 'Nombre'],
    clues: ['Simio', 'Pueblo']
  },
  {
    password: 'Zaius',
    icon: 'tv',
    title: 'Trapitos',
    media: 'muppets.jpg',
    description: 'Recuerdo que veía semanalmente este show con mis padres en el salón cuando era muy pequeño! De aquella era como el Saturday Night Live, con artistas invitados, música en directo y sketches muy divertidos. Qué recuerdos!',
    tags: ['Inglés', 'Verde'],
    clues: ['Rana', 'Muñeco']
  },
  {
    password: 'Kermit',
    icon: 'place',
    title: 'Loading... 50%',
    media: '50.jpg',
    description: 'Vas por el 50% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs... Aunque si no quieres, siempre puedes hacer trampas y llamar para conseguir cumplir la misión, no me importa.',
    tags: ['Mapa', 'León'],
    clues: ['Jaime', 'Kissy']
  },
  {
    password: 'Sabroson',
    icon: 'games',
    title: 'Sálvalos a todos',
    media: 'lemmings.gif',
    description: 'Un grandísimo juego de lógica que adoraba de pequeño. Intentar salvarlos a todos era una locura, y en algunas ocasiones era hasta imposible, pero siempre era un reto intentarlo!',
    tags: ['Empresa', 'Actual'],
    clues: ['Original', 'DMA Design']
  },
  {
    password: 'Rockstar',
    icon: 'tv',
    title: 'Los pinos',
    media: 'wayward.jpg',
    description: 'Ya sabes que la intro de esta serie me encanta. Y la mitad de la primera temporada es un WTF en toda regla, aunque luego flojee hacia el final y sobre todo tras saber el secreto. Por eso mismo la segunda temporada no tiene ningún aliciente.',
    tags: ['Año', 'Congelado'],
    clues: ['Futuro', 'Real']
  },
  {
    password: '4028',
    icon: 'toys',
    title: 'Meccagoen',
    media: 'mecano.jpg',
    description: 'Desde pequeño me encantaba construir cosas. Empecé con los Lego, luego los Meccano, y cuando confirmé que era un manazas, un inútil con los rotrin y que no podría dedicarme a la arquitectura, me dediqué a la informática! Ahora puedo diseñar cosas tan chulas como este juego.',
    tags: ['Nombre', 'Original'],
    clues: ['Licencia', '1920']
  },
  {
    password: 'Metaling',
    icon: 'brush',
    title: 'La casa árbol',
    media: 'simpsons.gif',
    description: 'Ya no me hacen ni puta gracia los capítulos nuevos, ni siquiera la película, pero los viejos aún son buenísimos. Mis preferidos son los especiales de Halloween de la Casa Árbol del Terror.',
    tags: ['Brujas', 'Noche'],
    clues: ['Árbol', 'Terror']
  },
  {
    password: 'Halloween',
    icon: 'tv',
    title: 'Larga vida',
    media: 'spock.jpg',
    description: 'El reboot que han hecho de las películas es extremadamente decente. Pero la serie original sigue siendo un pestiño.',
    tags: ['Apellido', 'Nuevo'],
    clues: ['Actor', 'Spock']
  },
  {
    password: 'Quinto',
    icon: 'theaters',
    title: 'Cómo te llamas?',
    media: 'max.gif',
    description: 'Este debería ser el ejemplo perfecto de cómo hacer un reboot/remake bien. Si las originales eran de culto, esta se ha convertirá en leyenda.',
    tags: ['Protagonista', 'Apellido'],
    clues: ['Australiano', 'Palabra']
  },
  {
    password: 'Rockatansky',
    icon: 'chrome_reader_mode',
    title: 'Conectado',
    media: 'rpo.jpg',
    description: 'Otra de lo que parece que será mi futura saga favorita. Espero que la película esté a la altura del libro.',
    tags: ['Enemigos', 'Nombre'],
    clues: ['Clave', '6']
  },
  {
    password: 'Sixers',
    icon: 'games',
    title: 'Perfect!',
    media: 'tekken.gif',
    description: 'Tengo grabados a fuego en la memoria los combos más complicados de varios personajes. Reviento con Xiayou y King.',
    tags: ['Personaje', 'Secreto'],
    clues: ['Doctor', 'Ruso']
  },
  {
    password: 'Boskonovitch',
    icon: 'tv',
    title: 'Héroes y villanos',
    media: 'heroes.jpg',
    description: 'Salva a la animadora, salva al mundo. Si tan sólo se hubiera quedado en la primera temporada...',
    tags: ['Malo', 'Poderes'],
    clues: ['Nombre', 'Enemigo']
  },
  {
    password: 'Sylar',
    icon: 'theaters',
    title: 'Oferta de sierras',
    media: 'saw.gif',
    description: 'Me imagino al paisano comprando en la ferretería cuerdas, bridas, esposas, palas, lejía, antimanchas, cadenas, sopletes, sierras, taladros... Y pagando en efectivo.',
    tags: ['Nick', 'Asesino'],
    clues: ['Inglés', 'Nombre']
  },
  {
    password: 'Jigsaw',
    icon: 'tv',
    title: 'Upside down',
    media: 'stranger.gif',
    description: 'Intenté hacerte un gif personalizado con las luces pero la web que lo generaba está caída, así que opté por lo clásico...',
    tags: ['Monstruo', 'Nombre'],
    clues: ['Universo', 'Paralelo']
  },
  {
    password: 'Demogorgon',
    icon: 'games',
    title: 'Isla de los Monos',
    media: 'monkey.gif',
    description: 'Recuerdo esta saga con mucho cariño. Ya no se hacen juegos con este mimo y detalle. En ella se basa Piratas del Caribe.',
    tags: ['La', 'X'],
    clues: ['Marca', 'El']
  },
  {
    password: 'Lugar',
    icon: 'tv',
    title: 'Luciérnaga',
    media: 'firefly.gif',
    description: 'Otra serie que me encanta, que sólo puedo definir como "Future Western".',
    tags: ['Nombre', 'Nave'],
    clues: ['Película', 'Secuela']
  },
  {
    password: 'Serenity',
    icon: 'theaters',
    title: 'El Santo Grial',
    media: 'python.gif',
    description: 'Quién el puente desee atravesar, tres preguntas deberá contestar, o al abismo irá a dar...',
    tags: ['Segundo', 'Tercera'],
    clues: ['Capital', 'Asiria']
  },
  {
    password: 'Ekallatum',
    icon: 'games',
    title: 'La Trifuerza',
    media: 'zelda.gif',
    description: 'Sé que en la trifuerza el valor lo representa Link, la sabiduría Zelda y el poder Ganon, pero quién creó los fragmentos de la trifuerza?',
    tags: ['Color', 'Favorito'],
    clues: ['Nombre', 'Diosa']
  },
  {
    password: 'Din',
    icon: 'tv',
    title: 'Dr. Mande?',
    media: 'who.jpg',
    description: 'Otra que intenté ver en su día y apenas pude con el primer episodio. Pero debo intentarlo de nuevo...',
    tags: ['Enemigos', 'Extraterrestres'],
    clues: ['Androides', 'Malos']
  },
  {
    password: 'Daleks',
    icon: 'theaters',
    title: 'Cables',
    media: 'corto.gif',
    description: 'Aún recuerdo muy bien esta peli en la que creo se basó enteramente Wall-E. De aquella jugaba con Meccanos.',
    tags: ['Robot', 'Nombre'],
    clues: ['SAINT', 'Número']
  },
  {
    password: 'Johnny5',
    icon: 'chrome_reader_mode',
    title: 'El Brujo',
    media: 'wolf.jpg',
    description: 'Cuando juegas al juego te parece que estás leyendo los libros, y cuando lees los libros te parece que estás jugando al juego. Genial!',
    tags: ['Caballo', 'Mote'],
    clues: ['Nombre', 'Español']
  },
  {
    password: 'Sardinilla',
    icon: 'theaters',
    title: 'MIB',
    media: 'mib.gif',
    description: 'Otra de las rayadas de invasiones alienígenas. Pero siempre me pareció una idea muy simpática.',
    tags: ['Animal', 'Personaje'],
    clues: ['Nombre', 'Habla']
  },
  {
    password: 'Frank',
    icon: 'tv',
    title: 'Rompiendo Mal',
    media: 'bb.gif',
    description: 'La prueba viviente de que si le das una oportunidad a algo que no te gusta puede acabar sorprendiéndote sobremanera.',
    tags: ['Vanadio', 'Iridio'],
    clues: ['Elemento', 'Química']
  },
  {
    password: 'VIr',
    icon: 'games',
    title: 'Marcianitos',
    media: 'invaders.gif',
    description: 'Recuerdo con tristeza haberme gastado un dineral en comprarlo original para la Game Boy. Qué tontería de juego.',
    tags: ['Puntuación', 'Capada'],
    clues: ['Máximo', 'Número']
  },
  {
    password: '9990',
    icon: 'theaters',
    title: 'I will be back',
    media: 'terminator.gif',
    description: 'A mí me gustan por este orden: primero la segunda, segundo la tercera, tercero la primera, cuarto la quinta y quinta la cuarta.',
    tags: ['Número', 'Secuencia'],
    clues: ['Orden', 'Código']
  },
  {
    password: '23154',
    icon: 'games',
    title: 'Might & Magic',
    media: 'homam.jpg',
    description: 'Otro de mis juegos favoritos, esta vez de estrategia y rol por turnos. Siempre he tenido debilidad por la nigromancia. Ojo, que no necrofilia!',
    tags: ['Necrópolis', 'Unidad'],
    clues: ['Resucitar', 'Muertos']
  },
  {
    password: 'Esqueletos',
    icon: 'theaters',
    title: '5 de Noviembre',
    media: 'vendetta.gif',
    description: 'Recuerden, recuerden, el 5 de Noviembre. Conspiración, pólvora y traición. No veo la demora y siempre es la hora, de evocarla sin dilación.',
    tags: ['Partido', 'Político'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Norsefire',
    icon: 'place',
    title: 'Loading... 75%',
    media: '75.jpg',
    description: 'Vas por el 75% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs... Aunque si no quieres, siempre puedes hacer trampas y llamar para conseguir cumplir la misión, no me importa.',
    tags: ['Mapa', 'León'],
    clues: ['Janira', 'Jony']
  },
  {
    password: 'Volador',
    icon: 'brush',
    title: 'Nani?!',
    media: 'naruto.gif',
    description: 'No te metas con Naruto! Tiene una historia por detrás que ya la quisiera Dragon Ball o Fullmetal Alchemist. Aunque tenga demasiado relleno.',
    tags: ['Ataque', 'Bola'],
    clues: ['Nombre', 'Japonés']
  },
  {
    password: 'Rasengan',
    icon: 'tv',
    title: 'Quimicefa',
    media: 'got.gif',
    description: 'Estos sí que eran alquimistas y herreros como mandaban los antiguos dioses. Y los nuevos.',
    tags: ['Acero', 'Fuego'],
    clues: ['Verde', 'Negro']
  },
  {
    password: 'Valyrio',
    icon: 'theaters',
    title: 'Multipase',
    media: 'element.gif',
    description: 'Me encantan las películas de futuros en ciudades atestadas y tecnología por todas partes. Aunque luego odio ir a Madrid.',
    tags: ['Raza', 'Alienígenas'],
    clues: ['Extraterrestres', 'Piedras']
  },
  {
    password: 'Mondoshawan',
    icon: 'chrome_reader_mode',
    title: 'Habla y entra',
    media: 'moria.gif',
    description: 'Podría haber sacado algo del Silmarillion que no sacases en la vida. En realidad he optado por un piropazo.',
    tags: ['Hermosa', 'Élfico'],
    clues: ['Tolkien', 'Palabra']
  },
  {
    password: 'Vanya',
    icon: 'theaters',
    title: 'Qué es? Qué es?',
    media: 'jack.gif',
    description: 'Hay luces de color! Qué es? Parece de algodón! Qué es? No creo lo que veo, estoy soñando? No lo sé! Qué injusto es! Qué es?',
    tags: ['Nariz', 'Luz'],
    clues: ['Color', 'Favorito']
  },
  {
    password: 'Zero',
    icon: 'brush',
    title: 'Parodias',
    media: 'rick.jpg',
    description: 'Entiendo que Morty venga de Marty, pero de donde huevos sacaron que el nombre de Rick hace apología al Dr. Emmett?',
    tags: ['Apellido', 'Brown'],
    clues: ['Serie', 'Doctor']
  },
  {
    password: 'Sanchez',
    icon: 'tv',
    title: 'Puto niño',
    media: 'carl.jpg',
    description: 'Odio a Carl. Le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odiooooo!!',
    tags: ['Nombre', 'Mujer'],
    clues: ['Recordado', 'Competición']
  },
  {
    password: 'Andrea',
    icon: 'theaters',
    title: 'Corazoncito',
    media: 'indiana.gif',
    description: 'Quién no ha sentido nunca el deseo de tener en la mano el corazón recién arrancado y aún palpitante de una persona mientras se lo enseñas? Y el de un niño?',
    tags: ['Culto', 'Sacrificio'],
    clues: ['Dios', 'Nombre']
  },
  {
    password: 'Kalimah',
    icon: 'toys',
    title: 'Lego',
    media: 'lego.jpg',
    description: 'Para mi los Lego eran los bloques de construcción, nunca tuve muñequitos. Esos eran los Playmobil. Pero ahora molan mucho y quiero hacer escenas de Star Wars con ellos!',
    tags: ['Material', 'Original'],
    clues: ['Juguetería', 'Dinamarca']
  },
  {
    password: 'Madera',
    icon: 'games',
    title: 'Destruye amistades',
    media: 'worms.jpg',
    description: 'No hay otra definición mejor. Quedar en casa de un amigo para jugar entre varios con la misma pantalla y ver sus corazones romperse cuando aniquilabas sus gusanitos. Sublime.',
    tags: ['Granada', 'Santa'],
    clues: ['Inglés', 'Cántico']
  },
  {
    password: 'Hallelujah',
    icon: 'theaters',
    title: 'Desea saber más?',
    media: 'troopers.gif',
    description: 'Otra peli clásica de ciencia ficción, aunque tenga 3 secuelas que den ganas de vomitar.',
    tags: ['Bichos', 'Planeta'],
    clues: ['Guerra', 'Nombre']
  },
  {
    password: 'Klendathu',
    icon: 'chrome_reader_mode',
    title: 'Tramposos',
    media: 'gollum.gif',
    description: 'Tampoco sería un juego de acertijos completo sin el duelo de acertijos más famoso de todos los tiempos, no?',
    tags: ['Respuesta', 'Último'],
    clues: ['Bilbo', 'Trampa']
  },
  {
    password: 'Anillo',
    icon: 'games',
    title: 'TOC',
    media: 'tetris.gif',
    description: 'Una muestra excelente de lo que frustrante que puede ser tener un poco de ToC. Todo ordenadito de cojones.',
    tags: ['Mezcla', 'Tetra'],
    clues: ['Nombre', 'Deporte']
  },
  {
    password: 'Tennis',
    icon: 'theaters',
    title: 'Ejército',
    media: 'monos.jpg',
    description: 'Otra gran distopía futurista tecnológicamente avanzada en la que el mundo ha sido destruido por un peligroso virus, y consiguen viajar al pasado para evitarlo. La serie mola mil.',
    tags: ['Virus', 'Nombre'],
    clues: ['Serie', 'Película']
  },
  {
    password: 'Kalavirus',
    icon: 'chrome_reader_mode',
    title: 'Eres un mago',
    media: 'merodeador.gif',
    description: 'Siempre me pareció absurdo que artefactos mágicos tan jodidamente poderosos e inclinables hacia el mal como la Capa de Invisibilidad o el Mapa del Merodeador los posean unos preadolescentes.',
    tags: ['Mote', 'Imposible'],
    clues: ['Muerto', 'Traidor']
  },
  {
    password: 'Colagusano',
    icon: 'brush',
    title: 'Año 3000',
    media: 'fry.gif',
    description: 'Mi serie de animación favorita. Más graciosa que los Simpsons, y menos basta que Padre de Familia. Perfecta.',
    tags: ['Tarjeta', 'Pizza'],
    clues: ['Pin', 'Banco']
  },
  {
    password: '1077',
    icon: 'theaters',
    title: 'Trepamuros',
    media: 'spider.jpg',
    description: 'En mi opinión, el único superhéroe de verdad. Un pringao con superpoderes. Como debe ser. Nada de artilugios ni tetazas enormes. Y Tobey lo clava.',
    tags: ['Venom', 'Nieto'],
    clues: ['Carnage', 'Hijo']
  },
  {
    password: 'Toxin',
    icon: 'tv',
    title: 'Kitt, ven, corre!',
    media: 'kitt.gif',
    description: 'Hoy en día ves esta serie y es tan casposa como surrealista, pero cuando era un crío me encantaba.',
    tags: ['Coche', 'Enemigo'],
    clues: ['Malvado', 'Nombre']
  },
  {
    password: 'KARR',
    icon: 'theaters',
    title: 'Estoy dentro',
    media: 'matrix.jpg',
    description: 'Para entender el final de la tercera parte necesitas meterte la pildora roja machacada por la nariz. Y tres rayas.',
    tags: ['Hermano', 'Hermana'],
    clues: ['Transexual', 'Sexo']
  },
  {
    password: 'Wachowski',
    icon: 'games',
    title: 'Dragonborn',
    media: 'skyrim.jpg',
    description: 'Yo antes era un aventurero como tú, pero un día me hirieron con una flecha en la rodilla.',
    tags: ['Fus', 'Ro'],
    clues: ['Grito', 'Muro']
  },
  {
    password: 'Dah',
    icon: 'tv',
    title: 'Ciencia vs fe',
    media: 'lost.gif',
    description: 'La primera serie que me enganchó hasta tal punto de madrugar 4 horas para ver el final en tiempo real, sin subtitular, y con cortes de emisión. Final decepcionante, por cierto.',
    tags: ['Spoiler', 'Números'],
    clues: ['Malditos', 'Chungos']
  },
  {
    password: '4815162342',
    icon: 'brush',
    title: 'Hazte con todos',
    media: 'pokemon.jpg',
    description: 'No he sido tan cabrón de ponerte uno aleatorio para que me digas cuál es. Porque hay más de 800. Este es especial.',
    tags: ['Pokemon', '4chan'],
    clues: ['Nombre', 'Inventado']
  },
  {
    password: 'Tentaquil',
    icon: 'tv',
    title: 'Frikis',
    media: 'tbbt.gif',
    description: 'Molaban más cuando no tenían novia. Pero todos los frikis tenemos derecho al amor, no? Ahora son todo chuminadas.',
    tags: ['Piedra', 'Papel'],
    clues: ['Tijera', 'Lagarto']
  },
  {
    password: 'Spock',
    icon: 'theaters',
    title: 'Arena',
    media: 'mummy.gif',
    description: 'Esta peli me mola un montón. Todavía me dan muy mal rollo los escarabajos carnívoros hibernados que se meten bajo la piel.',
    tags: ['Consorte', 'Faraón'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Ankhesenamun',
    icon: 'place',
    title: 'Loading... 100%',
    media: '100.jpg',
    description: 'Has completado el 100% del juego! Enhorabuena! Me pregunto qué última misión te aguarda...',
    tags: ['Mapa', 'Villaobispo'],
    clues: ['Fer', 'Mike']
  }
]

export default quests
