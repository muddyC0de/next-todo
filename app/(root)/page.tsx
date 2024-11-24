import { Container, CreateTaskPopover, Task, Title } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="ml-[220px] mt-16">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center mb-2">
              <Title
                text="Good morning, Sullivan!"
                size="md"
                className="font-medium mr-2"
              />
              <Image
                src="/hand-hello.png"
                width={28}
                height={28}
                alt="hello!"
                className="object-contain"
              />
            </div>

            <Title
              text="Today, Wed 26 July 2024"
              size="sm"
              className="text-gray-500"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="p-2 rounded-lg flex gap-2 bg-foreground items-center pr-24">
                <Button
                  variant="muted"
                  size="icon"
                  className="bg-background rounded-lg"
                >
                  <ChevronDown className="!w-[2rem] !h-[1.4rem]" />
                </Button>
                <span className="text-[18px]">Today</span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[204px]">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ul className="flex flex-col h-[550px] gap-3 mt-10">
          <li>
            <Task title="Read a book" date="08.00 - 09.00" />
          </li>
          <li>
            <Task title="Read a book" date="08.00 - 09.00" />
          </li>
          <li>
            <Task title="Read a book" date="08.00 - 09.00" />
          </li>
          <li>
            <Task title="Read a book" date="08.00 - 09.00" />
          </li>
          <li>
            <Task title="Read a book" date="08.00 - 09.00" />
          </li>
          <li>
            <Task title="Read a book" date="08.00 - 09.00" />
          </li>
        </ul>

        <CreateTaskPopover />
      </div>
    </Container>
  );
}
