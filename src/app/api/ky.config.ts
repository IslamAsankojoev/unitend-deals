import ky from 'ky'

export const api = ky.create({
  prefixUrl: typeof window !== 'undefined' ? '/api' : process.env.API_INTERNAL_URL + '/api',
  credentials: 'include',
  timeout: 10000,
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('Content-Type', 'application/json')
      },
    ],
    afterResponse: [
      (request, options, response) => {
        return response
      },
    ],
  },
})