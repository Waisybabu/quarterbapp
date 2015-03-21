# Quarterbapp
## Relevance-aware Sports App

### On This Repo

This public repo holds the code for Quarterbapp's front-end, made using Ionic Framework.

### The Problem

The current crop of sports apps are pretty rigid in nature. In order to make the app useful, you need to rigidly select your list of teams. These apps then provide news, and score updates for those teams, and those teams only. 

So, you get two news feeds with these apps: "My Feed" for news / updates regarding your selected teams, and "All News" for news / updates for *every other team*. It's not elegant at all.

### Our Solution

A relevancy calculation algorithm, and a sports app centered around it that delivers relevant news, score updates based on favorite team.

It is currently targeted at NFL, but can be tweaked to support NBA, MLB, and NHL.

### User Workflow

* User selects their favorite team
* Relevancy calculation algorithm creates a list of teams relevant to your favorite team, based on several different parameters.
* Quarterbapp pulls news, and score updates of your favorite team plus relevant teams.

The relevancy calculation algorithm updates relevant teams on a regular basis.
