<template>
  <Headline />
  <MonthSlotDay />
  <MovieList />
</template>

<script>
import Headline from "../components/Headline";
import MonthSlotDay from "../components/MonthSlotDay";
import MovieList from "../components/MovieList";

export default {
  components: {
    Headline,
    MonthSlotDay,
    MovieList,
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
};
</script>
