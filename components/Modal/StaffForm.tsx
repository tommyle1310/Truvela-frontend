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
import { staffRoles } from "@/data/staff"
import { spaLocations } from "@/data/spa"


export function StaffForm() {
    return (
        <div>
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
                        <InputControl disabled label='Role' placeholder="Role" popOverExtraBtn={{ label: 'View All', onClick: () => { } }} multiSelectValue={staffRoles.map(item => ({ id: item.id, mainTitle: item.name }))} />
                        <InputControl disabled label='Is Full Time?' placeholder="Is Full Time?" value={StaffModal.isFullTime ? 'Full-time' : 'Part-time'} />
                        <InputControl disabled label='Gender' placeholder="Gender" dropdownValue={[{ id: 'Male', name: 'Male' }, { id: 'Female', name: 'Female' }, { id: 'Others', name: 'Others' }]} />
                        <InputControl disabled label='Date of Birth' placeholder="Date of Birth" value={`${StaffModal.dateOfBirth}`} />
                        <InputControl disabled label='Avatar' isImage placeholder="Avatar" value={StaffModal.avatar?.url} />
                        <div className="col-span-2 grid grid-cols-2 gap-4">
                            <InputControl disabled isHidden label='Salary' placeholder="Salary" value={StaffModal.salary} />
                            <InputControl disabled label='Job Capabilities' placeholder="Job Capabilities" multiSelectValue={StaffModal?.capabilities?.map(item => ({ id: item.id, mainTitle: item.name, subTitle: item.id }))} />
                            <InputControl disabled label='Work Location' placeholder="Work Location" multiSelectValue={spaLocations.map(item => ({ id: item.id, mainTitle: item.name }))} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
