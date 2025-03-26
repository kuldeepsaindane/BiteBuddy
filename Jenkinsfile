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
        // stage('Clone Repository') {
        //     steps {
        //         git branch: 'main', credentialsId: 'github_cred', url: 'https://github.com/kuldeepsaindane/BiteBuddy.git'
        //     }
        // }

        stage('Checking the Directory'){
            steps {
                sh 'pwd'
                sh 'ls -l'
                sh 'ls ${WORKSPACE}'
                sh 'sleep 5'
            }
        }

        stage('Setting the Repository') {
            steps {
                // sh 'sudo rm -rf /home/ubuntu/myapp'
                // sh 'cp -r ${WORKSPACE}/ /home/ubuntu/myapp/'
                sh 'sleep 10'
           }
        }

        stage('Install Dependencies') {
            steps {
                sh 'echo Installing the Dependencies'
               // sh 'npm install'
               sh 'sleep 10'
            }
        }

        stage('Checking Dependencies') {
            steps {
                sh 'echo Checking the Dependencies'
                //sh 'npm -v'
            }
        }

        stage('Build') {
            steps {
                echo "Building application..."
               // sh 'npm run build'
               sh 'sleep 10'
            }
        }

        stage('Deploy to AWS EC2 - Dev') {
            steps {
                sh "echo Deploy the Application "
                // sh 'sudo rm -rf /var/www/myapp'
                // sh 'sudo cp -r ${WORKSPACE}/dist/ /var/www/myapp/'
                sh 'sleep 10'
            }
        }

        stage('Deploy to AWS EC2 - QA') {
            steps {
                sh "echo Deploy the Application "
                // sh 'sudo rm -rf /var/www/myapp'
                // sh 'sudo cp -r ${WORKSPACE}/dist/ /var/www/myapp/'
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
            slackSend channel: 'team2', 
            message: """✅ *Build SUCCESS:* Deployment to QA successful!
                    *Environment:* QA
                    *Job:* ${env.JOB_NAME}
                    *Status:* SUCCESS """
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
