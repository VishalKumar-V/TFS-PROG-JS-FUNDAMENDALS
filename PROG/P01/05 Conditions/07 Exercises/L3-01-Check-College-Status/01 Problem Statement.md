# Problem Statement   

College A follows set of standard time table every day where the class starts by 9.00 IST, which contieous till 12.00 and by 12.00 students go for lunch break and again afternoon classes resume by 13.00 which contineous till 16.00 and student take a tea break from 16.00 to 17.00 and resumes with evening classes from 17.00 till 19.00 and the college closes by 19.00 till the next day of 9.00 

For a give time find the status of the activity carried out in the college 

## Rules

| Time      | Activity |
| :---        |    :----:   | 
| 0.00 - 9.00  | College Closed       | 
|   9.00 - < 12.00   | Morning Classes     | 
|   12.00 - < 13.00   | Lunch Break    | 
|   13.00 - < 16.00   | Afternoon Classes  | 
|   16.00 -  < 17.00   | Tea Break  | 
|   17.00 -  < 19.00   | Evening Classes  | 
|    >= 19.00   | College Closed | 


## Sample I/O

> #### Sample Input 1:
> time = 10
>
> ##### Output:
> “Morning Classes”

> #### Sample Input 2:
> time = 13
>
> #### Output:
> “Afternoon Classes ”

> #### Sample Input 3:
> time = 19
>
> #### Output:
> “College Closed”

> #### Sample Input 4:
> time = 22
>
> #### Output:
> “College Closed”
