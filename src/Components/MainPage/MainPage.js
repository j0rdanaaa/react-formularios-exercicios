import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm'
function MainPage() {
 
  const {form, onChangeInputs, clearFields} = useForm({curso:'', modulos:'', tecnologias:'', responsavel:''})

  const cadastroCurso = (e) => {
    e.preventDefault()
    console.log(form)
    clearFields()
  }
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={cadastroCurso}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          name='curso'
          id="nome"
          value={form.curso}
          onChange={onChangeInputs}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          name='modulos'
          id="modulos"
          value={form.modulos}
          onChange={onChangeInputs}
          title="Digite pelo menos 2 modulos"
          pattern='^(?:[2-9]|[1-9]\d|100)$'
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
        name='tecnologias'
          id="tecnologias"
          value={form.tecnologias}
          onChange={onChangeInputs}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
        name='responsavel'
          id="responsavel"
          value={form.responsavel}
          onChange={onChangeInputs}
          title='Digite pelo menos 5 caracteres'
          pattern='^[a-zA-Z]{5,}$'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
