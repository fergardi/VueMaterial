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
          span Bienvenida a tu propia gymkana de aniversario portátil! Durante 100 pruebas, resolverás pequeños acertijos sobre temas de la cultura friki que tanto nos gusta a los dos para encontrar el regalo que he escondido al final.
          span Hay de todo: libros, películas, series, dibujos animados, videojuegos, juegos de mesa... Para avanzar debes encontrar la contraseña que desbloquea la siguiente prueba.
          span Como era tan difícil escoger sobre cientos de referencias frikis, algunas muy buenas se me han quedado fuera. Tal vez para el año que viene te haga una expansión...
          span Los códigos siempre son de una palabra, compuesta por letras y/o número, nunca con espacios. Ignora los signos de puntuación, pero respeta siempre las mayúsculas.
          span Eres una chica lista, pero probablemente necesites algo de ayuda en las misiones más complicadas o en las que yo creo que sabes de qué van pero en realidad no tienes ni la remota idea.
          span Debes saber que ésta app es una pista en sí misma, es decir, cada misión puede que tenga pistas en los iconos de ayuda, en los tags, en las imágenes, etc. También puedes activar el modo de ayuda avanzada si te atascas.
          span Estos son los temas relacionados. Usa la Wikipedia. Suerte y que te diviertas!
        md-list.md-triple-line
          md-divider
          md-list-item(v-for="item in items")
            md-avatar.md-large
              md-icon.md-primary {{ item.icon }}
            .md-list-text-container
              strong {{ item.title }}
              span {{ item.subtitle }}
              i {{ item.percent.toFixed(2) }} %
            md-divider
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            icon: 'theaters',
            title: 'Cine',
            subtitle: 'Películas, cortos, etc',
            percent: 30
          },
          {
            icon: 'tv',
            title: 'Televisión',
            subtitle: 'Series, miniseries, etc',
            percent: 22
          },
          {
            icon: 'games',
            title: 'Juegos',
            subtitle: 'Videojuegos, consolas, etc',
            percent: 18
          },
          {
            icon: 'chrome_reader_mode',
            title: 'Literatura',
            subtitle: 'Novelas, cuentos, libros, etc',
            percent: 10
          },
          {
            icon: 'palette',
            title: 'Dibujos',
            subtitle: 'Animación, 3D, etc',
            percent: 9
          },
          {
            icon: 'extension',
            title: 'Puzzles',
            subtitle: 'Acertijos, adivinanzas, etc',
            percent: 4
          },
          {
            icon: 'place',
            title: 'Viajes',
            subtitle: 'Mapas, destinos, sitios, etc',
            percent: 4
          },
          {
            icon: 'toys',
            title: 'Juguetes',
            subtitle: 'Muñecos, figuras, comics, etc',
            percent: 3
          }
        ]
      }
    },
    created () {
      this.$material.setCurrentTheme('help')
    }
  }
</script>

<style lang="stylus" scoped>
  span
    display block
  span + span
    margin-top 1em
</style>