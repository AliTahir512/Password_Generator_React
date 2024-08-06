import React, { useCallback, useRef, useState } from "react";

function Password_Gen() {
  const [Length, setLength] = useState(8);
  const [Numberincluded, setNumberIncluded]=useState(false);
  const [CharacterIncluded,setCharacterIncluded]=useState(false);
  const [Password,setPassword]=useState('');
  const [copied, setCopied] = useState(false);
  const password_ref=useRef(null);
 
  const generate_password=()=>{

  var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(Numberincluded){
    alphabets+='1234567890';
  }
  if(CharacterIncluded){
    alphabets+='!#$%&()*+,-./:;<=>?@]^_`~';
  }
  var password='';
  for(let i=0; i<Length; i++){
   let random=Math.floor(Math.random()*alphabets.length);
   password+=alphabets[random];
   
  }
  console.log(password);
  setPassword(password);
  setCopied(false);
  return password;
  
  }

  const copytoClipboard = useCallback(() => {
    if (password_ref.current) {
      password_ref.current.removeAttribute('disabled'); // Remove disabled attribute
      password_ref.current.select(); // Select the text
      document.execCommand('copy'); // Copy the selected text
      password_ref.current.setAttribute('disabled', 'disabled'); // Reapply disabled attribute
      setCopied(true); // Update button text to "Copied"
    }
  }, []);

  
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-black w-auto h-auto flex flex-col p-4 rounded-md">
        <input
          type="text"
          disabled
          ref={password_ref}
          className="w-[600px] text-center bg-white rounded-md m-1 p-3 border-slate-600 text-3xl"
          value={Password}
        />

        <button className="text-3xl text-white bg-sky-500 p-3 m-1 rounded-md border-slate-500 hover:bg-sky-700" onClick={copytoClipboard}>
        {copied ? 'Copied' : 'Copy to Clipboard'}
        </button>

        <div className="text-white text-2xl ml-2 flex justify-between mt-3 mb-3">
          <label htmlFor="slider">Length: {Length}</label>
          <input
            type="range"
            id="slider"
            min="8"
            max="32"
            value={Length}
            onChange={(event) => {
              setLength(event.target.value);
            }}
            className="w-[210px] ml-5 mr-3"
          />
        </div>

        <div className="border-b-2 border-red-500 m-2"></div>

        <div className="text-white text-2xl ml-2 flex justify-between mt-3 mb-3">
          <label htmlFor="number_checker">Include Numbers</label>
          <input type="checkbox" className="w-9 h-9 mr-3" value={Numberincluded} onChange={(event)=>{setNumberIncluded(event.target.checked)}}/>
        </div>

        <div className="border-b-2 border-red-500 m-2"></div>


        <div className="text-white text-2xl ml-2 flex justify-between mt-3 mb-3">
          <label htmlFor="number_checker">Include Characters</label>
          <input type="checkbox" className="w-9 h-9 mr-3" value={CharacterIncluded} onChange={(event)=>{setCharacterIncluded(event.target.checked)}}/>
        </div>

        <div className="border-b-2 border-red-500 m-2"></div>

        <button className="text-3xl text-white bg-sky-500 p-3 ml-1 mr-1 mb-1 rounded-md border-slate-500 hover:bg-sky-700" onClick={generate_password}>
          Generate
        </button>



      </div>
    </div>
  );
}

export default Password_Gen;
