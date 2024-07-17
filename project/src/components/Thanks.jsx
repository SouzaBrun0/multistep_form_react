import React from 'react'
import{
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import "./Thanks.css"

const emojiData ={
  unsatified: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta Pouco...</h2>
        <p >A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para sua próxima compra </p>
        
        <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>    
      <h3>Aqui está o reumo da sua avaliação: {data.name}: </h3>
      <p className="review-data">
        <span>Satisfação com o produto:
          {emojiData[data.review]} </span>
      </p>

      <p className="review-data">
        <span>Comentários:  {data.comment} </span>
      </p>
    </div>
  )
}

export default Thanks