import React from 'react'

import { ButtonGhost } from './ButtonGhost'
import { ButtonPrimary } from './ButtonPrimary'
import { ModalBase } from './ModalBase'

export type ModalConfirmProps = {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <ModalBase isOpen={isOpen} onRequestClose={() => {}}>
      <div className="p-40 w-320">
        <div className="mb-32">
          <div className="flex items-center justify-center mb-24">
            <svg className="w-32 h-32 fill-current text-innovasive-ui-grey" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M38.5714 2.81239H27.8571L27.0179 1.16884C26.8401 0.817464 26.5662 0.521896 26.2271 0.315384C25.8879 0.108873 25.497 -0.0003882 25.0982 -0.000106661H14.8929C14.495 -0.00161227 14.1047 0.107241 13.7668 0.313982C13.4289 0.520724 13.1569 0.81699 12.9821 1.16884L12.1429 2.81239H1.42857C1.04969 2.81239 0.686328 2.96055 0.418419 3.22427C0.15051 3.488 0 3.84568 0 4.21864L0 7.03114C0 7.40411 0.15051 7.76179 0.418419 8.02551C0.686328 8.28924 1.04969 8.4374 1.42857 8.4374H38.5714C38.9503 8.4374 39.3137 8.28924 39.5816 8.02551C39.8495 7.76179 40 7.40411 40 7.03114V4.21864C40 3.84568 39.8495 3.488 39.5816 3.22427C39.3137 2.96055 38.9503 2.81239 38.5714 2.81239ZM4.75 41.0448C4.81814 42.1159 5.29836 43.1211 6.09291 43.8559C6.88746 44.5907 7.93661 44.9998 9.02679 44.9999H30.9732C32.0634 44.9998 33.1125 44.5907 33.9071 43.8559C34.7016 43.1211 35.1819 42.1159 35.25 41.0448L37.1429 11.2499H2.85714L4.75 41.0448Z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="40" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="mb-32 text-center heading1">ยืนยันการลบ ?</p>
          <p className="text-center text-body">เอกสารหมายเลข 123</p>
        </div>
        <div className="flex justify-end space-x-32">
          <ButtonGhost title="ปิด" onClick={() => onCancel()} />
          <ButtonPrimary title="ยืนยัน" onClick={() => onConfirm()} />
        </div>
      </div>
    </ModalBase>
  )
}
