import { doConnect } from '../../crud/connectors'
import { Docs } from '../../crud/components/docs'
export const path = 'products'
export const schema = [
   { field: 'name', type: 'text', required: true },
   { field: 'date', type: 'date', required: true },
   { field: 'manufacturer', type: 'text', required: false },
   { field: 'quantity', type: 'number', required: false },
]
export default doConnect(path, schema)(Docs)
