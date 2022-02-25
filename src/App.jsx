import './App.scss';
import Generate from './components/generate';
import { BrowserView, MobileView } from 'react-device-detect';
let username = "";
export { username };
let description = "";
export { description };
function App() {

  return (

    <div className="appmain">
      <BrowserView>
        <div className="appTop">
          <div className="appTitle">
            <h1>Beautiful Tweet</h1>
          </div>
          <div className="title">
            <textarea type="text" name="" id="title" maxLength="15" placeholder='Username' onChange={(e) => { username = e.target.value; console.log(username); }} />
          </div>
          <div className="desc">
            <textarea type="text" name="" id="desc" maxLength="245" placeholder='Message' onChange={(e) => { description = e.target.value; console.log(description); }} />
          </div>

        </div>
        <div className="appBottom">
          <Generate />
        </div>

      </BrowserView>
      <MobileView>
        <div className="appTop">
          <div className="appTitle">
            <h1>Beautiful Tweet</h1>
          </div>
          <div className="title">
            <textarea type="text" name="" id="title" maxLength="15" placeholder='Username' onChange={(e) => { username = e.target.value; console.log(username); }} style={{ fontSize: 24 }} />
          </div>
          <div className="desc">
            <textarea type="text" name="" id="desc" maxLength="245" placeholder='Message' onChange={(e) => { description = e.target.value; console.log(description); }} style={{ fontSize: 24 }} />
          </div>

        </div>
        <div className="appBottom">
          <Generate />
        </div>
      </MobileView>

    </div>
  );
}

export default App;
