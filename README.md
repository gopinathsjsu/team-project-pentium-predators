## CMPE 202 Group Project: Airport Management system
### Problem Statement :
Implement an end2end Airport Management system that can be configured for a given airport (Web interface or Mobile app interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights

### Components :
APIs - input and output of API should be in JSON and should include error handling and validation of inputs
APIs will be demonstrated using a Web/mobile UI
UI is accessed by Passengers (Customers) and Airline employees and Airport employees (3 roles)

### APIs functionality:
- Retrieve Flight arrivals and departures and Gate assignments - based on time durations (next hour, next 2 hours, next 4 hours) - this data will be displayed in multiple monitors throughout the airport - viewable by all users
- Implement a Random Gate assignment for Arriving and Departing flights - designed to prevent conflicting assignments - allow for an hour for each flight to be at the gate (for arrivals and for departures)

#### Airport employees :
- Enable or disable one or more gates for maintenance
- Assign Baggage Carousel number to Arriving flights - the system should prevent conflicting assignments
- Baggage Claim information will be displayed in multiple monitors in the Arrival area
#### Airline employees:
- Add or update the schedule of flights belonging to their airline relevant to that airport (arrivals and departures)
