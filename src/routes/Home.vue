<template>
  <Headline />
</template>

<script>
import Headline from "../components/Headline";
// import MonthSlotDay from "../components/MonthSlotDay";
// import WeekSlotDayBody from "../components/WeekSlotDayBody";
// import DaySlotHeadIntervals from "../components/DaySlotHeadIntervals";

export default {
  components: {
    Headline,
    /*
    MonthSlotDay,
    WeekSlotDayBody,
    DaySlotHeadIntervals,
    */
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
};
</script>
