---
title: "The Internet is Like an Onion"
date: "2020-10-09"
tags: 
    -blog
---

In the wise words of Shrek, “The internet is like onions. Onions have layers. The internet has layers.” (I’ve paraphrased this slightly). To put it slightly more technically, the way that network devices connect to the internet is through TCP/IP model, which is a layered architecture system. We’ll talk about how TCP/IP is structured, and how network devices use it to communicate.

###### The TCP/IP Model
TCP/IP, or Transmission Control Protocol/Internet Protocol, is a model used to reliably transmit data, even on an unreliable network. It relies on a layered architecture style. Layered architectures are good because they support designs with increasing levels of abstraction; complex problems can be divided into smaller, easier-to-solve parts. They can also be implemented such that each layer can only communicate with the layer above and below it, which means the inner layers are protected and can’t be accessed from the outside.

TCP/IP follows the structure of layered architecture: it divides its functions into four layers. Then, the layers collaborate with each other to transmit data from layer to layer. 

<img src="https://www.guru99.com/images/1/093019_0615_TCPIPModelW1.png">
<p>Image from <a href="https://www.guru99.com/tcp-ip-model.html">guru99</a></p>

<br />

###### How do the layers communicate?
The **application layer** communicates and exchanges data with applications (makes sense!). For example, it provides services like email, file transfer, and logins to a remote host. The protocols used here include HTTP, FTP, POP3, SMTP, and SNMP.

The **transport layer** is what makes sure that the data is transmitted reliably. It handles the communication between hosts at each end, and determines how much and how fast data should be sent. Most importantly, the transport layer makes sure the data is sent to the right place and without any errors. This layer uses TCP and UDP protocols.

The **network layer**, also called the internet layer, deals with packets. It connects networks and transmits packets from one network to another. The protocols used by the network layer are IP and ICMP.

The **physical layer**, also known as the network interface, network access, or data link layer, defines details of how the data should physically be sent between two devices on the same network. It identifies the network components that interconnect hosts in the network. The protocols used here are Ethernet (for LANs) and ARP.

<br />

Layered systems are known to be hard to implement—it is difficult to structure the layers and can be difficult to find the “right” levels of abstraction. Likewise, the TCP/IP model is complicated to set up and manage. It also doesn’t guarantee the delivery of packets. However, it supports many different protocols and works independently of the operating system. The biggest benefit of the TCP/IP model is that it can establish a connection between different types of computers.

So even though cutting onions or setting up TCP/IP may make you cry, they are both still useful. The layers in the TCP/IP model make it able to establish connections between computers and reliably transmit data between them.

<br />

Sources: 
<ul>
    <li>
        <a href="https://www.guru99.com/tcp-ip-model.html">
            TCP/IP Model: What is TCP IP Stack? Protocol Layers, Advantages
        </a>
    </li>
    <li>    
        <a href="https://searchnetworking.techtarget.com/definition/TCP-IP">
            TCP/IP (Transmission Control Protocol/Internet Protocol)
        </a>
    </li>
</ul>