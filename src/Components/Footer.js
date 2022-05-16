export default function Footer({answered,icons,children}){
    
    return(
        <div className="footer">
            {children}
            <h3 className="count">{`${answered}/8 CONCLUÍDOS`}</h3> 
            <IconsFooter>
                {icons}
            </IconsFooter>
        </div>
    )
}
function IconsFooter({children}){
    return (
        <div className="icons-footer">
            {children}
        </div>
    )
}
