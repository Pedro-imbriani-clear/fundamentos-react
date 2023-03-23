import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome='Fernando' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Carla' idade={15} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Fred' idade={10} nerd={false}></DiretaFilho>
        </div>
    )
}