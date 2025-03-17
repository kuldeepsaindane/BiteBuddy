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

        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }

        // stage('Checking Dependencies') {
        //     steps {
        //         sh 'npm -v'
        //     }
        // }
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        // stage('Deploy to AWS EC2') {
        //     steps {
        //         sh 'sudo rm -rf /var/www/myapp'
        //         sh 'sudo cp -r ${WORKSPACE}/dist/ /var/www/myapp/'
        //     }
        // }
    }
}
