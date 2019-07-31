<template>
  <header class="header">
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--sub">Ready to revive your ride?</span>
      </h1>
    </div>
    <i class="header__logo">
      <img
        src="../assets/FS-LOGO-600.png"
        alt="Frankenshine Logo"
      >
    </i>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.header {
  height: 95vh;
  max-width: 100%;
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-grey-light-1, 0.2),
      rgba($color-blue, 0.7)
    ),
    url("../assets/soap-03.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  background-color: $color-black;
  position: relative;

  @media (min-resolution: 192dpi) and (min-width: 37.5em),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    (min-width: 125em) {
    background-image: linear-gradient(
        to right bottom,
        rgba($color-grey-light-1, 0.2),
        rgba($color-blue, 0.7)
      ),
      url("../assets/soap-03.jpeg");
  }

  @include respond(phone) {
    background-size: cover;
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-color: $color-black;
    position: relative;
    max-height: auto;
    max-width: 100%;
  }

  &__logo-box {
    position: absolute;
  }

  &__logo {
    img {
      position: absolute;
      width: 40vw;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 2rem;

      -webkit-animation: invertFadeIn 0.5s ease-in-out;
      animation: invertFadeIn 0.5s ease-in-out;
      -ms-animation: invertFadeIn 0.5s ease-in-out;
      -moz-animation: invertFadeIn 0.5s ease-in-out;
      animation-delay: 0.5s;
      animation-fill-mode: backwards;

      @include respond(phone-land) {
        width: 50vw;
      }

      @include respond(tab-port) {
        width: 75vw;
      }
    }
  }

  &__text-box {
    position: absolute;
    top: 80vh;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80vw;
    z-index: 1;
  }
}
</style>
