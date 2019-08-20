#!/bin/bash
input=$(node src/render-main.js getlen $1 0)
arr=($(echo $input | tr " " "\n"))

x=0
while [ $x -lt ${arr[0]} ]
do
	node src/render-main mod $1 $2 $x
	input=$(node src/render-main.js getlen $1 $x)
	arr=($(echo $input | tr " " "\n"))
	y=0
	while [ $y -lt ${arr[1]} ]
	do
		echo $y ${arr[1]}
		node src/render-main.js asm $1 $2 $x $y
		y=$((y+1))
	done
	x=$((x+1))
done
