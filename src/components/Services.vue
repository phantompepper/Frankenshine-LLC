<template>
  <transition name="modal">
    <section class="popup-services">
      <div class="popup-heading u-padding-top-large">
        <a
          aria-role="button"
          aria-label="close"
          href="#section-media"
          class="popup-services__close"
          @click="$emit('close')"
        >&times;</a>
        <h4 class="heading-tertiary--gold">Frankenshine Services</h4>
        <br>
      </div>
      <div class="service__content">
        <div
          v-for="serviceItem in service"
          :key="serviceItem.id"
        >
          <div class="service__content--text">
            <div class="heading-primary--dark service-heading u-margin-bottom-small"><strong>{{ serviceItem.fields.title }}</strong></div>
            <p class="paragraph service__paragraph u-padding-bottom-medium">{{ serviceItem.fields.serviceDescription }}</p>
            <p class="service__content--examples"><em>{{ serviceItem.fields.serviceExamples }}</em></p>
            <div v-if="serviceItem.fields.duration">
              <p class="service__content--duration">Estimated service time:
                ~ {{ serviceItem.fields.duration }}
              </p>
            </div>
            <a
              href="https://squareup.com/appointments/book/c023f3c4-c7f9-4a86-83f8-e3d725b7cbc3/3GHYEYS7J01VB/services"
              target="_blank"
              rel="nofollow"
              class="service__content--price"
            >
              <strong>Starting at {{serviceItem.fields.priceRange }}</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import client from "../JS/contentful.js";

export default {
  name: "Services",
  data() {
    return {
      service: []
    };
  },
  created() {
    client
      .getEntries({
        content_type: "service",
        order: "fields.order"
      })
      .then(response => {
        this.service = response.items;
      });
  }
};
</script>

<style lang="scss">
.popup-services {
  // @include clearfix;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: $color-blue;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23650d88' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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

  &__close {
    &:link,
    &:visited {
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

.service__content {
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  margin: auto;
  max-width: 80%;
  justify-content: space-around;
  // flex-flow: row wrap;

  @include respond(tab-port) {
    align-content: flex-start;
    padding: 0 1rem;
    max-width: 95%;
    // height: 100vh;
  }

  &--text {
    padding: 1.5rem 6rem;
    // margin-right: -3rem;
    color: $color-black;
    background-color: $color-white;
    border-top: solid 2rem $color-primary;
    font-size: 1.6rem;
    width: auto;
    text-align: left;

    @include respond(tab-port) {
      padding: 1.5rem 1.5rem;
      width: 90vw;
    }
  }

  &--examples {
    background-color: $color-grey-light-1;
    padding-left: 1rem;
    border-radius: 2rem;
  }

  &--duration {
    color: $color-primary;
    padding: 1rem 1rem;
  }

  &--price {
    color: $color-primary-dark;
    font-size: 2rem;
    text-align: right;
  }

  &--photo {
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.5);
    border-radius: 2px;
    transition: all 0.2s;
    padding: 1rem;
    flex: 1 2 50%;
    max-width: 50%;
    align-self: flex-start;

    img {
      display: block;
      width: 50%;
      height: auto;
      margin: auto;
    }

    @include respond(tab-port) {
      box-shadow: 0 1.5 3rem rgba($color-black, 0.2);
      // padding: 0 1rem;
      // max-width: 100%;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
      z-index: 20;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
}

.service-heading {
  font-size: 2.5rem;
}
</style>