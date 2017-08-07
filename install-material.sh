npm install
git clone https://github.com/viosey/hexo-theme-material.git themes/material
cd themes/material
git checkout -t origin/canary
git pull
rm -rf .git
cd ..
cd ..
cd ..
cp -i _config.theme.yml _hexo/themes/material/_config.yml
cd _hexo
