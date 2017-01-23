<template lang="pug">
  div
    md-snackbar(ref="snackbar", md-duration="5000")
      span Correcto! Se ha guardado en tus Logros. A ver si resuelves el siguiente...
      md-button.md-accent(v-on:click="close()")
        md-icon done
    md-card(md-with-hover)
      md-card-header
        md-avatar.md-large
          md-icon.md-primary {{ active.icon }}
        md-card-header-text
          .md-title {{ active.title }}
          .md-subhead Acertijo {{ active.id }} de {{ quests.length }}
      md-card-media
        img(v-bind:src="'img/quests/' + active.media")
        md-ink-ripple
        md-button.md-primary.md-fab.floating(v-on:click="debug()", v-if="active.id < quests.length")
          md-icon play_arrow
      md-card-content
        span {{ active.description }}
        p
          md-chip(v-for="tag in active.tags") {{ tag }}
        md-input-container(md-has-password)
          label Código secreto
          md-input(type="password", required, v-model="password")
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        quests: [
          {
            id: 1,
            password: null,
            icon: 'extension',
            title: 'Empieza el juego',
            media: 'default.jpg',
            description: 'He colocado un regalo muy especial de aniversario al final de una serie de pruebas de lógica friki que forman una gymkana online. Para cada acertijo, deberás encontrar e introducir el código secreto que desbloquea el siguiente, hasta llegar al último. Siempre será como mucho una palabra (combinación de números y letras). Respeta las mayúsculas pero ignora los signos de puntuación (como guiones, por ejemplo). Los tags te darán algunas pistas.',
            tags: ['nombre', 'mujer'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 2,
            password: 'Virginia',
            icon: 'theaters',
            title: 'Marty, tenemos que volver',
            media: 'plate.jpg',
            description: 'Como vas a tener que usar tu nuevo y flamante coche eléctrico para desplazarte a resolver algún que otro acertijo (has oido bien), he pensado usar una pequeña analogía con el DeLorean del Dr. Brown. El tuyo es más económico, éste consume 1.21GW por viaje! Pero no es eso lo que nos interesa ahora mismo, sino algo de la imagen.',
            tags: ['estado'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 3,
            password: '1234VJS',
            icon: 'theaters',
            title: 'Acertijos en la oscuridad',
            media: 'gollum.jpg',
            description: 'Cómo crear un juego de acertijos sin un guiño al duelo más famoso de la literatura fantástica tolkiana? Iba a ponerte uno sacado del libro que no apareciese en la película, para que tuvieras que releerlo, pero como internet es muy amplio y podrías caer en la tentación de hacer trampa y simplemente buscarlo, he tenido que improvisar uno nuevo. En realidad es una bobada, no se me da bien crear acertijos...',
            tags: ['acertijo'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 4,
            password: 'Sombra',
            icon: 'extension',
            title: 'El gato de Schrödinger',
            media: 'law.jpg',
            description: 'Este es un chiste de ingenieros, más bien de ingeniero, porque sólo lo entiendo yo, pero como creo que te lo he contado más de una vez, supongo que podrás averiguar de qué va la cosa. Lo del gato científico me ha venido que ni pintado para hacer la gracia.',
            tags: ['ecuación', 'electricidad'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 5,
            password: 'Ohm',
            icon: 'theaters',
            title: 'Retrato familiar',
            media: 'sherlock.jpg',
            description: 'Quería poner algo que tuviera que ver con el resolvedor de acertijos más grande de todos los tiempos, que también nos gusta mucho a los dos, pero como no tengo ni el ingenio ni la paciencia de Doyle para pensar algo condenadamente enrevesado, he optado por algo mucho más simple y obvio. Al menos para mí.',
            tags: ['familiar', 'nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 6,
            password: 'Eurus',
            icon: 'theaters',
            title: 'No tengo recuerdos de este lugar',
            media: 'moria.jpg',
            description: 'Siguiendo con la mitología Tolkien, ésta vez sobre su trilogía más famosa, tenía que poner las puertas de Moria, con su acertijo correspondiente. Aunque ligeramente modificado para la situación, claro está. Toma piropazo que me he marcado.',
            tags: ['élfico', 'contraseña'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 7,
            password: 'Vanya',
            icon: 'extension',
            title: 'El enigrma de las 5 casas',
            media: 'einstein.jpg',
            description: 'Seguramente ya lo hayas resuelto alguna vez en la vida, pero tendrás que hacerlo de nuevo si quieres encontrar la respuesta a mi acertijo personal.',
            tags: ['país', 'origen', 'bebida'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 8,
            password: 'Cerveza',
            icon: 'announcement',
            title: 'Una carta muy especial',
            media: 'cah.jpg',
            description: 'Seguro que te suena. Cuando soltaste esta burrada viendo aquella serie, solo conseguiste gustarme más.',
            tags: ['cartas', 'contra', 'la', 'humanidad'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 9,
            password: 'Niños',
            icon: 'videogame_asset',
            title: 'Legendaria',
            media: 'item.jpg',
            description: 'La culpable de todo lo que pasa en el World of Warcraft.',
            tags: ['WoW', 'espada'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 10,
            password: 'Frostmourne',
            icon: 'videogame_asset',
            title: 'Provisional',
            media: 'achievement.jpg',
            description: 'Todo el mundo recuerda aquella desastrosa Raid que se cobró la vida virtual de 15 personas que solo pudieron intentar huir mientras contemplaban horrorizados como uno de sus integrantes pasaba de oir la explicación del boss en cuestión y se lanzaba a la aventura de pisar todos los huevos de dragón que pudiera en el menor tiempo posible. Hoy en día se le recuerda y honra con un logro personalizado. Si fuera por mí le habría prendido fuego atado a una hoguera en una quedada friki. Menudo cabronazo.',
            tags: ['logro', 'nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 11,
            password: 'Jenkins',
            icon: 'theaters',
            title: 'El Puente de la Muerte',
            media: 'python.gif',
            description: 'Esta es sin duda mi escena preferida de la película. Iba a poner algo relacionado con preguntarte tu color favorito y responder mal la pregunta, pero esta otra me parece más divertida y un poco más difícil de sacar.',
            tags: ['respuesta'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 12,
            password: 'Ekallatum',
            icon: 'videogame_asset',
            title: 'Fuego++',
            media: 'ff.jpg',
            description: 'Tú siempre fuiste de Nintendo y Legend of Zelda, y yo siempre fui de Sony y Final Fantasy. Somos de mundos distintos...',
            tags: ['personaje', 'mago negro', 'nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 13,
            password: 'Vivi',
            icon: 'monochrome_photos',
            title: 'Overexposed',
            media: 'model.jpg',
            description: 'Esta muchacha está por todas partes. En Noruega la vi anunciando auténtica butifarra española. En león la he visto en movistar. Nos hemos reído mucho viendo a esta muchacha por el mundo, pero como se llama en realidad? Quién la envía? Por qué esta siempre tan feliz? Nos está observando para descubrir nuestras debilidades e informar a sus superiores extraterrestres?',
            tags: ['modelo', 'nombre'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 14,
            password: 'Arianne',
            icon: 'book',
            title: 'Mapa del Merodeador',
            media: 'marauder.jpg',
            description: 'Siempre me pareció absurdo que objetos mágicos únicos legendarios tan jodidamente bastos como la Capa de Invisibilidad o el Mapa del Merodeador fueran posesiones de alocados estudiantes que los empleaban básicamente para hacer peyas. Si yo pudiera ir a una escuela de magia no me perdería ni una clase.',
            tags: ['mote', 'personaje'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 15,
            password: 'Colagusano',
            icon: 'theaters',
            title: 'La respuesta es',
            media: 'deepthought.jpg',
            description: 'Recuerdas esta escena de esta película? La verdad es que la respuesta es bastante fácil...',
            tags: ['incógnitas', 'universo'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 16,
            password: '42',
            icon: 'theaters',
            title: 'Han visto cosas',
            media: 'robots.jpg',
            description: 'Sobre todo R2D2. Él sabe todo lo que pasa en toda la jodida saga, pero nadie le ha preguntado nunca nada. Y C3P0. Él fue construido por el jodido Darth Vader, pero aquí no ha pasado nada. Si la gente supiera que le construyó el monstruo que llevó a cabo la matanza de niños en el templo-guardería Jedi. Excepto esto. Esto no lo pueden saber, por que no estaban allí cuando sucedió.',
            tags: ['binario'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 17,
            password: 'K2SO',
            icon: 'videogame_asset',
            title: 'Provisional',
            media: 'triforce.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 18,
            password: 'Nayru',
            icon: 'theaters',
            title: 'Provisional',
            media: 'traitor.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 20,
            password: 'FN2187',
            icon: 'place',
            title: 'Indiana Jones y la Cadera de Cristal',
            media: 'indiana.gif',
            description: 'Siempre me he preguntado qué debe uno sentir con el corazón palpitante de un hombre en la mano. Y el de un niño? Mejor el de un niño, sin duda.',
            tags: ['grito', 'dios'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 21,
            password: 'Kalima',
            icon: 'place',
            title: 'Replicantes, replicantes everywhere',
            media: 'runner.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 22,
            password: 'Origami',
            icon: 'place',
            title: 'Provisional',
            media: 'terminator.jpg',
            description: 'Había un montón de modelos de Terminator, empezando por el 101, alias T800',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 23,
            password: 'T850',
            icon: 'place',
            title: 'Provisional',
            media: 'mario.jpg',
            description: '',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 24,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'pokemon.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 25,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'key.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 26,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'lost.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 27,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'blackmesa.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 28,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'monkey.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 29,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'pacman.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 30,
            password: 'FN2187',
            icon: 'place',
            title: 'Provisional',
            media: 'bandicoot.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 31,
            password: 'Arianne',
            icon: 'book',
            title: 'Mapa del Merodeador',
            media: 'saw.jpg',
            description: 'Siempre me pareció absurdo que objetos mágicos únicos legendarios tan jodidamente bastos como la Capa de Invisibilidad o el Mapa del Merodeador fueran posesiones de alocados estudiantes que los empleaban básicamente para hacer peyas. Si yo pudiera ir a una escuela de magia no me perdería ni una clase.',
            tags: ['mote', 'personaje'],
            favorite: false,
            timestamp: 0
          },
          {
            id: 32,
            password: 'Piti',
            icon: 'place',
            title: 'Provisional',
            media: 'victory.jpg',
            description: 'Provisional',
            tags: ['Provisional1', 'Provisional2'],
            favorite: false,
            timestamp: 0
          }
        ],
        password: ''
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
        this.password = this.quests[this.active.id].password
      }
    },
    computed: {
      active () {
        var found = this.quests.find(x => x.password === this.password)
        if (this.password && found) {
          this.$getItem(this.password)
          .then((value) => {
            if (!value) {
              found.timestamp = moment().format('x')
              this.$setItem(this.password, found)
              this.open()
            }
          })
          return found
        } else {
          return this.quests[0]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .floating
    position: absolute
    bottom: -35px
    right: 5px
    z-index: 9999
</style>