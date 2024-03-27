import { useState } from "react";
import styles from "../Styles/accordian.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Accordian = () => {
    const [showContant,setShowContent] = useState(false)

    return(
        <div className={`${styles.container} ${!showContant ? styles.collapsed : "" }`}>
            <div>
                <span>
                Open the accordian
                </span>
               {showContant ?  <FaChevronUp onClick={() => setShowContent(!showContant)} /> : <FaChevronDown onClick={() => setShowContent(!showContant)} />}
            </div>
            <div >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor mollitia sunt illo rem asperiores officiis excepturi saepe et aspernatur nihil ex iste, illum consectetur ratione fugiat rerum architecto sint.
                Aliquid, doloribus? Pariatur, corrupti! Harum, voluptatem maxime. Quasi dolorum placeat animi in quam architecto laborum voluptatem voluptatum,
            </div>
        </div>
    )
} 

export default Accordian;