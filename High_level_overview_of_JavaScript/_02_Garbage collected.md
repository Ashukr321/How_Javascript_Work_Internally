## Garbage collection ( gc ) : 
  mark and sweep algorithm : 
- Garbage Collection is the process of automatically finding and removing memory that is no longer needed.


```bash

let user = {
  name: "Ashu"
};

user = null;

```

```bash
{
  name: "Ashu"
};


The object is now unreachable.
Garbage Collector will remove it from memory
```

```
 memory life cycle :
  allocation 
  use 
  Deallocation 
```