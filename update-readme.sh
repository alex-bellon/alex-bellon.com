#!/bin/sh
while inotifywait -e modify -e create /home/alex/GitHub/website; do
	echo "# Website

    Website last updated on: $(date)
    
    Source code for my personal website <a href=\"http://alex-bellon.com\">alex-bellon.com</a>. I wrote the website myself except for the <a href=\"https://github.com/jsoma/tabletop\">tabletop</a> (allows HTML content to be drawn from a Google Spreadsheet)." > README.md
done
