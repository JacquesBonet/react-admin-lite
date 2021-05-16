import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import inflection from 'inflection'

export const AddOrUpdate = ({ create = f => f, update = f => f, doc, setDoc, schema, path }) => {
   const { register, handleSubmit, reset } = useForm()
   const handleAddOrUpdate = newDoc => {
      doc && doc.id ? update(path, { ...doc, ...newDoc }) : create(path, newDoc)
   }
   useEffect(() => {
      reset(doc)
   }, [doc])

   return (
      <div>
         <form className="add" onSubmit={handleSubmit(handleAddOrUpdate)}>
            <table className="table doc-table table-hover align-items-center">
               <tbody>
                  <tr>
                     {schema.map(({ field, type, required }, idx) => (
                        <td key={idx}>
                           <input
                              {...register(field)}
                              type={type}
                              placeholder={inflection.transform(field, ['tableize', 'titleize'])}
                              required={required}
                              defaultValue={doc ? doc[field] : ''}
                           />
                        </td>
                     ))}
                     <td key={1000}>
                        <div className="btn-toolbar mb-2 mb-md-0">
                           <div className="btn-group ms-2 ms-lg-3">
                              <button type="submit" className="btn btn-sm btn-outline-primary">
                                 {doc && doc.id ? 'UPDATE' : 'ADD'}
                              </button>
                              <button
                                 type="button"
                                 className="btn btn-sm btn-outline-primary"
                                 onClick={() => setDoc({})}
                              >
                                 RESET
                              </button>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </form>
      </div>
   )
}

AddOrUpdate.propTypes = {
   create: PropTypes.func.isRequired,
}
