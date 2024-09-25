// utils/loadSecrets.ts
import fs from 'fs';
import yaml from 'js-yaml';

// Define the shape of your secret YAML
interface Secrets {
    API_KEY: string;
}

// Load and set secrets as environment variables
export function loadSecrets(): void {
    try {
    // Read the YAML file
    const fileContents = fs.readFileSync('secret.yml', 'utf8');
    
    // Parse the YAML file
    const secrets = yaml.load(fileContents) as Secrets;

    // Set the API key in the environment variable
    process.env.API_KEY = secrets.API_KEY;

    console.log('Secrets loaded and API key set to environment variables');
} catch (error) {
    console.error('Error loading secrets:', error);
    }
}