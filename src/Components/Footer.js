export default function Footer({answered}){
    const TOTAL_ANSWERS=8;
    return(
        <div className="footer">
            { answered<=8 ? ( <h3>{`${answered}/8 CONCLUÍDOS`}</h3> ) :( <h3>{`${TOTAL_ANSWERS}/8 CONCLUÍDOS`}</h3> ) }
        </div>
    )
}