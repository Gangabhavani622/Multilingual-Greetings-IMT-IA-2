import './index.css'

const LanguageItem = props => {
  const {filteredLanguageItem} = props
  const {imageUrl, imageAltText} = filteredLanguageItem

  return (
    <li className="item-container">
      <img src={imageUrl} alt={imageAltText} className="item-image" />
    </li>
  )
}

export default LanguageItem
