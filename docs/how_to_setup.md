---
id: how_to_setup
title: How to Setup
sidebar_label: How to Setup
---

GEO Smart has three part system which is

1. Back End use Golang and named with GEO Smart System
2. Front End use Angular and named with GEO Smart Map
3. Mobile use Flutter and Named with GEO Smart App

## Back End

GEO Smart use Back End for business logic and communicating with database,
such as Tile38 as Geospatial Database, and connecting two application,
betwen Front End Application and Mobile Aplication, follow instruction below to
setup Back End System

1. Make sure [Golang](https://golang.org/) have been installed
2. Download and add [Tile38](https://github.com/tidwall/tile38/releases) to your path
3. Run Tile38

```shell
tile38-server
```

4. Clone [GEO Smart System](https://github.com/supanadit/geosmartsystem)
```shell
go get -u -v github.com/supanadit/geosmartsystem
```

5. Open terminal and change directory

```shell
cd $GOPATH/src/github.com/supanadit/geosmartsystem
```

6. Run GEO Smart System

```shell
go run main.go
```

## Front End

GEO Smart use Front End for showing location and movement of user which is used GEO Smart App

1. Make sure [Node JS](https://nodejs.org/) have been installed
2. Install [Angular CLI](https://angular.io) by, or if already installed, skip this step
```shell
npm install -g @angular/cli
```

3. Clone [GEO Smart Map](https://github.com/supanadit/geosmartmap)
```shell
git clone https://github.com/supanadit/geosmartmap.git
```

4. Change directory to cloned repository folder
5. Installing dependencies

```shell
npm install
```

5. Make sure you have running [Geo Smart System](#back-end)

## Mobile App

GEO Smart use Mobile App for sending current location

1. Make sure [Flutter](https://flutter.dev/) have been installed
2. Clone [Geo Smart App](https://github.com/supanadit/geosmartapp)

```shell
git clone https://github.com/supanadit/geosmartapp.git
```

3. Go to cloned repository
4. Installing dependencies

```shell
flutter pub get
```

5. Run Application, and make sure android or ios device connected
```shell
flutter run
```