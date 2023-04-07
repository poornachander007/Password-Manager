import './index.css'

const starsUrl =
  'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
// alt should be stars
const deleteUrl =
  'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
// alt should be delete

// details websiteInput userNameInput passwordInput

const PossWord = props => {
  const {details, isShowingPasswords, onClickDelete} = props
  const {id, websiteInput, userNameInput, passwordInput} = details

  const onDelete = () => {
    onClickDelete(id)
  }

  return (
    <li className="list_item_container">
      <p className="initial">{userNameInput[0].toUpperCase()}</p>
      <div className="details_container">
        <p className="website">{websiteInput}</p>
        <p className="user">{userNameInput}</p>
        {isShowingPasswords && <p className="password">{passwordInput}</p>}
        {!isShowingPasswords && (
          <img className="stars" src={starsUrl} alt="stars" />
        )}
      </div>
      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={onDelete}
      >
        <img className="delete_icon" src={deleteUrl} alt="delete" />
      </button>
    </li>
  )
}

export default PossWord
