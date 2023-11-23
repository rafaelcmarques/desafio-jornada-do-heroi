import React, { createContext, useState, useContext, ReactNode } from 'react'

interface SearchContextProps {
  children: ReactNode
}

interface SearchContextValue {
  searchValue: string | undefined
  setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const SearchContext = createContext<SearchContextValue | undefined>(
  undefined,
)

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}
