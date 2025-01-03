import ReSideBar from "@/components/custom/ReSideBar";
import GradualSpacing from "../../components/ui/gradual-spacing";
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow,} from "@nextui-org/table";

const rows = [
    {
        key: "1",
        first_name: "Tony Reichert",
        last_name: "CEO",
        points: "Active",
    },
    {
        key: "2",
        first_name: "Zoey Lang",
        last_name: "Technical Lead",
        points: "Paused",
    },
    {
        key: "3",
        first_name: "Jane Fisher",
        last_name: "Senior Developer",
        points: "Active",
    },
    {
        key: "4",
        first_name: "William Howard",
        last_name: "Community Manager",
        points: "Vacation",
    },
];

const columns = [
    {
        key: "first_name",
        label: "First Name",
    },
    {
        key: "last_name",
        label: "Last Name",
    },
    {
        key: "points",
        label: "Points",
    },
];

interface ColumnType {
    key: string;
    label: string;
}

const LeaderBoard = () => {
    return (
        <>
            <ReSideBar pageTitle={"Leaderboard"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl p-4'}>
                            <div>
                                <GradualSpacing
                                    className="font-display text-center text-2xl font-bold tracking-tight text-white"
                                    text="The Leaderboard"
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
export default LeaderBoard;
