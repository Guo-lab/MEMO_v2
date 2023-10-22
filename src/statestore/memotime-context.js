import { createContext } from "react";
import { useState } from "react";

const memoTimeContext = createContext({
    memoTime: 'current',
    memoTimeSwitch: (memoTime) => {},
});

export function MemoTimeContextProvider(props) {
    const [memoTime, setMemoTime] = useState('current');

    function memoTimeHandler(toMemoTime) {
        console.log(toMemoTime);
        switch(toMemoTime) {
            case 'toCurrent':
                setMemoTime('current');
                break;
            case 'toFuture':
                setMemoTime('future');
                break;
            case 'toPast':
                setMemoTime('past');
                break;
            default:
                setMemoTime('current');
        } 
    }

    const context = {
        memoTime: memoTime,
        memoTimeSwitch: memoTimeHandler,
    };

    return (
        <memoTimeContext.Provider value={context}>
            {props.children}
        </memoTimeContext.Provider>
    );
}

export default memoTimeContext;