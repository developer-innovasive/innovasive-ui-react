import { Transition } from '@headlessui/react'
import React, { ReactNode, useRef } from 'react'

import { useOnClickOutside } from '../hooks/use-on-click-outside'

export type ModalBaseProps = {
  isOpen: boolean
  children: ReactNode
  onRequestClose: () => void
}

export const ModalBase: React.FC<ModalBaseProps> = ({ isOpen, children, onRequestClose }) => {
  const ref = useRef<HTMLInputElement>(null)
  useOnClickOutside(ref, () => onRequestClose())

  return (
    <Transition show={isOpen}>
      <div className="fixed inset-0 z-50 bg-white bg-opacity-50">
        <div className="flex items-center justify-center h-screen">
          <Transition.Child
            enter="transition ease-in-out duration-100 transform"
            enterFrom="scale-90 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition ease-in-out duration-100 transform"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-90 opacity-0"
          >
            <div
              ref={ref}
              className="overflow-hidden bg-white border shadow-xl rounded-20 border-grey-100"
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  )
}
