---
title: "Testing, 1, 2, 3"
date: "2020-11-10"
tags: 
    -blog
---

Many Windows users may be familiar with the Blue Screen of Death (BSoD). In case you haven’t happened upon it, a Windows computer gives you this unresponsive screen that (sometimes) includes information on why the computer crashed in the first place.

<br />

<img src="https://oliviavoler.com/wp-content/uploads/2020/11/bsod-1536x1152.jpg">

<br />

While it’s slightly annoying to have this happen while you’re working on your computer, imagine this happening when trying to give a presentation at school or work. Even worse—during Bill Gates’s demo of Windows 98 before its release, the computer crashed and defaulted to the BSoD. He quipped, “I guess we still have some bugs to work out”.

Obviously this isn’t something that you want happening, especially not during a demo. So, how can make sure a product is compatible with the target environment?

<br />

###### Testing
There are many types of testing that have to be done before a product can be deployed. This can be simplified into three main categories: functional, non-functional, and regression testing. These ensure that the code works correctly, is reliable and secure, and runs correctly even after changes are made. The four main testing strategies are unit, integration, validation, and system testing.

<ul>
    <li>Unit testing: tests the functionality of specific sections of code</li>
    <li>Integration testing: verifies that interfaces between components work together</li>
    <li>Validation testing: ensures that the correct software is being built</li>
    <li>System testing: tests the complete system and software as a whole</li>
</ul>

Together, these four strategies encompass most of the problems that can occur.

<br />

###### Compatibility

Something that is really interesting in regards to testing is the absence of errors fallacy. This states that it’s possible to have code that is error free, but unusable. For example, you could be testing for the wrong requirements, or testing in a different environment than the one the product will be deployed in. For example, what if an entire team of developers work and test their code on Windows, but the code will be deployed on a Mac? It’s possible, then, that their code won’t work in the target environment—a Mac.

Another example of this is a team of developers working on the latest version of whatever the target environment is. However, it’s possible that many of the users won’t have updated their environment to the version the developers are using. This could lead to a myriad of problems, such as the code using features that are  only available on the newest version.

Therefore, it’s very important to make sure that the testing environment matches the target environment, ensuring that the code will definitely be compatible with the target environment. This is an important part of testing and will prevent errors after deployment.

<br />

In the launch of Windows 98, the BSoD gave an “exception 0E” error, which occurs when the machine tries to access memory that is missing or damaged. This implies that there was an issue with the driver they were trying to use in the demonstration. In this case, testing compatibility could have been as simple as testing the driver ahead of time. In other cases, it’s not so simple. Either way, it’s important to make sure that your product is compatible with the target environment before deployment!

<br />

Sources:

<ul>
    <li>
        <a href="https://www.latimes.com/archives/la-xpm-1998-apr-21-fi-41325-story.html">
            Gates Feels Windows Pains as Program Crashes During Demo
        </a>
    </li>
    <li>
        <a href="https://www.guru99.com/software-testing-introduction-importance.html">
            What is Software Testing?
        </a>
    </li>
    <li>
        <a href="https://en.wikibooks.org/wiki/Introduction_to_Software_Engineering/Testing#Functional_vs_non-functional_testing">
            Introduction to Software Engineering/Testing
        </a>
    </li>
    <li>
        <a href="https://www.quora.com/Why-did-Windows-98-crash-during-the-presentation">
            Why did Windows 98 crash during the presentation?
        </a>
    </li>
    <li>
        <a href="http://www.aumha.org/a/kbefe.php">
            Fatal Exception Errors
        </a>
    </li>
</ul>