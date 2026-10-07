export default function errorMiddleware(error, request, response, next) {
  console.error(error)
  response.status(error.statusCode ?? 500).json({ message: error.message ?? 'Internal server error' })
}