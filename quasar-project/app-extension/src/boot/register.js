import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-hy-calendar'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
