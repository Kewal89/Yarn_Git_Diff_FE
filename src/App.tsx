import { observer } from "mobx-react"
import { Difference, Header, Main } from "./Components"
import { toJS } from "mobx"
import AppStore from "./Stores/AppStore"

const App = () => {
  return (
    <div className="App">
      <Main>
        <Header />
        <Difference changes={toJS(AppStore.commitInfo)} />
      </Main>
    </div>
  )
}

export default observer(App)
