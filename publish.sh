npm run build
echo 'build success'
npm run build:demo
echo 'build demo success'
git add .
git commit -m 'publish auto'
git push
npm publish