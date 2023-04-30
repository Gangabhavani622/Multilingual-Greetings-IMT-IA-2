import {Component} from 'react'
import GreetingsItem from './components/GreetingsItem'
import LanguageItem from './components/LanguageItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  updateActiveItem = value => {
    this.setState({activeId: value})
  }

  getDisplayLanguageItem = () => {
    const {activeId} = this.state
    const languageItem = languageGreetingsList.filter(
      item => activeId === item.id,
    )
    return languageItem
  }

  render() {
    const {activeId} = this.state
    const languageItem = this.getDisplayLanguageItem()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="btn-list-container">
          {languageGreetingsList.map(eachItem => (
            <GreetingsItem
              key={eachItem.id}
              greetingItem={eachItem}
              isActive={activeId === eachItem.id}
              updateActiveBtn={this.updateActiveItem}
            />
          ))}
        </ul>
        {languageItem.map(eachItem => (
          <LanguageItem key={eachItem.id} filteredLanguageItem={eachItem} />
        ))}
      </div>
    )
  }
}

export default App
