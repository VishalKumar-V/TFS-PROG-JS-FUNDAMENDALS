# Problem Statement   

By default declare a variable as "studentDetails" with a value of student details            
studentDetails value should contain name, age, gender, course, state, district, pincode, collegeFee            
Print the studentDetails object            
Deeclare a new variable as "scholorshipAmount" with integer value
Adjust collegeFee from studentDetails based on the  scholorshipAmount           
Print the studentDetails object            

## Rules
* Check the scholorshipAmount
* If scholorshipAmount greater than 0
    * Subtract scholorshipAmount in collegeFee property of studentDetails
* If scholorshipAmount equal to 0
    * Skip processing
* If scholorshipAmount less than 0
    * Print "Invalid Scholorship Amount"

## Manditory Steps

- [x] Solution Proposal
- [x] Algorithm
- [x] Solution
- [x] Scratchpad

## Sample I/O

> #### Sample Input 1:
> studentDetails = {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:30000}
> scholorshipAmount = 2000
> 
> ##### Output:
> {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:28000}
> 

> #### Sample Input 2:
> studentDetails = {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:30000}
> scholorshipAmount = 100
> 
> ##### Output:
> {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:29900}
> 

> #### Sample Input 3:
> studentDetails = {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:30000}
> scholorshipAmount = 0
> 
> ##### Output:
> {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:30000}
> 

> #### Sample Input 4:
> studentDetails = {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:30000}
> scholorshipAmount = -2000
> 
> ##### Output:
> {name: "Arul", age:21, gender:"male", course:"CSE", state: "TamilNadu", district: "Chennai", pincode:6000028, collegeFee:30000}
> "Invalid Scholorship Amount"
> 


