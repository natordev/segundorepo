import React from 'react'
function Home(){
    const listItems=[1,2,3,4]

    const addItem=()=>{
        const variableA=1;
        const variableB=3;
        const variableC=2;
        const variableD=4;
        return variableA*3 + variableC*variableB
    }
    return (
        <><div>Home</div>
        <p>hola mundo</p>
        <button onclick={addItem}></button>
        </>
    )
}
export default Home