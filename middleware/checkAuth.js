export default function ({ store, redirect }) {
  const auth = store.getters['auth/isAuthenticated']
  if (!auth) {
    redirect('/')
  }
}
