<div align="center">
  <h1>🟨 How JavaScript Works Internally</h1>
</div>

This repository provides a deep dive into how JavaScript works under the hood. It includes detailed diagrams (created using tldraw) and code examples.

## Table of Contents
[How js work pdf ](./HOW%20JAVASCRIPT%20WORK%20INTERNALLY.pdf)

1. [High level overview of JavaScript](./Main/)
2. [JavaScript Engine](./javascript-engine/)
3. [Components of JavaScript Engine](./javascript-engine/)
4. [Compilation and Interpreter Working Process](./javascript-engine/)
5. [Call Stack Deep Dive](./call-stack/)
    1. [Global Execution Context](./execution-context/)
        1. Variable Environment
        2. [Scope Chain](./scope-chain/)
        3. [This Keyword](./this-keyword/)
    2. [Execution Context](./execution-context/)
6. Deep dive inside [Execution Context](./execution-context/)
    1. Variable Environment 
    2. [Scope Chain](./scope-chain/)
        1. Type Scope
            1. Global Scope 
            2. Function Scope 
            3. Block Scope
            
            *Only variable lookup scope chain is allowed*
            
    3. [This Keywords](./this-keyword/)
        1. `this` in normal function calling 
        2. `this` in methods calling 
        3. `this` in arrow function 
        4. `this` in event listener 
        
        *`this` never points to itself or the variable environment*
        
        1. `call()`
        2. `apply()`
        3. `bind()`
    
    1. Arguments keywords in Execution Context 
    2. [Memory Management](./memory-management/) Life Cycle
        1. Memory Allocation 
            1. [Call Stack](./call-stack/)
            2. Heap Memory 
    3. Shallow copy and Deep copy 
    4. Garbage Collection 
        1. Mark and Sweep algorithms
7. [Interview Questions](./interview-questions/interview%20questions%20ask%20.md)

## Resources

- [Event Loop](./event-loop/)
- [Hoisting](./hoisting/)
- [Main Diagram](./Main/)
- [JavaScript Engine](./javascript-engine/)
- [Call Stack](./call-stack/)
- [Execution Context](./execution-context/)
- [Scope Chain](./scope-chain/)
- [This Keyword](./this-keyword/)
- [Memory Management](./memory-management/)
- [Interview Questions](./interview-questions/interview%20questions%20ask%20.md)
