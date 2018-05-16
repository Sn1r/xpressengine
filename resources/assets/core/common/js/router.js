import Route from './router/route'

class Router {
  constructor (base = '/', fixed = 'plugin', settings = '') {
    this.routes = new Map()

    if (base === '/' && window.location) {
      base = window.location.origin
    }

    this.setup(base, fixed, settings)
  }

  setup (base, fixed = 'plugin', settings = '') {
    this.baseURL = base
    this.fixedPrefix = fixed
    this.settingsPrefix = settings
  }

  addRoutes (routes) {
    for (const key in routes) {
      if (routes.hasOwnProperty(key)) {
        this.routes.set(key, new Route(key, routes[key]))
      }
    }
  }

  has (routeName) {
    return this.routes.has(routeName)
  }

  get (routeName) {
    return this.routes.get(routeName)
  }
}

const router = new Router()

export default router
