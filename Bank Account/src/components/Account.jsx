import { useReducer } from "react";
import { AccountButton, AccountContainer, AccountLabel } from "./Account.style";

const initialState = {
    amount:0,
    loan:0,
    status:"closed"
}

const reducer = (state,action) => {

    switch(action.type) {
        case 'open': 
            return {
                ...state, 
                amount : action.payload.amount,
                status: "open"
            }
        case 'deposit':
            return {
                ...state,
                amount: state.amount + action.payload.amount 
            }
        case 'withdraw':
            if (state.amount == 0) {
                return state
            }
            return {
                ...state,
                amount : state.amount - action.payload.amount
            }
        case 'loan':
            return {
                ...state,
                loan : action.payload.amount
            }
        case 'payLoan':
            return {
                ...state,
                loan : action.payload.amount
            }
        case 'closed':
            if (state.amount != 0 || state.loan != 0) {
                return state
            }
            return {
                ...state,
                status: action.type
            }
        default :
                throw new Error("Action unknown")
    }
}

const Account = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AccountContainer>
            <h1>Use reducer bank Account</h1>
            <AccountLabel>Balance : {state.amount}</AccountLabel>
            <AccountLabel>Loan : {state.loan}</AccountLabel>
            <AccountButton disabled={state.status != "closed"} onClick={()=>dispatch({type:'open', payload : {amount:500}})}>Open</AccountButton>
            <AccountButton disabled={state.status == "closed"} onClick={()=>dispatch({type:'deposit', payload: {amount:150}})}>Deposit 150</AccountButton>
            <AccountButton disabled={state.status == "closed"} onClick={()=>dispatch({type:'withdraw', payload: {amount:50}})}>Withdraw 50</AccountButton>
            <AccountButton disabled={state.status == "closed"} onClick={()=>dispatch({type:'loan', payload:{amount:5000}})}>Request a loan of 5000</AccountButton>
            <AccountButton disabled={state.status == "closed"} onClick={()=>dispatch({type:'payLoan', payload:{amount:0}})}>Pay loan</AccountButton>
            <AccountButton disabled={state.status == "closed"} onClick={()=>dispatch({type:'closed'})}>Close account</AccountButton>
        </AccountContainer>
    )
}

export default Account;