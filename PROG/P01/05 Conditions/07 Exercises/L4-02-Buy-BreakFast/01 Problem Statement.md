# Problem Statement   

Aravind goes to nearby hotel got buy breakfast for him, where first he checks whether the hotel have both idli and sambar then buys idli and samber for him if both are available . if either idli or sambar is not available, then he checks if dosa and chuttny is available, if chuttny or dosa is not available then he gets back without purchasing anything

For a give time find the status of the college 

## Rules



| Idli   | Sambar | Dosa | Chuttny | Purchased | 
| :---:   |  :----:   |  :----:   |   :----:   |   :----:  | 
| true | true | true | true | Purchased Idli and Sambar | 
| true | false | true | true | Purchased Dosa and Chuttny | 
| false | true | true | true | Purchased Dosa and Chuttny | 
| true | false | true | false | Didn't purchase Anything| 


## Sample I/O

> #### Sample Input 1:
> idliAvailable= true, sambarAvailable=true, dosaAvailable=true, chuttnyAvailable = true 
>
> ##### Output:
> “Purchased Idli and Sambar”

> #### Sample Input 2:
> idliAvailable= false, sambarAvailable=true, dosaAvailable=true, chuttnyAvailable = true 
>
> ##### Output:
> “Purchased Dosa and Chuttny”


> #### Sample Input 3:
> #### Sample Input 2:
> idliAvailable= false, sambarAvailable=false, dosaAvailable=true, chuttnyAvailable = true 
>
> ##### Output:
> “Purchased Dosa and Chuttny”

> #### Sample Input 4:
> #### Sample Input 2:
> idliAvailable= false, sambarAvailable=true, dosaAvailable=true, chuttnyAvailable = false 
>
> ##### Output:
> “Didn't purchase Anything”
