import {useEffect, useState} from 'react';
import './repoList.styles.css';

import Repo from '../repo/repo.component';
import SearchBox from '../searchbox/searchBox.components';

const RepoList = () => {

    const [orgGithubState, setorgGithubState] = useState({
        searchField : "",
        reposList : [],
        error : "",
        page:1,
        loading: false
    })

    const {searchField, reposList, page, loading} = orgGithubState;
    useEffect(() => {
        const getOrgData = async () => {
          const str = `${process.env.username}:${process.env.TOKEN}`
          const myHeaders = new Headers({
            "Authorization": `Basic ${btoa((str))}`
          });
          if(searchField === "") return;
          fetch(`https://api.github.com/orgs/${searchField}/repos?per_page=10&page=${page}`, {
            headers : myHeaders
          }).then(response => response.json())
          .then(data => {
            let repos = data;
            if(reposList.length !== 0){
              if(reposList[reposList.length-1].owner.login === repos[0].owner.login){
                repos = [...reposList, ...repos];
              }  
            } 
            if(repos.message){
                setorgGithubState({...orgGithubState, error: repos.message})
            }
            else{
                setorgGithubState({...orgGithubState, reposList : repos, error: "", loading: false});
            } 
          })
        }
        getOrgData();
    
    }, [orgGithubState.searchField, orgGithubState.page])

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.scrollHeight) return;
            setorgGithubState({...orgGithubState, loading: true})
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [orgGithubState.reposList]);

    useEffect(() => {
        if (!loading) return;
        const nextPage = () => {
            if(orgGithubState){
                const nextPage = page+1;
                setorgGithubState({...orgGithubState, page: nextPage})
            }
        }
        nextPage();
    }, [loading]);

    const searchSubmitHandle = (event) => {
        event.preventDefault(); 
        setorgGithubState({...orgGithubState, searchField : event.target.children[0].value})
    }
    return (
        <div className="repo-list">
            <SearchBox searchSubmit={searchSubmitHandle}/>

            {
                (orgGithubState.error.length !== 0)?
                <div>Encountered an error while fetching data. Please try again.</div> :
                reposList &&
                reposList.map(repo =>
                    <Repo id = {repo.id} repo={repo} />
                )
            }
        </div>
    )
}

export default RepoList;