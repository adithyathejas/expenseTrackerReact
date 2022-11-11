import "../UI/Card.css"

function Card(props){
    const clas =  "card " + props.className
   return <div className={clas}>{props.children}</div>
}

function Card2(props){
    const clas =  "card2 " + props.className
   return <div className={clas}>{props.children}</div>
}

export {Card,Card2}