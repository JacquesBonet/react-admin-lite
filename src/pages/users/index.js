import { doConnect } from '../../crud/connectors'
import { schema, path } from '../../models/users'
import { Docs } from '../../crud/components/docs'

export default doConnect(path, schema)(Docs)
