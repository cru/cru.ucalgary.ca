<h1 align="center">
  Clinical Research Unit
</h1>

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
 - gatsby develop

 # git LFS and Netlify Large Media
  - this project uses git-lfs for the dfexplore and idatafax downloads
  - git-lfs is configured to use Netlify Large Media for hosting the files