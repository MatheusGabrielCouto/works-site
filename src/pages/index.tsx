import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Home from '../templates/Home'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
