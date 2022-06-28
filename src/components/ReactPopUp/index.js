import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'

const ReactPopUp = props => {
  const {trigger, onClosePopup, children} = props

  return trigger ? (
    <div className="popup-container">
      <div className="popup-inner-container">
        <button
          type="button"
          onClick={onClosePopup}
          className="popup-close-button"
        >
          <AiFillCloseCircle className="popup-close-button-icon" />
        </button>
        {children}
      </div>
    </div>
  ) : null
}

export default ReactPopUp
