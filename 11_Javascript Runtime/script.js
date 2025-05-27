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
 * Temporal Dead Zone:- A zone between the start of the scope of variable and where it 
 * is declared/initialized.
 */

/**What is scope
 * 
 * A scope controls how JS variables and functions are organized and accessed by JS engine.
 * A scope tells, where a JS variable or function is created and where they can be accessed.
 * 
 * 1.Global scope 2.Function Scope 3.Block scope
 * 
 * NOTE: A variable declared using var keyword will always have function scope, even if
 * the variable is declared inside a code block
 * 
 * Lexical Scope:- Lexical scope means that the way the variables and functions are organized
 * and accessed is entirely controlled by the placement of function and of code blocks inside
 * the program code.
 * 
 * If a function or code block is sitting lexically within another scope, then that function
 * or code block will have access to all variables and functions declared inside its parent scope.
 * 
 */


/**Scope Chain and Lexical Environment
 * 
 * Lexical Environment:- A lexical environment is a structure that holds identifies-variable
 * mapping. Here, identifier refers to the name of the variable/function, and the variable is
 * a reference to an actual object.
 * 
 * During the creation phase, a lexical environment gets created for the scope of the current
 * function. In creation phase, lexical environment is identical to variable object.
 * 
 * A new scope gets created for each lexical environment, but only when the code in that lexcial
 * environment is executed. The lexical environment also has a reference to its outerlexical environment
 * 
 * Scope Chain:- A scope chain is a hierarchical structure that JS uses to search for variables
 * and functions. It's essentially a linked list of accessible scopes, from the most immetdiate
 * context to the global context.
 * 
 * When is the Scope Chain created?
 * The scope chain for a function is created during the creation phase of that function's execution
 * context. This happens before the function is actually executed.
 * 
 * How is the scope chain created?
 * Lexical environment:- Each function has its own lexical environment, which contains an
 * environment record and a reference to the outer lexical environment.
 * 
 * Outer Reference:- The outer reference in a lexical environment points to the parent scope's
 * lexical environment.
 * 
 * Scope chain formation:- When a function is executed, its lexical environment becomes the 
 * starting point of the scope chain. THe outer reference in this environment points to the
 * next scope in the chain, and so on, until the global scope is reached.
 * 
 */

/**Value of this Variable
 * 
 * The value of "this" keyword in JS is determined dynamically at runtime based on the calling
 * context of the function. The value of this is determined when the function is called, not
 * when it's defined.
 * 
 * During the creation phase of execution context, an initial value is assigned to "this" variable
 * which is determined by how the function us called (global, method, constructor etc). However,
 * the initial value is just a placeholder. This placeholder is necessary because the JS engine needs
 * to allocate memory fot the "this" variable withing the execution context before the function
 * starts running.
 * 
 * The actual value of "this" is determined during the execution phase, based on the calling context at
 * the time the function is invoked. This means the value of this can change within the same function
 * depending on how it's called.
 */
