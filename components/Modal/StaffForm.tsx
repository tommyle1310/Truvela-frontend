import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { StaffModal } from "@/data/Modal/staff"
import InputControl from "./InputControl"


export function StaffForm() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add</Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>Add Staff</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                    <InputControl disabled label='Name' placeholder="Staff Name" value={StaffModal.name} />
                    <InputControl disabled label='Email' placeholder="Staff Email" value={StaffModal.email} />
                    <InputControl disabled label='Role' placeholder="Staff Role" value={StaffModal.role.name} />
                    <InputControl disabled label='Is Full Time?' placeholder="Is Full Time?" value={StaffModal.isFullTime ? 'Full-time' : 'Part-time'} />
                    <InputControl disabled isDropdown label='Gender' placeholder="Gender" dropdownValue={[{ id: 'Male', name: 'Male' }, { id: 'Female', name: 'Female' }, { id: 'Others', name: 'Others' }]} />
                    <InputControl disabled label='Date of Birth' placeholder="Date of Birth" value={`${StaffModal.dateOfBirth}`} />
                    <InputControl disabled label='Avatar' isImage placeholder="Avatar" value={StaffModal.avatar?.url} />
                    <InputControl disabled isHidden label='Salary' placeholder="Salary" value={StaffModal.salary} />
                    <InputControl disabled label='Job Capabilities' placeholder="Job Capabilities" isMultiSelectList multiSelectValue={StaffModal?.capabilities?.map(item => ({ id: item.id, mainTitle: item.name, subTitle: item.id }))} />
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
