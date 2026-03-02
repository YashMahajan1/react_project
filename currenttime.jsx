function Currentt (){
    let time =  new Date()
return  <p className="fw-semibold">this is a current time{time.toLocaleString()}</p>
}
export default Currentt;