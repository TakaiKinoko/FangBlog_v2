---
title: "Using OCaml for Scientific Computing -- 1. Setup & Conventions"
category: "OCaml"
cover: camel.jpg
author: Fang 
---

# Intro

## Use Owl in Toplevel
load Owl in utop with the following commands. owl-top is Owl’s toplevel library which will automatically load several related libraries (including owl-zoo, owl-base, and owl core library) to set up a complete numerical environment.

```ocaml
#require "owl-top";;
open Owl;;
```

## Use Owl in Notebook

```ocaml
opam install jupyter
jupyter kernelspec install --name ocaml-jupyter "$(opam config var share)/jupyter"
```
For the above, if installing conf-zmq is a problem, try `brew install zeromq`.

Once notebook is opened, run the following OCaml code in the first input field to load Owl environment:
```ocaml
#use "topfind";;
#require "owl-top, jupyter.notebook";;
```

Alternatively, just open a new notebook of ocaml default.

If jupyter couldn't find "topfind", consider editing `~/.ocamlinit` to automatically load path ([see here](https://stackoverflow.com/a/28749356)), then do reinitialize opam with `opam init`

# Conventions

## Pure vs. Impure

### Pure Functions 
(a.k.a immutable functions) refer to those which do not modify the passed in variables but always return a new one as result.

### Impure functions 
(a.k.a mutable functions) refer to those which modifies the passed-in variables in place.
* -: make it harder to reason the correctness of the code.
* +: help avoid expensive memory allocation and deallocation operations, this can significantly improve the runtime performance of a numerical application especially when large ndarrays and matrices involved.

### Middel Ground

Can we write functional code and achieve memory efficiency at the same time? Yes.
Use **lazy evaluation** with Owl's computation graph, where Owl takes care of allocating and managing memory.

### Notation

Many pure functions in Ndarray module have their corresponding impure version.

* pure: `Arr.sin;;`

* impure: `Arr.sin_;;`

#### example

* `Arr.add_ x y`

* signature: `val Arr.add_ : ?out:Arr.arr -> Arr.arr -> Arr.arr -> unit`

* the output can be specified by an optional _out_ parameter. If out is missing in the inputs, then Owl will try to use first operand (i.e. x) to store the final result. Because the binary operators in Owl support broadcasting operations by default, this further indicates when using impure functions every dimension of the first argument x must not be smaller than that of the second argument y. In other words, impure function only allows broadcasting smaller y onto x which is big enough to accomodate the result.


### Shorthand operators

```txt
==============    ==============    ==============
Function Name     Pure              Impure
==============    ==============    ==============
add               `+`               `+=`
sub               `-`               `-=`
mul               `*`               `*=`
div               `/`               `/=`
add_scalar        `+$`              `+$=`
sub_scalar        `-$`              `-$=`
mul_scalar        `*$`              `*$=`
div_scalar        `/$`              `/$=`
==============    ==============    ==============
```

* `Arr.(x + y)` returns the result in a new ndarray
* `Arr.(x += y)` adds up x and y and saves the result into x.


## Ndarray vs. Scalar

There are three types of ndarray operations:
* map
* scan 
* reduce

### reduction operations
Such as `Arr.sum`, `Arr.prod`, `Arr.min`, `Arr.mean`, `Arr.std`, and etc. 

All the reduction functions in Owl has a name parameter called __axis__. When you apply these reduction operations on a multi-dimensional array, there are two possible cases:

* if axis is explicitly specified, then Owl reduces along the specified axis

* if axis is not specified, then Owl flattens the ndarray into a vector first and reduce all the elements along the axis 0

example:
```ocaml
let x = Arr.sequential [|3;3;3|];;
let a = Arr.sum ~axis:1 x;;
let b = Arr.sum x;;
```

### retrieve result
Use __get__ function:
```ocaml
let c = Arr.get b [|0|] in c +. 10.;;
```
signature of __get__:
```ocaml
Arr.arr -> int array -> float = <fun>
```

### two versions
Every reduction operation has two versions:

* one allows you to reduce along the specified axis, or reduce all the elements, but always returns an **ndarray**;
    ```txt
    Arr.sum;;
    Arr.min;;
    Arr.prod;;
    Arr.mean;;
    Arr.std;;
    ```
* one only reduces all the elements and always returns a **scalar** value.
    ```txt
    Arr.sum';;
    Arr.min';;
    Arr.prod';;
    Arr.mean';;
    Arr.std';;
    ```
Technically, `Arr.sum'` is equivalent to the following code:
```ocaml
let sum' x =
  let y = Arr.sum x in
  Arr.get y [|0|]
```