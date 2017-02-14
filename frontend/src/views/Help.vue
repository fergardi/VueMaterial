<template lang="pug">
  div(v-once)
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary help
        md-card-header-text
          .md-title Ayuda
          .md-subhead Te echo una mano?
      md-card-media
        md-image(md-src="img/help.jpg")
        md-ink-ripple
      md-card-content.no-padding
        .padding
          span Bienvenida a tu propia gymkana de aniversario portátil! Durante varias pruebas, resolverás pequeños acertijos sobre temas de la cultura friki que tanto nos gusta a los dos para encontrar el regalo que he escondido al final.
          span Hay de todo: libros, películas, series, dibujos animados, videojuegos, juegos de mesa... Para avanzar debes encontrar la contraseña que desbloquea la siguiente prueba.
          span Los códigos siempre son de una palabra, compuesta por letras y/o números. En algunos raros casos, como nombres propios de 2 palabras, la contraseña será del formato PrimeraSegunda, nunca con espacios. Elimina los signos de puntuación, pero respeta las mayúsculas.
          span Eres una chica lista, pero probablemente necesites algo de ayuda en las misiones más complicadas o en las que yo creo que sabes de qué van pero en realidad no tienes ni la remota idea.
          span Debes saber que ésta app es una pista en sí misma, es decir, cada misión puede que tenga pistas ocultas (en los iconos de ayuda, en los tags, en las imágenes, etc).
          span Estos son los temas relacionados. Usa la Wikipedia. Suerte y que te diviertas!
        md-list.md-double-line
          md-divider
          md-list-item(v-for="item in items")
            md-avatar.md-large
              md-icon(v-bind:style="{ color: item.color }") {{ item.icon }}
            .md-list-text-container
              span {{ item.title }}
              span {{ item.subtitle }}
            md-divider
        .padding
          chart
</template>

<script>
  import Chart from '../components/Chart.js'
  export default {
    components: { Chart },
    data () {
      return {
        items: [
          {
            icon: 'theaters',
            color: '#3F51B5',
            title: 'Cine',
            subtitle: 'Películas, cortos, etc'
          },
          {
            icon: 'tv',
            color: '#2196F3',
            title: 'Televisión',
            subtitle: 'Series, miniseries, etc'
          },
          {
            icon: 'games',
            color: '#9C27B0',
            title: 'Juegos',
            subtitle: 'Videojuegos, consolas, etc'
          },
          {
            icon: 'chrome_reader_mode',
            color: '#FF9800',
            title: 'Libros',
            subtitle: 'Novelas, cuentos, revistas, etc'
          },
          {
            icon: 'palette',
            color: '#F06292',
            title: 'Dibujos',
            subtitle: 'Animación, 3D, etc'
          },
          {
            icon: 'extension',
            color: '#009688',
            title: 'Puzzles',
            subtitle: 'Acertijos, adivinanzas, etc'
          },
          {
            icon: 'place',
            color: '#D32F2F',
            title: 'Viajes',
            subtitle: 'Mapas, destinos, sitios, etc'
          },
          {
            icon: 'toys',
            color: '#8BC34A',
            title: 'Juguetes',
            subtitle: 'Muñecos, figuras, comics, etc'
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('help')
    },
    methods: {
      last (index) {
        return index === this.items.length - 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  span
    display block
  span + span
    margin-top 0.5em
</style>