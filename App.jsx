import Appname from "./componet/appname";
import Addtodo from "./componet/addtodo";
import Todoitem from "./componet/todoitem";
import Todoitem2 from "./componet/todoitem2";
import "./App.css";
function App() {


  return <center className ="todocontent">

    <Appname></Appname>
    <Addtodo></Addtodo>
    <div className="item"> </div>
    <Todoitem></Todoitem>
     <Todoitem2></Todoitem2>
    

 </center>
    
      
}

export default App;
