import { doConnect } from '../../crud/connectors'
import { schema, USERS_PATH } from '../../models/users'
import { Docs } from '../../crud/components/docs'

export default doConnect(USERS_PATH, schema)(Docs)
