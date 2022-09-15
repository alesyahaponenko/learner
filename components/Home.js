import {useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import axios from 'axios';

const Home = () => {
    const [query, setQuery] = useState(null);
    const [jsonDataArr, setJsonDataArr] = useState([]);
    const [loadingState, setLoadingState] = useState();
    const el = useRef();
    const q = gsap.utils.selector(el);


    useEffect(() => {
        setTimeout(()=>{
            axios
                .get("/api/data")
                .then((res) => {
                    setJsonDataArr(res.data.predictions)
                    setQuery(res.data.query)
                    setLoadingState("start");
                })
                .catch((err) => console.log(err));
        },10000)


    }, [])

    useLayoutEffect(() => {
        if (loadingState !== "start") return;
            gsap.from(q("li"),{y:50, opacity:0, duration:2, stagger:0.2})
    }, [loadingState])



    const click = (e) => {
        console.log(e.target)
    }


    return (
        <div className="inner">
            {!loadingState &&
                    <div className='loading'>
                        <div>loading</div>
                    </div>
            }
            {loadingState &&
                <div className="main">
                    <div className="babbles">
                        <ul ref={el}>
                            {jsonDataArr && jsonDataArr.map(({
                                                                 block_name,
                                                                 score,
                                                                 short_description,
                                                                 long_description,
                                                                 size
                                                             }, index) => (
                                <li key={score} onClick={click} className={'liAnim li' + index}>
                                    {block_name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="query">
                        {query}
                    </div>
                </div>
            }

        </div>
    )
}

export default Home
