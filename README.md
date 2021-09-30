# fashinzaAssignment

This application can be used to fetch the github repositories of given organization which can be searched for using the search functionality. Each repo can be clicked and a more detailed description of the same can be found there. 
Includes inifinite scroll where next set of repositories is fetched after the user reaches to the bottom of the list of repos.

# Start the application
The github APIs use token authentication, hence a valid guthub account and a personal access token is required for it to work.

Step 1 - If you don't have a github personal access token, please create one using the following link:
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

Step 2 - Add github username and personal access token to the `.env` file in the project

Step 3 - Run `yarn start` command in the project directory (fashinza-assignment)