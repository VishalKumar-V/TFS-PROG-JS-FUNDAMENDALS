# Problem Statement

write a function calculateTotalAfterGst that takes totalPrice and gstPercent as input 
\
\
gstPercent value contains the percentage of GST that has to be applied on the total
\
\
call calculateTotalAfterGst by passing totalPrice and gstPercent
calculateTotalAfterGst will consume value from the params totalPrice and gstPercent
\
\
Applies GST accordingly on totalPrice and prints the final amount
\


## Rules
* The difference between (L1-01) and this task would be 
    * In L1-01 gstPercent is dependent on the envirointment containing it, because calculateTotalAfterGst is dependent on the varialble gstPercent which is defined in the file in L1-01 so in L1-01 is impure function
* In current task
    * gstPercent is independent on the envirointment containing it, because gstPercent is passed as on param to calculateTotalAfterGst thus no dependency on the containing envirointment, so the current task is of pure function
## Manditory Steps

- [ ] Solution Proposal
- [ ] Algorithm
- [x] Solution
- [ ] Scratchpad

## Sample I/O

> #### Sample Input 1:
> gstPercent = 10
> totalPrice = 200
>
> ##### Output:
> 220

