import React from 'react'
import PropTypes from 'prop-types'

export const Doc = ({ doc, del, setDoc, schema, path }) => (
   <tr onClick={() => setDoc(doc)}>
      {schema.map(({ field }) => (
         <td key={field}>
            <span className="fw-normal">{doc[field]}</span>
         </td>
      ))}
      <td key="button">
         <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            title="Delete"
            data-bs-toggle="tooltip"
            onClick={() => del(path, doc)}
         >
            Remove
         </button>
      </td>
   </tr>
)

Doc.propTypes = {
   doc: PropTypes.object.isRequired,
   del: PropTypes.func.isRequired,
   setDoc: PropTypes.func.isRequired,
}
