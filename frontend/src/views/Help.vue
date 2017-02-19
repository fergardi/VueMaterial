<template lang="pug">
  div(v-once)
    md-card
      md-card-header
        md-avatar.md-large
          md-icon.md-primary school
        md-card-header-text
          .md-title Tutorial
          .md-subhead Qué demonios es esto?
      md-card-media
        md-image(md-src="img/help.jpg")
      md-card-content.no-padding
        .padding
          span Para nuestro aniversario quería hacer algo especial para tí y, como esto es lo que mejor se me da, me dije ¿por qué no hacer un juego con cosas frikis que nos gustan a los dos?
          span Durante 100 niveles, resolverás pequeños acertijos sobre temas de la cultura friki popular para encontrar un regalo que he escondido al final.
          span Cada prueba consta de un título, un icono, una imagen, una descripción, y unas etiquetas. Debes descubrir la contraseña que te permita avanzar al siguiente nivel.
          span Puedes solicitar pista si te atascas, que muestra más etiquetas para ayudarte, pero de hacerlo se verá reflejado en tu puntuación final.
          span Las contraseñas siempre son de una palabra con letras y/o números, nunca con espacios. Ignora los signos de puntuación, pero respeta siempre las mayúsculas.
          span Espero que te diviertas jugándolo tanto como yo haciéndolo. Suerte y que te diviertas! Éstos son los temas que he escogido:
      md-card-content.no-padding
        md-list.md-double-line
          md-divider
          md-list-item(v-for="item in ordered")
            md-avatar.md-large
              md-icon(v-bind:style="{ color: item.color }") {{ item.icon }}
            .md-list-text-container
              strong {{ item.title }}
              span {{ item.subtitle }}
            md-divider
      md-card-media
        md-image(md-src="img/chart.png")
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            icon: 'theaters',
            title: 'Cine',
            subtitle: 'Películas, cortos, vídeos, etc',
            color: '#b71c1c'
          },
          {
            icon: 'tv',
            title: 'Televisión',
            subtitle: 'Series, miniseries, anuncios, etc',
            color: '#ff5722'
          },
          {
            icon: 'games',
            title: 'Videojuegos',
            subtitle: 'Juegos, trucos, consolas, etc',
            color: '#ffeb3b'
          },
          {
            icon: 'chrome_reader_mode',
            title: 'Literatura',
            subtitle: 'Libros, historietas, comics, etc',
            color: '#4caf50'
          },
          {
            icon: 'brush',
            title: 'Animación',
            subtitle: 'Dibujos, anime, 3D, etc',
            color: '#9c27b0'
          },
          {
            icon: 'place',
            title: 'Lugares',
            subtitle: 'Mapas, destinos, viajes, etc',
            color: '#2196f3'
          },
          {
            icon: 'toys',
            title: 'Juguetes',
            subtitle: 'Muñecos, figuras, marcas, etc',
            color: '#ff4081'
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('help')
    },
    computed: {
      ordered () {
        return this.items
        .sort((x, y) => parseInt(y.percent) - parseInt(x.percent))
      }
    }
  }
</script>

<style lang="stylus" scoped>
  span
    display block
  span + span
    margin-top 1em
</style>