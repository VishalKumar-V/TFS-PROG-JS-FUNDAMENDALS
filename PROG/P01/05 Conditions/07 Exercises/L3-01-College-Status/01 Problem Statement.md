# Problem Statement   

College A follows set of standard time table every day where the class starts by 9.00 IST and the college closes by 19.00 till the next day of 9.00 

For a give time find the status of the college 

## Rules

| Time      | Activity |
| :---:        |    :----:   | 
| 0.00 - < 9.00  | College Closed   | 
|   9.00 - < 19.00   | College Open  | 
|   >= 19.00   | College Closed | 

## Sample I/O

> #### Sample Input 1:
> time = 10
>
> ##### Output:
> “College Open”

> #### Sample Input 2:
> time = 13
>
> #### Output:
> “College Open”

> #### Sample Input 3:
> time = 7
>
> #### Output:
> “College Closed”

> #### Sample Input 4:
> time = 22
>
> #### Output:
> “College Closed”
