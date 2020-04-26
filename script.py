import random

def Average(list):
	return sum(list) / len(list)

randomlist = []
for i in range(0,30):
	n = random.randint(3,5)
	randomlist.append(n)

print('Ratings from this month:\n'+ str(randomlist))

avg = Average(randomlist)

print('Rating out of 5: \n' + str(round(avg, 2)))
