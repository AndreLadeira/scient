DIR="/var/www/scient.ddns.net/public_html"

rm -rf $DIR/*

mkdir "$DIR/css"
mkdir "$DIR/fonts"
mkdir "$DIR/img"
mkdir "$DIR/js"
mkdir "$DIR/php"


cp -f ../css/* "$DIR/css"
cp -f ../font/* "$DIR/fonts"
cp -f ../img/* "$DIR/img"
cp -R ../js/*  "$DIR/js"
cp -f ../*.html "$DIR"
