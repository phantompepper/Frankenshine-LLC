<template>
  <section class="section-footer">
    <div class="footer__navigation">
      <ul class="footer__list">
        <li class="footer__item">
          <a
            href="https://www.facebook.com/frankenshineautomotivedetailing/"
            class="footer__link"
            target="_blank"
            rel="noopener"
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
          >
            <img
              src="../assets/instagram.svg"
              alt="Instagram Icon Link "
            >
          </a>
        </li>
      </ul>
      <div class="footer-address">
        <p>Frankenshine Automotive Detailing LLC &copy; 2019</p>
        <p>305 S. 9Th Street</p>
        <p>Cañon City, CO 81212-4000</p>
        <p>Phone: <a href="tel:+1-719-582-8873">+719-582-8873</a></p>
      </div>
      <div class="footer-hours">
        <!-- <p>Hours:</p>
        <ul>
          <li>Monday: 8am - 12pm</li>
        </ul> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.footer-img {
  z-index: 10;
  padding: 1rem;
  // padding-top: 5rem;
  flex: 1 2 50%;
  max-width: 50%;

  img {
    display: block;
    width: 25%;
    height: auto;
    margin: auto;
  }
}
.footer-address {
  // padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 50vw;
  text-align: center;
}

.footer__navigation {
  align-self: center;
}
</style>