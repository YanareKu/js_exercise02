
array_list = [1, 2, 3, 2, 4]

empty_list = []
duplicate_list = []

for i in array_list:
     
    if i not in empty_list:
        empty_list.append(i)

    elif i in empty_list:
        duplicate_list.append(i)

print duplicate_list

