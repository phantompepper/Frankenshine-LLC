<template>
  <section class="section-about" id="section-about">
    <div v-if="aboutSection">
      <div class="about__content">
        <div class="about__content--text">
          <div class="heading-tertiary--gold u-margin-bottom-small u-center-text">{{ aboutSection.aboutHeading }}</div>
          <p
            class="paragraph about__paragraph u-padding-bottom-medium"
          >{{ aboutSection.aboutParagraph }}</p>
          <img
          :src="`${aboutSection.aboutImage2.fields.file.url}?fm=jpg&fl=progressive`"
          alt="Spencer and Janae Versaw"
          class="about__content--photo"
        >
        <img
          :src="`${aboutSection.aboutImage3.fields.file.url}?fm=jpg&fl=progressive`"
          alt="Soapy Tesla"
          class="about__content--photo"
        >
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import client from "../JS/contentful.js";
export default {
  name: "About",
  data() {
    return {
      aboutSection: null,
      aboutHeading: "",
      fields: "",
      aboutParagraph: ""
    };
  },
  methods: {
    getAbout: function() {
      var self = this;
      client.getEntry("2ynW1crtdiC2MqiekqeYa2").then(entry => {
        self.aboutSection = entry.fields;
      });
    }
  },
  created() {
    var self = this;
    self.getAbout();
  }
};
</script>

<style lang="scss">
.about__content {
  display: flex;
  flex-flow: row;
  padding: 0 15rem;
  height: 75%;
  justify-content: space-around;
  // flex-flow: row wrap;

  @include respond(tab-port) {
    flex-direction: column;
    align-content: flex-start;
    margin: auto;
    padding: 0 3rem;
    // height: 100vh;
  }

  &--text {
    padding: 1.5rem 6rem;
    // margin-right: -3rem;
    border-radius: 1rem;
    color: $color-white;
    background-color: $color-grey-dark-3;
    font-size: 1.6rem;

    @include respond(tab-port) {
      padding: 1.5rem 3rem;
    }
  }

  &--photo {
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.5);
    border-radius: 2px;
    z-index: 10;
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
</style>

