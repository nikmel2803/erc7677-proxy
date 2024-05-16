import { handle } from 'hono/vercel'
import app from '../src/app.js'

// export const config = {
//   runtime: 'nodejs'
// }

app.basePath('/api')

export default handle(app)
