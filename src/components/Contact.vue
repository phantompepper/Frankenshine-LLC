<template>
  <section
    class="form"
    id="contact"
  >
    <form
      method="POST"
      class="form__section"
      data-netlify="true"
      name="estimate-form"
      data-netlify-honeypot="bot-field"
      netlify
    >
      <input
        type="hidden"
        name="form-name"
        value="estimate-form"
      />
      <p class="form__bot">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <!-- <input type="hidden" name="form-name" value="contact-form" /> -->
      <div class="u-margin-bottom-medium">
        <h1 class="heading-tertiary u-center-text">Questions? Send us a message!</h1>
      </div>
      <div class="form__group">

        <!-- FULL NAME -->
        <input
          aria-describedby="full-name"
          v-model="form.fullName"
          type="text"
          class="form__input form__input--text"
          placeholder="Full Name"
          id="name"
          name="Full Name"
          required
        >
        <label
          id="full-name"
          for="name"
          class="form__label"
        ><span class="form__check">&#10004;</span> Full Name</label>
      </div>
      <!-- EMAIL -->
      <div class="form__group">
        <input
          aria-describedby="email"
          type="email"
          v-model="form.email"
          class="form__input form__input--text"
          placeholder="Email Address"
          id="email"
          name="Email"
          required
        >
        <label
          id="email"
          for="email"
          class="form__label"
        ><span class="form__check">&#10004;</span> Email</label>
      </div>
      <!-- PHONE -->
      <div class="form__group">
        <input
          aria-describedby="email"
          type="tel"
          v-model="form.phone"
          class="form__input form__input--text"
          placeholder="Phone Number"
          id="email"
          name="Phone"
          required
        >
        <label
          id="phone"
          for="phone"
          class="form__label"
        ><span class="form__check">&#10004;</span> Phone Number</label>
      </div>
      <!-- VEHICLE MAKE -->
      <div class="form__group">
        <input
          aria-describedby="vehicle_make"
          type="text"
          v-model="form.vehicleMake"
          class="form__input form__input--text"
          placeholder="Vehicle Make"
          id="vehicle_make"
          name="Vehicle Make"
          required
        >
        <label
          id="vehicle_make"
          for="vehicle_make"
          class="form__label"
        ><span class="form__check">&#10004;</span> Vehicle Make</label>
      </div>
      <!-- VEHICLE MODEL -->
      <div class="form__group">
        <input
          aria-describedby="vehicle_model"
          type="text"
          v-model="form.vehicleModel"
          class="form__input form__input--text"
          placeholder="Vehicle Model"
          id="vehicle_model"
          name="Vehicle Model"
          required
        >
        <label
          id="vehicle_model"
          for="vehicle_model"
          class="form__label"
        ><span class="form__check">&#10004;</span> Vehicle Model</label>
      </div>
      <!-- ROWS OF SEATING -->
      <div class="form__group">
        <input
          aria-describedby="rows_of_seating"
          type="number"
          v-model="form.rowsOfSeating"
          class="form__input form__input--text"
          placeholder="Rows of Seating"
          id="rows_of_seating"
          name="Rows of Seating"
          required
        >
        <label
          id="rows_of_seating"
          for="rows_of_seating"
          class="form__label"
        ><span class="form__check">&#10004;</span> Rows of Seating</label>
      </div>
      <!-- CONDITION -->
      <div class="form__group">
        <select
          required
          v-model="form.selectedCondition"
          name="Vehicle-Condition"
          class="form__input"
          id="Vehicle-Condition"
        >
          <option
            disabled
            value=""
          >Current condition?</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Dirty">Dirty</option>
          <option value="NASTY">NASTY!</option>
        </select>
        <label
          class="form__label"
          for="Vehicle-Condition"
          id="Vehicle-Condition"
        ><span class="form__check">&#10004;</span> How would you describe the condition of your vehicle?</label>
      </div>
      <!-- MESSAGE -->
      <div class="form__group">
        <textarea
          v-model="form.message"
          class="form__input form__input--text"
          placeholder="Message"
          id="message"
          name="Message"
          rows="5"
          required
        ></textarea>
      </div>
      <label
        id="message"
        for="message"
        class="form__label"
      ><span class="form__check">&#10004;</span>Message</label>
      <!-- SEND -->
      <div class="form__group u-margin-top-huge">
        <button class="btn btn--green">Send &rarr;</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        vehicleMake: "",
        vehicleModel: "",
        rowsOfSeating: "",
        selectedCondition: "",
        message: ""
      }
    };
  }
};
</script>

<style lang="scss">
.form {
  padding: 15rem 0;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.5),
      rgba($color-primary-dark, 0.5)
    ),
    url("~@/assets/FS-ICON-BG.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include respond(tab-port) {
    padding: 10rem 0;
  }
  &__section {
    padding: 10rem;
    width: 75vw;
    background-image: linear-gradient(to right bottom, $color-blue, $color-sky);
    // background-position: center;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.3);

    // background-size: cover;
    border-radius: 1.5rem;

    @include respond(tab-port) {
      width: 85vw;
      padding: 1.5rem;
      padding-bottom: 2rem;
    }
  }
  &__bot {
    display: none;
    visibility: hidden;
  }

  &__group:not(:last-child) {
    margin-bottom: 2rem;
  }

  select {
    height: 5rem;
    @include respond(phone) {
      font-size: 1.6rem;
    }
  }

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1rem 2rem;
    border-radius: 5px;
    background-color: rgba($color-white, 1);
    border: 3px solid $color-grey-dark;
    // border-bottom: 3px solid transparent;
    width: 100%;
    display: block;
    transition: all 0.5s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 3px solid $color-tertiary-light;

      &:invalid {
        border-bottom: 3px solid $color-red;
      }
    }

    &::-webkit-input-placeholder {
      color: $color-grey-dark;
    }

    &--text {
      padding: 1.5rem 2rem;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.7rem 0 0 2rem;
    display: block;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
  }

  select:invalid + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
  }

  &__radio-group {
    width: 49%;
    display: inline-block;

    @include respond(tab-port) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  &__radio-input {
    display: none;
  }

  &__radio-label {
    font-size: $default-font-size;
    cursor: pointer;
    position: relative;
    padding-left: 4.5rem;
  }

  &__radio-button {
    height: 3rem;
    width: 3rem;
    border: 5px solid $color-tertiary-light;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -0.4rem;

    &::after {
      content: "";
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $color-primary-light;
      opacity: 0;
      transition: all 0.2s;
    }
  }

  &__radio-input:checked ~ &__radio-label &__radio-button::after {
    opacity: 1;
    background-color: $color-primary-light;
  }

  &__check {
    color: $color-primary-light;
  }
}
</style>

