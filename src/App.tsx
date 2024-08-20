
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Tasks/>
    </ThemeProvider>
  )
}

export default App
