import {TrendingUp} from "lucide-react"
import {Area, AreaChart, Bar, BarChart, CartesianGrid, Label, LabelList, Pie, PieChart, XAxis, YAxis} from "recharts"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import ReSideBar from "@/components/custom/ReSideBar";

const chartData = [
    {month: "January", calls: 186},
    {month: "February", calls: 305},
    {month: "March", calls: 237},
    {month: "April", calls: 73},
    {month: "May", calls: 209},
    {month: "June", calls: 214},
    {month: "July", calls: 186},
    {month: "August", calls: 305},
    {month: "September", calls: 237},
    {month: "October", calls: 73},
    {month: "November", calls: 209},
    {month: "December", calls: 214},
]
const chartConfig = {
    calls: {
        label: "Desktop",
        color: "#10b981",
    }
} satisfies ChartConfig

const chartDataTopCat = [
    {browser: "chrome", visitors: 275, fill: "var(--color-chrome)"},
    {browser: "safari", visitors: 200, fill: "var(--color-safari)"},
    {browser: "firefox", visitors: 187, fill: "var(--color-firefox)"},
    {browser: "edge", visitors: 173, fill: "var(--color-edge)"},
    {browser: "other", visitors: 90, fill: "var(--color-other)"},
]
const chartConfigTopCat = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const chartDataLoc = [
    {location: "nigeria", users: 275, fill: "#be185d"},
    {location: "ghana", users: 200, fill: "#b45309"},
    {location: "cameroon", users: 187, fill: "#4d7c0f"},
    {location: "niger", users: 173, fill: "#047857"},
    {location: "mali", users: 90, fill: "#0369a1"},
]

