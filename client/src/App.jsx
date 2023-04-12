import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
  return (
    <main style={{ height: "100vh" }}>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
