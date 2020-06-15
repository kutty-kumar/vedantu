import {v4 as uuidV4 } from "uuid"

function primeRequestContext(req, res, next){
    req.context = {
        traceId: uuidV4()
    };
    next()
}

module.exports = primeRequestContext;
