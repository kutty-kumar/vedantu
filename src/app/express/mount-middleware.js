import { static as expressStatic} from 'express'
import { join } from 'path'

import attachLocals from './attach-locals'
import lastResortErrorHandler from './last-resort-handler'
import primeRequestContext from './prime-request-context'
function mountMiddleWare(app, env){
    app.use(lastResortErrorHandler);
    app.use(primeRequestContext);
    app.use(attachLocals);
    app.use(expressStatic(join(__dirname, '..', 'public'), {maxAge: 86400000}))
}

export default mountMiddleWare
