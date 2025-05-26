/**Overview of JS Runtime Envionment
 * 
 * A JS runtime is an environment which provides all the necessary components in order to use
 * and run a JS program
 * 
 * 1. JS Engine
 * 2. WebAPI
 * 3. Callback and Microtask Queue
 * 4. Event Loop
 */

/**1. JS Engine
 * 
 * A JS Engine is simply a computer program, which executes JS code.
 * it will have stack and heap memory
 * 
 * Every browser has it's own JS engine
 * In Stack memory the JS code is executed one after another in the form of call stack
 * Heap is an unstructured memory pool which grows dynamically as needed during program execution.
 * 
 */

/**2. Web API
 * 
 * A web API contains everything related to DOM, timers, other APIs and even console.log()
 * which we use all the time
 */

/**3. Callback Queue and Micri=otask queue
 * 
 * The callback queue and microtask queue stores all the callbakc functions from events,
 * that are ready to be executed
 * 
 * Microtask Queue stores special callback functions which has higher priority than
 * the callback function waiting inside callback queue.
 */

/**4. Event Loop
 * 
 * The job of event loop is to push callback functions from callback and microtask queue to
 * the main thread for its execution.
 * 
 * 
 */


/**HIGH LEVEL LANGUAGE VS MACHINE CODE
 * 
 * High Level Language:- The program which we write using any programming language like
 * c ,c++, Java, JS etc. is called as High Level programming language. A high level language
 * is human readable and understandable.
 * 
 * Machine code:- The computer processor do not understand high level programming language.
 * It only understand 0s and 1s.
 * 
 * So, a program written in high level language must be converted to 0s and 1s in order to
 * execute them by the processor. This converted code is called as machine code.
 */

/**EXECUTION CONTEXT AND CALL STACK
 * 
 * An execution context is an abstract concept
 * An execution context is an environment inside which a piece of JS code get's executed.
 * It is like a container that stores all the necessary information about a function or a
 * piece of code like local variable, arguments etc.
 */

/**EXECUTION CONTEXT AND VARIABLE ENVIRONMENT
 * 
 * When a function is called, a new execution context is created for that function, where the function
 * code is executed. The execution context of the current executing function is always put on the top
 * of the calling function execution context
 * 
 * JS engine, creates an execution context for a function in two phases: Creation Phase and Execution Phase.
 * 
 * Creation Phase:- In this phase, JS engine has called a function. But its execution has not yet
 * started. In creation phase, JS engine does three things: Create a variable environment, Determines the scope chain, Determines the value of this keyword
 * 
 * CREATION PHASE: If we associate the execution context with an object, then we can say that in the creation
 * phase of execution context, JS engine performs following three tasks
 * 
 * 1. Creates Variable Object: Variable object is a property of execution context which contains
 * all the variables, fucntions and inner functions declaration information.
 * 
 * 2. Creates chain scope: Once the variable object gets created, the JS engine also initializes the scope
 * chain which is a list of all the varibales objects inside which the current functions exist. This also includes the
 * variable object of the global execution context. Scope chain also contains the current function variable obeject.
 * 
 * 3. Determines value of this keyword: After the scope chain, the JS engine initializes the 
 * value of this variable
 * 
 * EXECUTION PHASE:- Once the creation phase is complete and all these three properties are created
 * and initialized, then comes the execution phase.
 * 
 * In the execution phase, JS engines will again scan through the function to update the variable
 * object with the values of the variables and will execute the code. 
 * 
 * 
 * 
 * tl;dr
 * To summarize, in the creation of variable object:
 * 1. The argument object is created which contains all the argument that were passed into the function.
 * 2. The code is scanned for function declaration and for each function declaration, a property is created
 * in variable object pointing to the defination of that function. This means that all the function will be 
 * stored inside the variable object, even before the code starts executing.
 * 3. Lastly, code is scanned for varibale declaration and for each variable, a property is created in variable
 * object and set to undefined if it is creating using var keyword. Otherwise, it will be assigned with
 * uninitialized if variable is created using let or const.
 */

/**HOISTING IN JS AND TEMPORAL DEAD ZONE(TDZ)
 * 
 *  
 * 
 * Temporal Dead Zone:- A zone between the start of the scope of variable and where it 
 * is declared/initialized.
 */




