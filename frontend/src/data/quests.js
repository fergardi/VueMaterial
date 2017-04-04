const quests = [
  {
    password: 'Pixels',
    icon: 'favorite',
    title: 'Loading... 0%',
    media: '0.jpg',
    description: 'Bienvenida a tu gymkana de aniversario portátil! Como ves, también he creado tu propio avatar en 8bits. No he conseguido sacarte más parecida, así que es lo que hay. Pero sales muy mona!',
    tags: ['Avatar', 'Nombre'],
    clues: ['Vir', 'Mujer']
  },
  {
    password: 'Virginia',
    icon: 'theaters',
    title: 'Delorean',
    media: 'delorean.gif',
    description: 'Vas a tener que usar tu flamante coche nuevo para resolver algunas de las pruebas más cabronas, pero eso será más adelante. Este vehículo también era híbrido, y solo consumía 1.21GW por viaje! Aunque se estropeaba fácilmente...',
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
    icon: 'videogame_asset',
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
    description: '"Destrucción! El mundo puede ser una ruina! No lo podemos permitir!" Esto sí eran dibujos animados y no la mierda que echan hoy en día. Aunque irónicamente siempre pensé que promovían un pelín la violencia entre unos jóvenes bastante impresionables.',
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
    description: 'Aunque tiene algunas escenas especialmente brutas (como por ejemplo la del árbol haciendole cositas a la chica), te ríes de lo lindo con la saga original. El remake de la peli es absolutamente desagradable, porque pierde el rollo comedia negra y pasa totalmente al terror. Pero la serie me encanta porque precisamente sigue esa línea. Si hasta hay videojuegos!',
    tags: ['Libro', 'Piel'],
    clues: ['Muertos', 'Nombre']
  },
  {
    password: 'Necronomicon',
    icon: 'brush',
    title: 'Inseparables',
    media: 'alchemist.jpg',
    description: 'Me gusta bastante la serie, va muy al grano y tiene bastantes ideas originales. Aunque la pongo por detrás de Naruto Shippuden y Dragon Ball.',
    tags: ['Nina', 'Alexander'],
    clues: ['Niña', 'Perro']
  },
  {
    password: 'Quimera',
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
    icon: 'videogame_asset',
    title: 'Dame madera!',
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
    icon: 'videogame_asset',
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
    tags: ['Magia', 'Simpatía'],
    clues: ['Conexión', 'Fuerza']
  },
  {
    password: 'Alar',
    icon: 'tv',
    title: 'Su puta madre',
    media: 'himym.gif',
    description: 'Tantos años esperando para conocer a la madre de los chicos y mujer de Ted, y al final va y se muere, para volver con Robin como tendría que haber sido desde el principio...',
    tags: ['Spoiler', 'Madre'],
    clues: ['Nombre', 'Muerta']
  },
  {
    password: 'Tracy',
    icon: 'theaters',
    title: 'A quién vas a llamar?',
    media: 'ghost.gif',
    description: '"Ray, si alguien te pregunta si eres un dios, contéstale que sí!" Otra mítica de la ciencia ficción, esta vez sobre fantasmas. El remake que hicieron rezuma feminazismo por todas partes.',
    tags: ['Moco', 'Verde'],
    clues: ['Fantasma', 'Inglés']
  },
  {
    password: 'Slimer',
    icon: 'videogame_asset',
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
    description: 'Como los guionistas no sabían lo que iban a decir los marcianos cuando estaban escribiendo el guión, escribieron "ack ack ack" para sustituirlo después, pero luego se conservó durante la filmación porque hizo gracia, y se quedó para la versión final. Está basada en un juego de cartas!',
    tags: ['Idea', 'Original'],
    clues: ['Juego', 'Tipo']
  },
  {
    password: 'Cartas',
    icon: 'chrome_reader_mode',
    title: 'Cimientos',
    media: 'foundation.jpg',
    description: 'Otra novela río, esta vez futurista, sobre conspiraciones, partidos políticos, cultos religiosos, ansias de poder, y mucha intriga. Ah, y científicos capaces de analizar el curso de la historia para predecir cientos o miles de años de futuro por delante.',
    tags: ['Símbolo', 'Signo'],
    clues: ['Dedo', 'Paz']
  },
  {
    password: 'Circulo',
    icon: 'brush',
    title: 'Caída de gravedad',
    media: 'gravity.jpg',
    description: 'El simple nombre sugiere misterio. El dibujo, el guión, y el punto cómico a esta loca historia de sucesos paranormales y sobrenaturales a lo Expediente X en un pequeño pueblecito de las montañas, la convierten en una de las mejores series de animación que he visto. Pero solo tiene 2 temporadas.',
    tags: ['Enemigo', 'Triángulo'],
    clues: ['Bill', 'Apellido']
  },
  {
    password: 'Cipher',
    icon: 'tv',
    title: 'Quiero creer',
    media: 'believe.jpg',
    description: 'Tenía algunos capítulos bastante escabrosos que luego no me dejaban dormir. Hasta la musiquita acojonaba cuando eras un crío. Y ahora un poco también.',
    tags: ['Capítulo', 'Final'],
    clues: ['Serie', 'Nombre']
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
    media: '25.png',
    description: 'Vas por el 25% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs... Aunque si no quieres, siempre puedes hacer trampas y llamar para conseguir cumplir la misión, no me importa.',
    tags: ['42.5237207', '-4.739236'],
    clues: ['Monstruo', 'Dragón']
  },
  {
    password: 'Shivano',
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
    clues: ['Actriz', 'Apellido']
  },
  {
    password: 'Baccarin',
    icon: 'videogame_asset',
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
    icon: 'videogame_asset',
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
    icon: 'videogame_asset',
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
    tags: ['Animal', 'Malvado'],
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
    title: 'Oscuridad total',
    media: 'pitch.gif',
    description: '"No es a mí a quién debéis temer..."',
    tags: ['Monstruo', 'Especie'],
    clues: ['Nombre', 'Alien']
  },
  {
    password: 'Bioraptor',
    icon: 'videogame_asset',
    title: 'Zombies lentos',
    media: 'resident.gif',
    description: 'Otra de las teorías que tengo sobre tu trabajo (ya te dije que tenía varias) es que desarrolláis en secreto armas biológicas experimentales basadas en la mutación con virus carnívoros muy agresivos. Como Bernadette en Big Bang Theory!',
    tags: ['Maligna', 'Empresa'],
    clues: ['Corporación', 'Nombre']
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
    icon: 'videogame_asset',
    title: 'Peramelidae',
    media: 'crash.gif',
    description: 'Otro de los grandes de mi infancia. Ya sabes que siempre suelo pasarme todos los juegos que tengan la opción en difícil y al 100%, no? Es como un mini ToC que padezco. Pues este me lo pude pasar al 105%, literalmente.',
    tags: ['Islas', 'Australia'],
    clues: ['Juegos', 'Nombre']
  },
  {
    password: 'Wumpa',
    icon: 'chrome_reader_mode',
    title: 'Fújur!',
    media: 'neverending.gif',
    description: 'Otra preciosa historia infantil de dragones, princesas en castillos, reinos encantados y un héroe con la misión de salvar a todo el mundo. En sí misma es una apología a la lectura y al poder de la imaginación que tienen todos los niños y no deberíamos perder al crecer.',
    tags: ['Cura', 'Enfermedad'],
    clues: ['Amuleto', 'Nombre']
  },
  {
    password: 'Auryn',
    icon: 'videogame_asset',
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
    icon: 'brush',
    title: 'Qué es? Qué es?',
    media: 'jack.gif',
    description: '"Hay luces de color! Qué es? Parece de algodón! Qué es? No creo lo que veo, estoy soñando? No lo sé! Qué injusto es! Qué es?" Hecho de menos más películas de animación de Tim Burton.',
    tags: ['Nariz', 'Luz'],
    clues: ['Color', 'Favorito']
  },
  {
    password: 'Zero',
    icon: 'tv',
    title: 'Ciencia límite',
    media: 'fringe.jpg',
    description: 'Otra de obligado visionado. Para mí, es bastante bastante mejor que Expendiente X. Todos los capítulos son de un tema tabú de la ciencia ficción llevado al extremo del peligro, pero también tiene una historia por detrás que une todos los episodios.',
    tags: ['Sombreros', 'Enemigos'],
    clues: ['Nombre', 'Plural']
  },
  {
    password: 'Observadores',
    icon: 'theaters',
    title: 'Rien de rien',
    media: 'inception.gif',
    description: 'La representación del subconsciente de cada uno en el mundo de los sueños y el poder "hackear" una mente para obtener información sin que el objetivo lo sepa, me resulta fascinante y extremadamente original. Y aunque es opinión personal, yo creo que la peonza acaba cayendo.',
    tags: ['Escaleras', 'Infinitas'],
    clues: ['Nombre', 'Dibujante']
  },
  {
    password: 'Penrose',
    icon: 'videogame_asset',
    title: 'Fuego++',
    media: 'ff.jpg',
    description: 'Espadas y magia, la base de mi frikismo. Somos de mundos muy distintos. Tú, del Legend of Zelda y Nintendo. Yo, del Final Fantasy y Sony. Pero frikis al fin y al cabo. Siempre me recuerda a tí.',
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
    icon: 'place',
    title: 'Loading... 50%',
    media: '50.png',
    description: 'Vas por el 50% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs... Aunque si no quieres, siempre puedes hacer trampas y llamar para conseguir cumplir la misión, no me importa.',
    tags: ['42.5931312', '-5.5647233'],
    clues: ['Monstruo', 'Vampiro']
  },
  {
    password: 'Sengir',
    icon: 'tv',
    title: 'Trapitos',
    media: 'muppets.jpg',
    description: 'Recuerdo que veía semanalmente este show con mis padres en el salón cuando era muy pequeño! De aquella era como el Saturday Night Live, con artistas invitados, música en directo y sketches muy divertidos. Qué recuerdos!',
    tags: ['Rana', 'Verde'],
    clues: ['Inglés', 'Muñeco']
  },
  {
    password: 'Kermit',
    icon: 'videogame_asset',
    title: 'Sálvalos a todos',
    media: 'lemmings.gif',
    description: 'Un grandísimo juego de lógica que adoraba de pequeño. Intentar salvarlos a todos era una locura, y en algunas ocasiones era hasta imposible, pero siempre era un reto intentarlo! Sabes que lo creó la empresa que actualmente es Rockstar Games?',
    tags: ['Dificultad', 'Máxima'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Mayhem',
    icon: 'tv',
    title: 'Los pinos',
    media: 'wayward.jpg',
    description: 'Ya sabes que la intro de esta serie me encanta. Y la mitad de la primera temporada es un WTF en toda regla, aunque luego flojee hacia el final y sobre todo tras saber el secreto. Por eso mismo la segunda temporada no tiene ningún aliciente.',
    tags: ['Año', 'Congelado'],
    clues: ['Futuro', 'Real']
  },
  {
    password: '4028',
    icon: 'theaters',
    title: 'Procesadores',
    media: 'tron.jpg',
    description: 'Otra de mis películas míticas de los 80. Aunque hoy en día veamos estos efectos "especiales" como una cutrez, de aquella era una auténtica pasada. Y la idea de meterse en un ordenador y luchar contra programas siempre me pareció muy original. Ten en cuenta que fue 15 años antes que Matrix. La secuela no es muy buena, pero tiene unos efectos impresionantes.',
    tags: ['Flynn', 'Programa'],
    clues: ['Nombre', 'Ayuda']
  },
  {
    password: 'Clu',
    icon: 'brush',
    title: 'S01E13',
    media: 'simpsons.gif',
    description: 'Ya no me hacen ni puta gracia los capítulos nuevos, ni siquiera la película, pero los viejos aún son buenísimos. Mis preferidos son los especiales de Halloween de la Casa Árbol del Terror.',
    tags: ['Ladrona', 'Babysitter'],
    clues: ['Botz', 'Apellido']
  },
  {
    password: 'Botzukowsky',
    icon: 'tv',
    title: 'Larga vida',
    media: 'spock.jpg',
    description: 'La verdad es que nunca he sido un fan, pero el reboot que han hecho de las películas es extremadamente bueno. La serie original sigue siendo un pestiño, intenté empezar a verla pero era tan cutre que daba vergüenza ajena.',
    tags: ['Nave', 'Insignia'],
    clues: ['Flota', 'Estelar']
  },
  {
    password: 'Enterprise',
    icon: 'theaters',
    title: 'Mi nombre?',
    media: 'max.gif',
    description: 'Este debería ser el ejemplo perfecto de cómo hacer un reboot/remake bien. Si las originales eran ya películas de culto, para mí esta se ha convertirá en la película de acción por excelencia. Explota hasta la arena.',
    tags: ['Australiano', 'Apellido'],
    clues: ['Protagonista', 'Original']
  },
  {
    password: 'Rockatansky',
    icon: 'chrome_reader_mode',
    title: 'Conectado',
    media: 'rpo.jpg',
    description: 'Otra de lo que parece que será mi futura saga favorita. Cuando la caben claro. Espero que la película esté a la altura del libro, aunque si no lo está, como es de las pocas de las que me he leido primero el libro, nunca me joderán el recuerdo.',
    tags: ['Enemigos', 'Nombre'],
    clues: ['Clave', '6']
  },
  {
    password: 'Sixers',
    icon: 'videogame_asset',
    title: 'Perfect!',
    media: 'tekken.gif',
    description: 'Otro arcade de las recreativas. Tengo grabados a fuego en la memoria los combos más complicados de varios personajes. Tras 15 años, hoy todavía soy capaz de reventar con Xiayou o King...',
    tags: ['Personaje', 'Secreto'],
    clues: ['Doctor', 'Ruso']
  },
  {
    password: 'Boskonovitch',
    icon: 'tv',
    title: 'Héroes y villanos',
    media: 'heroes.jpg',
    description: '"Salva a la animadora, salva al mundo". Muchos personajes, muchos poderes, una sola historia común. Si tan sólo se hubiera quedado en la primera temporada...',
    tags: ['Malo', 'Poderes'],
    clues: ['Nombre', 'Enemigo']
  },
  {
    password: 'Sylar',
    icon: 'theaters',
    title: 'Oferta de sierras',
    media: 'saw.gif',
    description: 'Me imagino al paisano comprando en la ferretería cuerdas, bridas, esposas, palas, sacos, lejía, antimanchas, cadenas, sopletes, sierras, taladros, martillos, cubos, alicates... Y pagando en efectivo, claro. Y con gabardina.',
    tags: ['Nick', 'Asesino'],
    clues: ['Inglés', 'Nombre']
  },
  {
    password: 'Jigsaw',
    icon: 'tv',
    title: 'Upside down',
    media: 'stranger.jpg',
    description: 'Me habría gustado hacerte un gif personalizado con tu nombre usando las luces de la pared pero, tras mucho investigar, la web de Netflix que lo permitía está caída, así que opté por buscar otra cosa...',
    tags: ['Monstruo', 'Demonio'],
    clues: ['Universo', 'Paralelo']
  },
  {
    password: 'Demogorgon',
    icon: 'videogame_asset',
    title: 'La Isla del Mono',
    media: 'guybrush.jpg',
    description: 'Otra de mis sagas favoritas, en las que se basó Piratas del Caribe. Sabías que el nombre del protagonista surgió a partir del fichero y la extensión donde almacenaban sus imágenes? Guy.brush! Me encantan estas curiosidades.',
    tags: ['Guy', 'Brush'],
    clues: ['Apellido', 'Raro']
  },
  {
    password: 'Threepwood',
    icon: 'tv',
    title: 'Luciérnaga',
    media: 'firefly.gif',
    description: 'Otra serie de ciencia ficción que me encanta, que sólo puede definirse como "Future Western". Una pena que la cancelaran, aunque saliera una película para cerrarla. Al parecer estan planeando su regreso!',
    tags: ['Nombre', 'Nave'],
    clues: ['Película', 'Secuela']
  },
  {
    password: 'Serenity',
    icon: 'theaters',
    title: 'El Santo Grial',
    media: 'python.gif',
    description: 'Grandísimos los Monty Python. Hay quien defiende que la mejor es la Vida de Bryan, pero como mi frikismo se basa en espada y magia, para mí esta es la mejor. "Quién el puente desee atravesar, tres preguntas deberá contestar, o al abismo irá a dar..."',
    tags: ['Segundo', 'Tercera'],
    clues: ['Capital', 'Asiria']
  },
  {
    password: 'Ekallatum',
    icon: 'videogame_asset',
    title: 'Trifuerza',
    media: 'zelda.gif',
    description: 'Quiero pasarme estos juegos, ya va siendo hora! Al parecer son reencarnaciones de la misma historia contada de maneras diferentes. Sé que en la trifuerza el Valor lo representa Link, la Sabiduría Zelda y el Poder Ganon, pero quién creó los fragmentos de la trifuerza?',
    tags: ['Color', 'Favorito'],
    clues: ['Nombre', 'Diosa']
  },
  {
    password: 'Din',
    icon: 'tv',
    title: 'Dr. Mande?',
    media: 'who.jpg',
    description: 'Me da vergüenza reconocerlo, pero esta es otra de esas series que intenté ver en su día y apenas pude con el primer episodio. Pero debo intentarlo de nuevo, porque no puedo llamarme friki sin haberla visto!',
    tags: ['Enemigos', 'Extraterrestres'],
    clues: ['Androides', 'Malos']
  },
  {
    password: 'Daleks',
    icon: 'theaters',
    title: 'Cables',
    media: 'corto.gif',
    description: 'Aún recuerdo muy bien esta peli en la que creo se basó enteramente Wall-E. De aquella jugaba con Meccanos, y recuerdo haber hecho varios modelos de este simpático protagonista robótico.',
    tags: ['Robot', 'Nombre'],
    clues: ['SAINT', 'Número']
  },
  {
    password: 'Johnny5',
    icon: 'chrome_reader_mode',
    title: 'El Brujo',
    media: 'wolf.jpg',
    description: 'Una maravilla, ya sean los libros o los juegos. Cuando juegas al juego te parece que estás leyendo los libros, y cuando lees los libros te parece que estás jugando al juego. Genial! Aunque creo que tiene una serie que da asco.',
    tags: ['Caballo', 'Mote'],
    clues: ['Nombre', 'Español']
  },
  {
    password: 'Sardinilla',
    icon: 'theaters',
    title: 'MIB',
    media: 'mib.gif',
    description: 'Otra de las clásicas en cuanto a ciencia ficción se refiere. Esta vez de invasiones alienígenas y entidades secretas del gobierno que intentan evitarlo en la sombra. Siempre me pareció una idea muy simpática, y de aquella Will Smith solo hacia comedias.',
    tags: ['Animal', 'Personaje'],
    clues: ['Nombre', 'Habla']
  },
  {
    password: 'Frank',
    icon: 'tv',
    title: 'I am the danger',
    media: 'bb.gif',
    description: 'La prueba viviente de que si le das una oportunidad a algo que no te gusta puede acabar sorprendiéndote de forma muy grata. Ver cómo se va haciendo sutilmente cada vez más cabrón conforme pasan los capítulos engancha. Un actor genial.',
    tags: ['Iridio', 'Vanadio'],
    clues: ['Elemento', 'Química']
  },
  {
    password: 'VIr',
    icon: 'videogame_asset',
    title: 'Marcianitos',
    media: 'invaders.gif',
    description: 'Recuerdo con tristeza haberme gastado un dineral en comprarlo original para la Game Boy. Qué tontería de juego. Pero hoy en día su icono es el referente en videojuegos, y mi salón es prueba de ello!',
    tags: ['Puntuación', 'Total'],
    clues: ['Capada', 'Máximo']
  },
  {
    password: '9990',
    icon: 'theaters',
    title: 'I will be back',
    media: 'terminator.gif',
    description: 'A mí me gustan por este orden: primero la segunda, segundo la tercera, tercero la primera, cuarto la quinta y quinta la cuarta. Lo pillas?',
    tags: ['Número', 'Secuencia'],
    clues: ['Orden', 'Código']
  },
  {
    password: '23154',
    icon: 'videogame_asset',
    title: 'M&M',
    media: 'homam.jpg',
    description: 'Otro de mis juegos favoritos, esta vez de estrategia y rol por turnos. Espada y magia! Aunque siempre he tenido debilidad por la nigromancia. Ojo, que no la necrofilia!',
    tags: ['Magia', 'Tierra'],
    clues: ['Mundo', 'Continente']
  },
  {
    password: 'Erathia',
    icon: 'place',
    title: 'Loading... 75%',
    media: '75.png',
    description: 'Vas por el 75% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs... Aunque si no quieres, siempre puedes hacer trampas y llamar para conseguir cumplir la misión, no me importa.',
    tags: ['42.5875991', '-5.5717349'],
    clues: ['Monstruo', 'Elemental']
  },
  {
    password: 'Zendikar',
    icon: 'theaters',
    title: '5 de Noviembre',
    media: 'vendetta.gif',
    description: '"Recuerden, recuerden, el 5 de Noviembre. Conspiración, pólvora y traición. No veo la demora y siempre es la hora, de evocarla sin dilación". Esta careta ha inspirado revueltas en el mundo real.',
    tags: ['Partido', 'Nombre'],
    clues: ['Política', 'Inglés']
  },
  {
    password: 'Norsefire',
    icon: 'brush',
    title: 'Nani?!',
    media: 'naruto.gif',
    description: 'No te metas con Naruto! Tiene una historia por detrás que ya la quisiera Dragon Ball o Fullmetal Alchemist. Aunque tenga demasiado relleno, sigo defendiendo que el uso de las distintas habilidades en las batallas son una maravilla de estrategia e inteligencia.',
    tags: ['Ataque', 'Bola'],
    clues: ['Nombre', 'Japonés']
  },
  {
    password: 'Rasengan',
    icon: 'tv',
    title: 'Juan de las nieves',
    media: 'got.gif',
    description: 'Lo más interesante de la serie es averiguar la verdadera identidad de John, aunque ya lo tenemos bastante claro. Si ya se lo dice Ygritte. "You know nothing, John Snow". Y si ella lo sabía desde el principio?',
    tags: ['Snow', 'Apellido'],
    clues: ['Real', 'Casa']
  },
  {
    password: 'Targaryen',
    icon: 'theaters',
    title: 'Multipase',
    media: 'element.gif',
    description: 'Me encantan las películas de futuros en ciudades atestadas y tecnología por todas partes. En realidad cualquier cosa futurista me vale. Somos la generación que ha nacido demasiado tarde para explorar la Tierra y demasiado pronto para explorar el espacio.',
    tags: ['Raza', 'Alienígenas'],
    clues: ['Extraterrestres', 'Piedras']
  },
  {
    password: 'Mondoshawan',
    icon: 'chrome_reader_mode',
    title: 'Habla y entra',
    media: 'moria.gif',
    description: 'Podría haber sacado algo del Silmarillion que no sacases en la vida, pero en realidad he optado por tirarte un piropazo en la lengua inventada de nuestro querido Tolkien.',
    tags: ['Hermosa', 'Élfico'],
    clues: ['Tolkien', 'Palabra']
  },
  {
    password: 'Vanya',
    icon: 'brush',
    title: 'Parodias',
    media: 'rick.jpg',
    description: 'Muchas gracias por recomendarme esta serie! Entiendo que Morty venga de Marty, pero de dónde huevos sacaron que el nombre de Rick hace apología al Dr. Emmett Brown? Y menudas burradas salen! Como la muñeca hinchable robot pariendo niños.',
    tags: ['Apellido', 'Doctor'],
    clues: ['Serie', 'Abuelo']
  },
  {
    password: 'Sanchez',
    icon: 'theaters',
    title: 'Corazoncito',
    media: 'indiana.gif',
    description: 'Quién no ha sentido nunca el deseo de tener en la mano el corazón recién arrancado y aún palpitante de un adulto mientras se lo enseñas antes de morir? Y el de un niño?',
    tags: ['Culto', 'Sacrificio'],
    clues: ['Deidad', 'Grito']
  },
  {
    password: 'Kalimah',
    icon: 'tv',
    title: 'Puto niño',
    media: 'carl.jpg',
    description: 'Dios, pero que asco le tengo! Odio a Carl. Le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odiooooo!!',
    tags: ['Tonta', 'Rubia'],
    clues: ['Competición', 'Olvidado']
  },
  {
    password: 'Andrea',
    icon: 'brush',
    title: 'Bits',
    media: 'ralph.jpg',
    description: 'Me gustan mucho las películas basadas en mundos de videojuegos, y esta es perfecta. Aunque pueda resultar algo infantil, el hecho de viajar entre los distintos mundos de máquinas recreativas y conocer personajes de arcades me encanta.',
    tags: ['Videojuego', 'Cervezas'],
    clues: ['Servir', 'Bar']
  },
  {
    password: 'Tapper',
    icon: 'videogame_asset',
    title: 'Destruye amistades',
    media: 'worms.jpg',
    description: 'No hay otra definición mejor. Quedar en casa de un amigo para jugar entre varios con la misma pantalla y ver sus corazones romperse cuando realizabas rebotes imposibles aprovechándote del viento mientras aniquilabas sus gusanitos y te hacias con la victoria. Y no te volvían a llamar para jugar. Delicioso.',
    tags: ['Granada', 'Santa'],
    clues: ['Inglés', 'Cántico']
  },
  {
    password: 'Hallelujah',
    icon: 'theaters',
    title: 'Desea saber más?',
    media: 'troopers.gif',
    description: 'Otra peli clásica de ciencia ficción, aunque tenga 3 secuelas que den ganas de vomitar. Los bichos gigantes dan un mal rollo que flipas, y las escenas eran de un gore bastante importante.',
    tags: ['Bichos', 'Planeta'],
    clues: ['Guerra', 'Nombre']
  },
  {
    password: 'Klendathu',
    icon: 'chrome_reader_mode',
    title: 'Tramposos',
    media: 'gollum.gif',
    description: 'Tampoco sería un juego de acertijos completo sin el duelo de acertijos más famoso de todos los tiempos, verdad? Aunque más bien fué un duelo de tramposos.',
    tags: ['Respuesta', 'Último'],
    clues: ['Correcta', 'Trampa']
  },
  {
    password: 'Anillo',
    icon: 'videogame_asset',
    title: 'TOC',
    media: 'tetris.gif',
    description: 'Una muestra excelente de lo que frustrante que puede ser tener un poco de ToC. Todo ordenadito de cojones. Sabes de dónde viene su nombre?',
    tags: ['Mezcla', 'Tetra'],
    clues: ['Nombre', 'Deporte']
  },
  {
    password: 'Tennis',
    icon: 'theaters',
    title: 'Ejército',
    media: 'monos.jpg',
    description: 'Otra gran distopía futurista tecnológicamente avanzada en la que el mundo ha sido destruido por un peligroso virus, y consiguen viajar al pasado para evitarlo. Por cierto, la serie mola un montón.',
    tags: ['Virus', 'Nombre'],
    clues: ['Serie', 'Película']
  },
  {
    password: 'Kalavirus',
    icon: 'chrome_reader_mode',
    title: 'Eres un mago',
    media: 'merodeador.gif',
    description: 'Siempre me pareció absurdo que artefactos mágicos tan jodidamente poderosos e inclinables hacia el mal como la Capa de Invisibilidad o el Mapa del Merodeador los posean unos preadolescentes pajilleros. Yo mismo habría usado la Capa para ir a espiar al baño de chicas!',
    tags: ['Mote', 'Imposible'],
    clues: ['Muerto', 'Traidor']
  },
  {
    password: 'Colagusano',
    icon: 'brush',
    title: 'Año 3000',
    media: 'fry.gif',
    description: 'Mi serie de animación favorita. Tiene lo mejor de los Simpsons, sin ser tan zafia como Padre de Familia. Lo que no entiendo es que la cancelaran y descancelaran tantas veces, yo creo que daba un dinero de la hostia.',
    tags: ['Tarjeta', 'Anchoas'],
    clues: ['Pin', 'Banco']
  },
  {
    password: '1077',
    icon: 'theaters',
    title: 'Trepamuros',
    media: 'spider.jpg',
    description: 'En mi opinión, el único superhéroe de verdad. Un pringao con superpoderes. Como debe ser. Nada de artilugios sofisticados ni tetazas enormes embutidas en trajes de licra marcando coño. Los remakes/reboots dan asco. El verdadero es y siempre será Tobey Maguire.',
    tags: ['Carnage', 'Hijo'],
    clues: ['Venom', 'Nieto']
  },
  {
    password: 'Toxin',
    icon: 'tv',
    title: 'Kitt, ven, corre!',
    media: 'kitt.gif',
    description: 'Hoy en día ves esta serie y es tan casposa como surrealista, pero cuando era un crío me encantaba. Iba a poner algo de MacGyver o del Equipo A, pero en realidad el coche futurista es más friki.',
    tags: ['Coche', 'Enemigo'],
    clues: ['Malvado', 'Nombre']
  },
  {
    password: 'KARR',
    icon: 'theaters',
    title: 'Estoy dentro',
    media: 'matrix.gif',
    description: 'Para entender el final de la tercera parte necesitas meterte la pildora roja machacada por la nariz mezclada con la azul. Y tres rayas.',
    tags: ['Babilonia', 'Rey'],
    clues: ['Nombre', 'Nave']
  },
  {
    password: 'Nebuchadnezzar',
    icon: 'videogame_asset',
    title: 'Dragonborn',
    media: 'skyrim.jpg',
    description: '"Yo antes era un aventurero como tú, pero un día me hirieron con una flecha en la rodilla". Es la frase que más se oye en este juego. Me encantaban las misiones del culto de los Vampiros y de los Hombres Lobo.',
    tags: ['Fus', 'Ro'],
    clues: ['Grito', 'Palabra']
  },
  {
    password: 'Dah',
    icon: 'tv',
    title: 'Ciencia vs fe',
    media: 'lost.gif',
    description: 'La primera serie que me enganchó hasta tal punto de madrugar 4 horas para ver el final en tiempo real, sin subtitular, y con cortes de emisión. Pero no me arrepiento, porque para mí ya es serie de culto, con unos cliffhangers que ya las quisieran muchas.',
    tags: ['Serie', 'Números'],
    clues: ['Malditos', 'Spoiler']
  },
  {
    password: '4815162342',
    icon: 'brush',
    title: 'Hazte con todos!',
    media: 'pokemon.jpg',
    description: 'No he sido tan cabrón de ponerte uno al azar para que me digas cuál es, porque hay más de 800. Este es muy, muy especial, y una surfera web como tu no tendrá problemas en descubrir por qué.',
    tags: ['Pokemon', 'Nombre'],
    clues: ['4chan', 'Inventado']
  },
  {
    password: 'Tentaquil',
    icon: 'tv',
    title: 'Frikis',
    media: 'tbbt.gif',
    description: 'Molaban mucho más al principio, cuando no tenían novia. Pero todos los frikis tenemos derecho al amor, no? Ahora son todo chuminadas y tonterías de pareja, apenas queda espacio para frikadas.',
    tags: ['Piedra', 'Papel'],
    clues: ['Tijera', 'Lagarto']
  },
  {
    password: 'Spock',
    icon: 'theaters',
    title: 'Arena',
    media: 'mummy.gif',
    description: 'Esta saga me mola un montón. Las maldiciones de civilizaciones antiguas que todavía conservan su poder como el primer día y esas cosas. Todavía me dan muy mal rollo los escarabajos carnívoros hibernados que se meten bajo la piel. Como el de aquella otra película en el que se le mete uno en el oído y se lo va comiendo.',
    tags: ['Consorte', 'Faraón'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Ankhesenamun',
    icon: 'place',
    title: 'Loading... 100%',
    media: '100.png',
    description: 'Has completado el 100% del juego! Enhorabuena! Me pregunto qué última misión te aguarda... Cochinadas, probablemente.',
    tags: ['42.6169707', '-5.5507699'],
    clues: ['Regalo', 'Premio']
  }
]

export default quests
