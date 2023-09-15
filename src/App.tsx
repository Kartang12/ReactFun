import './App.css'

function App() {

  return (
    <>
      <div className="e-mail-form">
        <h1>Введите почту</h1>
        <input type='email'></input>
        <button id="submitEmail" onClick={() => sendCode('get email from input')}>
          проолжить
        </button>
      </div>
      <div className="confirm-field">
        <h1>Введите код</h1>
        <input type='text'></input>
        <button id="submitCode" onClick={() => sendCode('get code from input')}>
          проолжить
        </button>
      </div>
    </>
  )
}

function sendEmail(email:string){
  //send to server
}

function sendCode(code:string){
  //send to server
}

export default App
