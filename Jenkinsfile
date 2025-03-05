pipeline {
    agent any  // Runs the pipeline on any available agent

    environment {
        NODE_ENV = 'development'  // Set environment variable for development
    }

    stages {
        // Stage for checking out the code
        
        
        stage('Checkout') {
            steps {
                retry(3){
                    git branch: 'main', url: 'https://github.com/kuldeepsaindane/BiteBuddy.git'
                }
                // Clone the code from the GitHub repository
                
            }
        }

        // Stage for installing dependencies
        stage('Install Dependencies') {
            steps {
                script {
                     // Ensure npm is available
                    sh 'which npm || curl -sL https://deb.nodesource.com/setup_18.x | bash -'
                    sh 'apt-get install -y nodejs'

                    // Install dependencies with npm
                    sh 'npm install'
                }
            }
        }

        // Stage for starting the application (direct command execution)
        stage('Start Application') {
            steps {
                script {
                    // Run the app with the necessary start command
                     sh 'npm start'
                    // // If you're using Parcel, run:
                    // sh 'parcel index.html &'

                    // If you're using a different command, modify this line accordingly
                    // For example, for a typical Node.js server, you could run:
                    // sh 'node server.js &'
                }
            }
        }
    }

    post {
        always {
            // This block runs after the pipeline, regardless of success or failure
            echo 'Pipeline execution complete.'
        }
    }
}
