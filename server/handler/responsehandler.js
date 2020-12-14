

function handler(req, res, result) {
    result.then((response) => {
        console.log("inside handler"+response.code);
        if (response.code) {
            if (response.code == 200) {
                return res.status(response.code).json(response);
            } else {
                return res.status(response.code).json(response);
            }
         }
         else {
             return res.json(response);
        }


    }).catch(function (err) {
        console.log("====Error: ", err);
       
        code = err.code || 500;

        if (err.data) {
            returnMsg = err.data;
        } else {
            returnMsg = {
                "status": "Bad Request",
                "code": 400,
                "data": err
            };
        }
        res.status(code).json(returnMsg);
    });
}

module.exports = handler;