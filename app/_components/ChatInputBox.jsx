import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, AudioLines, Cpu, Globe, Mic, Paperclip, SearchCodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AIModelsOPtion } from "@/services/Shared";


const ChatInputBox = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src="/OIP-removebg-preview.png"
      alt="logo"
      width={80}
      height={200}
      />

      <div className="p-3 w-full max-w-2xl my-4 mr-8 border rounded-xl">
        {/* Input */}
        

        <div className="flex justify-between items-center">


            {/* Tabs inside same box */}
            <Tabs defaultValue="Search" className="w-full ">

            <TabsContent value="Search" >
                <input
                    type="text"
                    placeholder="Ask Anything"
                    className="w-full p-2 outline-none"
                />
            </TabsContent>
            <TabsContent value="Research">
                <input
                    type="text"
                    placeholder="Research Anything"
                    className="w-full p-2 outline-none"
                />
            </TabsContent>

            <TabsList>
                <TabsTrigger value="Search" className={'text-primary'}> <SearchCodeIcon/> Search </TabsTrigger>
                <TabsTrigger value="Research" className={'text-primary'}> <Atom/> Research</TabsTrigger>
            </TabsList>

            
            </Tabs>

            {/* label box or right icons */}
            <div className="flex gap mt-12 items-center"> 
                

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Cpu className="text-black h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                {AIModelsOPtion.map((model, index) => (
                  <DropdownMenuItem key={index}>
                    <div>
                      <h2 className="text-sm">{model.name}</h2>
                      <p className="mb-1">{model.desc}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>


                <Button variant='ghost'>
                <Globe className="text-black h-5 w-5"/>
                </Button>

                <Button variant='ghost'>
                <Paperclip className="text-black h-5 w-5 "/>
                </Button>

                <Button variant='ghost' >
                <Mic className="text-black h-5 w-5"/>
                </Button>

                <Button className=" h-9 w-9 rounded-corner ">
                  <AudioLines className="text-white h-5 w-5 "/>

                </Button>
              
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
