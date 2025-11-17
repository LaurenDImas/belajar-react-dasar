import {useState} from "react";
import Counter from "./Counter.jsx";

export default function CounterApp(){
    const [show2, setShow2] = useState(true)

    function handleChange(e){
        setShow2(e.target.checked);
    }

    return (
        <div>
            {/*{show2 ? */}
            {/*    (<div>*/}
            {/*        <Counter name={"Budi"}/>*/}
            {/*    </div>) */}
            {/*    : */}
            {/*    (<section>*/}
            {/*        <Counter name={"Eko"}/>*/}
            {/*    </section>)*/}
            {/*}*/}
            {/*{!show2 && <Counter name={"Budi"} />}*/}
            {/*{show2 && <Counter name={"Eko"} />}*/}

            {show2 ? <Counter key={"1"} name={"Budi"} /> : <Counter key={"2"} name={"Eko"} />}
            <input type="checkbox" onChange={handleChange} checked={show2} /> Tampilkan Counter 2
        </div>
    )
}