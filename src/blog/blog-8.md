---
title: "Double the Fun"
date: "2020-11-06"
tags: 
    -blog
---

A design pattern gives a template to solve a general design problem in a specific context. And while there are many design patterns, the Visitor and Strategy patterns are two similar behavioral patterns. Visitor simulates double dispatch, which is often confused with the Strategy pattern.

<br />

###### First: what is double dispatch?
Let’s actually start with single dispatch. This is essentially polymorphism—we choose the implementation of a method based on what object type it is. So double dispatch means that we are choosing a method based on not one, but two types of objects—the object calling the method, and the object passed as a parameter to the method. Most languages support single dispatch (choosing one method implementation) but not double dispatch, and this is where the Visitor pattern comes in.

<br />

###### The Visitor design pattern
The Visitor pattern simulates double dispatch. Technically, it allows you to define operations without changing the class you’re operating on. By doing this, it separates the algorithm from the object. We don’t know the object type that we’re working with, so we have to use dynamic binding. Dynamic binding simply means that we have to link the method implementation at runtime (since we don’t know the object type). As discussed above, it’s fine to do this with one object at a time, but not two. Therefore, by defining the operations separately from the class, we are mimicking double dispatch.

<br />

###### The Strategy design pattern
The Strategy pattern defines a family of algorithms. Each algorithm (or strategy) is separated into its own class, and these are all interchangeable. This means that when we want to change or add new strategies, we won’t affect the existing ones. Much like the Visitor pattern, we’re separating the different parts of our system. Also similar to Visitor, at runtime the client chooses the correct strategy to use. However, the key difference here is that we’re choosing among different algorithms, not different implementations based on the object type we’re working with.

<br />

###### A direct comparison
The Visitor pattern follows a many:many relationship, while the Strategy pattern follows a one:many relationship. This is why we simulate double dispatch with the Visitor pattern; we aren’t sure what object types we’ll be operating on. On the other hand, the Strategy pattern assumes that we know what object type we’re working with. Therefore, we have all of the different algorithms we can use, but they’re all applicable to only the one, known object type. So while we’re choosing which implementation we’re using in both design patterns, we’re doing it for different reasons.

<br />

Sources: 

<ul>
    <li>
        <a href="https://refactoring.guru/design-patterns/visitor-double-dispatch">
            Visitor and Double Dispatch
        </a>
    </li>
    <li>
        <a href="https://refactoring.guru/design-patterns/strategy">
            Strategy
        </a>
    </li>
    <li>
        <a href="https://www.infoworld.com/article/2078675/design-patterns-the-big-picture-part-2-gang-of-four-classics-revisited.html">
            Introduction to design patterns, Part 2: Gang-of-four classics revisited
        </a>
    </li>
    <li>
        <a href="https://stackoverflow.com/questions/8665295/what-is-the-difference-between-strategy-pattern-and-visitor-pattern">
            What is the difference between Strategy pattern and Visitor Pattern?
        </a>
    </li>
</ul>
