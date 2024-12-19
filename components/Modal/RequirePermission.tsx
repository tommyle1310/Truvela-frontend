'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const RequirePermission = ({ label }: { label?: string }) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-left text-lavender-primary-600">View {label}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] z-[100]">
                <DialogHeader>
                    <DialogTitle className='text-lavender-danger-700'>Permission Required</DialogTitle>
                    <DialogDescription>
                        This action is only available for some specific members.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <div className="relative col-span-3">

                            <Input
                                id="password"
                                type={isShowPassword ? 'text' : 'password'}
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                            <FontAwesomeIcon onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)} className='absolute hv p-2 hover:bg-slate-100 rounded-full center right-1 top-1/2 transform -translate-y-1/2 text-gray-500' icon={faEye} />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default RequirePermission
