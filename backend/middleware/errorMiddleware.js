export default function errorMiddleware(error, request, response, next) {
  next(error)
}
