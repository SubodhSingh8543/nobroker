const { useState } = require("react")


const CheckboxGrp = () => {
    const [check1, setcheck1] = useState(false);
    const [check2, setcheck2] = useState(false);
    const [check3, setcheck3] = useState(false);
    const [check4, setcheck4] = useState(false);
    const [check5, setcheck5] = useState(false);

    const handleParent = () => {
        if(check1 && check2 && check3 && check4 && check5){
            setcheck1(false);
            setcheck2(false);
            setcheck3(false);
            setcheck4(false);
            setcheck5(false);
        }else{
            setcheck1(true);
            setcheck2(true);
            setcheck3(true);
            setcheck4(true);
            setcheck5(true);
        }
    }

    return (
        <div>
            <div>
                <span>parent</span>
                <input type="checkbox" checked={check1 && check2 && check3 && check4 && check5} onChange={() => handleParent()} />
            </div>
            <div>
                <input type="checkbox" checked={check1} onChange={() =>setcheck1(!check1)} />
                <input type="checkbox" checked={check2} onChange={() =>setcheck2(!check2)} />
                <input type="checkbox" checked={check3} onChange={() =>setcheck3(!check3)} />
                <input type="checkbox" checked={check4} onChange={() =>setcheck4(!check4)} />
                <input type="checkbox" checked={check5} onChange={() =>setcheck5(!check5)} />
            </div>
        </div>
    )
}

export default CheckboxGrp;