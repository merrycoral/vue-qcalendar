import {
  createRouter,
  createWebHashHistory
} from "vue-router";

import Home from "./Home";
import MonthSlotDay from "../components/MonthSlotDay";
import WeekSlotDayBody from "../components/WeekSlotDayBody";
import DaySlotHeadIntervals from "../components/DaySlotHeadIntervals";
import NotFound from "./NotFound";

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages
  // https://google.com/
  routes: [{
      path: "/",
      component: Home,
    },
    {
      path: "/month",
      component: MonthSlotDay,
    },
    {
      path: "/week",
      component: WeekSlotDayBody,
    },
    {
      path: "/day",
      component: DaySlotHeadIntervals,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});