export default ResultModal({ result, targetTime })
{
    return (<dialog className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stop the timer with <strong>X</strong> seconds left.</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>);
}