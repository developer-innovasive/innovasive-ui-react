import { Meta } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

import { ModalBase } from '../components/ModalBase'
import { ModalConfirm } from '../components/ModalConfirm'

export default {
  title: 'Modal',
  component: ModalBase,
} as Meta

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div>
        <p>Modal Default Examaple</p>
      </div>
      <ModalBase isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="p-40 text-center">
          <div className="flex justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16 0.5C7.4375 0.5 0.5 7.4375 0.5 16C0.5 24.5625 7.4375 31.5 16 31.5C24.5625 31.5 31.5 24.5625 31.5 16C31.5 7.4375 24.5625 0.5 16 0.5ZM25.7069 12.7069L14.2069 24.2069C14.0194 24.3943 13.7651 24.4995 13.5 24.4995C13.2349 24.4995 12.9806 24.3943 12.7931 24.2069L6.29313 17.7069C6.10573 17.5194 6.00046 17.2651 6.00046 17C6.00046 16.7349 6.10573 16.4806 6.29313 16.2931L7.70687 14.8787C7.79974 14.7859 7.90999 14.7122 8.03133 14.6619C8.15267 14.6116 8.28272 14.5858 8.41406 14.5858C8.5454 14.5858 8.67546 14.6116 8.7968 14.6619C8.91814 14.7122 9.02839 14.7859 9.12125 14.8787L13.5 19.2575L22.8787 9.87875C22.9716 9.78587 23.0819 9.71219 23.2032 9.66192C23.3245 9.61165 23.4546 9.58578 23.5859 9.58578C23.7173 9.58578 23.8473 9.61165 23.9687 9.66192C24.09 9.71219 24.2003 9.78587 24.2931 9.87875L25.7069 11.2931C25.8943 11.4806 25.9995 11.7349 25.9995 12C25.9995 12.2651 25.8943 12.5194 25.7069 12.7069Z"
                fill="#02CDA2"
              />
              <path
                d="M14.2069 24.2069C14.0194 24.3943 13.7651 24.4996 13.5 24.4996C13.2349 24.4996 12.9807 24.3943 12.7931 24.2069L6.29315 17.7069C6.10576 17.5194 6.00049 17.2651 6.00049 17C6.00049 16.7349 6.10576 16.4807 6.29315 16.2932L7.7069 14.8788C7.79976 14.7859 7.91001 14.7122 8.03135 14.662C8.15269 14.6117 8.28275 14.5858 8.41409 14.5858C8.54543 14.5858 8.67548 14.6117 8.79682 14.662C8.91816 14.7122 9.02841 14.7859 9.12127 14.8788L13.5 19.2575L22.8788 9.87879C22.9716 9.78591 23.0819 9.71223 23.2032 9.66196C23.3246 9.61169 23.4546 9.58582 23.586 9.58582C23.7173 9.58582 23.8474 9.61169 23.9687 9.66196C24.09 9.71223 24.2003 9.78591 24.2931 9.87879L25.7069 11.2932C25.8943 11.4807 25.9996 11.7349 25.9996 12C25.9996 12.2651 25.8943 12.5194 25.7069 12.7069L14.2069 24.2069Z"
                fill="#02CDA2"
              />
            </svg>
          </div>

          <p className="w-full mb-24 text-xl font-bold">DONE</p>
          <p className="text-innovasive-ui-grey">Successfully created.</p>
        </div>
      </ModalBase>
      <button
        onClick={() => setIsOpen(true)}
        className="px-16 py-8 text-white border rounded-3 bg-innovasive-ui-primary"
      >
        Open modal
      </button>
    </div>
  )
}

export const Confirm = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div>
        <p>Modal Confirm Examaple</p>
      </div>
      <ModalConfirm
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
      <button
        onClick={() => setIsOpen(true)}
        className="px-16 py-8 text-white border rounded-3 bg-innovasive-ui-primary"
      >
        Open modal
      </button>
    </div>
  )
}
