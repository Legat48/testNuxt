const middleware = {}

middleware['checkAuth'] = require('..\\middleware\\checkAuth.js')
middleware['checkAuth'] = middleware['checkAuth'].default || middleware['checkAuth']

export default middleware
