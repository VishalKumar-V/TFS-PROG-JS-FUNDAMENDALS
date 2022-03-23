# Problem Statement   

Aravind goes to nearby hotel got buy breakfast for him, where first he checks whether the hotel have both idli and sambar then buys idli and samber for him if both are available . if either idli or sambar is not available, then he checks if dosa and chuttny is available, if available then he buys dosa and chuttny, if chuttny or dosa is not available then he gets back without purchasing anything

For a give time find the status of the college 

## Rules


* First checks if idli and sambar is available and idlys qty is atleast 5

    | Idli | Sambar |  Purchased | 
    | :---:   |  :----:   |  :----:   |   :----:   |  
    | true | true | Purchased Idli and Sambar | 


* if any of the above criteria fails then checks if dosa and chuttny is available and dosa quantity is atlease 2

    | Dosa | Chuttny |  Purchased | 
    | :---:   |  :----:   |  :----:   |   :----:   |  
    | true |  true | Purchased Dosa and Chuttny | 

* if the above criteria fails
    returns without purchasing anything





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
> idliAvailable= false, sambarAvailable=false, dosaAvailable=true, chuttnyAvailable = true 
>
> ##### Output:
> “Purchased Dosa and Chuttny”

> #### Sample Input 4:
> idliAvailable= false, sambarAvailable=true, dosaAvailable=true, chuttnyAvailable = false 
>
> ##### Output:
> “Didn't purchase Anything”
