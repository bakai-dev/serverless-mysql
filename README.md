# Base Serverless Framework Template
```
https://serverless-stack.com/chapters/customize-the-serverless-iam-policy.html#:~:text=A%20basic%20serverless%20project%20needs,to%20store%20Lambda%20execution%20logs

A basic serverless project needs permissions to the following AWS services:

CloudFormation to create change set and update stack
S3 to upload and store serverless artifacts and Lambda source code
CloudWatch Logs to store Lambda execution logs
IAM to manage policies for the Lambda IAM Role
API Gateway to manage API endpoints
Lambda to manage Lambda functions
EC2 to execute Lambda in VPC
CloudWatch Events to manage CloudWatch event triggers

~/workspace/aws aws configure
AWS Access Key ID [None]: ID
AWS Secret Access Key [None]: Key
Default region name [None]: eu-west-1
Default output format [None]: yaml


https://github.com/arielweinberger/sls-base

sls deploy --stage dev
```

## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```

You are ready to go!
