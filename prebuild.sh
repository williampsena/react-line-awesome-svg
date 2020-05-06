#!/bin/bash

SRC_DIR="./src"
ICONS_DIR="./src/icons"
OUTPUT_FILE="./src/icons/index.ts"

rm $OUTPUT_FILE

for FILE in `ls $ICONS_DIR`; do
    component_name="Svg${FILE%.tsx}"
    file_path="./${FILE%.tsx}"

    echo "export { default as $component_name } from '$file_path'" >> $OUTPUT_FILE
done

