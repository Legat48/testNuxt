export default function ({ store, redirect }) {
  const auth = store.getters['auth/isAuthenticated']
  console.log('test')
  if (!auth) {
    redirect('/')
  }
}
