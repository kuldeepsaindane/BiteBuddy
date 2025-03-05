pipeline {
    agent any

    // environment {
    //     NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'
    //     PATH = "${NODE_HOME}/bin:${env.PATH}"
    // }

    stages {
        stage('Checkout') {
            steps {
                // Get code from a GitHub repository
                git 'https://github.com/kuldeepsaindane/BiteBuddy.git'
            }
        }
        
        stage('Node Version') {
            steps {
                // Check Node.js and npm versions
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        
        stage('Start Application') {
            steps {
                script {
                    // Run the app with the necessary start command
                    sh 'npm start'
                    // If you're using Parcel, run:
                    // sh 'parcel index.html &'

                    // If you're using a different command, modify this line accordingly
                    // For example, for a typical Node.js server, you could run:
                    // sh 'node server.js &'
                }
            }
        }
    }
}
