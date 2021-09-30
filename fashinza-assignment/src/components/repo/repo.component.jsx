import {useState} from 'react';
import './repo.styles.css';

import RepoPopup from '../popup/popup.component';
const Repo = ({repo}) => {
    const {full_name, open_issues, html_url, language, name} = repo;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    return(
        <div onClick={togglePopup} className="repo">
            <h2 className="left">Name - {full_name}</h2>
            <div className="left"><a target="_blank" rel="noopener noreferrer" href={html_url}>Link to the repo {name}</a></div>
            <span>Language used - {language}</span>
            <br/>
            <div>Number of open issues - {open_issues}</div>
            {
                showPopup ?
                <RepoPopup closePopup={togglePopup} repo={repo}/>
                : null
            }
        </div>
    )
}

export default Repo;