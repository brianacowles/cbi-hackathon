import { useState } from "react";

import "../styles/UserForm.css";

// an object acting like an enum
const cycles = {
    DAILY: "daily",
    WEEKLY: "weekly",
    BIWEEKLY: "biweekly",
    MONTHLY: "monthly",
    BIMONTHLY: "bimontly",
    YEARLY: "yearly",

}

const place_vals = {
    CAFES: "Cafes",
    BARS: "Bars",
    RESTAURANTS: "Restaurants",
    CLUBS: "Clubs",
}


function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return "st";
    }
    if (j === 2 && k !== 12) {
        return "nd";
    }
    if (j === 3 && k !== 13) {
        return "rd";
    }
    return "th";
}

function getAmount(amount, cycle) {
    switch(cycle) {
        case cycles.DAILY:
            return amount*30;
        case cycles.WEEKLY:
            return amount*4;
        case cycles.BIWEEKLY:
            return amount*2;
        case cycles.MONTHLY:
            console.log("HEY");
            return amount;
        case cycles.BIMONTHLY:
            return amount/2;
        case cycles.YEARLY:
            return amount/12;
        default:
            return 0;   
    }
}

/*
    The form the user will fill out when setting up an account
*/
function UserForm() {


    /* STATE */
    // user expenses - this is used for the dynamic list
    const [expenses, setExpenses] = useState([]);
    // dummy value "pulled in" from card
    const balance = 100000;
    // remaining balance calculated using expenses
    const [remaining, setRemaining] = useState(balance / 100);
    const [percentage, setPercentage] = useState(10);
    const [customVisible, setCustomVisible] = useState(false);
    const [alcohol, setAlcohol] = useState(true);
    const [places, setPlaces] = useState("Cafes");
    const [refreshDate, setRefreshDate] = useState(1);
    const [suffix, setSuffix] = useState(ordinal_suffix_of(refreshDate));

    // called when an expense is changed - updates the value
    const updateExpense = idx => e => {
        // temp array to manipulate
        let updatedExpenses = [...expenses];
        // update expenses with new value
        updatedExpenses[idx][e.target.name] = e.target.value;
        setExpenses(updatedExpenses);
        // update remaining using new expenses values
        setRemaining(balance/100 - expenses.reduce((acc, cur) => acc + getAmount(Number(cur.amount), cur.cycle), 0));
    }

    const handleDelete = id => e => {
        setExpenses([...expenses].filter(item => item.id !== id));
        setRemaining(balance/100 - [...expenses].filter(item => item.id !== id).reduce((acc, cur) => acc + getAmount(Number(cur.amount), cur.cycle), 0));
    }

    // what we render on the page
    return (
        <div className="UserForm">
            <div className="user-header">
                <p className="user-back">&#60; Back</p>
                <h1 className="total-balance">Total Balance:</h1> 
                <h1 className="balance-amount">${(balance/100).toLocaleString()}</h1>
                <h3 className="balance-msg">available in bank checking account</h3>
            </div>
            <div className="dock">
                <p className="dock-desc">To calculate a fun budget, we'd like to make sure the serious business is taken care of first.</p><p className="dock-warn">*All values on this page can be changed later!</p>
                <div className="dock-fields">
                    <h2>Enter your recurring or necessary expenses</h2>
                    <p className="expense-ex">For example: rent, tuition, groceries</p>
                    <ul className="expenses">
                        {expenses.map((e, idx) => 
                            <li key={e.id}>
                                <button className="expense-delete" onClick={handleDelete(e.id)}>×</button>
                                <input className="expense-input" w="40%" type="text" name="expense" value={e.expense} onChange={updateExpense(idx)}></input>
                                <input className="amount-input" width="20%" type="number" name="amount" value={e.amount} onChange={updateExpense(idx)}></input>
                                <select className="cycle-input" w="40%" name="cycle" defaultValue={e.cycle} onChange={updateExpense(idx)}>
                                    {Object.entries(cycles).map((c) => 
                                        <option key={c[1]} value={c[1]}>{c[1]}</option>)}
                                </select>
                            </li>
                        )}
                    </ul>
                    <button className="add-button" onClick={() => setExpenses(expenses => [...expenses, {"id": Date.now(), "expense": "", "amount": 0, "cycle": cycles.MONTHLY}])}>+ Add Item</button>

                    <h2>What percentage of your remaining balance would you like to keep as a fun budget?</h2>
                    
                    <div className="percentages">
                        <fieldset id="percentages">
                            <input type="radio" id="5%" name="percentages" onClick={()=>{setPercentage(5); setCustomVisible(false);}}/>
                            <label htmlFor="5%">5%</label>

                            <input type="radio" id="10%" name="percentages" defaultChecked onClick={()=>{setPercentage(10); setCustomVisible(false);}}/>
                            <label htmlFor="10%">10%</label>

                            <input type="radio" id="20%" name="percentages" onClick={()=>{setPercentage(20); setCustomVisible(false);}}/>
                            <label htmlFor="20%">20%</label>

                            <input type="radio" id="Custom" name="percentages" onClick={()=>setCustomVisible(true)}/>
                            <label htmlFor="Custom">Custom</label>
                            {customVisible ? <input className="custom-input" type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)}></input> : false}
                        </fieldset>
                    </div>
                    
                    <h2 className="remaining-balance">Remaining Balance: ${(remaining*(percentage/100)).toFixed(2).toLocaleString()}</h2>

                    <h2>Would you like recommendations to include alcoholic beverages?</h2>
                    <div className="alcohol">
                        <fieldset id="alcohol">
                            <input type="radio" id="yes" name="alcohol" onClick={()=>setAlcohol(true)} className="yes" defaultChecked />
                            <label className="yes" htmlFor="yes">yes</label>

                            <input type="radio" id="no" name="alcohol" onClick={()=>setAlcohol(false)} className="no"/>
                            <label className="no" htmlFor="no">no</label>
                        </fieldset>
                    </div>
                    {alcohol ? 
                        <div className="beverages">
                            <h2>Which beverages are you interested in?</h2>
                            <fieldset id="beverages">
                                <input type="checkbox" id="beer" name="beverages" />
                                <label htmlFor="beer">Beer</label>

                                <input type="checkbox" id="wine" name="beverages"/>
                                <label htmlFor="wine">Wine</label>
                                
                                <input type="checkbox" id="liquor" name="beverages"/>
                                <label htmlFor="liquor">Liquor</label>

                                <input type="checkbox" id="other" name="beverages" />
                                <label htmlFor="other">Other</label>

                            </fieldset>
                        </div>
                    : false }

                    <h2>What type of places do you prefer for hanging out?</h2>
                    <div className="places">
                        <fieldset id="places">
                            <input type="checkbox" id="Cafes" name="places" onClick={()=>setPlaces(place_vals.CAFES)}/>
                            <label htmlFor="Cafes">Cafes</label>

                            <input type="checkbox" id="Bars" name="places" onClick={()=>setPlaces(place_vals.BARS)}/>
                            <label htmlFor="Bars">Bars</label>

                            <input type="checkbox" id="Restaurants" name="places" onClick={()=>setPlaces(place_vals.RESTAURANTS)}/>
                            <label htmlFor="Restaurants">Restaurants</label>

                            <input type="checkbox" id="Clubs" name="places" onClick={()=>setPlaces(place_vals.CLUBS)}/>
                            <label htmlFor="Clubs">Clubs</label>
                        </fieldset>
                    </div>
                    <h2>Set a monthly date for your budget to refresh:</h2>
                    <div style={{position: "relative"}}>
                        <input min={1} max={31} className="refresh-date" id="refresh-date" type="number" defaultValue={refreshDate} onChange={(e) => setSuffix(ordinal_suffix_of(parseInt(e.target.value)))}></input>
                        <label htmlFor="refresh-date" className="suffix">{suffix} of every month</label> 
                    </div>                
                </div>
                <button className="next-button">Next &#62;</button>
            </div>
        </div>
    );
}

export default UserForm;