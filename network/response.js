export function success (req, res, message, status) {
    let satatusCode = status || 200;
    let satatusMessage = message || '';
    let error = false;
    res.status(status).send({
        error,
        satatusCode,
        satatusMessage
    })
}