const chartConfigLoc = {
    users: {
        label: "Users",
    },
    nigeria: {
        label: "Nigeria",
        color: "hsl(var(--chart-1))",
    },
    ghana: {
        label: "Ghana",
        color: "hsl(var(--chart-2))",
    },
    cameroon: {
        label: "Cameroon",
        color: "hsl(var(--chart-3))",
    },
    niger: {
        label: "Niger",
        color: "hsl(var(--chart-4))",
    },
    mali: {
        label: "Mali",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const chartDataDev = [
    {browser: "chrome", visitors: 275, fill: "#be185d"},
    {browser: "safari", visitors: 200, fill: "#b45309"},
    {browser: "firefox", visitors: 187, fill: "#4d7c0f"},
    {browser: "edge", visitors: 173, fill: "#047857"},
    {browser: "other", visitors: 90, fill: "#0369a1"},
]

const chartConfigDev = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const chartDataReq = [
    {status: "success", calls: 275, fill: "#047857"},
    {status: "error", calls: 200, fill: "#be185d"},
]
const chartConfigReq = {
    calls: {
        label: "Visitors",
    },
    success: {
        label: "Success",
        color: "hsl(var(--chart-1))",
    },
    error: {
        label: "Error",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const Dashboard = () => {

    return (
        <>
            <ReSideBar pageTitle={"Dashboard"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl px-4 py-1'}>
                            <div className={'flex flex-row gap-4 my-4'}>
                                <Card className={'bg-red-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total Food
                                        Items </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        300
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the total number of
                                        food
                                        items in the
                                        database </CardFooter>
                                </Card>
                                <Card className={'bg-pink-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total
                                        Contributors </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        22
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the total number of
                                        contributors in the
                                        database </CardFooter>
                                </Card>
                                <Card className={'bg-indigo-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total
                                        Active
                                        Contributors </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        10
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> contributors
                                        who added an item in the past 30 days </CardFooter>
                                </Card>
                                <Card className={'bg-cyan-900 rounded-xl text-white border-none w-1/4 pt-4'}>
                                    <CardTitle className={'text-white text-sm text-center tracking-widest'}> Total API
                                        Calls
                                        this Week </CardTitle>
                                    <CardContent className={'text-xl text-center pt-2'}>
                                        300
                                    </CardContent>
                                    <CardFooter className={'text-xs text-gray-400 text-center'}> the number of API calls
                                        in
                                        the last 7 days </CardFooter>
                                </Card>
                            </div>

                            <div className={'flex flex-col gap-4 bg-slate-950 p-4 rounded-xl my-4'}>
                                <Card className={'bg-transparent border-none'}>
                                    <CardHeader>
                                        <CardTitle className={'text-white'}> API Calls </CardTitle>
                                        <CardDescription className={'text-gray-300'}>
                                            Showing total API calls for the last 12 months
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ChartContainer config={chartConfig} className={'h-60 w-full'}>
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
                                                    dataKey="calls"
                                                    type="natural"
                                                    fill="var(--color-calls)"
                                                    fillOpacity={0.4}
                                                    stroke="var(--color-calls)"
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
                                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4"/>
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
                                <div className={'bg-black p-8 rounded-xl w-1/3 h-60'}>
                                    <p className={'text-sm font-semibold tracking-widest mb-4'}> Top Contributors </p>
                                    <div>
                                        <Card className={'bg-transparent border-none'}>
                                            <CardContent>
                                                <ChartContainer config={chartConfigTopCat}>
                                                    <BarChart
                                                        accessibilityLayer
                                                        data={chartDataTopCat}
                                                        layout="vertical"
                                                        margin={{
                                                            left: 0,
                                                        }}
                                                    >
                                                        <YAxis
                                                            dataKey="browser"
                                                            type="category"
                                                            tickLine={false}
                                                            tickMargin={10}
                                                            axisLine={false}
                                                            tickFormatter={(value) =>
                                                                chartConfigTopCat[value as keyof typeof chartConfigTopCat]?.label
                                                            }
                                                        />
                                                        <XAxis dataKey="visitors" type="number" hide/>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel/>}
                                                        />
                                                        <Bar dataKey="visitors" layout="vertical" radius={5}/>
                                                    </BarChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div className={'bg-black p-8 rounded-xl w-1/3 h-60'}>
                                    <p className={'text-sm font-semibold tracking-widest mb-4'}> Top Developers </p>
                                    <div>
                                        <Card className={'bg-transparent border-none'}>
                                            <CardContent>
                                                <ChartContainer config={chartConfigTopCat}>
                                                    <BarChart
                                                        accessibilityLayer
                                                        data={chartDataTopCat}
                                                        layout="vertical"
                                                        margin={{
                                                            left: 0,
                                                        }}
                                                    >
                                                        <YAxis
                                                            dataKey="browser"
                                                            type="category"
                                                            tickLine={false}
                                                            tickMargin={10}
                                                            axisLine={false}
                                                            tickFormatter={(value) =>
                                                                chartConfigTopCat[value as keyof typeof chartConfigTopCat]?.label
                                                            }
                                                        />
                                                        <XAxis dataKey="visitors" type="number" hide/>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel/>}
                                                        />
                                                        <Bar dataKey="visitors" layout="vertical" radius={5}/>
                                                    </BarChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div className={'bg-black p-8 rounded-xl w-1/3 h-60'}>
                                    <p className={'text-sm font-semibold tracking-widest mb-4'}> Top Endpoints </p>
                                    <div>
                                        <Card className={'bg-transparent border-none'}>
                                            <CardContent>
                                                <ChartContainer config={chartConfigTopCat}>
                                                    <BarChart
                                                        accessibilityLayer
                                                        data={chartDataTopCat}
                                                        layout="vertical"
                                                        margin={{
                                                            left: 0,
                                                        }}
                                                    >
                                                        <YAxis
                                                            dataKey="browser"
                                                            type="category"
                                                            tickLine={false}
                                                            tickMargin={10}
                                                            axisLine={false}
                                                            tickFormatter={(value) =>
                                                                chartConfigTopCat[value as keyof typeof chartConfigTopCat]?.label
                                                            }
                                                        />
                                                        <XAxis dataKey="visitors" type="number" hide/>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel/>}
                                                        />
                                                        <Bar dataKey="visitors" layout="vertical" radius={5}/>
                                                    </BarChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            <div className={'flex flex-row gap-4 my-4 bg-gray-950 rounded-xl max-h-fit'}>
                                <Card className="flex flex-col bg-transparent border-none w-1/3">
                                    <CardHeader className="items-center pb-0">
                                        <CardTitle className={'text-white text-sm font-semibold tracking-widest'}>Top
                                            Locations</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 pb-0">
                                        <ChartContainer
                                            config={chartConfigLoc}
                                            className="mx-auto aspect-square h-64"
                                        >
                                            <PieChart>
                                                <Pie data={chartDataLoc} dataKey="users">
                                                    <LabelList
                                                        dataKey="users"
                                                        className="fill-white"
                                                        stroke="none"
                                                        fontSize={12}
                                                        formatter={(value: number) => value.toLocaleString()}
                                                    />
                                                </Pie>
                                                <ChartLegend
                                                    content={<ChartLegendContent nameKey="location"/>}
                                                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-white"
                                                />
                                            </PieChart>
                                        </ChartContainer>
                                    </CardContent>
                                </Card>

                                <Card className="flex flex-col bg-transparent border-none w-1/3">
                                    <CardHeader className="items-center pb-0">
                                        <CardTitle className={'text-white text-sm font-semibold tracking-widest'}>Top
                                            Browsers</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 pb-0">
                                        <ChartContainer
                                            config={chartConfigDev}
                                            className="mx-auto aspect-square h-64"
                                        >
                                            <PieChart>
                                                <Pie data={chartDataDev} dataKey="visitors">
                                                    <LabelList
                                                        dataKey="browser"
                                                        className="fill-white"
                                                        stroke="none"
                                                        fontSize={12}
                                                        formatter={(value: number) => value.toLocaleString()}
                                                    />
                                                </Pie>
                                                <ChartLegend
                                                    content={<ChartLegendContent nameKey="browser"/>}
                                                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-white"
                                                />
                                            </PieChart>
                                        </ChartContainer>
                                    </CardContent>
                                </Card>

                                <Card className="flex flex-col bg-transparent border-none w-1/3">
                                    <CardHeader className="items-center pb-0">
                                        <CardTitle className={'text-white text-sm font-semibold tracking-widest'}>API
                                            Calls
                                            Status</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 pb-0">
                                        <ChartContainer
                                            config={chartConfigReq}
                                            className="mx-auto aspect-square max-h-[250px]"
                                        >
                                            <PieChart>
                                                <ChartTooltip
                                                    cursor={false}
                                                    content={<ChartTooltipContent hideLabel/>}
                                                />
                                                <Pie
                                                    data={chartDataReq}
                                                    dataKey="calls"
                                                    nameKey="status"
                                                    innerRadius={60}
                                                    strokeWidth={5}
                                                >
                                                    <Label
                                                        content={({viewBox}) => {
                                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                                return (
                                                                    <text
                                                                        x={viewBox.cx}
                                                                        y={viewBox.cy}
                                                                        textAnchor="middle"
                                                                        dominantBaseline="middle"
                                                                    >
                                                                        <tspan
                                                                            x={viewBox.cx}
                                                                            y={viewBox.cy}
                                                                            className="fill-white text-xl font-bold"
                                                                        >
                                                                            345,000
                                                                        </tspan>
                                                                        <tspan
                                                                            x={viewBox.cx}
                                                                            y={(viewBox.cy || 0) + 24}
                                                                            className="fill-muted-foreground"
                                                                        >
                                                                            Total Calls
                                                                        </tspan>
                                                                    </text>
                                                                )
                                                            }
                                                        }}
                                                    />
                                                </Pie>
                                                <ChartLegend
                                                    content={<ChartLegendContent nameKey="status"/>}
                                                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-white"
                                                />
                                            </PieChart>
                                        </ChartContainer>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className={'flex flex-row gap-4 my-4 bg-black rounded-xl max-h-fit'}>
                                <div className={'bg-black p-8 rounded-xl w-1/3'}>
                                    <p className={'text-sm font-semibold tracking-widest mb-4'}> Top Food Nutrient </p>
                                    <div>
                                        <Card className={'bg-transparent border-none'}>
                                            <CardContent>
                                                <ChartContainer config={chartConfigTopCat}>
                                                    <BarChart
                                                        accessibilityLayer
                                                        data={chartDataTopCat}
                                                        layout="vertical"
                                                        margin={{
                                                            left: 0,
                                                        }}
                                                    >
                                                        <YAxis
                                                            dataKey="browser"
                                                            type="category"
                                                            tickLine={false}
                                                            tickMargin={10}
                                                            axisLine={false}
                                                            tickFormatter={(value) =>
                                                                chartConfigTopCat[value as keyof typeof chartConfigTopCat]?.label
                                                            }
                                                        />
                                                        <XAxis dataKey="visitors" type="number" hide/>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel/>}
                                                        />
                                                        <Bar dataKey="visitors" layout="vertical" radius={5}/>
                                                    </BarChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div className={'bg-black p-8 rounded-xl w-1/3'}>
                                    <p className={'text-sm font-semibold tracking-widest mb-4'}> Top Food Origin </p>
                                    <div>
                                        <Card className={'bg-transparent border-none'}>
                                            <CardContent>
                                                <ChartContainer config={chartConfigTopCat}>
                                                    <BarChart
                                                        accessibilityLayer
                                                        data={chartDataTopCat}
                                                        layout="vertical"
                                                        margin={{
                                                            left: 0,
                                                        }}
                                                    >
                                                        <YAxis
                                                            dataKey="browser"
                                                            type="category"
                                                            tickLine={false}
                                                            tickMargin={10}
                                                            axisLine={false}
                                                            tickFormatter={(value) =>
                                                                chartConfigTopCat[value as keyof typeof chartConfigTopCat]?.label
                                                            }
                                                        />
                                                        <XAxis dataKey="visitors" type="number" hide/>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel/>}
                                                        />
                                                        <Bar dataKey="visitors" layout="vertical" radius={5}/>
                                                    </BarChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div className={'bg-black p-8 rounded-xl w-1/3'}>
                                    <p className={'text-sm font-semibold tracking-widest mb-4'}> Top Food Allergy </p>
                                    <div>
                                        <Card className={'bg-transparent border-none'}>
                                            <CardContent>
                                                <ChartContainer config={chartConfigTopCat}>
                                                    <BarChart
                                                        accessibilityLayer
                                                        data={chartDataTopCat}
                                                        layout="vertical"
                                                        margin={{
                                                            left: 0,
                                                        }}
                                                    >
                                                        <YAxis
                                                            dataKey="browser"
                                                            type="category"
                                                            tickLine={false}
                                                            tickMargin={10}
                                                            axisLine={false}
                                                            tickFormatter={(value) =>
                                                                chartConfigTopCat[value as keyof typeof chartConfigTopCat]?.label
                                                            }
                                                        />
                                                        <XAxis dataKey="visitors" type="number" hide/>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel/>}
                                                        />
                                                        <Bar dataKey="visitors" layout="vertical" radius={5}/>
                                                    </BarChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    );
};
export default Dashboard;
