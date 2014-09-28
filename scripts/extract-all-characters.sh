#!/bin/bash

# Extract all characters id from sentences.json into a single line
grep -o "character: { id: '[a-zA-Z_]*"  ../www/js/sentences.json | cut -c 19- | uniq | tr "\\n" " "
echo 