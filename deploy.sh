mkdir ./deploy-git
cd ./deploy-git
git init
git config --global push.default matching
git config --global user.email "${GitHubEmail}"
git config --global user.name "${GitHubUser}"
git remote add origin https://${GitHubKEY}@github.com/${GitHubRepo}.git
git pull origin ${DeployBranch}
rm -rf ./*
cp -rf ../public/* ./
git add --all .

if [ "$HOST_OS" = "Linux" ] || [[ "$HOST_OS" =~ "MINGW64_NT" ]] || [[ "$HOST_OS" =~ "MINGW32_NT" ]]; then
    DATE="$(echo $(date --rfc-2822)|sed -n -e 's/\+0800/CST/p')"
elif [ "$HOST_OS" = "Darwin" ]; then
    DATE="$(echo $(date +'%a, %d %b %Y %T CST'))"
fi

git commit -m "Travis Auto Tester for Material Theme $DATE"
git push --quiet --force https://${GitHubKEY}@github.com/${GitHubRepo}.git