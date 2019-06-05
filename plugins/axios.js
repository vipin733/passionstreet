export default function ({ $axios, app}) {
    $axios.onError(error => {
        if(error.response.status === 401) {
            app.$auth.reset()
            app.router.push({ path: '/login' })
        }
    })
  }     