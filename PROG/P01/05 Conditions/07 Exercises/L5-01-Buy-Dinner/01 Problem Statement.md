# Problem Statement   

Aravind goes to nearby hotel got buy dinner for him, where first he checks whether the hotel have both idli and sambar and there are atleast 5 idlys available then buys idli and samber for him if both are available. if either idli or sambar is not available, then he checks if dosa and chuttny are available and checks if atlease 2 dosa is there, if available then he buys dosa and chuttny, if chuttny or dosa is not available then he gets back without purchasing anything

For a give time find the status of the college 

## Rules

* First checks if idli and sambar is available and idlys qty is atleast 5
    | Idli | Idli Quantity | Sambar |  Purchased | 
    | :---:   |  :----:   |  :----:   |   :----:   | 
    | true | >4 | true | Purchased Idli and Sambar | 


* if any of the above criteria fails then checks if dosa and chuttny is available and dosa quantity is atlease 2
    | Dosa | Dosa Quantity | Chuttny |  Purchased | 
    | :---:   |  :----:   |  :----:   |   :----:   | 
    | true | >1 | true | Purchased Dosa and Chuttny | 

* if the above criteria fails 
    returns without purchasing anything



## Sample I/O

> #### Sample Input 1:
>  idliQuantity = 6 sambarAvailable=true, dosaQuantity=5, chuttnyAvailable = true , 
>
> ##### Output:
> “Purchased Idli and Sambar”

> #### Sample Input 2:
> idliQuantity= 4, sambarAvailable=true, dosaQuantity=5, chuttnyAvailable = true 
>
> ##### Output:
> “Purchased Dosa and Chuttny”

> #### Sample Input 3:
> idliQuantity= 10, sambarAvailable=false, dosaQuantity=2, chuttnyAvailable = true 
>
> ##### Output:
> “Purchased Dosa and Chuttny”

> #### Sample Input 4:
> idliAvailable= false, sambarAvailable=true, dosaQuantity=2, chuttnyAvailable = false 
>
> ##### Output:
> “Didn't purchase Anything”
