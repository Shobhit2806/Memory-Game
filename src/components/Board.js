import React from 'react'
import Card from './Card'
import './board.scss'

const Board = ({cards,flipped,onClick,disabled,solved}) => {
  

    return (
        <div className='board'>
            {cards.map((card)=>(
                <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                width={130}
                height={180}
                flipped={flipped.includes(card.id)}
                solved={solved.includes(card.id)}
                onClick={onClick}
                disabled={disabled || solved.includes(card.id)}
                

                />
            ))}
            
        </div>
    )
}
export default Board;