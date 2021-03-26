---
title: "Forking: Behind the Scenes of OSS"
date: "2020-08-28"
tags: 
    -blog
---

My first reaction when I think of Open Source Software (OSS) is that it’s a bunch of people collaborating to create free software. That’s pretty cool! Everyone is a team, they work together (sometimes without being paid), and come up with great software with source code that is available to everyone.

News flash: this isn’t always the case. Let’s compare it to Disney. Dubbed “the happiest place on Earth”, Disney is known for its great customer service and parks full of smiling children. However, there’s actually a lot going on behind the scenes that most people don’t know about. Take it from me: I got the chance to go backstage at Disney once, and it was quite disturbing to see Mickey Mouse taking off his head. Tangent aside, OSS projects can be similar to this: they may not have rides or characters, but there is a lot going on behind the scenes that people don’t know about. A prime example of this is forking.

First, a little background. There are two types of forking: developmental forking, and hard forking. A developmental fork is when someone creates a copy of the code so that they can work on a new feature. This is fine and perfectly normal. However, a hard fork is when someone essentially duplicates the project to work on it on their own. Because these projects are open source, anyone has access to the code and can modify it as they want. 

Why does forking happen? It simply starts with a disagreement. When a team disagrees on something, the first step is to just communicate and talk about it. Then comes compromise, and later on, if the issue still isn’t solved, voting. Throughout this entire process, there’s always the looming threat that someone could fork the project and take it their own way. There’s nothing stopping them from copying the code and not having to give up their opinion. Since teams want to avoid this, they tend to compromise and not take it to voting unless absolutely necessary. By voting, the team is being divided into sides, which may lead the “losing” side to fork the project. 

There are some reasons that forking doesn’t happen other than compromise. There’s a lot of work that goes into forking a project, which begins with having to divide any project assets and reestablish a new community. Then there is the problem that there is a lot of copied code out on the internet. So the opportunity cost to fork the project is sometimes greater than compromising, which prevents forking unless it’s really necessary.

That’s not to say that it doesn’t happen! Sometimes, forking is done to create multiple versions of the software. OSS is all about letting the user have freedom, so giving them multiple versions tailored to their needs exemplifies the core values of OSS. And sometimes, forking just happens because it’s necessary, or someone thinks they can do it better. 

Some well-known examples of forked software are:

<li>BSD: forked into FreeBSD, NetBSD, and OpenBSD</li>
<li>Android OS: forked by Amazon and Nokia</li>
<li>Unix: forked by Apple</li>

<br />

So, there’s a lot more to OSS than first meets the eye. I could keep going on about the social dynamics of OSS teams, but that’s a topic for another time. However, it’s important to remember that OSS teams are more than just a group of developers outputting code. They can be made up of people with vastly different backgrounds, and can range from a user to a collaborator to a contributor (again, a whole topic for some other time). OSS teams are made up of real people, and they have disagreements, too. They just have the option to fork a project and run the other direction if something doesn’t go their way.