import AddExpenseButton from "./addExpenseButton";
import Text from "./text";

const  HomePage = () => {
  return (  
    <main>
      <h1>Expense Tracker</h1>
      <Text />
      <Text balance="£500.00"/>
      <Text balance="-£246.00"/>
      <AddExpenseButton />
    </main>
  );
}
 
export default HomePage;