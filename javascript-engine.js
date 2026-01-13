//  Javascript Engine :  
// This javascript engine is repsonsible for executing the javascript code  
//  every browser has it's own js engine : 
// chrome : v8  
// Edge  : 
// sfari : javascriptCore ( js Engine )
// brave: 

// all engine has need to follow the a standered : ( ecma script )


// main components of the js engine 
1. callstack(where out code executed)
2. heap memeory: all the reference type memeory allocation happend inside this
3. web api(provided by the browser): this is the not the  part of the javascript
1. fetch
2. timmer
3. dom api etc
4. storage api(local, session, indexdb, cookies, device hardwere api, web worker is the also the part of the web api)
4. callback queue: (all the callback queue handle inside this)
1. Macrotask  queue
2. microtask  queue
5. event loop: this always watch our callstack when the callstack every and our callback is completed this pic from queue and assign to the callstack 

what happend when we wrote the code:
1. parsing:the all code parse:means it converted into the ast(abstract syntax tree)
2. compilation: of the Ast(js use jit) just in time compilation: (no portable * executable file created)
3. execution phase where our code executd
4. opitmization: every time code optimize in the loop 
