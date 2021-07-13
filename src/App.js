import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import './App.sass';

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <div className='container'>
        <h1 className='account'>Account: {account}</h1>
        <div className='btn-container'>
          <button className='btn' onClick={() => depositMoney(1000)}> Deposit </button>
          <button className='btn' onClick={() => withdrawMoney(1000)}> Withdraw </button>
        </div>
      </div>
    </div>
  );
}

export default App;
