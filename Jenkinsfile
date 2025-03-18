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
        DEV_SERVER_IP = "44.212.29.69"
        QA_SERVER_IP = "34.203.216.166"
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
                sh 'sudo ls ${WORKSPACE}'
            }
        }

        stage('Setting the Repository') {
            steps {
                sh 'sudo rm -rf /home/ubuntu/myapp'
                sh 'sudo cp -r ${WORKSPACE}/ /home/ubuntu/myapp/'
           }
        }

        stage('Install Dependencies') {
            steps {
                sh 'echo Installing the Dependencies'
               // sh 'npm install'
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
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                sh "echo Deploy the Application "
                // sh 'sudo rm -rf /var/www/myapp'
                // sh 'sudo cp -r ${WORKSPACE}/dist/ /var/www/myapp/'
            }
        }
    }

    post {
        success {
            slackSend channel: 'slack-notification', 
            message: "✅ *Build SUCCESS* : Deployement Successfull for Review...!: *Job:* ${env.JOB_NAME}"
        }
        failure {
            slackSend channel: 'slack-notification',
            message: "❌ *Build FAILED*❗: Deployment Failed: *Job:* ${env.JOB_NAME}"
        }
    }
}
