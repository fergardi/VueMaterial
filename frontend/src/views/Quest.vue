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
            clues: ['Nombre', 'Mujer'],
            timestamp: 0
          },
          {
            password: 'Virginia',
            icon: 'theaters',
            title: 'Tenemos que volver',
            media: 'delorean.gif',
            description: 'Vas a tener que usar tu flamante coche nuevo para resolver algunas de las pruebas. Este también era híbrido, y solo consumía 1,21GW!',
            tags: ['California', 'Virginia'],
            clues: ['Placa', 'Matrícula'],
            timestamp: 0
          },
          {
            password: '1656JVS',
            icon: 'tv',
            title: 'Sherlock',
            media: 'sherlock.jpg',
            description: 'No sería un juego de acertijos sin nuestro detective favorito, no? Una pena que haya terminado. Al menos Mary está MUERTA.',
            tags: ['Familiar', 'Perdido'],
            clues: ['Nombre', 'Mujer'],
            timestamp: 0
          },
          {
            password: 'Eurus',
            icon: 'theaters',
            title: 'Atracciones',
            media: 'jurassic.jpg',
            description: 'Recuerdo perfectamente esconderme debajo de la butaca del cine y gritar viendo esta película con 8 años.',
            tags: ['Bastón', 'Piedra'],
            clues: ['Mosquito', 'Savia'],
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
            clues: ['Japonés', 'Hombre'],
            timestamp: 0
          },
          {
            password: 'Kakaroto',
            icon: 'tv',
            title: 'Infiltrados',
            media: 'cylon.gif',
            description: 'Lo mejor de esta serie era que muchos Cylons no sabían que lo eran y se creían humanos. Te dejaba con la boca abierta cuando se descubría un nuevo modelo.',
            tags: ['Rubia', 'Modelo'],
            clues: ['Clave', 'Mujer'],
            timestamp: 0
          },
          {
            password: 'Caprica6',
            icon: 'theaters',
            title: 'Ash',
            media: 'ash.gif',
            description: 'Aunque tiene algunas escenas especialmente brutas, te ries de lo lindo con esta saga.',
            tags: ['Libro', 'Nombre'],
            clues: ['Muertos', ''],
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
            tags: ['Raza', 'Pueblo'],
            clues: ['Abe', 'Protagonista'],
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
            clues: ['Trilogía', 'Libro'],
            timestamp: 0
          },
          {
            password: 'Trantor',
            icon: 'palette',
            title: 'Gravity Falls',
            media: 'gravity.jpg',
            description: 'El simple nombre sugiere misterio. El dibujo y el guión, el punto cómico a esta historia de sucesos paranormales y sobrenaturales a lo Expediente X.',
            tags: ['Dipper', 'Mabel'],
            clues: ['Familia', 'Apellido'],
            timestamp: 0
          },
          {
            password: 'Pines',
            icon: 'tv',
            title: 'Quiero creer',
            media: 'believe.jpg',
            description: 'Tenía algunos capítulos bastante escabrosos que luego no me dejaban dormir. Hasta la musiquita acojonaba cuando eras un crío.',
            tags: ['Serie', 'Final'],
            clues: ['Capítulo', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Verdad',
            icon: 'theaters',
            title: 'Cuidado con la cabeza',
            media: 'sleepy.gif',
            description: 'Aunque me gustó el libro, la película de Tim Burton es bastante más interesante y con una trama más enrevesada. De mis favoritas.',
            tags: ['Animal', 'Cruel'],
            clues: ['Negro', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Temerario',
            icon: 'place',
            title: '25%',
            media: '25.jpg',
            description: 'Vas por el 25% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
            tags: ['Mapa', 'Saldaña'],
            clues: ['Laura', 'Socky'],
            timestamp: 0
          },
          {
            password: 'Ornitorrinco',
            icon: 'theaters',
            title: 'Scott Pilgrim',
            media: 'scott.gif',
            description: 'Otra buena película de frikis basada en un cómic. Las vidas extra son muy importantes para luchar contra exnovios celosos...',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'Alicia',
            media: 'alicia.jpg',
            description: '',
            tags: ['Apellido', 'Niña'],
            clues: ['Inspiración', 'Original'],
            timestamp: 0
          },
          {
            password: 'Liddell',
            icon: 'theaters',
            title: 'Guardianes de la galaxia',
            media: 'gotg.jpg',
            description: 'Lo confieso, no los conocía de nada hasta que salieron en el cine, pero desde entonces me encantan y hasta colecciono sus cómics!',
            tags: ['Rocket', 'Expediente'],
            clues: ['Experimento', 'Clave'],
            timestamp: 0
          },
          {
            password: '89P13',
            icon: 'tv',
            title: 'V',
            media: 'v.jpg',
            description: 'Muy buena e infravalorada, a mi parecer. Un duelo de inteligencia y un plan maesto de alienígenas reptilianos comedores de ratones.',
            tags: ['Rubia', 'Pelirroja'],
            clues: ['Anna', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Morena',
            icon: 'games',
            title: 'Media Vida',
            media: 'hl.jpg',
            description: 'Otra de mis teorías con respecto a tu trabajo es que también tenéis un Departamento de Materiales Anómalos. Y puertas interdimensionales!',
            tags: ['Base', 'Nombre'],
            clues: ['Instalaciones', 'Complejo'],
            timestamp: 0
          },
          {
            password: 'Blackmesa',
            icon: 'theaters',
            title: 'Día de la Independencia',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Fontanero',
            media: 'mario.gif',
            description: '"Lo siento Mario, la princesa está en otro castillo." Pues ya podías habermelo dicho antes de venir, no?',
            tags: ['Enemigo', 'Apellido'],
            clues: ['Rey', 'Koopa'],
            timestamp: 0
          },
          {
            password: 'Morton',
            icon: 'tv',
            title: 'Mr Robot',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Star Wars',
            media: 'starwars.jpg',
            description: 'Uno más en la familia! Estoy deseando ver qué nuevos droides inventan para las futuras secuelas. Debe ser la única saga de películas que no me importa que saquen secuelas constantemente.',
            tags: ['Droide', 'Nombre'],
            clues: ['Números', 'Letras'],
            timestamp: 0
          },
          {
            password: 'K2SO',
            icon: 'games',
            title: 'Metal slug',
            media: 'slug.gif',
            description: 'Una viciada de las recreativas. Tardes y monedas de 25 pesetas tiradas matando todo lo matable y muriendo todo lo morible.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'Adventure Time',
            media: '.jpg',
            description: 'Una gran serie animada para niños y no tan niños, con una trama principal perfectamente hilada si te vas fijando bien en cada episodio.',
            tags: ['Animal', 'Enemigo'],
            clues: ['Todos', 'Capítulos'],
            timestamp: 0
          },
          {
            password: 'Caracol',
            icon: 'tv',
            title: 'Community',
            media: '.jpg',
            description: 'Otra serie estupenda. Adoro los episodios de guerra de pintura. Y los especiales de videojuegos! Y de stop motion! Y de...!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Pensamiento Profundo',
            media: '.jpg',
            description: 'La respuesta al sentido de la vida, el universo y todo lo demás.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '42',
            icon: 'games',
            title: 'Resident evil',
            media: '.jpg',
            description: 'Otra de las teorías que tengo sobre tu trabajo es que desarrolláis en secreto armas biológicas. Experimentando con conejitos!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Es hora de morir',
            media: 'runner.gif',
            description: 'Todos estos momentos se perderán en el tiempo como lágrimas en la lluvia.',
            tags: ['Modelo', 'Replicante'],
            clues: ['Roy', 'Robot'],
            timestamp: 0
          },
          {
            password: 'Nexus6',
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
            password: 'Ohm',
            icon: 'tv',
            title: 'Fringe',
            media: 'fringe.gif',
            description: '',
            tags: ['Spoiler', 'Enemigos'],
            clues: ['Calvos', 'Sombreros'],
            timestamp: 0
          },
          {
            password: 'Observers',
            icon: 'theaters',
            title: 'La peonza cae',
            media: 'inception.jpg',
            description: 'Y punto. Nada de dejarlo en el aire, en el último milisegundo se tambalea indicando que nunca girará infinitamente, por lo que es real.',
            tags: ['Escaleras', 'Infinitas'],
            clues: ['Nombre', 'Dibujante'],
            timestamp: 0
          },
          {
            password: 'Penrose',
            icon: 'games',
            title: 'Rey del RPG',
            media: 'ff.jpg',
            description: 'Somos de mundos distintos. Tú, del Legend of Zelda y Nintendo. Yo, del Final Fantasy y Sony. Un amor imposible.',
            tags: ['Personaje', 'Apellido'],
            clues: ['FF9', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Ornitier',
            icon: 'theaters',
            title: 'Planeta Simios',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Muppets',
            media: 'muppets.jpg',
            description: 'Recuerdo que veía semanalmente este show con mis padres en el salón cuando era muy pequeño.',
            tags: ['Inglés', 'Verde'],
            clues: ['Rana', 'Muñeco'],
            timestamp: 0
          },
          {
            password: 'Kermit',
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
            description: 'Un grandísimo juego de lógica que adoraba de pequeño. Intentar salvarlos a todo era una locura. Y explotar a los rezagados molaba.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Wayward pines',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'toys',
            title: 'Mecano',
            media: '.jpg',
            description: 'Desde pequeño quería construir cosas. Empecé con los Lego, luego los Mecano, y cuando confirmé que era un manazas y un inútil, me dediqué a la informática!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'Simpsons',
            media: '.jpg',
            description: 'Ya no me hacen ni puta gracia los capítulos nuevos, ni siquiera la película, pero los viejos aún son buenísimos.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Larga vida',
            media: '.jpg',
            description: 'El reboot que han hecho de las películas es extremadamente decente. Pero la serie original sigue siendo un pestiño.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Cómo te llamas?',
            media: '.jpg',
            description: 'Este debería ser el ejemplo perfecto de cómo hacer un reboot/remake bien. Si las originales eran de culto, ésta se ha convertirá en leyenda.',
            tags: ['Protagonista', 'Apellido'],
            clues: ['Australiano', 'Palabra'],
            timestamp: 0
          },
          {
            password: 'Rockatansky',
            icon: 'chrome_reader_mode',
            title: 'Ready Player One',
            media: 'rpo.jpg',
            description: 'Otra de lo que parece que será mi futura saga favorita. Espero que la película sea de mi agrado',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Tekken',
            media: 'tekken.gif',
            description: 'Tengo grabados a fuego en la memoria los combos más complicados de varios personajes. Reviento con Xiayou y King.',
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
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Oferta de sierras',
            media: '.jpg',
            description: 'Me imagino al paisano comprando en la ferretería cuerdas, bridas, esposas, palas, lejía, antimanchas, cadenas, sopletes, sierras, taladros... Y pagando en efectivo.',
            tags: ['Nick', 'Asesino'],
            clues: ['Inglés', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Jigsaw',
            icon: 'tv',
            title: 'Upside down',
            media: 'stranger.gif',
            description: 'descripcion',
            tags: ['Luces', 'Palabra'],
            clues: ['Letras', 'Inglés'],
            timestamp: 0
          },
          {
            password: 'Fake',
            icon: 'games',
            title: 'Isla de los Monos',
            media: 'monkey.gif',
            description: 'Recuerdo esta saga con mucho cariño. Ya no se hacen juegos con este mimo y detalle. En ella se basa Piratas del Caribe.',
            tags: ['La', 'X'],
            clues: ['Marca', 'El'],
            timestamp: 0
          },
          {
            password: 'Lugar',
            icon: 'tv',
            title: 'Firefly',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: 'Serenity',
            icon: 'theaters',
            title: 'Santo Grial',
            media: 'python.gif',
            description: 'Quién el puente desee atravesar, tres preguntas deberá contestar, o al abismo irá a dar...',
            tags: ['Segundo', 'Tercera'],
            clues: ['Capital', 'Asiria'],
            timestamp: 0
          },
          {
            password: 'Ekallatum',
            icon: 'games',
            title: 'Trifuerza',
            media: 'zelda.gif',
            description: 'Sé que en la trifuerza el valor lo representa Link, la sabiduría Zelda y el poder Ganon, pero quién creó los fragmentos de la trifuerza?',
            tags: ['Color', 'Favorito'],
            clues: ['Nombre', 'Diosa'],
            timestamp: 0
          },
          {
            password: 'Din',
            icon: 'tv',
            title: 'Dr. Who',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'Avatar',
            media: '.jpg',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'chrome_reader_mode',
            title: 'The Witcher',
            media: '.jpg',
            description: '',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'theaters',
            title: 'MIB',
            media: 'mib.gif',
            description: 'descripcion',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Breaking Bad',
            media: 'bb.gif',
            description: 'La prueba viviente de que si le das una oportunidad a algo que no te gusta puede acabar sorprendiéndote sobremanera.',
            tags: ['Vanadio', 'Iridio'],
            clues: ['Elemento', 'Química'],
            timestamp: 0
          },
          {
            password: 'VIr',
            icon: 'extension',
            title: 'Spam',
            media: 'model.jpg',
            description: 'Una vez que la conoces, ya no puedes evitar encontrarla allá por donde vayas. EVERYWHERE.',
            tags: ['Nombre', 'Modelo'],
            clues: ['Mujer', 'Spam'],
            timestamp: 0
          },
          {
            password: 'Arianne',
            icon: 'theaters',
            title: 'Terminator',
            media: 'terminator.gif',
            description: 'A mí me gustan por este orden: primero la segunda, segundo la tercera, tercero la primera, cuarto la quinta y quinta la cuarta.',
            tags: ['Número', 'Secuencia'],
            clues: ['Orden', 'Código'],
            timestamp: 0
          },
          {
            password: '23154',
            icon: 'games',
            title: 'Might & Magic',
            media: 'homam.jpg',
            description: 'Otro de mis juegos favoritos, esta vez de estrategia y rol por turnos. Siempre he tenido debilidad por la nigromancia. Ojo, que no necrofilia!',
            tags: ['Necrópolis', 'Unidad'],
            clues: ['Resucitar', 'Muertos'],
            timestamp: 0
          },
          {
            password: 'Esqueletos',
            icon: 'theaters',
            title: '5 de Noviembre',
            media: 'vendetta.gif',
            description: 'Recuerden, recuerden, el 5 de Noviembre. Conspiración, pólvora y traición. No veo la demora y siempre es la hora, de evocarla sin dilación.',
            tags: ['Partido', 'Político'],
            clues: ['Nombre', 'Inglés'],
            timestamp: 0
          },
          {
            password: 'Norsefire',
            icon: 'place',
            title: '75%',
            media: '75.jpg',
            description: 'Vas por el 75% del juego! Ya te dije que tendrías que viajar, luchar contra monstruos y hablar con NPCs...',
            tags: ['Mapa', 'León'],
            clues: ['Jaime', 'Kissy'],
            timestamp: 0
          },
          {
            password: 'Supercalifragilisticoespialidoso',
            icon: 'palette',
            title: 'Naruto',
            media: 'naruto.gif',
            description: 'No te metas con Naruto. Tiene una historia por detrás que ya la quisiera Dragon Ball o Fullmetal Alchemist. Aunque tenga demasiado relleno.',
            tags: ['Ataque', 'Bola'],
            clues: ['Nombre', 'Japonés'],
            timestamp: 0
          },
          {
            password: 'Rasengan',
            icon: 'tv',
            title: '´Química avanzada',
            media: 'got.gif',
            description: 'Estos sí que eran alquimistas y herreros como mandaban los diversos dioses.',
            tags: ['Acero', 'Fuego'],
            clues: ['Verde', 'Negro'],
            timestamp: 0
          },
          {
            password: 'Valyrio',
            icon: 'theaters',
            title: 'Multipase',
            media: 'element.gif',
            description: 'Me encantan las películas de futuros en ciudades atestadas y tecnología por todas partes. Aunque luego odio ir a Madrid.',
            tags: ['Raza', 'Alienígenas'],
            clues: ['Extraterrestres', 'Piedras'],
            timestamp: 0
          },
          {
            password: 'Mondoshawan',
            icon: 'chrome_reader_mode',
            title: 'Habla y entra',
            media: 'moria.gif',
            description: 'Podría haber sacado algo del Silmarillion que no sacases en la vida. En realidad he optado por un piropazo.',
            tags: ['Hermosa', 'Élfico'],
            clues: ['Tolkien', 'Palabra'],
            timestamp: 0
          },
          {
            password: 'Vanya',
            icon: 'theaters',
            title: 'Qué es? Qué es?',
            media: 'nightmare.gif',
            description: 'Hay luces de color! Qué es? Parece de algodón! Qué es? No creo lo que veo, estoy soñando? No lo sé! Qué injusto es! Qué es?',
            tags: ['Nariz', 'Luz'],
            clues: ['Color', 'Favorito'],
            timestamp: 0
          },
          {
            password: 'Zero',
            icon: 'palette',
            title: 'Rick y Morty',
            media: 'rick.jpg',
            description: 'Entiendo que Morty venga de Marty, pero de donde huevos sacaron que el nombre de Rick hace apología al Dr. Emmett?',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Coooararrrl',
            media: 'carl.gif',
            description: 'Odio a Carl. Le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odio, le odiooooo!!',
            tags: ['Nombre', 'Mujer'],
            clues: ['Recordado', 'Competición'],
            timestamp: 0
          },
          {
            password: 'Andrea',
            icon: 'theaters',
            title: 'Indiana jones',
            media: 'indiana.gif',
            description: 'Quién no ha sentido nunca el deseo de tener en la mano el corazón recién arrancado y aún palpitante de una persona mientras se lo enseñas? Y el de un niño?',
            tags: ['Culto', 'Sacrificio'],
            clues: ['Dios', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Kalimah',
            icon: 'toys',
            title: 'Lego',
            media: 'lego.jpg',
            description: 'Para mi los Lego eran los bloques de construcción, nunca tuve muñequitos. Esos eran los Playmobil. Pero ahora molan mucho y quiero hacer escenas de Star Wars con ellos!',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'games',
            title: 'Destruye amistades',
            media: 'worms.jpg',
            description: 'No hay otra definición mejor. Quedar en casa de un amigo para jugar entre varios con la misma pantalla y ver sus corazones romperse cuando aniquilabas sus gusanitos. Sublime.',
            tags: ['Granada', 'Santa'],
            clues: ['Inglés', 'Cántico'],
            timestamp: 0
          },
          {
            password: 'Hallelujah',
            icon: 'theaters',
            title: 'Desea saber más?',
            media: 'troopers.gif',
            description: 'Otra peli clásica de ciencia ficción, aunque haya otras 3 secuelas que den ganas de vomitar.',
            tags: ['Bichos', 'Planeta'],
            clues: ['Guerra', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Klendathu',
            icon: 'chrome_reader_mode',
            title: 'El hobbit',
            media: 'gollum.gif',
            description: 'Tampoco sería un juego de acertijos completo sin el duelo de acertijos más famoso de todos los tiempos, no?',
            tags: ['Acertijos', 'Último'],
            clues: ['Respuesta', 'Trampa'],
            timestamp: 0
          },
          {
            password: 'Anillo',
            icon: 'extension',
            title: 'Las 5 Casas',
            media: 'einstein.jpg',
            description: 'Probablemente ya has hecho este rompecabezas, así que te pregunto, qué bebe el dueño del pez?',
            tags: ['Bebida', 'Dueño'],
            clues: ['País', 'Origen'],
            timestamp: 0
          },
          {
            password: 'Cerveza',
            icon: 'theaters',
            title: '12 monos',
            media: 'monkeys.jpg',
            description: 'Otra gran distopía futurista tecnológicamente avanzada en la que el mundo ha sido destruido por un peligroso virus, y consiguen viajar al pasado para evitarlo.',
            tags: ['Virus', 'Nombre'],
            clues: ['Serie', 'Película'],
            timestamp: 0
          },
          {
            password: 'Kalavirus',
            icon: 'chrome_reader_mode',
            title: 'Harry potter',
            media: 'marauder.gif',
            description: 'Siempre me pareció absurdo que artefactos mágicos tan jodidamente poderosos e inclinables hacia el mal como la Capa de Invisibilidad o el Mapa del Merodeador los posean unos preadolescentes.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'palette',
            title: 'Año 3000',
            media: 'fry.gif',
            description: 'Mi serie de animación favorita. Más graciosa que los Simpsons, y menos basta que Padre de Familia. Perfecta.',
            tags: ['Tarjeta', 'Pizza'],
            clues: ['Pin', 'Banco'],
            timestamp: 0
          },
          {
            password: '1077',
            icon: 'theaters',
            title: 'Spiderman',
            media: '.jpg',
            description: 'En mi opinión, el único superhéroe de verdad. Un pringao con superpoderes. Como debe ser. Nada de artilugios ni tetazas enormes.',
            tags: ['tag1', 'tag2'],
            clues: ['clue1', 'clue2'],
            timestamp: 0
          },
          {
            password: '',
            icon: 'tv',
            title: 'Kitt',
            media: 'kitt.gif',
            description: 'Hoy en día ves esta serie y es tan casposa como surrealista, pero cuando era un crío me encantaba.',
            tags: ['Coche', 'Marca'],
            clues: ['Empresa', 'Nombre'],
            timestamp: 0
          },
          {
            password: 'Pontiac',
            icon: 'theaters',
            title: 'Estoy dentro',
            media: 'matrix.jpg',
            description: 'Para entender el final de la tercera parte necesitas meterte la pildora roja machacada por la nariz. Y tres rayas.',
            tags: ['Hermano', 'Hermana'],
            clues: ['Transexual', 'Sexo'],
            timestamp: 0
          },
          {
            password: 'Wachowski',
            icon: 'games',
            title: 'Dragonborn',
            media: 'skyrim.jpg',
            description: 'Yo antes era un aventurero como tú, pero un día me hirieron con una flecha en la rodilla.',
            tags: ['Fus', 'Ro'],
            clues: ['Grito', 'Muro'],
            timestamp: 0
          },
          {
            password: 'Dah',
            icon: 'tv',
            title: 'Ciencia vs Fe',
            media: 'bunker.gif',
            description: 'La primera serie que me enganchó hasta tal punto de madrugar 4 horas para ver el final en tiempo real, sin subtitular, y con cortes de emisión. Final decepcionante, por cierto.',
            tags: ['Spoiler', 'Números'],
            clues: ['Malditos', 'Chungos'],
            timestamp: 0
          },
          {
            password: '4815162342',
            icon: 'palette',
            title: 'Hazte con todos',
            media: 'pokemon.jpg',
            description: 'No he sido tan cabrón de ponerte uno aleatorio para que me digas cuál es. Porque hay más de 800. Este es especial.',
            tags: ['Pokemon', '4chan'],
            clues: ['Nombre', 'Inventado'],
            timestamp: 0
          },
          {
            password: 'Tentaquil',
            icon: 'tv',
            title: 'Big bang theory',
            media: 'tbbt.jpg',
            description: 'Molaban más cuando no tenían novia. Pero todos los frikis tenemos derecho al amor, no? Ahora son todo chuminadas.',
            tags: ['Piedra', 'Papel'],
            clues: ['Tijera', 'Lagarto'],
            timestamp: 0
          },
          {
            password: 'Spock',
            icon: 'theaters',
            title: 'La momia',
            media: 'mummy.gif',
            description: 'Esta peli me mola un montón. Todavía me dan muy mal rollo los escarabajos carnívoros hibernados que se meten bajo la piel.',
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