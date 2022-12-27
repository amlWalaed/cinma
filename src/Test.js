// import { useDispatch, useSelector } from "react-redux";
// import {incrementCounter , decrementCounter , incrementByAmount , decrementByAmount} from './redux/counterSlice'

// const Test = () => {
//     const counterState = useSelector(state => state.counter.value)
//     console.log(counterState)
//     const dispatch = useDispatch();
//     const decrement = () => dispatch(incrementCounter());
//     const increment = () => dispatch(decrementCounter());
//     const increment3 = (steps) => dispatch(incrementByAmount(steps));
//     const decrement3 = (steps) => dispatch(decrementByAmount(steps));
//     return (  <div>
//         <button onClick={()=>increment()}>+</button>
//         <button onClick={()=>increment3(3)}>+3</button>
//         <div>{counterState}</div>
//         <button onClick={()=>decrement()}>-</button>
//         <button onClick={()=>decrement3(3)}>-3</button>
//     </div>);
// }
 
// export default Test;