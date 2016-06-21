import Module from 'core/Module'

import Routes from './Routes'
import Reducer from './Reducer'

const module = new Module(
	'home',
	Reducer,
	Routes
)

export default module