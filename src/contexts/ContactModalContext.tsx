import { createContext, useContext, useState, ReactNode } from 'react'
import { ContactModal } from '@/components/ContactModal'

interface ContactModalContextType {
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export const useContactModal = () => {
  const context = useContext(ContactModalContext)
  if (!context) throw new Error('useContactModal must be used within ContactModalProvider')
  return context
}

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ContactModalContext.Provider
      value={{ openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }}
    >
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  )
}
