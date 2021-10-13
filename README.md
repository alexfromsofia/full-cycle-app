# full-cycle-app

This repo aims to implement the full cycle of a front end application. From code to ssr, through docker image, CI/CD and deployment.

Web Development Task
Requirements 1
Tasks 1
ReactJS with SSR 1 Build Docker Image 2 CI/CD basics with Jenkins 2 CI/CD enrichment 2
We need to implement a simple ReactJS application that should contains at least three pages. This is a training project and we are going to try to build things by ourselves, the idea is to learn as much as possible how things work and not use frameworks like NextJS
Requirements

● The front end application should be based on the latest ReactJS library

● In order to provide a good user experience and to optimize our website for SEO we
should use Server Side Rendering with express

● We want to be a modern company and we want to do a CI/CD so we should build a
pipeline that will help us with that task. As a tool, you should use Jenkins

● In order to provide a good user experience, we need to integrate with CDN provide
that will serve our assets in a location that is closed to the user

● Because this is a FE project we need to integrate with an external CMS system like
Contentful which is going to provide us the data with GraphQL API
Tasks
ReactJS with SSR
As a part of this task, we should build a ReactJS application that contains three different
pages and an SSR rendering with express as technology.
AC:

1. The app can change the pages without refresh (SPA application)
2. All props are working correctly you can keep the state in the react component
3. The SSR part should be build run in every OS system

Build Docker Image
As a part of this task, we should build our ReactJS application with SSR in docker image and publish it to docker hub.
AC:

1. We should use the latest NodeJS version
2. The image should be small and not contain not needed dependencies
3. Everyone should be able to run that docker image
4. In the README file, I should file enough information about how to start the docker
   container
   CI/CD basics with Jenkins
   As a part of this task, you need to start Jenkins server in the docker container and build the docker image and publish it docker hub.
5. Jenkins that runs inside the docker image
6. The pipeline file should be part of the project
7. As an output of the pipeline, the image should be in the docker hub
   CI/CD enrichment
   In the previous task we build a small pipeline, now is the task to enrich that with more functionality. We want to have the following steps checkout, build (build the app and check for some errors), lint (check the formation of the project), unit test (run all units test, and sam the result of the execution), build the docker image, publish the artifact (use semantic versioning https://semver.org/ )
   AC:
8. Configure the ReactJS application to have the lint format check
9. Configure the ReactJs application to execute unit test and create one
10. Add the following steps in the pipeline
