<template>
  <div class="about">
    <div class="photo">
      <Loader
        v-if="imageLoading"
        absolute />
      <img
        :src="image"
        :alt="name" />
    </div>

    <div class="details">
      <div class="name">
        {{ name }}
      </div>
      <div>{{ email }}</div>
      <div>{{ blog }}</div>
      <div>{{ phone }}</div>
    </div>
  </div>
</template>
<script>
import Loader from "../components/Loader";
import { mapState } from "vuex";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      imageLoading: true,
    };
  },
  computed: {
    ...mapState('about', [
      'name',
      'email',
      'blog',
      'phone',
      'image'
    ])
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$loadImage(this.image);
      this.imageLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #777;
    border: 10px solid #444;
    border-radius: 50%;
    position: relative;
    img {
      width: 100%;
    }
  }
  .details {
    text-align: center;
    .name {
      font-weight: bold;
      font-size: 40px;
      font-family: "Noto Sans KR", sans-serif;
      margin-bottom: 20px;
    }
  }
}
</style>
