import React from 'react'
import LoginModal from './LoginModal'
import CloseButton from './CloseButton'

const CommentModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex min-h-full items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="flex min-h-full items-center justify-center text-center">
                <div className="relative">
                    <div className="absolute -top-14 right-[30%] md:right-[40%] w-[116px] h-[116px]">
                        <LoginModal />
                    </div>
                    <div className="absolute -right-2 -top-4 cursor-pointer w-[32px] h-[32px]" onClick={onClose}>
                        <CloseButton />
                    </div>
                    <div className="max-w-[300px] overflow-hidden rounded-[20px] bg-gradient-to-r from-primary via-secondary to-tertiary px-4 pb-8 pt-[70px] text-center transition-all md:max-w-[600px] md:px-32 md:pb-9">
                        <h1 className="max-w-sm text-center text-xl font-bold text-white">
                            Want to comment? Please log in to Instagram.
                        </h1>
                       <div className="mt-5 justify-center flex">
                                                   <button
                                                       type="button"
                                                       className="max-w-fit rounded-[4px] px-6 py-[10px] text-center text-sm font-semibold text-C_0D264F"
                                                   >
                                                       Login Now
                                                   </button>
                                               </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentModal 