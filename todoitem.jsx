function Todoitem (){
    let itemname = " go to collage"
    let itemdate= " 10/02/2026"
return <div className="container">
    

    <div class="row kg-row">
    <div class="col-4"> {itemname}</div>
    <div class="col-4">{itemdate}</div>
    <div class="col-2"> <button type="button" class="btn btn-danger kgbut">delete</button></div>
  </div>
  </div>
}
 
export default Todoitem;