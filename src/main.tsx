import { createRoot } from 'react-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'

import RelayProvider from '@/providers/relay/RelayProvider'
import ThemeProvider from '@/providers/theme/ThemeProvider'
import RouteProvider from '@/providers/routes/RouteProvider'
import { SnackbarProvider } from 'notistack'

const rootElement = document.getElementById('root')
if(!rootElement) throw new Error('Root element not found. Unable to render the App')

createRoot(rootElement).render(
  <ThemeProvider>
    <SnackbarProvider maxSnack={3}>
      <ErrorBoundary fallback={<>Something went wrong</>}>
        <Suspense fallback='Loading...'>
          <Router>
            <RelayProvider>
              <RouteProvider />
            </RelayProvider>
          </Router>
        </Suspense>
      </ErrorBoundary>
    </SnackbarProvider>
  </ThemeProvider>
)
