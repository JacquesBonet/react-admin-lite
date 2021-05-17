import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Doc } from './Doc'
import { AddOrUpdate } from './AddOrUpdate'
import inflection from 'inflection'

export const Docs = ({ docs, create, del, update, schema, path }) => {
   const [doc, setDoc] = useState({})

   return (
      <div>
         <AddOrUpdate create={create} update={update} doc={doc} setDoc={setDoc} schema={schema} path={path} />
         <table className="table doc-table table-hover align-items-center">
            <thead>
               <tr>
                  {schema.map(({ field }) => (
                     <th key={field} className="border-bottom">
                        {inflection.transform(field, ['tableize', 'titleize'])}
                     </th>
                  ))}
                  <th key="remove" className="border-bottom"></th>
               </tr>
            </thead>
            <tbody>
               {docs.map((doc, idx) => (
                  <Doc key={idx} doc={doc} idx={idx} del={del} setDoc={setDoc} schema={schema} path={path} />
               ))}
            </tbody>
         </table>
      </div>
   )
}

Docs.propTypes = {
   create: PropTypes.func.isRequired,
   del: PropTypes.func.isRequired,
   update: PropTypes.func.isRequired,
   docs: PropTypes.arrayOf(PropTypes.object).isRequired,
   schema: PropTypes.array,
   path: PropTypes.string,
}
