import React, { createContext, useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
export const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io('http://localhost:8000', { query: { id } })
    console.log(id)
    setSocket(newSocket)
    return () => newSocket.close()
  }, [id])

  return <SocketContext.Provider value={socket}>
    {children}
  </SocketContext.Provider>
}

export default SocketContext