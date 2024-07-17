import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

const env = dotenv.config().parsed;
const jsonImporter = () => {
  return {
    name:'json-importer', //plugin name
    resolveId(id: string) {
      if (id === 'json-data') {
        return id; //return id if id matches 'json-data'
      }
    },
    load(id: string) { //hook to load module
      if (id === 'jason-data') {
        const workoutDataDir=resolve(__dirname, 'workoutData'); //resolve path to directory
        const files = fs.readdirSync(workoutDataDir) // read contents
        const jsonFiles = files.filter(file => file.endsWith('.json')) //filter out non-json files
        
      }
  }
 

  }
}

const envVars: Record<string, string> = {};

// Populate envVars with variables from .env
if (env) {
  for (const [key, value] of Object.entries(env)) {
    if (value) {
      envVars[`process.env.${key}`] = JSON.stringify(value);
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    ...envVars,
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})

