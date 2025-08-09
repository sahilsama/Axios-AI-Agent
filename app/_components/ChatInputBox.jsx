import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ChatInputBox = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src="/logo.svg" alt="logo" width={50} height={200} />

      <div className="p-5 w-full max-w-2xl my-4 mr-8 border rounded-xl">
        {/* Input */}
        

        <div>


        {/* Tabs inside same box */}
            <Tabs defaultValue="account" className="w-full ">

            <TabsContent value="account">
                <input
                    type="text"
                    placeholder="Ask Anything"
                    className="w-full p-2  outline-none"
                />
            </TabsContent>
            <TabsContent value="password">
                <input
                    type="text"
                    placeholder="Research Anything"
                    className="w-full p-2 outline-none"
                />
            </TabsContent>

            <TabsList>
                <TabsTrigger value="account">Search</TabsTrigger>
                <TabsTrigger value="password">Research</TabsTrigger>
            </TabsList>

            
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
