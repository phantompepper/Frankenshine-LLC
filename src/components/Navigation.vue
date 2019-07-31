<template>
  <div
    role="navigation"
    class="navigation"
  >
    <input
      aria-role="menu"
      type="checkbox"
      class="navigation__checkbox"
      id="navi-toggle"
    >
    <label
      for="navi-toggle"
      class="navigation__button"
    >
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a
            href="#section-about"
            class="navigation__link"
            @click="navClose"
          >About Us</a>
        </li>
        <li class="navigation__item">
          <a
            href="https://squareup.com/appointments/book/c023f3c4-c7f9-4a86-83f8-e3d725b7cbc3/3GHYEYS7J01VB/services"
            rel="nofollow"
            target="_blank"
            class="navigation__link"
            @click="navClose"
          >Book Today!</a>
        </li>
        <li class="navigation__item">
          <a
            href="#contact"
            class="navigation__link"
            @click="navClose"
          >Contact</a>
        </li>
      </ul>
      <!-- SOCIAL -->
      <span>
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a
                href="https://www.facebook.com/frankenshineautomotivedetailing/"
                class="footer__link"
                target="_blank"
                rel="noopener"
                @click="navClose"
              >
                <img
                  src="../assets/fb.svg"
                  alt="Facebook Icon Link"
                >
              </a>
            </li>
            <li class="footer__item ">
              <a
                href="https://www.instagram.com/frankenshineautodetail/"
                class="footer__link"
                target="_blank "
                rel="noopener"
                @click="navClose"
              >
                <img
                  src="../assets/instagram.svg"
                  alt="Instagram Icon Link "
                >
              </a>
            </li>
          </ul>
        </div>
      </span>
    </nav>
  </div>

</template>

<script>
export default {
  name: "Navigation",
  methods: {
    navClose() {
      const navToggle = document.querySelector(".navigation__checkbox");
      navToggle.checked = false;
    }
  }
};
</script>

<style lang="scss">
.navigation {
  &__checkbox {
    display: none;
  }

  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;

    @include respond(tab-port) {
      top: 4rem;
      right: 4rem;
    }

    @include respond(phone) {
      top: 2rem;
      right: 2rem;
      height: 4rem;
      width: 4rem;
    }
  }

  &__button:hover {
  }

  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(
      rgba($color-primary-dark, 0.98),
      rgba($color-blue, 0.98)
    );
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    @include respond(tab-port) {
      top: 4.5rem;
      right: 4.5rem;
    }

    @include respond(phone) {
      top: 3.5rem;
      right: 3.5rem;
      height: 1rem;
      width: 1rem;
    }
  }

  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: -50rem;
    z-index: 1500;

    width: 0;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }

  &__item {
    margin: 1rem;
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-white 50%
      );
      background-size: 250%;
      transition: all 0.4s;

      @include respond(phone) {
        transition: all 0.2s;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-black;
    }
  }

  // FUNCTIONALITY
  &__checkbox:checked ~ &__background {
    transform: scale(80);

    @include respond(phone) {
      transform: scale(300);
    }
  }

  &__checkbox:checked ~ &__nav {
    left: 0;
    width: 100%;
    opacity: 1;
  }

  //ICON

  &__icon {
    position: relative;
    margin-top: 3.5rem;

    @include respond(phone) {
      margin-top: 2rem;
    }
    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-grey-dark-3;
      display: inline-block;

      @include respond(phone) {
        width: 2rem;
      }
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}

.footer__navigation {
  display: flex;
  padding: 2rem;
}
</style>

