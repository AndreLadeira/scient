DIR="/var/www/codeworks.ddns.net/public_html"

rm -rf $DIR/*

mkdir "$DIR/authors"
mkdir "$DIR/content"
mkdir "$DIR/css"
mkdir "$DIR/data"
mkdir "$DIR/font"
mkdir "$DIR/html"
mkdir "$DIR/img"
mkdir "$DIR/js"
mkdir "$DIR/php"


cp -f -R ../authors/* "$DIR/authors"
cp -f -R ../content/* "$DIR/content"
cp -f ../css/* "$DIR/css"
cp -f ../data/* "$DIR/data"
cp -f ../font/* "$DIR/font"
cp -f ../html/* "$DIR/html"
cp -f ../img/* "$DIR/img"
cp -R ../js/*  "$DIR/js"
cp -f ../php/* "$DIR/php"
cp -f -R ../posts/* "$DIR/posts"
cp -f ../* "$DIR"