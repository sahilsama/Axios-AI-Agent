import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, AudioLines, Cpu, FileSearch2, Globe, LucideBadgeRussianRuble, Mic, Paperclip, Pin, ReceiptSwissFranc, SearchCheckIcon, SearchCode, SearchCodeIcon, SplitSquareVertical } from "lucide-react";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ChatInputBox = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src="/logo.svg" alt="logo" width={50} height={200} />

      <div className="p-5 w-full max-w-2xl my-4 mr-8 border rounded-xl">
        {/* Input */}
        

        <div className="flex justify-between items-center">


        {/* Tabs inside same box */}
            <Tabs defaultValue="Search" className="w-full ">

            <TabsContent value="Seach">
                <input
                    type="text"
                    placeholder="Ask Anything"
                    className="w-full p-2 outline-none"
                />
            </TabsContent>
            <TabsContent value="Reseacrh">
                <input
                    type="text"
                    placeholder="Research Anything"
                    className="w-full p-2 outline-none"
                />
            </TabsContent>

            <TabsList>
                <TabsTrigger value="Search" className={'text-primary'}><SearchCodeIcon/>Search </TabsTrigger>
                <TabsTrigger value="Reseacrh" className={'text-primary'}> <Atom/> Research</TabsTrigger>
            </TabsList>

            
            </Tabs>

            {/* label box or right icons */}
            <div className="flex ">
                <Cpu/>
                <Globe/>
                <Paperclip/>
                <Mic/>
                <AudioLines/>

                



            </div>



        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
