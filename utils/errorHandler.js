export async function errorHandler(err, req, res, next) {
    console.log(err)
    res.setStatus(400).send({err: "There's an error"})
}