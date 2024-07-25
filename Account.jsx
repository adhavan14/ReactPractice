import { useReducer } from "react";

const initialState = {
    amount:0,
    loan:0,
    status:"closed"
}

const Account = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Balance : {state.amount}</p>
            <p>Loan : {state.loan}</p>
            <button disabled={state.status != 'closed'}>Open</button>
            <button>Deposit 150</button>
            <button>Withdraw 50</button>
            <button>Request a loan of 5000</button>
            <button>Pay loan</button>
            <button>Close account</button>
        </div>
    )
}

export default Account;