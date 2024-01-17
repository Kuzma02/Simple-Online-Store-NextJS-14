import React from 'react'

interface Auth {
    loading: boolean;
    loggedIn: boolean;
    isAdmin: boolean;
}

export default function useAuth(): Auth {
  return {
    loading: false,
    loggedIn: true,
    isAdmin: false
  }
    
  
}
