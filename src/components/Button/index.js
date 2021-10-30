import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Wrapper } from './Button.styles';
function Button({text, callBack}) {
    return (
      <Wrapper type="button" onClick={callBack}>
          {text}
      </Wrapper>
    )
}

Button.propTypes = {
  text: PropTypes.string,
  callBack: PropTypes.func
}
export default Button
