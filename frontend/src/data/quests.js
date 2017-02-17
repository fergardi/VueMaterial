const quests = [
  {
    password: null,
    icon: 'extension',
    title: 'Empieza el juego',
    media: '0.jpg',
    description: 'También he creado tu propio avatar en 8bits! No he conseguido sacarte más parecida, así que es lo que hay.',
    tags: ['Avatar', '8bits'],
    clues: ['Nombre', 'Mujer']
  },
  {
    password: 'Virginia',
    icon: 'theaters',
    title: 'Tenemos que volver',
    media: 'delorean.gif',
    description: 'Vas a tener que usar tu flamante coche nuevo para resolver algunas de las pruebas. Este también era híbrido, y solo consumía 1,21GW!',
    tags: ['California', 'Virginia'],
    clues: ['Placa', 'Matrícula']
  },
  {
    password: '1656JVS',
    icon: 'tv',
    title: 'Sherlock',
    media: 'sherlock.jpg',
    description: 'No sería un juego de acertijos sin nuestro detective favorito, no? Una pena que haya terminado. Al menos Mary está MUERTA.',
    tags: ['Familiar', 'Perdido'],
    clues: ['Nombre', 'Mujer']
  },
  {
    password: 'Eurus',
    icon: 'theaters',
    title: 'Atracciones',
    media: 'jurassic.jpg',
    description: 'Recuerdo perfectamente esconderme debajo de la butaca del cine y gritar viendo esta película con 8 años.',
    tags: ['Bastón', 'Piedra'],
    clues: ['Mosquito', 'Savia']
  },
  {
    password: 'Ambar',
    icon: 'games',
    title: 'Woka Woka Woka',
    media: 'pacman.gif',
    description: 'Sabías que está inspirado en Alien? Los fantasmas representan al bicho mientras huyes de él por la nave.',
    tags: ['Color', 'Favorito'],
    clues: ['Fantasma', 'Nombre']
  },
  {
    password: 'Blinky',
    icon: 'brush',
    title: 'Luz! Fuego!',
    media: 'goku.gif',
    description: 'Destrucción! El mundo puede ser una ruina! No lo podemos permitir! Esto sí eran dibujos animados y no la mierda de hoy.',
    tags: ['Nombre', 'Verdadero'],
    clues: ['Japonés', 'Hombre']
  },
  {
    password: 'Kakaroto',
    icon: 'tv',
    title: 'Infiltrados',
    media: 'cylon.gif',
    description: 'Lo mejor de esta serie era que muchos Cylons no sabían que lo eran y se creían humanos. Te dejaba con la boca abierta cuando se descubría un nuevo modelo.',
    tags: ['Rubia', 'Modelo'],
    clues: ['Clave', 'Mujer']
  },
  {
    password: 'Caprica6',
    icon: 'theaters',
    title: 'Ash',
    media: 'ash.gif',
    description: 'Aunque tiene algunas escenas especialmente brutas, te ries de lo lindo con esta saga.',
    tags: ['Libro', 'Piel'],
    clues: ['Muertos', 'Nombre']
  },
  {
    password: 'Necronomicon',
    icon: 'brush',
    title: 'Alquimia',
    media: 'alchemist.gif',
    description: 'Gracias por recomendarmela, me ha gustado mucho! Pero sigo prefiriendo Naruto Shippuden...',
    tags: ['Color', 'Favorito'],
    clues: ['Apellido', 'Roy']
  },
  {
    password: 'Mustang',
    icon: 'chrome_reader_mode',
    title: 'Dune',
    media: 'dune.gif',
    description: 'Otra novela río repleta de familias, nobles, traiciones, conspiraciones y luchas por el poder. Y gusanos.',
    tags: ['Droga', 'Gusano'],
    clues: ['Especia', 'Arrakis']
  },
  {
    password: 'Melange',
    icon: 'theaters',
    title: 'Me duele el pecho',
    media: 'alien.gif',
    description: 'Esto sí que era suspense y claustrofobia en estado puro. Luego lo mezclaron con Predator y se jodió. Luego hicieron precuela y se jodió todavía más.',
    tags: ['Familia', 'Especie'],
    clues: ['Extraterrestre', 'Nombre']
  },
  {
    password: 'Xenomorfo',
    icon: 'games',
    title: 'Dame madera!',
    media: 'aoe2.jpg',
    description: 'Te están atacando! Rush de escorpiones! Touche de torres! Empalizada de recursos! Si no matabas al jabalí antes del minuto 2, habías perdido.',
    tags: ['Chat', 'Risas'],
    clues: ['Atajo', 'Teclado']
  },
  {
    password: '11',
    icon: 'tv',
    title: 'Almas de metal',
    media: 'westworld.gif',
    description: 'Una oscura odisea sobre el amanecer de la conciencia artificial y el futuro del pecado.',
    tags: ['Parque', 'Nombre'],
    clues: ['Empresa', 'Atracciones']
  },
  {
    password: 'Delos',
    icon: 'games',
    title: 'Oddworld',
    media: 'oddworld.jpg',
    description: 'Otro de mis clásicos. Un plataformas de lógica rompecabezas en un mundo alienígena lleno de colorido y entornos muy bien diseñados.',
    tags: ['Raza', 'Pueblo'],
    clues: ['Abe', 'Protagonista']
  },
  {
    password: 'Mudokon',
    icon: 'theaters',
    title: 'Tambores',
    media: 'jumanji.gif',
    description: 'Esto sí que era un juego de mesa. Ni apostando dinero ni hostias. Sabías que hay segunda parte?',
    tags: ['Secuela', 'Película'],
    clues: ['Nombre', 'Espacio']
  },
  {
    password: 'Zathura',
    icon: 'chrome_reader_mode',
    title: 'Kvothe',
    media: 'kvothe.jpg',
    description: 'Una de mis sagas favoritas. Su representación de la magia es la más descriptiva que he leído.',
    tags: ['Viento', 'Sabio'],
    clues: ['Tercero', 'Libro']
  },
  {
    password: 'Piedra',
    icon: 'tv',
    title: 'Su puta madre',
    media: 'himym.gif',
    description: 'Tantos años esperando para conocer a la madre y al final se muere para volver con Robin. Spoiler!',
    tags: ['Spoiler', 'Madre'],
    clues: ['Nombre', 'Muerta']
  },
  {
    password: 'Tracy',
    icon: 'toys',
    title: 'Playmobil',
    media: 'playmobil.jpg',
    description: 'Bueno, eso de "mobil" no se yo. Pobrecillos, no tenían codos. No podían beber. Ni comer. Ni masturbarse.',
    tags: ['Marca', 'Española'],
    clues: ['Empresa', 'Licencia']
  },
  {
    password: 'Famobil',
    icon: 'games',
    title: 'Fatality',
    media: 'fatality.gif',
    description: 'Sabías que su éxito fue el uso pionero de la captura de movimientos reales usando cámaras stop motion?',
    tags: ['Personaje', 'Saurian'],
    clues: ['Outworld', 'Nombre']
  },
  {
    password: 'Reptile',
    icon: 'theaters',
    title: 'Ack, ack, ack!',
    media: 'mars.gif',
    description: 'Como los guionistas no sabían lo que iban a decir los marcianos, escribieron "ack ack ack" en el guión, y luego se conservó durante la filmación!',
    tags: ['Idea', 'Original'],
    clues: ['Juego', 'Tipo']
  },
  {
    password: 'Cartas',
    icon: 'chrome_reader_mode',
    title: 'Fundación',
    media: 'foundation.jpg',
    description: 'Otra novela río, esta vez futurista, sobre conspiraciones, partidos políticos, cultos religiosos, ansias de poder, y mucha intriga.',
    tags: ['Nombre', 'Ciclo'],
    clues: ['Trilogía', 'Libro']
  },
  {
    password: 'Trantor',
    icon: 'brush',
    title: 'Gravity Falls',
    media: 'gravity.jpg',
    description: 'El simple nombre sugiere misterio. El dibujo y el guión, el punto cómico a esta historia de sucesos paranormales y sobrenaturales a lo Expediente X.',
    tags: ['Dipper', 'Mabel'],
    clues: ['Familia', 'Apellido']
  },
  {
    password: 'Pines',
    icon: 'tv',
    title: 'Quiero creer',
    media: 'believe.jpg',
    description: 'Tenía algunos capítulos bastante escabrosos que luego no me dejaban dormir. Hasta la musiquita acojonaba cuando eras un crío.',
    tags: ['Serie', 'Final'],
    clues: ['Capítulo', 'Nombre']
  },
  {
    password: 'Verdad',
    icon: 'theaters',
    title: 'Ojo con la cabeza',
    media: 'sleepy.gif',
    description: 'Aunque me gustó el libro, la película de Tim Burton es bastante más interesante y con una trama más enrevesada. De mis favoritas.',
    tags: ['Animal', 'Cruel'],
    clues: ['Negro', 'Nombre']
  },
  {
    password: 'Temerario',
    icon: 'place',
    title: '25%',
    media: '25.jpg',
    description: 'Vas por el 25% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
    tags: ['Mapa', 'Saldaña'],
    clues: ['Laura', 'Socky']
  },
  {
    password: 'Ornitorrinco',
    icon: 'theaters',
    title: 'Scott Pilgrim',
    media: 'scott.gif',
    description: 'Otra buena película de frikis basada en un cómic. Las vidas extra son muy importantes para luchar contra exnovios celosos...',
    tags: ['Novia', 'Nombre'],
    clues: ['Pelo', 'Rosa']
  },
  {
    password: 'Ramona',
    icon: 'chrome_reader_mode',
    title: 'Alicia',
    media: 'alice.jpg',
    description: 'Sabías que Lewis Caroll se inspiró en las historias que inventaba para entretener a tres hermanas mientras cruzaba el río en un barco?',
    tags: ['Apellido', 'Niña'],
    clues: ['Inspiración', 'Original']
  },
  {
    password: 'Liddell',
    icon: 'theaters',
    title: 'Los Guardianes',
    media: 'gotg.jpg',
    description: 'Lo confieso, no los conocía de nada hasta que salieron en el cine, pero desde entonces me encantan y hasta colecciono sus cómics!',
    tags: ['Rocket', 'Expediente'],
    clues: ['Experimento', 'Clave']
  },
  {
    password: '89P13',
    icon: 'tv',
    title: 'V',
    media: 'v.jpg',
    description: 'Muy buena e infravalorada, a mi parecer. Un duelo de inteligencia y un plan maesto de alienígenas reptilianos comedores de ratones.',
    tags: ['Rubia', 'Pelirroja'],
    clues: ['Anna', 'Nombre']
  },
  {
    password: 'Morena',
    icon: 'games',
    title: 'Media Vida',
    media: 'hl.jpg',
    description: 'Otra de mis teorías con respecto a tu trabajo es que también tenéis un Departamento de Materiales Anómalos. Y puertas interdimensionales!',
    tags: ['Base', 'Nombre'],
    clues: ['Instalaciones', 'Complejo']
  },
  {
    password: 'Blackmesa',
    icon: 'theaters',
    title: 'No los mojes',
    media: 'gremlin.gif',
    description: 'Eran tan moonos... Hasta que los mojabas, les daba el sol o les alimentabas después de media noche.',
    tags: ['Nombre', 'Gremlin'],
    clues: ['Bicho', 'Original']
  },
  {
    password: 'Mogwai',
    icon: 'games',
    title: 'Fontanero',
    media: 'mario.gif',
    description: '"Lo siento Mario, la princesa está en otro castillo." Pues ya podías habermelo dicho antes de venir, no?',
    tags: ['Enemigo', 'Apellido'],
    clues: ['Rey', 'Koopa']
  },
  {
    password: 'Morton',
    icon: 'tv',
    title: 'Mr Robot',
    media: 'robot.jpg',
    description: 'Una serie moderna sobre hacking remake del club de la lucha que no podía faltar sobre la cultura friki.',
    tags: ['Hackers', 'Grupo'],
    clues: ['Activista', 'Nombre']
  },
  {
    password: 'fsociety',
    icon: 'theaters',
    title: 'Star Wars',
    media: 'starwars.jpg',
    description: 'Uno más en la familia! Estoy deseando ver qué nuevos droides inventan para las futuras secuelas. Debe ser la única saga de películas que no me importa que saquen secuelas constantemente.',
    tags: ['Droide', 'Nombre'],
    clues: ['Números', 'Letras']
  },
  {
    password: 'K2SO',
    icon: 'games',
    title: 'Recreativas',
    media: 'slug.gif',
    description: 'Una viciada de las recreativas. Tardes y monedas de 25 pesetas tiradas matando todo lo matable y muriendo todo lo morible.',
    tags: ['Enemigo', 'Final'],
    clues: ['Militar', 'General']
  },
  {
    password: 'Morden',
    icon: 'brush',
    title: 'Finn & Jake',
    media: 'time.jpg',
    description: 'Una gran serie animada para niños y no tan niños, con una trama principal perfectamente hilada si te vas fijando bien en cada episodio.',
    tags: ['Animal', 'Enemigo'],
    clues: ['Todos', 'Capítulos']
  },
  {
    password: 'Caracol',
    icon: 'tv',
    title: 'MegaZord!',
    media: 'rangers.gif',
    description: 'Otra serie casposa de cojones, pero que veía sin parar cuando era niño...',
    tags: ['Enemigos', 'Chustas'],
    clues: ['Desechables', 'Inútiles']
  },
  {
    password: 'Masillas',
    icon: 'theaters',
    title: 'Deep Thought',
    media: 'deep.jpg',
    description: 'La respuesta al sentido de la vida, el universo y todo lo demás.',
    tags: ['Ordenador', 'Respuesta'],
    clues: ['Número', 'Todo']
  },
  {
    password: '42',
    icon: 'games',
    title: 'Zombies',
    media: 'resident.gif',
    description: 'Otra de las teorías que tengo sobre tu trabajo es que desarrolláis en secreto armas biológicas. Experimentando con conejitos!',
    tags: ['Nombre', 'Empresa'],
    clues: ['Corporación', 'Maligna']
  },
  {
    password: 'Umbrella',
    icon: 'theaters',
    title: 'Es hora de morir',
    media: 'runner.gif',
    description: 'Todos estos momentos se perderán en el tiempo como lágrimas en la lluvia.',
    tags: ['Modelo', 'Replicante'],
    clues: ['Roy', 'Robot']
  },
  {
    password: 'Nexus6',
    icon: 'games',
    title: 'AkuAku',
    media: 'crash.gif',
    description: 'Otro de los grandes de mi infancia. Ya sabes que suelo pasarme los juegos en difícil y al 100%. Pues este fué al 105%, literalmente.',
    tags: ['Gemelo', 'Malvado'],
    clues: ['Máscara', 'Nombre']
  },
  {
    password: 'UkaUka',
    icon: 'chrome_reader_mode',
    title: 'Fújur!',
    media: 'neverending.gif',
    description: 'Otra preciosa historia infantil de dragones, princesas en castillos, reinos encantados y un héroe necesario.',
    tags: ['Cura', 'Enfermedad'],
    clues: ['Amuleto', 'Nombre']
  },
  {
    password: 'Auryn',
    icon: 'games',
    title: 'Warcraft',
    media: 'wow.jpg',
    description: 'Otra viciada de juego. El WoW no estaba mal, pero el W3 era una maravilla. Te descojonas con los Orcos. Pero me va más la nigromancia.',
    tags: ['Espada', 'Hielo'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Frostmourne',
    icon: 'extension',
    title: 'VIR',
    media: 'ley.jpg',
    description: 'Una broma de la que solo me río yo, como ingeniero que soy. Pero teniendo en cuenta que tu te ríes de las cajas de mis juegos porque pone "DEVIR", estamos en paz.',
    tags: ['Ley', 'Física'],
    clues: ['Electricidad', 'Hombre']
  },
  {
    password: 'Ohm',
    icon: 'tv',
    title: 'Fringe',
    media: 'fringe.jpg',
    description: 'Otra de obligado visionado. Mejor que Expendiente X. Y con una historia profunda y bien hilada.',
    tags: ['Spoiler', 'Enemigos'],
    clues: ['Calvos', 'Sombreros']
  },
  {
    password: 'Observers',
    icon: 'theaters',
    title: 'La peonza cae',
    media: 'inception.gif',
    description: 'Y punto. Nada de dejarlo en el aire, en el último milisegundo se tambalea indicando que nunca girará infinitamente, por lo que es real.',
    tags: ['Escaleras', 'Infinitas'],
    clues: ['Nombre', 'Dibujante']
  },
  {
    password: 'Penrose',
    icon: 'games',
    title: 'Rey del RPG',
    media: 'ff.jpg',
    description: 'Somos de mundos distintos. Tú, del Legend of Zelda y Nintendo. Yo, del Final Fantasy y Sony. Un amor imposible.',
    tags: ['Personaje', 'Apellido'],
    clues: ['FF9', 'Nombre']
  },
  {
    password: 'Ornitier',
    icon: 'theaters',
    title: 'Simios',
    media: 'apes.jpg',
    description: 'Nada mala distopía futurista y no tan alejada de la realidad.',
    tags: ['Doctor', 'Nombre'],
    clues: ['Simio', 'Pueblo']
  },
  {
    password: 'Zaius',
    icon: 'tv',
    title: 'Muppets',
    media: 'muppets.jpg',
    description: 'Recuerdo que veía semanalmente este show con mis padres en el salón cuando era muy pequeño.',
    tags: ['Inglés', 'Verde'],
    clues: ['Rana', 'Muñeco']
  },
  {
    password: 'Kermit',
    icon: 'place',
    title: '50%',
    media: '50.jpg',
    description: 'Vas por el 50% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
    tags: ['Mapa', 'León'],
    clues: ['Jaime', 'Kissy']
  },
  {
    password: 'Sabroson',
    icon: 'games',
    title: 'Lemmings',
    media: 'lemmings.gif',
    description: 'Un grandísimo juego de lógica que adoraba de pequeño. Intentar salvarlos a todo era una locura.',
    tags: ['Empresa', 'Actual'],
    clues: ['Original', 'DMA Design']
  },
  {
    password: 'Rockstar',
    icon: 'tv',
    title: 'Wayward pines',
    media: 'wayward.jpg',
    description: 'La intro me encanta. Y la mitad de la primera temporada es un WTF en toda regla.',
    tags: ['Año', 'Congelado'],
    clues: ['Futuro', 'Real']
  },
  {
    password: '4028',
    icon: 'toys',
    title: 'Meccagoen',
    media: 'mecano.jpg',
    description: 'Desde pequeño quería construir cosas. Empecé con los Lego, luego los Mecano, y cuando confirmé que era un manazas y un inútil, me dediqué a la informática!',
    tags: ['Nombre', 'Original'],
    clues: ['Licencia', '1920']
  },
  {
    password: 'Metaling',
    icon: 'brush',
    title: 'Simpsons',
    media: 'simpsons.gif',
    description: 'Ya no me hacen ni puta gracia los capítulos nuevos, ni siquiera la película, pero los viejos aún son buenísimos.',
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
    description: 'Este debería ser el ejemplo perfecto de cómo hacer un reboot/remake bien. Si las originales eran de culto, ésta se ha convertirá en leyenda.',
    tags: ['Protagonista', 'Apellido'],
    clues: ['Australiano', 'Palabra']
  },
  {
    password: 'Rockatansky',
    icon: 'chrome_reader_mode',
    title: 'Ready',
    media: 'rpo.jpg',
    description: 'Otra de lo que parece que será mi futura saga favorita. Espero que la película esté a la altura del libro.',
    tags: ['Enemigos', 'Nombre'],
    clues: ['Clave', '6']
  },
  {
    password: 'Sixers',
    icon: 'games',
    title: 'Tekken',
    media: 'tekken.gif',
    description: 'Tengo grabados a fuego en la memoria los combos más complicados de varios personajes. Reviento con Xiayou y King.',
    tags: ['Personaje', 'Secreto'],
    clues: ['Doctor', 'Ruso']
  },
  {
    password: 'Boskonovitch',
    icon: 'tv',
    title: 'Héroes',
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
    title: 'Upside Down',
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
    title: 'Santo Grial',
    media: 'python.gif',
    description: 'Quién el puente desee atravesar, tres preguntas deberá contestar, o al abismo irá a dar...',
    tags: ['Segundo', 'Tercera'],
    clues: ['Capital', 'Asiria']
  },
  {
    password: 'Ekallatum',
    icon: 'games',
    title: 'Trifuerza',
    media: 'zelda.gif',
    description: 'Sé que en la trifuerza el valor lo representa Link, la sabiduría Zelda y el poder Ganon, pero quién creó los fragmentos de la trifuerza?',
    tags: ['Color', 'Favorito'],
    clues: ['Nombre', 'Diosa']
  },
  {
    password: 'Din',
    icon: 'tv',
    title: 'Dr. Who',
    media: 'who.jpg',
    description: 'Otra que intenté ver en su día y apenas pude con el primer episodio. Pero debo intentarlo de nuevo...',
    tags: ['Enemigos', 'Extraterrestres'],
    clues: ['Androides', 'Malos']
  },
  {
    password: 'Daleks',
    icon: 'theaters',
    title: 'Avatar',
    media: 'avatar.jpg',
    description: 'Pocahontas con anfetaminas. Aún así, la mejor película en 3D hasta la fecha.',
    tags: ['Follar', 'Genitales'],
    clues: ['Pelos', 'Unidos']
  },
  {
    password: 'Coletas',
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
    title: 'Breaking Bad',
    media: 'bb.gif',
    description: 'La prueba viviente de que si le das una oportunidad a algo que no te gusta puede acabar sorprendiéndote sobremanera.',
    tags: ['Vanadio', 'Iridio'],
    clues: ['Elemento', 'Química']
  },
  {
    password: 'VIr',
    icon: 'extension',
    title: 'Spam',
    media: 'model.jpg',
    description: 'Una vez que la conoces, ya no puedes evitar encontrarla allá por donde vayas. EVERYWHERE.',
    tags: ['Nombre', 'Modelo'],
    clues: ['Mujer', 'Spam']
  },
  {
    password: 'Arianne',
    icon: 'theaters',
    title: 'Terminator',
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
    title: '75%',
    media: '75.jpg',
    description: 'Vas por el 75% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
    tags: ['Mapa', 'Mansilla'],
    clues: ['Santos', 'Begoña']
  },
  {
    password: 'Volador',
    icon: 'brush',
    title: 'Shippuden',
    media: 'naruto.gif',
    description: 'No te metas con Naruto! Tiene una historia por detrás que ya la quisiera Dragon Ball o Fullmetal Alchemist. Aunque tenga demasiado relleno.',
    tags: ['Ataque', 'Bola'],
    clues: ['Nombre', 'Japonés']
  },
  {
    password: 'Rasengan',
    icon: 'tv',
    title: 'Química avanzada',
    media: 'got.gif',
    description: 'Estos sí que eran alquimistas y herreros como mandaban los diversos dioses.',
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
    title: 'Indiana',
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
    description: 'Otra peli clásica de ciencia ficción, aunque haya otras 3 secuelas que den ganas de vomitar.',
    tags: ['Bichos', 'Planeta'],
    clues: ['Guerra', 'Nombre']
  },
  {
    password: 'Klendathu',
    icon: 'chrome_reader_mode',
    title: 'Tramposos',
    media: 'gollum.gif',
    description: 'Tampoco sería un juego de acertijos completo sin el duelo de acertijos más famoso de todos los tiempos, no?',
    tags: ['Acertijo', 'Último'],
    clues: ['Respuesta', 'Trampa']
  },
  {
    password: 'Anillo',
    icon: 'extension',
    title: 'Las 5 Casas',
    media: 'einstein.jpg',
    description: 'Probablemente ya has hecho este rompecabezas, así que te pregunto, qué bebe el dueño del pez?',
    tags: ['Bebida', 'Dueño'],
    clues: ['País', 'Origen']
  },
  {
    password: 'Cerveza',
    icon: 'theaters',
    title: '12 monos',
    media: 'monos.jpg',
    description: 'Otra gran distopía futurista tecnológicamente avanzada en la que el mundo ha sido destruido por un peligroso virus, y consiguen viajar al pasado para evitarlo.',
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
    title: 'Spiderman',
    media: 'spider.jpg',
    description: 'En mi opinión, el único superhéroe de verdad. Un pringao con superpoderes. Como debe ser. Nada de artilugios ni tetazas enormes. Y Tobey lo clava.',
    tags: ['Venom', 'Nieto'],
    clues: ['Carnage', 'Hijo']
  },
  {
    password: 'Toxin',
    icon: 'tv',
    title: 'Kitt',
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
    title: 'Ciencia vs Fe',
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
    title: 'Big bang theory',
    media: 'tbbt.gif',
    description: 'Molaban más cuando no tenían novia. Pero todos los frikis tenemos derecho al amor, no? Ahora son todo chuminadas.',
    tags: ['Piedra', 'Papel'],
    clues: ['Tijera', 'Lagarto']
  },
  {
    password: 'Spock',
    icon: 'theaters',
    title: 'La momia',
    media: 'mummy.gif',
    description: 'Esta peli me mola un montón. Todavía me dan muy mal rollo los escarabajos carnívoros hibernados que se meten bajo la piel.',
    tags: ['Consorte', 'Faraón'],
    clues: ['Nombre', 'Inglés']
  },
  {
    password: 'Ankhesenamun',
    icon: 'place',
    title: '100%',
    media: '100.jpg',
    description: 'Has completado el 100% del juego! Enhorabuena! Me pregunto qué última misión te aguarda...',
    tags: ['Mapa', 'Villaobispo'],
    clues: ['Buzón', 'Llave']
  }
]

export default quests
