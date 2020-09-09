function generateResponse(message, data) {
    let response = {
        code: 200,
        message: message,
    };
    if (data)
        response.data = data;
    return response;
}
function generateError(message,data){
    let response = {
        code: 505,
        message: message,
    };
    if (data)
        response.data = data;
    return response;

}
module.exports = {
    generateResponse: generateResponse,
    generateError:generateError
}