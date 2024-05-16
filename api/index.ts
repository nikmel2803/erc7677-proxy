import { handle } from '@hono/node-server/vercel'
import app from '../src/app.js'

export const config = {
  api: {
    bodyParser: true,
  },
}

export default handle(app);
