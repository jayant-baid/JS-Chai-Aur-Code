# JS Execution Context

Jo bhi file banai h usse js kese execute/run karegi

For running the file, js execute it in 2 phases

Kuch bhi code dia h -> js ko, toh sbse pehle Global EC toh banta hi h and it will refer to this

- For Node: {}
- For Browser: window object

*Execute in thread*
*JS -> Single threaded*

- Global Execution Context
- Function Execution Context
- Eval Execution Context *-> just know it, not to discuss, -> it is the property of the Global object*

## 2 Phases
**Memory Creation Phase / Creation Phase**
    -> variables ke lie space allocate hoti h
**Execution Phase**

```
// CODE FILE
let val1=10
let val2=5
function add(n1, n2){
    let total=n1+n2;
    return total;
}
let result1=add(val1, val2);
let result2=add(10,2);
```

### STEPS of HOW THIS CODE WILL GETS EXECUTED
1. Global Execution/ Global Envirnment -> allocate to this
2. Memory Phase -> sare variables ko ikatha kia jata h and rkha jata
    <pre>
     val1 -> undefined
     val2 -> undefined
     add -> function definition -> puri body and n1, n2 chale jaenge
     result1 -> undefined
     result2 -> undefined </pre>
    > ***Yeh first cycle hoga hi hoga***

1. Execution Phase
   <pre>
     val1 <- 10 // set values
     val2 <- 5
     add -> create a new Execution Context

              |-> created a new variable envirnment and execution thread 
                    MTLB ek naya box banega and wapas se 2 phases will get executed for add function
                        -> Memory Phase: 
                                val1 -> undefined
                                val2 -> undefined
                                total -> undefined

                        -> Execution Context
                                n1 <- 10
                                n2 <- 5
                                total <- 15 // after calculation
                                // return total to global executional Context
                    
                    // SARA KAAM KHTM HONE KE BAAD YEH EXECTUTION CONTEXT DELETE BHI HOGA
    
     result1 <- 15
     add -> create a new Execution Context (same wohi kaam hoga) (REPEATION HOGA)
  
            |-> created a new variable envirnment and execution thread
                    MTLB ek naya box banega and wapas se 2 phases will get executed for add function
                        -> Memory Phase: 
                                val1 -> undefined
                                val2 -> undefined
                                total -> undefined

                        -> Execution Context
                                n1 <- 10
                                n2 <- 5
                                total <- 15 // after calculation
                                // return total to global executional Context
                    
                    // SARA KAAM KHTM HONE KE BAAD YEH EXECTUTION CONTEXT DELETE BHI HOGA

     result2 <- 12
</pre>

## CALL STACKS
<pre>
|        |
|        |
| global |
</pre>

*Sbse pehle global jaega fir baki function aate rhenge, execute hote rhenge aur jate rhenge*

