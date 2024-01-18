

function Click() {

    function handleManager(){
        alert('hola')
    }
  return (
    <>
    <button onClick={()=>{
        handleManager()
    }}>Presiona para un alert</button>
    </>
  )
}

export default Click