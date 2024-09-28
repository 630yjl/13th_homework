'use client' //리액트 구버전 방식으로 실행해줘(리액트 훅 못씀)
import { useState } from "react"

const 카운터 = () => {

    const [count, setCount] = useState(0)

    const 카운트올리는기능 = () => {
        setCount(count + 1)
    }
    const 카운트내리는기능 = () => {
        setCount(count - 1)
    }

    //함수의 리턴은 한개만 할 수 있음. 따라서 하나로 묶어줌 빈<>로 묶던지 <div>로 묶던지...
    return (
        <div>
            <div>{count}</div>
            <button onClick={카운트올리는기능}>카운트 올리기</button>
            <button onClick={카운트내리는기능}>카운트 내리기</button>
        </div>
    )
}

export default 카운터