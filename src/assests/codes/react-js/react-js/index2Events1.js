const index2Events1 =()=>{
    return`.boxesGroup {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 150px 150px;
    place-items: center;
    background-color: lightgrey;
    cursor: default;
}
  
.box {
    height: 100px;
    width: 150px;
    border-radius: 10px;
    cursor: move;
}
  
.content {
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
}

@media only screen and (max-width: 600px){
    .boxesGroup {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .box {
        margin: 9px 0 ;
    }
}`
  }
  
  export default index2Events1