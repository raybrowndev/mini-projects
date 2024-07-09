import React from "react";
import Text from "./text";

const AddExpenseButton = () => {
    // const [showExpenseForm, setShowExpenseForm] = React.useState(false)
    // const onClick = () => setShowExpenseForm(true)
    return (  
        <div>
            {/* <button onClick={onClick}>Add Expense</button>
            {showExpenseForm ? <Text />: null} */}
            <button className="add-button"> Add Expense</button>
            <Text />

        </div>
    );
}
 
export default AddExpenseButton;