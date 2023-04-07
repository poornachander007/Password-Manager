import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import PossWord from '../PassWord'
import './index.css'

const logo =
  'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
// alt should be app logo
const website =
  'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
// alt should be website
const username =
  'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
// alt should be username
const password =
  'https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
// alt should be password

const pMImageUrl =
  'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
// alt should be password manager

const searchUrl =
  'https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
// alt should be search
const noPasswordsUrl =
  'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
// alt should be no passwords

class PassWordManager extends Component {
  state = {
    isShowingPasswords: false,
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    filterInput: '',
  }

  // onChangePassword onChangeUsername onChangeWebsite

  onChangeWebsite = event => {
    const websiteInput = event.target.value
    this.setState({websiteInput})
  }

  onChangeUsername = event => {
    const userNameInput = event.target.value
    this.setState({userNameInput})
  }

  onChangePassword = event => {
    const passwordInput = event.target.value
    this.setState({passwordInput})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const newPassWordObject = {
      websiteInput,
      userNameInput,
      passwordInput,
      id: uuidv4(),
    }
    this.setState(preState => ({
      passwordsList: [...preState.passwordsList, newPassWordObject],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onClickDelete = id => {
    this.setState(preState => ({
      passwordsList: preState.passwordsList.filter(
        eachPassword => eachPassword.id !== id,
      ),
    }))
  }

  onClickToggleShowPasswordCheckBox = () => {
    this.setState(preState => ({
      isShowingPasswords: !preState.isShowingPasswords,
    }))
  }

  onChangeSearch = event => {
    console.log(event.target.value)
    const filterInput = event.target.value
    this.setState({filterInput})
  }

  render() {
    const {
      isShowingPasswords,
      passwordsList,
      websiteInput,
      userNameInput,
      passwordInput,
      filterInput,
    } = this.state
    const filteredList = passwordsList.filter(eachPassword =>
      eachPassword.websiteInput
        .toLowerCase()
        .includes(filterInput.toLowerCase()),
    )
    console.log(websiteInput)
    console.log(userNameInput)
    console.log(passwordInput)
    return (
      <div className="page_container">
        <div className="logoAndPart_1_andPart_2_container">
          <img className="logo" src={logo} alt="app logo" />

          {/* <div className="content_container"> */}

          <div className="part_1_content">
            <div className="form_and_image">
              <form className="form" onSubmit={this.onSubmitButton}>
                <h1 className="form_heading">Add New Password</h1>
                <div className="domain_input_container">
                  <img className="icon" src={website} alt="website" />
                  <input
                    value={websiteInput}
                    onChange={this.onChangeWebsite}
                    type="text"
                    placeholder="Enter Website"
                  />
                </div>
                <div className="domain_input_container">
                  <img className="icon" src={username} alt="username" />
                  <input
                    value={userNameInput}
                    onChange={this.onChangeUsername}
                    type="text"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="domain_input_container">
                  <img className="icon" src={password} alt="password" />
                  <input
                    value={passwordInput}
                    onChange={this.onChangePassword}
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="add_button_container">
                  <button type="submit" className="button_add">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              className="pMImageUrl"
              src={pMImageUrl}
              alt="password manager"
            />
          </div>

          {/* -------------------------------------------------- */}

          <div className="part_2_content">
            <div className="nav_part_2_container">
              <div className="nav_top_part">
                <div className="heading_and_count_messages">
                  <h1 className="part_2_heading">Your Passwords</h1>
                  <p className="passwords_count">{passwordsList.length}</p>
                </div>
                <div className="search_container">
                  <img className="icon" src={searchUrl} alt="search" />
                  <input
                    onChange={this.onChangeSearch}
                    value={filterInput}
                    type="search"
                    placeholder="Search"
                  />
                </div>
              </div>
              <hr className="hr_nav_divider" />
              <div className="show_password_checkbox_container">
                <input
                  onClick={this.onClickToggleShowPasswordCheckBox}
                  className="checkbox"
                  id="showPasswords"
                  type="checkbox"
                />
                <label className="labelForCheckbox" htmlFor="showPasswords">
                  Show Passwords
                </label>
              </div>
            </div>

            {filteredList.length === 0 && (
              <div className="no_passwords_display_image_container">
                <img
                  className="image_no_passwords"
                  src={noPasswordsUrl}
                  alt="no passwords"
                />
                <p className="no_passwords_msg">No Passwords</p>
              </div>
            )}
            {filteredList.length !== 0 && (
              <ul className="passwords_ul_container">
                {filteredList.map(eachPassword => (
                  <PossWord
                    onClickDelete={this.onClickDelete}
                    isShowingPasswords={isShowingPasswords}
                    key={eachPassword.id}
                    details={eachPassword}
                  />
                ))}
              </ul>
            )}
          </div>

          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default PassWordManager
