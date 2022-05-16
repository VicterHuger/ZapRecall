import { Link } from "react-router-dom"
export default function Footer({answered,icons,children,buttonAplied}){

    return(
        <>
        {buttonAplied===true ?
            <div className="footer">
                {children}
                <h3 className="count">{`${answered}/8 CONCLUÍDOS`}</h3> 
                <IconsFooter>
                    {icons}
                </IconsFooter>
                <Link to="/">
                    <button className="reboot">
                         <h4>REINICIAR RECALL</h4>
                    </button>
                </Link>
            </div>
            :
            <div className="footer">
            {children}
            <h3 className="count">{`${answered}/8 CONCLUÍDOS`}</h3> 
            <IconsFooter>
                {icons}
            </IconsFooter>
            </div>
        }
       </>
    )
}
function IconsFooter({children}){
    return (
        <div className="icons-footer">
            {children}
        </div>
    )
}
