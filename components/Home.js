import {forwardRef, useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import axios from 'axios';
import Man from "./Man";
import {fromNodeHeaders} from "next/dist/server/web/utils";

const Home = forwardRef( (props, ref)  => {
    const { ref1, ref2 } = ref;
    const [query, setQuery] = useState(null);
    const [jsonDataArr, setJsonDataArr] = useState([]);
    const [loadingState, setLoadingState] = useState();
    const [input, setInput] = useState("");

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl_intro = useRef();
    const tl_changeBubble = useRef();

    useEffect(() => {
        axios
            .get("/api/data")
            .then((res) => {
                setJsonDataArr(res.data.predictions)
                setQuery(res.data.query)
                setLoadingState("start");
            })
            .catch((err) => console.log(err));
    }, [])

    useLayoutEffect(() => {
        if (loadingState !== "start") return;
        const vh = (coef) => window.innerHeight * (coef/100);
        const vw = (coef) => window.innerWidth * (coef/100);

        tl_intro.current = gsap.timeline({paused: true})

        tl_intro.current.from(('.query'), {y: 400, duration: 1},"<+=0.3")
        tl_intro.current.from(('.st0'), {scale: 0, duration: 1, ease: "elastic.out(1, 0.6)"},"<+=0.1")
        tl_intro.current.from(('.st1'), {scale: 0, duration: 1, ease: "elastic.out(1, 0.6)"},"<+=0.2")
        tl_intro.current.from(('.man_silhouette'), {scale: 0, duration: 1, ease: "elastic.out(1, 0.8)"},"<+=0.3")
        let lenght_el = (q("li").length -1)
        for (let i = 0; i < lenght_el; i++) {
            tl_intro.current.to(q("li")[i], {x: -vh(30) * Math.cos(i * (  Math.PI*1.35/ lenght_el )),opacity:()=>jsonDataArr[i].size/25, scale:()=>jsonDataArr[i].score,  duration: 1,},0+i/6)
            tl_intro.current.to(q("li")[i], {y: -vh(30) * Math.sin(i * (  Math.PI *1.35/ lenght_el )),opacity:()=>jsonDataArr[i].size/25,scale:()=>jsonDataArr[i].score,  duration: 1,},0+i/6)
        }





        tl_changeBubble.current = gsap.timeline({paused: true})
        for (let i = 0; i < lenght_el; i++) {
            tl_changeBubble.current.to(q("li")[i], {x: 0,opacity:0, scale:1,  duration: 1},0+i/6)
            tl_changeBubble.current.to(q("li")[i], {y: 0,opacity:0, scale:1,  duration: 1},0+i/6)
        }
        // tl_changeBubble.current.to()
    }, [loadingState])

    const clickBubble = (e) => {
        e.preventDefault()
        console.log(e.target.classList.value)
        gsap.to(e.target,{top:'80vh', left: '50vw'})

    }
    const startChat = (e) => {
        e.preventDefault()
        setInput("")
        tl_intro.current.play()
        // console.log(e.target.classList.value)
        // gsap.to(e.target,{top:'80vh', left: '50vw'})

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
                <div className="chat_wrap" >
                    <div className="">Chat</div>
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <div className="btn" onClick={startChat}>Send</div>
                </div>
                <div className="bg_circles">
                    <div className="circls_wrap">
                        <div className="man_svg" >
                           <Man ref={{
                               ref1: ref1,
                               ref2: ref2
                           }}/>
                        </div>
                    </div>
                </div>
                <div className="query">
                    <div className="name">{jsonDataArr && jsonDataArr[0].block_name}</div>
                    <div className="short_descr">{jsonDataArr && jsonDataArr[0].short_description}
                        <div className="more">more...</div>
                    </div>
                </div>
                <div className="bubbles">
                    <ul ref={el}>
                        {jsonDataArr && jsonDataArr.map(({
                                                             block_name,
                                                             score,
                                                             short_description,
                                                             long_description,
                                                             size
                                                         }, index) => (

                            <li key={short_description}
                            onClick={clickBubble}
                            className={'liAnim li' + index}
                            >
                            {block_name}
                            </li>

                        ))}
                    </ul>
                </div>

            </div>
            }

        </div>
    )
})

export default Home
