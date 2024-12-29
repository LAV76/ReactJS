function EvenCard({title, date, location, propsBoolean}) {
    return (
        <div>  
            <h2 style = {{color: propsBoolean ? 'green': 'red'}}><spam className = 'evenCart_title' >"Группа"</spam>"{title}"</h2>
            <h2><spam className = 'evenCard_date' >"Дата: "</spam>{date}</h2>
            <h2><spam className = 'evenCard_location' >"Адрес: "</spam>{location}</h2>
        </div>
    );
}

export default EvenCard;