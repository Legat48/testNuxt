const middleware = {}

middleware['checkAuth'] = require('..\\middleware\\checkAuth.js')
middleware['checkAuth'] = middleware['checkAuth'].default || middleware['checkAuth']

middleware['services'] = require('..\\middleware\\services.js')
middleware['services'] = middleware['services'].default || middleware['services']

export default middleware
