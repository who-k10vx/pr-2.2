import { useEffect, useState } from "react";


const Counter = () => {


    const [no, setNo] = useState(0);

    const handleIncrement = () => {
        setNo(no + 1)
    }

    const handleDecrement = () => {
        setNo(no - 1)
    }

    const handleReset = () => {
        setNo(0)
    }

    useEffect(() => {
        console.log(`Count :- ${no}`);
    }, [no])

    return (
        <>

            <div className="d-flex justify-content-center">
                <button className="border-0 rounded bg-success px-5 m-2 text-white" onClick={() => handleIncrement()}>+</button>
                <h1 className="border-0 rounded bg-danger px-5 m-2 text-white " >{no}</h1>
                <button className="border-0 rounded bg-success px-5 m-2 text-white" onClick={() => handleDecrement ()}>-</button>
            </div>

            <div className="d-flex justify-content-center" >
                <button className="border-0 rounded bg-success py-2 px-5 m-2 text-white" onClick={() => handleReset()}>Reset</button>
            </div>


        </>
    )
}


export default Counter;
