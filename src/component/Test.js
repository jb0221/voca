import { useRef, useState } from "react"

export default function Test (){

    const [names,setNames] = useState(['홍길동','김민수']);
    const [num, setNum] = useState(0); 
    const [input, setInput] =useState(0);
    const inputRef = useRef("");
    const [status,setStatus] = useState('미완료');

    function clickUpload (key){

        let newArr = [...names];
        newArr.push(inputRef.current.value);
        setNames(newArr);
        addC();
       
    }

    function addC (){
      
        names.map((name,idx)=>{
            
            return <p><span key={idx}>{name}</span><span>{status}</span></p>;  
        })

        setTimeout(function(){
            setStatus('완료');
            
          },10000) 
    }
    function callback (name,idx){
        return <p><span key={idx}>{name}</span><span>완료</span></p>;
       
    } 
    return(
        <div>
            <input type="text"  ref={inputRef} />
            <button onClick={()=>{
                clickUpload(names.length);
            }}>Upload</button>
            {names.map((name,idx)=>{
            
               return callback(name,idx)
            })}

            <button>테스트</button>
            <div></div>
        </div>
    )
} 