# AWS Codepipeine Flow Demo

- Serverless
- Github
- AWS
  - Codepipline
  - Codebuild
  - SNS
  - SQS
  - Lambda
  - Secret Manager
- Notification Hook
  - Telegram

# Before Deployment

- Create deployment bucket in S3
  - `${stage}-demo-aws-codepipeline-cicd-pipeline-deployment`
- Create codeStar connection in aws
- Create telegram bot
- Create .env file, reference to `.env.sample`, replace with your values

# Deployment

1. create the pipeline stack

```npm
npm run deploy:pipeline
```

2. make changes to the repo and push to remote
3. receive the approval message and approval build
4. done
