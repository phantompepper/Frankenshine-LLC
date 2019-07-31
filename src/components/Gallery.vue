<template>
  <transition name="modal">
    <div
      class="popup"
      id="gallery"
    >
      <div class="popup__gallery--heading-light popup-header">
        <a
          aria-role="button"
          aria-label="close"
          href="#section-media"
          class="popup__close"
          @click="$emit('close')"
        >&times;</a>
        <h2 class="u-margin-bottom-small">Image Gallery</h2>
        <br>
        <p>Take a look! We are proud to stand by our work. Here are some of the rides that have had the Frankenshine experience.</p>
      </div>
      <!-- START GALLERY -->
      <div class="popup__gallery">
        <div
          v-if="selected"
          class="popup__gallery--selected"
        >
          <img
            :src="selected"
            alt="Selected Image to fill the viewport"
            class="popup__gallery--selected-image"
            @click.stop="selected = null"
          >

        </div>

        <figure
          class="popup__gallery--item"
          v-for="image in images"
          :key="image.id"
        >
          <img
            :src="`${image.fields.file.url}?fm=jpg&fl=progressive`"
            alt="Gallery Images for Frankenshine"
            @click="selectedImage()"
            class="popup__gallery--img"
          >
          <figcaption>{{ image.fields.description }}</figcaption>
        </figure>
        <!-- <p class="popup__gallery--credit">Photos by: Tyler Jo Gaines </p> -->
      </div>
    </div>
  </transition>
</template>

<script>
import client from "../JS/contentful.js";

export default {
  name: "Gallery",
  data() {
    return {
      text: "",
      images: [],
      selected: null
    };
  },
  methods: {
    selectedImage: function() {
      this.selected = event.target.src;
    }
  },
  created() {
    client
      .getEntries({
        content_type: "imageGallery"
      })
      .then(response => {
        this.images = response.items[0].fields.image;
      });
  }
};
</script>

<style lang="scss">
.popup {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: $color-black;
  position: fixed;
  z-index: 10000;
  opacity: 1;
  transition: all 0.3s;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; //we'll see
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    background-color: rgba($color-black, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  &__content {
    @include absCenter;
    width: 75%;
    box-shadow: 0 2rem 4rem rgba($color-black, 0.5);
    background-color: $color-white;
    border-radius: 3px;
    display: table;
    overflow: hidden;
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.25);
    transition: all 0.4s 0.2s;

    @include respond(tab-port) {
      width: 95%;
      // height: 75%;
      display: block;
    }
  }

  &__left {
    width: 33.333333%;
    display: table-cell;

    @include respond(tab-port) {
      width: 0%;
      display: none;
    }
  }

  &__right {
    width: 66.666667%;
    display: table-cell;
    vertical-align: middle;
    padding: 3.5rem 5rem;

    @include respond(tab-port) {
      width: 100%;
      display: block;
      text-align: left;
      padding: 1rem;
      vertical-align: none;
    }
  }

  &__img {
    display: block;
    width: 100%;

    @include respond(tab-port) {
      display: none;
      width: 0;
    }
  }

  &__text {
    font-size: 1.4rem;
    margin-bottom: 4rem;
    column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid $color-grey-light-1;
    hyphens: none;

    @include respond(tab-port) {
      column-count: 1;
      column-gap: none;
      column-rule: none;
      hyphens: none;
      margin-bottom: 2rem;
    }
  }

  &__gallery {
    width: 100%;
    height: 100%;
    background-color: rgba($color-black, 0.95%);
    position: absolute;
    padding: 2rem;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;

    @supports (display: grid) {
      display: grid;
      opacity: 1;
      grid-gap: 4rem;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(30rem, 1fr));
      width: 100%;
    }

    &--heading {
      grid-column: 1 / -1;
      text-align: center;
      margin: 0 auto;
    }

    &--credit {
      grid-column: 1 / -1;
      text-align: left;
      padding: 3rem;
    }

    &--selected {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: rgba($color-black, 0.8);
      position: fixed;
      z-index: 10009;
      transition: all 0.3s;

      &-image {
        @include absCenter;
        height: 100%;
        width: auto;
        object-fit: contain;
        box-shadow: 0 2rem 4rem rgba($color-black, 0.5);
        border-radius: 3px;
      }
    }

    &--img {
      float: left;
      width: 33.3333%;
      z-index: 9001;
      transition: 0.2s;

      @supports (display: grid) {
        max-width: 650px; //testing
        width: 100%;
        margin: 0;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        scale: 1.1;
        transform: translateY(-0.5rem);
        cursor: pointer;
      }
    }

    &--video {
      float: left;
      width: 33.3333%;
      height: auto;
      z-index: 9001;
      transition: 0.2s;
      overflow: hidden;

      & iframe {
        // background-image: url();

        background-repeat: no-repeat;
        background-position: center center;
      }

      @supports (display: grid) {
        width: 100%;
        object-fit: cover;
      }

      &:hover {
        scale: 1.1;
        transform: translateY(-0.5rem);
        cursor: pointer;
        border: 2px solid $color-tertiary-light;
      }
    }

    &--item:target {
      display: grid;
      align-items: center;
      justify-items: center;
    }

    &--img:target {
      display: grid;
      align-items: center;
      justify-items: center;
    }
  }

  &__about {
    max-height: 75vh;
    // font-size: $default-font-size;
    // padding: 4rem;
    // overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  OPEN STATES &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target &__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &__close {
    &:link,
    &:visited {
      color: $color-tertiary-light;
      position: fixed;
      top: 2.5rem;
      right: 2.5rem;
      font-size: 6rem;
      text-decoration: none;
      display: inline-block;
      transition: all 0.2s;
      line-height: 1;
      z-index: 11001;
    }

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
