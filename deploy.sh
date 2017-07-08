cd ./public
git init
git config --global push.default matching
git config --global user.email "${GitHubEmail}"
git config --global user.name "${GitHubName}"
git add --all .
git commit -m "Auto Tester of Material Theme"
#git push --quiet --force https://${GitHubKEY}@github.com/SumiMakito/SumiMakito.github.io.git master