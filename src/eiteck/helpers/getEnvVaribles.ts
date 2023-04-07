
export const getEnvVariables = () => {
  // import.meta.env;
  
  return {
    VITE_RICK_AND_MORTY_API: import.meta.env.VITE_RICK_AND_MORTY_API,
  }
} 