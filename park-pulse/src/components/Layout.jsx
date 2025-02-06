import React from 'react'
import { ThemeProvider } from "./theme-provider"
import { ThemeToggle } from "./theme-toggle"

export function Layout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background transition-colors duration-300">
        {children}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}