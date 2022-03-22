[![Netlify Status](https://api.netlify.com/api/v1/badges/8417ab0f-92a0-4454-a56f-8566126ef585/deploy-status)](https://app.netlify.com/sites/suspicious-banach-4df0d5/deploys)

<h1 align="center">
  Clinical Research Unit
</h1>

# git LFS and Netlify Large Media

- this project uses git-lfs for the dfexplore and idatafax downloads
- git-lfs is configured to use Netlify Large Media for hosting the files
- if you have issues cloning this repo, try the following:
- 1. ensure you have git-lfs instaled
- 2. clone the repo from cli: GIT_LFS_SKIP_SMUDGE=1 git clone [repo]

# Install yarn

- sudo apt remove cmdtest
- sudo apt remove yarn
- curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
- echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
- sudo apt-get update && sudo apt-get install yarn

# Set up development environment

- switch to develop branch
- yarn install

# Start development server

- yarn start
- go to localhost:8000

# Deployments

- Production is built and deployed off the master branch automatically
- Once a commit is pushed to master this pipeline is trigger
- Opening a pull-request on master will build and deploy a 'deploy preview' site - this site will be accessed by a hashed link that can be retreived from the Netlify dashboard
- Once this pull-request is closed (i.e merged into master) the production build pipeline will be triggered
