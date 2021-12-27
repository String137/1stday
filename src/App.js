import './App.css';
import React from 'react'
function App() {

  function stringHash(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
  return hash;
  }
  
  function encode(key) {
    const str = ">pt_ot]lt";
    var out = "";
    for (let i=0; i<str.length; i++){
      let j = i % key.length;
      out += String.fromCharCode(str.charCodeAt(i)+key.charCodeAt(j)-50);
    }
    return out;
  }

  function pass(params) {
    const hashedAnswer = 51665;
    var curVal = pwInput.current.value;
    var hashedCurVal = stringHash(curVal)
    if (hashedAnswer === hashedCurVal){
      const encoded = encode(curVal)
      alert('줌 링크가 ' + encoded + '로 바뀌었습니다.');
    }
    else{
      alert("암호가 틀렸습니다.");
    }
    return false;
  }
  let pwInput = React.createRef();

  return (
    <div className="App">
        <div className="top">
          
        </div>
        
        <div className="window">
        <form>
        <input ref={pwInput} placeholder="암호를 입력하세요." className="password" type="password" />
          
          <button id="button" className="button" onClick={pass}> 참가</button>
        </form>
        
        </div>
        

    </div>
  );
}

export default App;
