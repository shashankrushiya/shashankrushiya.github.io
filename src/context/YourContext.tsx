import * as React from 'react'

type ContextType = {
  // Define your context type here
  // For example:
  value: string;
  setValue: (value: string) => void;
}

const initialValue: ContextType = {
  value: '',
  setValue: () => {},
}

const YourContext = React.createContext(initialValue)

export default YourContext 