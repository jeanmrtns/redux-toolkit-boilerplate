"use client"
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </QueryClientProvider>
  )
}