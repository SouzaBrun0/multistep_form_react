import { useState } from 'react'
import './App.css'
import { FiSend } from "react-icons/fi"
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import UseForm from './components/UseForm'
import {GrFormNext,  GrFormPrevious} from "react-icons/gr"

//hooks
import { useForm } from './hooks/useForm'

function App() {

  const FormComponents = [
    <UseForm/>,<ReviewForm/>,<Thanks/>
  ]

  const{currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(FormComponents)

  return (
   <div className='App'>

      <div className="header">
                  <h2>Deixe Sua Avaliação</h2>
                  <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
                  </div>

                  <div className="form-container">
                  <p>Etapas</p>
                  
                  <form onSubmit={(e) =>  changeStep(currentStep + 1,e)}>
                    
                  <div className="inputs-container"> {currentComponent} </div> 

                    <div className="actions">
                      {!isFirstStep &&(
                          <button type='button' onClick={() => changeStep(currentStep - 1)}>
                          <GrFormPrevious/>
                          <span>Voltar</span>
                          </button>
                      )}
                      {!isLastStep ?(
                        <button type='submit'>
                        <span>Avançar</span>
                        <GrFormNext/>
                        </button>
                      ):(
                          <button type='button'>
                          <span>Enviar</span>
                          <FiSend/>
                          </button>
                      )}
                    
                    </div>
                    
                  </form>
      </div>









   </div>
  )
}

export default App
