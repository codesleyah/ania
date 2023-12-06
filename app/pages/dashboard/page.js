"use client"
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Avatar } from "@nextui-org/react";
import Piechart from "@/app/components/piechart";
import Barchart from "@/app/components/barchart";
import StackedBarchart from "@/app/components/stackedbarchart";
import StackedBarChart2 from "@/app/components/stackedbarchat2";
import Trendline from "@/app/components/trendline";

export default function Dashboard(){
    return(
        <main className="flex min-h-screen  gap-8 p-24 bg-white">
            <div className="flex gap-4 w-full bg-gray-100 p-4 rounded border">
                <div className=" rounded border flex flex-col gap-4 w-full p-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded shadow  flex flex-col h-64 items-center justify-centers px-2">
                            <StackedBarChart2 />
                        </div>
                        <div className="bg-white rounded shadow h-64 items-center justify-centers p-2">
                            <Trendline />
                        </div>
                    </div>
                    <div className="flex w-full grid grid-cols-3 gap-4">
                        <div className="bg-white rounded shadow flex items-center justify-centers p-2 h-64 w-full col-span-2">
                            <StackedBarchart />
                        </div>
                        <div className="bg-white rounded shadow flex items-center justify-centers p-2 h-64 w-full">  
                            <Piechart />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded border gap-4 p-4 ">
                    <div className="bg-white rounded shadow h-40 items-center justify-centers p-2">
                        <Trendline />
                    </div>
                    <div className="bg-white rounded shadow h-40 items-center justify-centers p-2">
                        <Trendline />
                    </div>
                    <div className="bg-white rounded shadow h-40 items-center justify-centers p-2">
                        <Trendline />
                    </div>
                </div>
            </div>
        </main>
    )
}