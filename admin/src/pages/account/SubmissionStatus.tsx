import GradualSpacing from "@/components/ui/gradual-spacing";
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import ReSideBar from "@/components/custom/ReSideBar";

const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        item: "CEO",
        section: "Active",
        status: "approved",
    },
    {
        key: "2",
        name: "Zoey Lang",
        item: "Technical Lead",
        section: "Paused",
        status: "approved",
    },
    {
        key: "3",
        name: "Jane Fisher",
        item: "Senior Developer",
        section: "Active",
        status: "approved",
    },
    {
        key: "4",
        name: "William Howard",
        item: "Community Manager",
        section: "Vacation",
        status: "approved",
    },
];

const columns = [
    {
        key: "name",
        label: "Name",
    },
    {
        key: "item",
        label: "Item",
    },
    {
        key: "section",
        label: "Section",
    },
    {
        key: "status",
        label: "Status",
    },
];

interface ColumnType {
    key: string;
    label: string;
}

const SubmissionStatus = () => {
    return (
        <>
            <ReSideBar pageTitle={"Submission Status"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl p-4'}>
                            <div>
                                <GradualSpacing
                                    className="font-display text-center text-2xl font-bold tracking-tight text-white"
                                    text="Submission Status"
                                />
                            </div>
                            <div className={'px-8'}>
                                <Table removeWrapper aria-label="Example table with dynamic content">
                                    <TableHeader columns={columns}>
                                        {(column: ColumnType) => <TableColumn
                                            key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody items={rows}>
                                        {(item) => (
                                            <TableRow key={item.key}>
                                                {(columnKey) =>
                                                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>

                            </div>
                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    );
};
export default SubmissionStatus;
