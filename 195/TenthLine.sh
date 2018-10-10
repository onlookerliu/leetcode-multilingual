sed -n '10p' file.txt

awk 'NR=10{print $0}' file.txt