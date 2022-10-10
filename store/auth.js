export const state = () => ({
  isAuthenticated: true
})

export const getters = {
  isAuthenticated: state => state.isAuthenticated
}
