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

         stage('Install Dependencies') {
            steps {
                script {
                    // Install NVM (Node Version Manager) and Node.js
                    sh '''
                        # Install NVM (Node Version Manager)
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
                        
                        # Source NVM and install Node.js
                        export NVM_DIR="$HOME/.nvm"
                        if [ -s "$NVM_DIR/nvm.sh" ]; then
                            . "$NVM_DIR/nvm.sh"  # This is the correct way to source nvm.sh
                        fi
                        
                        # Install Node.js version 18 (adjust the version if necessary)
                        nvm install 18
                        nvm use 18
                        
                        # Verify Node.js and npm installation
                        node -v
                        npm -v
                    '''
                }
            }
        }

        // Stage for installing dependencies
        stage('Install Dependencies') {
            steps {
                script {
                    //  // Ensure npm is available
                    // sh 'which npm || curl -sL https://deb.nodesource.com/setup_18.x | bash -'
                    // sh 'apt-get install -y nodejs'

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
