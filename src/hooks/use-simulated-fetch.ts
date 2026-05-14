import { useState, useEffect, useCallback } from 'react'

export function useSimulatedFetch<T>(mockData: T, simulateError = false, simulateEmpty = false) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [empty, setEmpty] = useState(false)

  const fetchData = useCallback(() => {
    setLoading(true)
    setError(false)
    setEmpty(false)
    setData(null)

    const timer = setTimeout(() => {
      if (simulateError) {
        setError(true)
      } else if (simulateEmpty) {
        setEmpty(true)
      } else {
        setData(mockData)
      }
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [mockData, simulateError, simulateEmpty])

  useEffect(() => {
    const cleanup = fetchData()
    return cleanup
  }, [fetchData])

  return { data, loading, error, empty, retry: fetchData }
}
