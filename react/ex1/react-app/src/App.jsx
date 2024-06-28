import './App.css'
import Alert from './Alert'

function App() {

  return (
    <div>
      <Alert 
        type="information"
        heading="Success"
        closable
        onClose={() => console.log("Closed")}
      >
        Everything is really good!
      </Alert>
    </div>
  )
}

export default App
