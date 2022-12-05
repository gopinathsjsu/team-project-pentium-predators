## CMPE 202 Group Project: Pentium Predators

# Airport Management system

Team Members:

1. Lokesh Vaddi
2. Purna Sai Mahesh Goud Plagani
3. Shanmukha Yaswanth Reddy Kallam
4. Vamsidhar Reddy Menthem

## Tech Stack

- Frontend - React.js
- Backend - Node.js
- Database - Mongo DB
- Deployment - AWS

## Scrum Meeting (Bi-Weekly)

Monday

## [Sprint Sheet](https://docs.google.com/spreadsheets/d/1S7y5mOIVPWUpca2kdMLfR_vjscz66GQDV9vDMBHnYm8/edit?usp=sharing)

## [Project Board](https://github.com/orgs/gopinathsjsu/projects/52/views/1)

## [Project Journal](https://github.com/gopinathsjsu/team-project-pentium-predators/tree/main/Journals)

## [Project Contributions](https://github.com/gopinathsjsu/team-project-pentium-predators/blob/main/Journals/Contributions)

## XP values

###### Communication

- We are having Bi-weekly scrum calls over zoom to discuss the tasks and progress.
- We communicated important updates regarding the project over whatsapp and gmail.

###### Feedback

- We are constantly having mid-week meetings to check the work that was done and gave constructive feedback if required.
- We are also conducting Sprint restrospective at the end of the week to discuss what went well, what could be improved.

###### Respect

- We are conducting our meetings, discussion professionally having respect towards each other.
- We values everyone's opinion in the project and setup a meeting to discuss whenever there is a conflict of opinion.

## Architecture Diagram

![Architecture Diagram](https://github.com/gopinathsjsu/team-project-pentium-predators/blob/main/client/src/assets/Architecture_Diagram.png)

## Use case Diagram
![Use case Diagram](https://github.com/gopinathsjsu/team-project-pentium-predators/blob/main/client/src/assets/Use-Case_Diagram.jfif)

## Component Diagram
![Component Diagram](https://github.com/gopinathsjsu/team-project-pentium-predators/blob/main/client/src/assets/Component_Diagram.png)

## Deployment Diagram
![Deployment Diagram](https://github.com/gopinathsjsu/team-project-pentium-predators/blob/main/client/src/assets/Deployment%20Diagram.png)

## [WireFrames](https://github.com/gopinathsjsu/team-project-pentium-predators/tree/main/client/src/assets/wireframes)

## Database

Reasons to choose a NoSQL database

- There is no need to specify schema which allows flexibility.
- Using MySQL would result in a lot of sparse tables due to its rigid structure.
- Easily scalable
- Can handle huge amounts of data
  Reasons to choose MongoDB
- Flexible schema model, so it helps in changing data model easily.
- It is a document type database where we store data in JSON format which is easy to use and supported by many frameworks and languages.
- Since we are using Javascript-based framework for backend and mongodb also has javascript at its core, it becomes easier for backend application to interact with the database.

## Backend

Reasons to choose NodeJS and Express JS

- Javascript is widely used in frontend and NodeJS allows a developer to use Javascript for backend too which simplifies the communication.
- NodeJS allows the developer to start dveelopment process quickly with less effort.
- The Node Packet Manager(NPM) has a lot of libraries which can be installed and incorporated into the application easily. The developers need not reinvent the wheel by using the libraries.
- NodeJS uses single-threaded event loop thereby eleiminating the thread management which is favourable for microservices architecture.
- Express JS is one of the best Javascript frameworks for creating RESTful APIs.
- It is easier to deploy and develop nodejs application in AWS.

## Frontend

Reasons to choose React JS

- ReactJs has a modular structure which helps in develop, manage, update and scale application easily.
- The UI components can be broken down and be reused again and again.
- React JS makes testing and debugging easier due to clear defined structure.
- React Js's core feature which are server-side rendering and virtual DOM increase the speed of complex applications.
- ReactJS library supports a wide range of codebases and can be mixed into any existing infrastructure without shutting down the system.

## Deployment

Reasons to choose AWS

- AWS is the leading cloud provider in the world with a lot of services.
- AWS has pay-per-use pricing for most of its services.
- AWS has a simple UI for developers to use services without hassle.
- AWS offers world-class security that meets the highest standards.
- AWS has locations in 25 regions around the globe and a presence in 80 global availability zones.
  Reasons to choose EC2 with loadbalancer for code deployment
- AWS EC2 is inexpensive where there is free-tier available for select types of instances.
- Amazon EC2 offers a highly reliable environment.
- Using a load balancer automoatically scales instances up or down to distribute load accordinf to the traffic.

## Feature Set

###### Traveller

- Can see the Arrival/Departure Flights in 1hr/2hr/4hr
- Can see the Fligth Termial and Baggage collection Carousel

###### Airport Employee

- Can see the all flights arrival/departure flights
- Can assign the baggage Carousel to the arriving flights and prevent conflicting assignments
- Can Block terminal for maintenance

###### Airline Employee

- Can schedule the arrival and departure flights
- Can Update the flight schedule's
- Based on the flight schedule automatic terminal assignment without conflicting.

###### Admin

Add Airport and Airline Employees.
