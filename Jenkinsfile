pipeline {
    agent any

     environment {
        AWS_REGION = 'us-east-1'
        AWS_ACCOUNT_ID = '314146332315'
        REPO_NAME = 'BiteBuddy'
        IMAGE_TAG = 'latest'
        SSH_PRIVATE_KEY_PATH = "/var/jenkins_home/.ssh/jenkins-key.pem"
        SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"
        
        // Define IPs for both environments
        DEV_SERVER_IP = "18.218.76.240"
        QA_SERVER_IP = "10.0.2.242"
    }

    stages {
         stage('Checkout - Clone Repository') {
             steps {
                 git branch: 'main', credentialsId: 'github_cred', url: 'https://github.com/kuldeepsaindane/BiteBuddy.git'
             }
         }

        stage('Checking the Directory'){
            steps {
                sh 'pwd'
                sh 'ls -l'
                sh 'ls ${WORKSPACE}'
                sh 'sleep 5'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'echo Build Docker Images'
                // sh 'sudo rm -rf /home/ubuntu/myapp'
                // sh 'cp -r ${WORKSPACE}/ /home/ubuntu/myapp/'
                sh 'sleep 5'
           }
        }

        stage('Tag & Push Image to ECR') {
            steps {
                //echo 'Tag'
                //echo 'Push Image to ECR'
               // sh 'echo Tag & Push Image to ECR'
               // sh 'npm install'
               sh 'sleep 5'
            }
        }

        stage('Set Deploy Server') {
            steps {
                sh 'echo Set Deploy Server...'
               // sh 'npm run build'
               sh 'sleep 1'
            }
        }

        stage('Remote Deploy to EC2') {
            steps {
                sh "echo Remote Deploy to EC2 "
                // sh 'sudo rm -rf /var/www/myapp'
                // sh 'sudo cp -r ${WORKSPACE}/dist/ /var/www/myapp/'
                sh 'sleep 5'
            }
        }
    }

    post {
        success {
            // Send Slack message for Dev Deployment Success
            slackSend channel: 'team2', 
            message: """✅ *Build SUCCESS:* Deployement DEV Successfull!
                    *Environment:* DEV
                    *Job:* ${env.JOB_NAME}
                    *Status:* SUCCESS 
                    *Access at:* http:/18.218.76.240:3000 """
            
            // Send Slack message for QA Deployment Success
             //slackSend channel: 'team2', 
             //message: """✅ *Build SUCCESS:* Deployment to QA successful!
             //        *Environment:* QA
             //        *Job:* ${env.JOB_NAME}
             //        *Status:* SUCCESS """
        }
        failure {
            slackSend channel: 'team2',
            message: """❌ *Build FAILED:* Deployment to DEV Failed! 
                    *Environment:* DEV
                    *Job:* ${env.JOB_NAME}
                    *Status:* FAILURE """

            // Send Slack message for QA Deployment Failure
            slackSend channel: 'team2',
            message: """❌ *Build FAILED:* Deployment to QA failed! 
                    *Environment:* QA
                    *Job:* ${env.JOB_NAME}
                    *Status:* FAILURE """        
        }
    }

    // //✅ Slack Notifications
    // post {
    //     success {
    //         script {
    //             sh """
    //             curl -X POST -H 'Content-type: application/json' --data '{
    //                 "text": "✅ *Build SUCCESS* 🚀\\n*Environment:* ${params.DEPLOY_ENV} \\n*Job:* ${JOB_NAME} \\n*Build Number:* ${BUILD_NUMBER} \\n*Status:* SUCCESS ✅\\n*Server:* http://${EC2_PUBLIC_IP}/"
    //             }' ${SLACK_WEBHOOK_URL}
    //             """
    //         }
    //     }
    //     failure {
    //         script {
    //             sh """
    //             curl -X POST -H 'Content-type: application/json' --data '{
    //                 "text": "❌ *Build FAILED* ❗\\n*Environment:* ${params.DEPLOY_ENV} \\n*Job:* ${JOB_NAME} \\n*Build Number:* ${BUILD_NUMBER} \\n*Status:* FAILED ❌\\nCheck Jenkins Logs for more details."
    //             }' ${SLACK_WEBHOOK_URL}
    //             """
    //         }
    //     }
    // }



}
