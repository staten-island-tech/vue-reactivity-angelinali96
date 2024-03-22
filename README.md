# What This Is
Site to compare times of buses and trains at different stops.
## how to use
1. select your comparison type in the navigation menu
2. select bus/train route
3. select direction (for buses) and stop
- you can refresh the time with the refresh button
- stop selection auto collapses after the first time, but you can reopen it to select a different stop
## Current Functionality
- Compare two buses (bus vs bus tab).
- compare two trains (train vs train tab).
- compare a train and a bus (train vs bus tab). 
## To Be Added Functionality
- favorites list of stops saved to local storage
- loading animations
- stats on wait time in diff regions (?)
- idk maybe other stuff if this gets carried into adv cs? 咱拭目以待
- maybe lirr https://traintime.mta.info/main?
## Current Issues
- css is mid (i won't be fixing that 😁)
- some fetch is executed on load when it probably shouldnt
- deployed version on netlify will load routerview tab, but if the same page is reloaded it will display a site not found
  - this bug is probably netlify's fault tho this happened on another project 🗿