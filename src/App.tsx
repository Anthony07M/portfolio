import { PageNotSuportedMobal } from "./pages/PageNotSuportedMobal"
import { RoutesProvider } from "./routes/index.routes"
import { GlobalStyle } from "./styles/global"

export const App = () => {

  return (
    <>
      <GlobalStyle/>
      <RoutesProvider/>
      <PageNotSuportedMobal/>
    </>
  )
}
