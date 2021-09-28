import react from 'react';
import '../styles/repo.css';
const Repo = ({name, openIssues, url, progLanguageUsed}) => {
    console.log(name, openIssues, url, progLanguageUsed)
    return(
        <div className="repo">
            <h2>{name}</h2>
            <span>{progLanguageUsed}</span>
            <br/>
            <div>{url}</div>
            <div>{openIssues}</div>
        </div>
    )
}

export default Repo;