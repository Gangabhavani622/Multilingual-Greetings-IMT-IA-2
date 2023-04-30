import './index.css'

const GreetingsItem = props => {
  const {greetingItem, isActive, updateActiveBtn} = props
  const {buttonText, id} = greetingItem

  const active = isActive ? 'active-btn' : ''

  const onClickUpdateActiveBtn = () => {
    updateActiveBtn(id)
  }

  return (
    <li>
      <button
        type="button"
        className={`btn ${active}`}
        onClick={onClickUpdateActiveBtn}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingsItem
