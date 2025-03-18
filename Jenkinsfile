pipeline {
    agent any

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
            message: "Deployement Successfull for Review...!: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: 'slack-notification',
            message: "Deployment Failed: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
    }
}
