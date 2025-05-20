import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from 'react-dom';
const ResultModal = forwardRef(function ResultModal(
    { result, targetTime, remaningTime, onReset }
    , ref) {
    const dialog = useRef();

    const userLost = remaningTime <= 0;
    const formattedRemaningTime = (remaningTime / 1000).toFixed(2);
    const score = Math.round((1 - remaningTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return ({
            show() {
                dialog.current.showModal();
            }
        });
    })

    return createPortal(<dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You {result}</h2>}
        {!userLost && <h2>You Score is: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stop the timer with <strong>{formattedRemaningTime}</strong> seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    , document.getElementById("modal"));
})

export default ResultModal;