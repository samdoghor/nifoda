import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import ReSideBar from "@/components/custom/ReSideBar";
import {FaPlusCircle} from "react-icons/fa";
import {RiFileEditFill} from "react-icons/ri";
import {MdPreview} from "react-icons/md";
import {GrOverview} from "react-icons/gr";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "../../components/ui/chart";
import {Area, AreaChart, CartesianGrid, XAxis} from "recharts";
import {TrendingUp} from "lucide-react";

const chartData = [
    {month: "Jan", addition: 0},
    {month: "Feb", addition: 25},
    {month: "Mar", addition: 100},
    {month: "Ape", addition: 115},
    {month: "May", addition: 209},
    {month: "Jun", addition: 214},
    {month: "Jul", addition: 210},
    {month: "Aug", addition: 305},
    {month: "Sep", addition: 237},
    {month: "Oct", addition: 173},
    {month: "Nov", addition: 209},
    {month: "Dec", addition: 214},
]
const chartConfig = {
    addition: {
        label: "Desktop",
        color: "#10b981",
    }
} satisfies ChartConfig

const FoodItem = () => {
    return (
        <>
            <ReSideBar pageTitle={"Fooditem"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl px-4 py-1'}>
                            <div className={'flex flex-row gap-4 my-4'}>
                                <Card
                                    className={'bg-zinc-900 rounded-xl text-gray-400 border-none w-1/4 flex flex-col gap-4 justify-center items-center pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Add Food
                                        Items </CardTitle>
                                    <CardContent className={'text-4xl text-center pt-2 pb-0'}>
                                        <FaPlusCircle/>
                                    </CardContent>
                                    <CardFooter className={'text-center text-sm'}> Add food items, nutrients, local
                                        names etc. </CardFooter>
                                </Card>

                                <Card
                                    className={'bg-blue-900 rounded-xl text-gray-400 border-none w-1/4 flex flex-col gap-4 justify-center items-center pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> View Food
                                        Items </CardTitle>
                                    <CardContent className={'text-4xl text-center pt-2 pb-0'}>
                                        <MdPreview/>
                                    </CardContent>
                                    <CardFooter className={'text-center text-sm'}> See all food items, nutrients, local
                                        names etc. </CardFooter>
                                </Card>

                                <Card
                                    className={'bg-green-900 rounded-xl text-gray-400 border-none w-1/4 flex flex-col gap-4 justify-center items-center pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Edit Food
                                        Items </CardTitle>
                                    <CardContent className={'text-4xl text-center pt-2 pb-0'}>
                                        <RiFileEditFill/>
                                    </CardContent>
                                    <CardFooter className={'text-center text-sm'}> Edit food items, nutrients, local
                                        names etc. </CardFooter>
                                </Card>

                                <Card
                                    className={'bg-pink-900 rounded-xl text-gray-400 border-none w-1/4 flex flex-col gap-4 justify-center items-center pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> View Your
                                        Contribution </CardTitle>
                                    <CardContent className={'text-4xl text-center pt-2 pb-0'}>
                                        <GrOverview/>
                                    </CardContent>
                                    <CardFooter className={'text-center text-sm'}> See all food items, nutrients, etc.
                                        your contributed </CardFooter>
                                </Card>
                            </div>

                            <div className={'flex flex-col gap-4 bg-indigo-950 p-4 rounded-xl my-4'}>
                                <Card className={'bg-transparent border-none'}>
                                    <CardHeader>
                                        <CardTitle className={'text-white'}> Database Growth </CardTitle>
                                        <CardDescription className={'text-gray-300'}>
                                            Showing total food items added for the last 12 months
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ChartContainer config={chartConfig} className={'h-80 w-full'}>
                                            <AreaChart
                                                accessibilityLayer
                                                data={chartData}
                                                margin={{
                                                    left: 12,
                                                    right: 12,
                                                }}
                                            >
                                                <CartesianGrid vertical={false}/>
                                                <XAxis
                                                    dataKey="month"
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tickMargin={8}
                                                    tickFormatter={(value) => value.slice(0, 3)}
                                                />
                                                <ChartTooltip
                                                    cursor={false}
                                                    content={<ChartTooltipContent indicator="dot"/>}
                                                />
                                                <Area
                                                    dataKey="addition"
                                                    type="natural"
                                                    fill="var(--color-addition)"
                                                    fillOpacity={0.4}
                                                    stroke="var(--color-addition)"
                                                    stackId="a"
                                                />
                                            </AreaChart>
                                        </ChartContainer>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex w-full items-start gap-2 text-sm">
                                            <div className="grid gap-2">
                                                <div
                                                    className="flex items-center gap-2 font-medium leading-none text-white">
                                                    Trending up by 5.2% this month <TrendingUp
                                                    className="h-4 w-4"/>
                                                </div>
                                                <div
                                                    className="flex items-center gap-2 leading-none text-muted-foreground">
                                                    January - December 2024
                                                </div>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>

                            <div className={'flex flex-row gap-4 my-4'}>
                                <Card className={'bg-red-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total Food
                                        Groups </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        300
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the total number of
                                        food
                                        groups in the
                                        database </CardFooter>
                                </Card>
                                <Card className={'bg-pink-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total
                                        Food Categories </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        22
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the total number of
                                        food categories in the
                                        database </CardFooter>
                                </Card>
                                <Card className={'bg-indigo-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total
                                        Food Sources </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        10
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the total number of food sources in the database </CardFooter>
                                </Card>
                                <Card className={'bg-cyan-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total Food Clases </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        300
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the total number of food classes in the database </CardFooter>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    );
};
export default FoodItem;
