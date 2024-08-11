import React from 'react'

import Textarea from '@mui/joy/Textarea'
import { CircularProgress } from '@mui/material'
import { PiPaperPlaneRight } from 'react-icons/pi'

interface ChatInputProps {
  userTextFieldInput: string
  setUserTextFieldInput: (value: string) => void
  handleSubmitNewMessage: () => void
  loadingResponse: boolean
  askText: string
}

const ChatInput: React.FC<ChatInputProps> = ({
  userTextFieldInput,
  setUserTextFieldInput,
  handleSubmitNewMessage,
  loadingResponse,
  askText,
}) => (
<div className="relative w-full flex items-center justify-center h-[30px] mb-10 px-10">
    <div className="border-1 rounded-lg border-solid border-neutral-700 max-w-3xl w-full p-3">
      <div className="flex h-full relative">
        <input
          onKeyDown={(e) => {
            if (!e.shiftKey && e.key === 'Enter') {
              e.preventDefault()
              handleSubmitNewMessage()
            }
          }}
          onChange={(e) => setUserTextFieldInput(e.target.value)}
          value={userTextFieldInput}
          className="mr-2 w-full bg-gray-300 border-0 focus:outline-none"
          name="Outlined"
          placeholder="Type here to ask your notes..."
          variant="outlined"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            color: 'rgb(212 212 212)',
            border: 'none',
          }}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <PiPaperPlaneRight 
            color={userTextFieldInput ? 'white' : 'gray'} 
            onClick={handleSubmitNewMessage}
            className={userTextFieldInput ? 'cursor-pointer' : ''}
          />
        </div>
      </div>
    </div>
  </div>
)

export default ChatInput
