import react from 'react';
import Repo from './repo';

import '../styles/repoList.css';
const RepoList = ({repos}) => {
    console.log("repos from reposList",repos);
    return (
        <div className="repoList">
            {
                repos.map(repo =>
                    <Repo name={repo.name} url={repo.url} openIssues={repo.open_issues} progLanguageUsed={repo.language} />
                )
            }
        </div>
    )
}

export default RepoList;