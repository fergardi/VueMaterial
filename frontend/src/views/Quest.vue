<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000", v-once)
      span Correcto! Se ha guardado en tus Logros. A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click.native="close()")
        md-icon done
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Acertijo {{ index }} de {{ quests.length }}
        md-switch.md-warn(v-model="help") Pista
      md-card-media
        md-image(v-bind:md-src="'img/quests/' + active.media", v-on:click.native="debug()")
        md-ink-ripple
      md-card-content
        i {{ active.description }}
        p
          md-chip.md-primary(v-for="tag in active.tags") {{ tag }}
          template(v-for="clue in active.clues")
            md-chip.md-warn.animated.fadeIn(v-show="help") {{ clue }}
        md-input-container(md-has-password)
          label Código
          md-input(type="password", v-model="password", required)
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        help: false,
        password: '',
        quests: [
          {
            password: '',
            icon: 'extension',
            title: 'Empieza el juego',
            media: 'avatar.jpg',
            description: 'También he creado tu propio avatar en 8bits! No he conseguido sacarte más parecida, así que es lo que hay.',
            tags: ['Avatar', '8bits'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Virginia',
            icon: 'theaters',
            title: 'Tenemos que volver',
            media: 'delorean.gif',
            description: 'Vas a tener que usar tu flamante coche nuevo para resolver algunas de las pruebas. Este también era híbrido, y solo consumía 1,21GW!',
            tags: ['California', 'Virginia'],
            clues: ['Placa'],
            timestamp: 0
          },
          {
            password: '1656JVS',
            icon: 'tv',
            title: 'Sherlock',
            media: 'sherlock.jpg',
            description: 'No sería un juego de acertijos sin nuestro detective favorito, no? Una pena que haya terminado. Al menos Mary está MUERTA.',
            tags: ['Familiar', 'Perdido'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Eurus',
            icon: 'theaters',
            title: 'Atracciones',
            media: 'jurassic.jpg',
            description: 'Recuerdo perfectamente esconderme debajo de la butaca del cine y gritar viendo esta película con 8 años.',
            tags: ['Bastón', 'Piedra'],
            clues: ['Mosquito'],
            timestamp: 0
          },
          {
            password: 'Ambar',
            icon: 'games',
            title: 'Woka Woka Woka',
            media: 'pacman.gif',
            description: 'Sabías que está inspirado en Alien? Los fantasmas representan al bicho mientras huyes de él por la nave.',
            tags: ['Color', 'Favorito'],
            clues: ['Fantasma'],
            timestamp: 0
          },
          {
            password: 'Blinky',
            icon: 'palette',
            title: 'Luz! Fuego!',
            media: 'goku.gif',
            description: 'Destrucción! El mundo puede ser una ruina! No lo podemos permitir! Esto sí eran dibujos animados y no la mierda de hoy.',
            tags: ['Nombre', 'Verdadero'],
            clues: ['Japonés'],
            timestamp: 0
          },
          {
            password: 'Kakaroto',
            icon: 'tv',
            title: 'Infiltrados',
            media: 'cylon.gif',
            description: 'Lo mejor de esta serie era que muchos Cylons no sabían que lo eran y se creían humanos. Te dejaba con la boca abierta cuando se descubría un nuevo modelo.',
            tags: ['Rubia', 'Modelo'],
            clues: ['Clave'],
            timestamp: 0
          },
          {
            password: 'Caprica6',
            icon: 'theaters',
            title: 'Ash',
            media: 'ash.gif',
            description: 'Aunque tiene algunas escenas especialmente brutas, te ries de lo lindo con esta saga.',
            tags: ['Libro', 'Nombre'],
            clues: ['Muertos'],
            timestamp: 0
          },
          {
            password: 'Necronomicon',
            icon: 'palette',
            title: 'Alquimia',
            media: 'alchemist.gif',
            description: 'Gracias por recomendarmela, me ha gustado mucho! Pero sigo prefiriendo Naruto Shippuden...',
            tags: ['Color', 'Favorito'],
            clues: ['Apellido'],
            timestamp: 0
          },
          {
            password: 'Mustang',
            icon: 'chrome_reader_mode',
            title: 'Dune',
            media: 'dune.gif',
            description: 'Otra novela río repleta de familias, nobles, traiciones, conspiraciones y luchas por el poder. Y gusanos.',
            tags: ['Droga', 'Gusano'],
            clues: ['Especia'],
            timestamp: 0
          },
          {
            password: 'Melange',
            icon: 'theaters',
            title: 'Me duele el pecho',
            media: 'alien.gif',
            description: 'Esto sí que era suspense y claustrofobia en estado puro. Luego lo mezclaron con Predator y se jodió. Luego hicieron precuela y se jodió todavía más.',
            tags: ['Familia', 'Especie'],
            clues: ['Extraterrestre'],
            timestamp: 0
          },
          {
            password: 'Xenomorfo',
            icon: 'games',
            title: 'Dame madera!',
            media: 'aoe2.jpg',
            description: 'Te están atacando! Rush de escorpiones! Touche de torres! Empalizada de recursos! Si no matabas al jabalí antes del minuto 2, habías perdido.',
            tags: ['Chat', 'Risas'],
            clues: ['Atajo'],
            timestamp: 0
          },
          {
            password: '11',
            icon: 'tv',
            title: 'Almas de metal',
            media: 'westworld.gif',
            description: 'Una oscura odisea sobre el amanecer de la conciencia artificial y el futuro del pecado.',
            tags: ['Parque', 'Nombre'],
            clues: ['Empresa'],
            timestamp: 0
          },
          {
            password: 'Delos',
            icon: 'games',
            title: 'Oddworld',
            media: 'oddworld.jpg',
            description: 'Otro de mis clásicos. Un plataformas de lógica rompecabezas en un mundo alienígena lleno de colorido y entornos muy bien diseñados.',
            tags: ['Raza', 'Abe'],
            clues: ['Protagonista'],
            timestamp: 0
          },
          {
            password: 'Mudokon',
            icon: 'theaters',
            title: 'Tambores',
            media: 'jumanji.gif',
            description: 'Esto sí que era un juego de mesa. Ni apostando dinero ni hostias. Sabías que hay segunda parte?',
            tags: ['Secuela', 'Película'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Zathura',
            icon: 'chrome_reader_mode',
            title: 'Kvothe',
            media: 'kvothe.jpg',
            description: 'Una de mis sagas favoritas. Su representación de la magia es la más descriptiva que he leído.',
            tags: ['Viento', 'Sabio'],
            clues: ['Palabra'],
            timestamp: 0
          },
          {
            password: 'Piedra',
            icon: 'tv',
            title: 'Como conocí',
            media: 'himym.gif',
            description: 'Tantos años esperando para conocer a la madre y al final se muere para volver con Robin. Spoiler!',
            tags: ['Spoiler', 'Madre'],
            clues: ['Nombre'],
            timestamp: 0
          },
          {
            password: 'Tracy',
            icon: 'toys',
            title: 'Playmobil',
            media: 'playmobil.jpg',
            description: 'Bueno, eso de "mobil" no se yo. Pobrecillos, no tenían codos. No podían beber. Ni comer. Ni masturbarse.',
            tags: ['Marca', 'Española'],
            clues: ['Empresa'],
            timestamp: 0
          },
          {
            password: 'Famobil',
            icon: 'games',
            title: 'Fatality',
            media: 'fatality.gif',
            description: 'Sabías que su éxito fue el uso pionero de la captura de movimientos reales usando cámaras stop motion?',
            tags: ['Personaje', 'Saurian'],
            clues: ['Outworld'],
            timestamp: 0
          },
          {
            password: 'Reptile',
            icon: 'theaters',
            title: 'Ack, ack, ack!',
            media: 'mars.gif',
            description: 'Como los guionistas no sabían lo que iban a decir los marcianos, escribieron "ack ack ack" en el guión, y luego se conservó durante la filmación!',
            tags: ['Idea', 'Original'],
            clues: ['Juego'],
            timestamp: 0
          },
          {
            password: 'Cartas',
            icon: 'chrome_reader_mode',
            title: 'Fundación',
            media: 'foundation.jpg',
            description: 'Otra novela río, esta vez futurista, sobre conspiraciones, partidos políticos, cultos religiosos, ansias de poder, y mucha intriga.',
            tags: ['Nombre', 'Ciclo'],
            clues: ['Trilogía'],
            timestamp: 0
          },
          {
            password: 'Trantor',
            icon: 'palette',
            title: 'Gravity Falls',
            media: 'gravity.jpg',
            description: 'El simple nombre sugiere misterio. El dibujo y el guión, el punto cómico a esta historia de sucesos paranormales y sobrenaturales a lo Expediente X.',
            tags: ['Dipper', 'Mabel'],
            clues: ['Familia'],
            timestamp: 0
          },
          {
            password: 'Pines',
            icon: 'tv',
            title: 'Quiero creer',
            media: 'believe.jpg',
            description: 'Tenía algunos capítulos bastante escabrosos que luego no me dejaban dormir. Hasta la musiquita acojonaba cuando eras un crío.',
            tags: ['Serie', 'Final'],
            clues: ['Capítulo'],
            timestamp: 0
          },
          {
            password: 'Verdad',
            icon: 'theaters',
            title: 'Cuidado con la cabeza',
            media: 'sleepy.gif',
            description: 'Aunque me gustó el libro, la película de Tim Burton es bastante más interesante y con una trama más enrevesada. De mis favoritas.',
            tags: ['Animal', 'Cruel'],
            clues: ['Negro'],
            timestamp: 0
          },
          {
            password: 'Temerario',
            icon: 'place',
            title: '25%',
            media: '25.jpg',
            description: 'Vas por el 25% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
            tags: ['Socky', 'Laura'],
            clues: ['Saldaña'],
            timestamp: 0
          },
          {
            password: 'Ornitorrinco',
            icon: 'theaters',
            title: 'Scott Pilgrim',
            media: 'scott.gif',
            description: 'Otra buena película de frikis basada en un cómic. Las vidas extra son muy importantes para luchar contra exnovios celosos...',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Alicia',
            media: 'alicia.jpg',
            description: '',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: 'Zapatos',
            icon: 'theaters',
            title: 'Guardianes de la galaxia',
            media: 'gotg.jpg',
            description: 'Lo confieso, no los conocía de nada hasta que salieron en el cine, pero desde entonces me encantan y hasta colecciono sus cómics!',
            tags: ['Rocket', 'Expediente'],
            clues: ['Experimento'],
            timestamp: 0
          },
          {
            password: '89P13',
            icon: 'tv',
            title: 'V',
            media: 'v.jpg',
            description: 'Muy buena e infravalorada, a mi parecer. Un duelo de inteligencia y un plan maesto de alienígenas reptilianos comedores de ratones.',
            tags: ['Rubia', 'Pelirroja'],
            clues: ['Anna'],
            timestamp: 0
          },
          {
            password: 'Morena',
            icon: 'games',
            title: 'Media Vida',
            media: 'hl.jpg',
            description: 'Otra de mis teorías con respecto a tu trabajo es que también tenéis un Departamento de Materiales Anómalos. Y puertas dimensionales!',
            tags: ['Base', 'Nombre'],
            clues: ['Instalaciones'],
            timestamp: 0
          },
          {
            password: 'Blackmesa',
            icon: 'theaters',
            title: 'Independence day',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Fontanero',
            media: 'mario.gif',
            description: '"Lo siento Mario, la princesa está en otro castillo." Pues podías habermelo dicho antes de venir, no?',
            tags: ['Enemigo', 'Apellido'],
            clues: ['Primero'],
            timestamp: 0
          },
          {
            password: 'Morton',
            icon: 'tv',
            title: 'Mr Robot',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Star wars',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Metal slug',
            media: '.jpg',
            description: 'Una viciada de las recreativas. Tardes y monedas de 25 pesetas tiradas matando todo lo matable y muriendo todo lo morible.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'Adventure Time',
            media: '.jpg',
            description: 'Una gran serie animada para niños y no tan niños, con una trama principal perfectamente hilada si te vas fijando bien en cada episodio.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Community',
            media: '.jpg',
            description: 'Otra serie estupenda. Adoro los episodios de guerra de pintura. Y los especiales de videojuegos! Y de stop motion! Y de...!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Pensamiento Profundo',
            media: '.jpg',
            description: 'La respuesta al sentido de la vida, el universo y todo lo demás.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '42',
            icon: 'games',
            title: 'Resident evil',
            media: '.jpg',
            description: 'Otra de las teorías que tengo sobre tu trabajo es que desarrolláis en secreto armas biológicas. Con conejitos!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Blade runner',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'AkuAku',
            media: 'crash.gif',
            description: 'Otro de los grandes de mi infancia. Ya sabes que suelo pasarme los juegos en difícil y al 100%. Pues este fué al 105%, literalmente.',
            tags: ['Gemelo', 'Malvado'],
            clues: ['Máscara', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'UkaUka',
            icon: 'chrome_reader_mode',
            title: 'Historia interminable',
            media: '.jpg',
            description: 'descripcion',
            tags: ['Cura', 'Enfermedad'],
            clues: ['Amuleto', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Auryn',
            icon: 'games',
            title: 'Warcraft',
            media: 'warcraft.jpg',
            description: 'Otra viciada de juego. El WoW no estaba mal, pero el W3 era una maravilla. Te descojonas con los Orcos. Pero me va más la nigromancia.',
            tags: ['Espada', 'Hielo'],
            clues: ['Nombre', 'Inglés'],
            timestamp: 0
          },
          {
            password: 'Frostmourne',
            icon: 'extension',
            title: 'VIR',
            media: 'ley.jpg',
            description: 'Una broma de la que solo me río yo, como ingeniero que soy. Pero teniendo en cuenta que tu te ríes de las cajas de mis juegos porque pone "DEVIR", estamos en paz.',
            tags: ['Ley', 'Física'],
            clues: ['Electricidad', 'Hombre'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Man seeking woman',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Inception',
            media: '.jpg',
            description: 'La peonza cae y punto.',
            tags: ['Tótem', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Rey del Rol',
            media: 'ff.jpg',
            description: 'Somos de mundos distintos. Tú, del Legend of Zelda y Nintendo. Yo, del Final Fantasy y Sony. Un amor imposible.',
            tags: ['Personaje', 'Mago'],
            clues: ['FF9', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Vivi',
            icon: 'theaters',
            title: 'Planeta Simios',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Muppets',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'place',
            title: '50%',
            media: '50.jpg',
            description: 'Vas por el 50% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
            tags: ['Jony', 'Janira'],
            clues: ['León'],
            timestamp: 0
          },
          {
            password: '@@@@@',
            icon: 'games',
            title: 'Lemmings',
            media: 'lemmings.gif',
            description: 'Un grandísimo juego de lógica que adoraba de pequeño. Intentar salvarlos a todo era una locura.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Wayward pines',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'toys',
            title: 'Mecano',
            media: '.jpg',
            description: 'Desde pequeño quería construir cosas. Empecé con los Lego, luego los Mecano, y cuando confirmé que era un manazas y un inútil, me dediqué a la informática!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'impsons',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Star trek',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Mad max',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Ready player one',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Tekken',
            media: 'tekken.gif',
            description: 'Tengo grabados a fuego en la memoria los combos más complicados de varios personajes. Reventaba (y reviento) con Xiayou.',
            tags: ['Personaje', 'Secreto'],
            clues: ['Doctor', 'Ruso'],
            timestamp: 0
          },
          {
            password: 'Boskonovitch',
            icon: 'tv',
            title: 'Héroes',
            media: 'heroes.jpg',
            description: 'Salva a la animadora, salva al mundo. Si tan sólo se hubiera quedado en la primera temporada... A quién pretendo engañar, sólo molaba Sylar.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Oferta de sierras',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Upside down',
            media: 'stranger.gif',
            description: 'descripcion',
            tags: ['Luces', 'Palabra'],
            clues: ['Letras', 'Inglés'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Monkey Island',
            media: '.jpg',
            description: 'Recuerdo esta saga con mucho cariño. Ya no se hacen juegos con este mimo y detalle. Y absurdez. Y descojone constante.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Firefly',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Monty python',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Legend of zelda',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Dr who',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Avatar',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'The witcher',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'MIB',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Breaking bad',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'Overexposed model',
            media: 'model.jpg',
            description: 'descripcion',
            tags: ['Nombre', 'Modelo'],
            clues: ['Mujer'],
            timestamp: 0
          },
          {
            password: 'Arianne',
            icon: 'theaters',
            title: 'Terminator',
            media: 'terminator.gif',
            description: 'Me gustan por este orden: primero la segunda, segundo la tercera, tercero la primera, cuarto la quinta y quinta la cuarta.',
            tags: ['Número', 'Secuencia'],
            clues: ['Orden'],
            timestamp: 0
          },
          {
            password: '23154',
            icon: 'games',
            title: 'Might & Magic',
            media: 'homam.jpg',
            description: 'Otro de mis juegos favoritos, esta vez de estrategia y rol por turnos. Siempre he tenido debilidad por la nigromancia. Ojo, que no necrofilia!',
            tags: ['Necrópolis', 'Unidad'],
            clues: ['Resucitar'],
            timestamp: 0
          },
          {
            password: 'Esqueletos',
            icon: 'theaters',
            title: 'V de Vendetta',
            media: 'vendetta.gif',
            description: 'Otra gran película, muy parecida a la obra de 1984 con un aire dictatorial tirando a nazi y un gran hermano.',
            tags: ['Partido', 'Político'],
            clues: ['Name'],
            timestamp: 0
          },
          {
            password: 'Norsefire',
            icon: 'place',
            title: '75%',
            media: '75.jpg',
            description: 'Vas por el 75% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
            tags: ['Jaime', 'Kissy'],
            clues: ['León'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'aruto',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Juego de tronos',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Quinto elemento',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'El señor de los anillos',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Pesadilla antes de navidad',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'ick y morty',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Walking dead',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Indiana jones',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'toys',
            title: 'ego',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Worms',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Starship troopers',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'El hobbit',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'extension',
            title: 'Einstein',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: '12 monos',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Harry potter',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'Año 3000',
            media: 'fry.gif',
            description: 'Mi serie de animación favorita. Más graciosa que los Simpsons, y menos basta que Padre de Familia. Perfecta.',
            tags: ['Tarjeta', 'Dinero'],
            clues: ['Pin'],
            timestamp: 0
          },
          {
            password: '1077',
            icon: 'theaters',
            title: 'Spiderman',
            media: '.jpg',
            description: 'En mi opinión, el único superhéroe de verdad. Un pringao con superpoderes. Como debe ser. Nada de artilugios ni tetazas.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Kitt',
            media: 'kitt.gif',
            description: 'Hoy en día la miras y es tan casposa como surrealista, pero cuando era un crío me encantaba.',
            tags: ['Coche', 'Marca'],
            clues: ['Modelo'],
            timestamp: 0
          },
          {
            password: 'Pontiac',
            icon: 'theaters',
            title: 'Estoy dentro',
            media: 'matrix.jpg',
            description: 'Para entender el final de la tercera parte necesitas meterte una pildora roja por la nariz. O por el culo.',
            tags: ['Hermano', 'Hermana'],
            clues: ['Transexual'],
            timestamp: 0
          },
          {
            password: 'Wachowski',
            icon: 'games',
            title: 'Skyrim',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Lost',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'okemon',
            media: '.jpg',
            description: 'descripcion',
            tags: ['Piedra', 'Papel'],
            clues: ['Tijera', 'Lagarto'],
            timestamp: 0
          },
          {
            password: 'Spock',
            icon: 'tv',
            title: 'Big bang theory',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'La momia',
            media: '.jpg',
            description: 'descripcion',
            tags: ['Consorte', 'Faraón'],
            clues: ['Nombre', 'Inglés'],
            timestamp: 0
          },
          {
            password: 'Ankhesenamun',
            icon: 'place',
            title: '100%',
            media: '100.jpg',
            description: 'Has completado el 100% del juego! Enhorabuena! Me pregunto qué última misión te aguarda...',
            tags: ['Llave', 'Sorpresa'],
            clues: ['Buzón'],
            timestamp: 0
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('quest')
    },
    methods: {
      open () {
        this.$refs.snackbar.open()
      },
      close () {
        this.$refs.snackbar.close()
      },
      md5 (string) {
        var hash = 0
        if (string.length === 0) return hash
        for (var i = 0; i < string.length; i++) {
          var char = string.charCodeAt(i)
          hash = ((hash << 5) - hash) + char
          hash = hash & hash
        }
        return hash
      },
      debug () {
        var index = this.quests.findIndex(quest => quest.password === this.password)
        this.password = this.quests[index + 1].password
      }
    },
    computed: {
      active () {
        var found = this.quests.find(quest => quest.password === this.password)
        if (this.password && found) {
          this.$getItem(this.password)
          .then((value) => {
            if (!value) {
              found.timestamp = moment().format('x')
              this.$setItem(this.password, found)
              this.open()
            }
          })
          if (document.getElementById('scroll')) document.getElementById('scroll').scrollIntoView(true)
          this.help = false
          return found
        } else {
          return this.quests[0]
        }
      },
      index () {
        return this.quests.findIndex(quest => quest.password === this.password) + 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-switch
    align-items center
  .md-chip.md-primary
    background-color #673ab7
    color white
  .md-chip.md-warn
    background-color #e91e63
    color white
</style>