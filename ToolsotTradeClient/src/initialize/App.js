import {useState} from 'react';


function App() {
    const [expanded, setExpanded] = useState(false);
    const [headerText, setHeaderText] = useState(window.location.pathname[1] ? window.location.pathname[1].toUpperCase() + window.location.pathname.substring(2) : "");

    return(
        <Body>
            <Navigation expanded={expanded} setExpanded={setExpanded} setHeaderText={setHeaderText} />
            <Content>
                <Header>{headerText}</Header>
                <Routing setHeaderText={setHeaderText} />
            </Content>
        </Body>
    );
}

export default App;