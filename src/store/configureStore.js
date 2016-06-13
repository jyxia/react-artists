import devConfigureStore from './devConfigureStore'
import prodConfigureStore from './prodConfigureStore'

const isProduction = process.env.NODE_ENV === 'production'
const configureStore = isProduction ? prodConfigureStore : devConfigureStore

export default configureStore
