<template>
  <div>
    <figure v-for="image in images" :key="image.id">
      <img
        :src="`${image.fields.file.url}?fm=jpg&fl=progressive`"
        alt="Gallery Image of Dancers"
        @click="selectedImage()"
      >
      <figcaption>{{ test }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "Calendar"
};
</script>

