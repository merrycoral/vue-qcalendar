<template>
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
        <div class="skeleton poster"></div>
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton spec"></div>
          <div class="skeleton plot"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
        </div>
      </div>
      <Loader
        :size="3"
        :z-index="9"
        fixed
      />
    </template>
    <div
      v-else
      class="movie-details"
    >
      <div
        :style="{
          backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})`,
        }"
        class="poster"
      >
        <Loader
          v-if="imageLoading"
          absolute
        />
      </div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span>{{ theMovie.Released }}</span>
          <span>{{ theMovie.Runtime }}</span>
          <span>{{ theMovie.Country }}</span>
        </div>
        <div class="plot">
          {{ theMovie.Plot }}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            <div
              v-for="{ Source: name, Value: score } in theMovie.Ratings"
              :key="name"
              :title="name"
              class="rating"
            >
              <img
                :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`"
                :alt="name"
              />
              <span>{{ score }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {{ theMovie.Actors }}
        </div>
        <div>
          <h3>Director</h3>
          {{ theMovie.Director }}
        </div>
        <div>
          <h3>Production</h3>
          {{ theMovie.Production }}
        </div>
        <div>
          <h3>Genre</h3>
          {{ theMovie.Genre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loader from "../components/Loader";

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
    ...mapState("movie", ["loading", "theMovie"]),
  },
  created() {
    //this.$store.dispatch("movie/searchMovieWithId", { 
      //mapActions를 사용하지 않았을 경우
      this.searchMovieWithId({
        id: this.$route.params.id,
    });
  },
  methods: {
    ...mapActions('movie', ['searchMovieWithId'
    ]),
    //actions도 
    requestDiffSizeImage(url, size = 700) {
      // 잘못된 URL(Poster)인 경우.
      if (!url || url === "N/A") {
        this.imageLoading = false;
        return "";
      }
      // 정상적인 URL인 경우.
      const src = url.replace("SX300", `SX${size}`);
      this.$loadImage(src).then(() => {
        this.imageLoading = false;
      });
      return src;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: 500px * 3/2;
    margin-right: 70px;
    position: relative;
  }
  .specs {
    flex-grow: 1;
  }
  .skeleton {
    border-radius: 10px;
    background-color: #777;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}
.movie-details {
  display: flex;
  color: #999;
  .poster {
    width: 500px;
    height: 500px * 3/2;
    margin-right: 70px;
    border-radius: 10px;
    background-color: #777;
    background-size: cover;
    background-position: center;
    position: relative;
    flex-shrink: 0;
  }
  .specs {
    flex-grow: 1;
    .title {
      color: #111;
      font-family: "Oswald", sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: #4287f5;
      span {
        &::after {
          content: "\00b7";
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;
          img {
            height: 30px;
            flex-shrink: 0;
            margin-right: 6px;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: #111;
      font-family: "Oswald", sans-serif;
      font-size: 20px;
    }
  }

}
</style>
