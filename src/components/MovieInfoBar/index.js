import React from 'react';
import PropTypes from 'prop-types'

// heplers
import { calcTime, convertMoney } from '../../helper';
// styles
import { Wrapper, Content } from './MovieInfoBar.styles';
function MovieInfoBar({ time, budget, revenue }) {
    return (
       <Wrapper>
           <Content>
               <div className="column">
                   <p>Running time: {calcTime(time)}</p>
               </div>
               <div className="column">
                   <p>Budget: {convertMoney(budget)}</p>
               </div>
               <div className="column">
                   <p>Revenue: {convertMoney(revenue)}</p>
               </div>
           </Content>
       </Wrapper>
    )
}
MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
}
export default MovieInfoBar
