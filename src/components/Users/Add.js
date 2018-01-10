import React from 'react'
import PropTypes  from 'prop-types'
import "./Component.css";

const Add = ({createUser=f=>f}) => {

  let form={
    nom: "",
    prenom: ""
  }

  const resetForm = () => {
    form.nom = ''
    form.prenom = ''
  }

  const submit = e => {
    e.preventDefault()
    createUser( form)
    resetForm()
  }


  return (
    <form className="add" onSubmit={submit}>
      <input onChange={event=> form= {...form,nom: event.target.value}}
             type="text"
             placeholder="Nom" required/>
      <input onChange={event => form= {...form,prenom: event.target.value}}
             type="text" placeholder="Prenom" required/>
      <button>ADD</button>
    </form>
  )

}

Add.propTypes = {
  createUser: PropTypes.func.isRequired
}

export default Add
