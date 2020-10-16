import { Menu as HeadlessMenu, Transition } from '@headlessui/react'
import { isFunction, map } from 'lodash'
import React, { ReactNode } from 'react'

type Items = {
  title: string | ReactNode | (() => ReactNode)
  onClick: () => void
}

export type MenuProps = {
  title: string
  items: Items[]
}

export const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <div className="relative">
      <HeadlessMenu>
        {({ open }) => (
          <>
            <HeadlessMenu.Button className="flex items-center h-48 px-16 text-white transition-all duration-200 bg-innovasive-ui-primary rounded-3 focus:outline-none focus:shadow-outline">
              <div className="w-full mx-48 text-center">
                <p className="truncate subheading1">{title}</p>
              </div>
              <div className="flex-shrink-0">
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.15333 0.874976L7.84708 0.874977C8.44895 0.874977 8.74989 1.58318 8.3252 1.99607L4.97833 5.24998C4.71395 5.50701 4.28645 5.50701 4.02489 5.24998L0.678016 1.99607C0.250516 1.58318 0.551453 0.874976 1.15333 0.874976Z"
                    fill="white"
                  />
                </svg>
              </div>
            </HeadlessMenu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <HeadlessMenu.Items
                static
                className="absolute right-0 min-w-full py-4 mt-8 overflow-hidden bg-white border shadow-md border-innovasive-ui-grey-medium focus:outline-none rounded-3"
              >
                {map(items, item => (
                  <HeadlessMenu.Item
                    onClick={item.onClick}
                    className="flex items-center w-full h-40 px-16 cursor-pointer text-body hover:bg-innovasive-ui-grey-light active:bg-innovasive-ui-grey-medium focus:outline-none"
                    as="button"
                  >
                    {isFunction(item.title) ? item.title() : item.title}
                  </HeadlessMenu.Item>
                ))}
              </HeadlessMenu.Items>
            </Transition>
          </>
        )}
      </HeadlessMenu>
    </div>
  )
}
