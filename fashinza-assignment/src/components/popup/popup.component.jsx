import './popup.styles.css'

const RepoPopup = ({closePopup, repo}) => {
    const na = "NA";

    let permissionsStr = "";
    if(repo.permissions){
        const {admin, maintain, pull, push, triage} = repo.permissions;
        if(admin) permissionsStr += "admin ";
        if(maintain) permissionsStr += "maintain ";
        if(pull) permissionsStr += "pull ";
        if(push) permissionsStr += "push ";
        if(triage) permissionsStr += "triage";
    }
    const licenseName = (repo.license)? repo.license.name : na;
    return (
        <div className='popup'>
          <div className='popup_inner'>
            <div className="popup-headline">
                <h3 style={{display: "inline"}}>{repo.full_name}</h3>
                <img alt="avatar" src={repo.owner.avatar_url}/>
            </div>
            {(repo.description)? <div>Description - {repo.description}</div>: null}
            <div> Forks - {repo.forks}</div>
            <div> Owner - {(repo.owner)?repo.owner.login : na} </div>
            <div> Licence - {licenseName} </div>
            <div>Permissions - {permissionsStr}</div>
            {(repo.ssh_url)?<div>SSH URL - <a target="_blank" rel="noopener noreferrer" href={repo.ssh_url}>{repo.ssh_url}</a></div>: null}
          <button className="close-button" onClick={closePopup}>X</button>
          </div>
        </div>
    )
}

export default RepoPopup;

