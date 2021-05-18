import { doConnect } from '../../crud/connectors'
import { Docs } from '../../crud/components/docs'

export const path = 'users'
export const schema = [
   { field: 'firstName', type: 'text', required: true },
   { field: 'lastName', type: 'text', required: true },
   { field: 'age', type: 'number', required: false },
   { field: 'dateOfBirth', type: 'date', required: false },
]
export default doConnect(path, schema)(Docs)
