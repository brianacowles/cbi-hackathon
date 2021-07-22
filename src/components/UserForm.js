import { useState } from "react";

import { 
    Center, 
    Heading, 
    HStack, 
    IconButton, 
    Input, 
    Select, 
    Text, 
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

import "../styles/UserForm.css";

/*
    The form the user will fill out when setting up an account
*/
function UserForm() {
    // an object acting like an enum
    const cycles = {
        DAILY: "daily",
        WEEKLY: "weekly",
        BIWEEKLY: "biweekly",
        MONTHLY: "monthly",
        BIMONTHLY: "bimontly",
        YEARLY: "yearly",

    }

    /* STATE */
    // user expenses - this is used for the dynamic list
    const [expenses, setExpenses] = useState([]);
    // dummy value "pulled in" from card
    const balance = 134545;
    // remaining balance calculated using expenses
    const [remaining, setRemaining] = useState(balance / 100);

    // called when an expense is changed - updates the value
    const updateExpense = idx => e => {
        // temp array to manipulate
        let updatedExpenses = [...expenses];
        // update expenses with new value
        updatedExpenses[idx][e.target.name] = e.target.value;
        setExpenses(updatedExpenses);
        console.log();
        // update remaining using new expenses values
        setRemaining(balance/100 - expenses.reduce((acc, cur) => acc + Number(cur.amount), 0));
    }

    // what we render on the page
    return (
        <div className="UserForm">
            <Center>
                <Heading as="h1" size="md">Total Balance: ${(balance/100).toLocaleString()}</Heading>
            </Center>
            <Text>To calculate a budget for your fun, we'd like to make sure the serious business is taken care of first.</Text>
            <Heading as="h2" size="sm">Enter your recurring or necessary expenses</Heading>
            <ul>
                {expenses.map((e, idx) => 
                    <li key={idx}>
                        <HStack>
                            <Input w="40%" type="text" name="expense" value={e.expense} onChange={updateExpense(idx)}></Input>
                            <Input width="20%" type="number" name="amount" value={e.amount} onChange={updateExpense(idx)}></Input>
                            <Select w="40%" name="cycle" defaultValue={e.cycle} onChange={updateExpense(idx)}>
                                {Object.entries(cycles).map((c) => 
                                    <option key={c[1]} value={c[1]}>{c[1]}</option>
                                )}
                            </Select>
                        </HStack>
                    </li>
                )}
            </ul>
            <Center>
                <IconButton aria-label="add expense" icon={<AddIcon/>} onClick={() => setExpenses(expenses => [...expenses, {"expense": "", "amount": 0, "cycle": cycles.MONTHLY}])}/>
            </Center>
            <Heading as="h2" size="sm">Remaining Balance: ${(remaining).toLocaleString()}</Heading>

            <Heading as="h2" size="sm">What percentage of your remaining balance would you like to keep as a fun budget?</Heading>

            <Heading as="h2" size="sm">Would you like recommendations to include alcoholic beverages?</Heading>

            

            <Heading as="h2" size="sm">What type of places do you prefer for hanging out?</Heading>
        </div>
    );
}

export default UserForm;