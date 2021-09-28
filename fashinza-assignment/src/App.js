import SearchBox from './components/searchBox';
import {useState, useEffect} from 'react';
import './App.css';
import RepoList from './components/repoList';

const App = () => {
  const [orgGithubState, setorgGithubState] = useState({
    searchField : "octokit",
    reposList : [],
    error : ""
  })

  useEffect(() => {
    const getOrgData = async () => {
      console.log("in getOrgData")
      const str = `${process.env.username}:${process.env.TOKEN}`
      const myHeaders = new Headers({
        "Authorization": `Basic ${btoa((str))}`
      });
      fetch(`https://api.github.com/orgs/${orgGithubState.searchField}/repos?per_page=10&page=1`, {
        headers : myHeaders
      }).then(response => response.json())
      .then(data => {
        const repos = data;
        console.log("repos", repos)
        if(repos.message){
          setorgGithubState({...orgGithubState, error: repos.message})
        }
        else setorgGithubState({...orgGithubState, reposList : repos, error: ""});
      })
    }
    getOrgData();
  }, [orgGithubState.searchField])

  const searchSubmitHandle = (event) => {
    event.preventDefault();
    setorgGithubState({...orgGithubState, searchField : event.target.children[0].value})
  }
  return (
    <div className="App">
      <h1>Github Repos!</h1>
      <SearchBox searchSubmit={searchSubmitHandle}/>
      {
        (orgGithubState.error.length != 0)?
        <div>Encountered an error while fetching data. Please try again.</div> :
        <div>
        <RepoList repos={orgGithubState.reposList}/>
        </div>
      }
    </div>
  );
}

export default App;
