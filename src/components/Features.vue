<template>
  <div>
    <section
      class="section-features"
      id="section-features"
    >
      <div class="features__content">
        <!-- <modalTemplates/> -->
        <div class="feature features__content--service">
          <div class="features__content--service-text">
            <button
              class="btn btn--white"
              v-on:click="getServices = true"
            >Services</button>
            <p>Discover what Frankenshine can do for you. Here are the details...</p>
          </div>
        </div>
        <Services
          v-if="getServices"
          @close="getServices = false"
        ></Services>
        <!-- IMAGE GALLERY  -->
        <div class="feature features__content--gallery">
          <div class="features__content--gallery-text">
            <button
              class="btn btn--white"
              v-on:click="getGallery = true"
            >Gallery</button>
            <p>An image gallery of some revived rides!</p>
          </div>
        </div>
        <Gallery
          v-if="getGallery"
          @close="getGallery = false"
        ></Gallery>
        <!-- SCHEDULE -->
        <div class="feature features__content--calendar">
          <div class="features__content--calendar-text">
            <a
              class="btn btn--white"
              href="https://square.site/book/3GHYEYS7J01VB/frankenshine-automotive-detailing-llc-canon-city-co"
              target="_blank"
              ref="nofollow"
            >Book</a>
            <p>Schedule an appointment today!</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
import Services from "../components/Services.vue";

export default {
  components: {
    Gallery: Gallery,
    Services: Services
  },
  data() {
    return {
      selected: null,
      getGallery: false,
      getServices: false
    };
  },
  methods: {
    selectedImage: function() {
      this.selected = event.target.src;
    }
  },
  name: "Features"
};
</script>

<style lang="scss">
.features__content {
  display: flex;
  height: auto;
  z-index: -1;
  font-size: 1.6rem;
  background-color: $color-grey-dark;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
  transition: transform 0.2s;
  overflow: hidden;
  margin: auto;
  &__link,
  &__link:active,
  &__link:visited {
    text-decoration: none;
    color: inherit;
  }
  @include respond(tab-port) {
    flex-direction: column;
  }
  &--calendar {
    background-color: $color-sky;
    &-text {
      width: 100%;
      height: 100%;
      padding: 3rem;
      background-image: linear-gradient(
          to right,
          rgba($color-white, 0.8),
          rgba($color-grey-dark, 0.8)
        ),
        url("../assets/truck-01.jpeg");
      background-position: center;
      p {
        padding-top: 8rem;
        color: $color-white;
        font-size: 2rem;
      }
    }
  }
  &--gallery {
    background-color: $color-gold;
    &-text {
      width: 100%;
      height: 100%;
      padding: 3rem;
      background-image: linear-gradient(
          to right,
          rgba($color-grey-light-1, 0.8),
          rgba($color-grey-dark, 0.8)
        ),
        url("../assets/sandj.jpg");
      background-size: cover;
      background-position: center;
      p {
        font-size: 2rem;
        color: $color-white;
        padding-top: 8rem;
      }
    }
  }
  &--service {
    background-color: $color-primary;
    &-text {
      width: 100%;
      height: 100%;
      padding: 3rem;
      background-image: linear-gradient(
          to right,
          rgba($color-grey-light-1, 0.8),
          rgba($color-grey-dark, 0.8)
        ),
        url("../assets/brush.jpeg");
      background-size: cover;
      background-position: center;
      p {
        font-size: 2rem;
        color: $color-white;
        padding-top: 8rem;
      }
    }
  }
}
.feature {
  padding: 3rem;
  margin: 1.5rem 0;
  width: 100%;
  transition: all 0.2s;
  font-size: 1.8rem;
  &:hover {
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

    transform: scale(1.05);
  }
}

// .swalModal {
//   width: 90%;
// }

#iframe-mobile {
  display: none;
  @include respond(tab-port) {
    width: 100%;
    display: inherit;
  }
}

#iframe-desk {
  display: inherit;
  @include respond(tab-port) {
    display: none;
  }
}

iframe {
  display: block;
  width: 100%;
  height: 80vh;
  @include respond(tab-port) {
    width: 100%;
    height: 60vh;
  }
}
</style>
