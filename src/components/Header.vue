<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item"
      >
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link"
        >
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
      class="user"
      @click="toAbout"
    >
      <img
        :src="$store.state.about.image"
        alt="ha0"
      />
    </div>
  </header>
</template>

<script>
import Logo from '../components/Logo'
import { mapState } from "vuex"

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Month',
          href: '/month'
        },
        {
          name: 'Week',
          href: '/week',
          //path: '/week'
        },
        {
          name: 'Day',
          href: '/day'
        }
      ]
    }
  },
  computed: {
    ...mapState('about', [
      'image', 'name'
    ]),
    ...mapState('movie', [
      'movies', 'loading',
      'message', 'theMovie'
    ])
  },
  methods: {
    isMatch(path) {
      // if (!path) { return false }
      // Optional chaining
      return path?.test(this.$route.fullPath)
    },
    toAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #777;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover {
      background-color: darken(#777, 10%);
    }
    img {
      width: 100%;
    }
  }
}
div.nav{
  display: flex;
}
.nav-item{
  background-color: deepskyblue;
  text-align: center;
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 5px;
}
a.nav-link{
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}
</style>