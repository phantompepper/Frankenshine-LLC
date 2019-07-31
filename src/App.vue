<template>
  <div id="app">
    <Navigation />
    <Header />
    <About />
    <Features />
    <Contact />
    <Footer />
  </div>
</template>

<script>
require("typeface-raleway");

//import components
import Navigation from "./components/Navigation";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Features from "./components/Features.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    About,
    Navigation,
    Features,
    Contact,
    Footer
  }
};
</script>

