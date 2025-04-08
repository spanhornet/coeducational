"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Sample university list - replace with actual data
const universities = [
  {
    name: "University of Maryland",
    location: "College Park, MD",
    id: "university-of-maryland",
  },
  {
    name: "Johns Hopkins University",
    location: "Baltimore, MD",
    id: "johns-hopkins-university",
  },
  // Add more universities as needed
] as const;

export type UniversityValue = {
  id: string;
  name: string;
  location: string;
};

interface InputUniversityProps {
  value: UniversityValue | null;
  onChange: (value: UniversityValue | null) => void;
  onBlur?: () => void;
  disabled?: boolean;
}

export default function InputUniversity({
  value,
  onChange,
  onBlur,
  disabled = false,
}: InputUniversityProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (university: UniversityValue) => {
    onChange(university);
    setOpen(false);
    if (onBlur) onBlur();
  };

  return (
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between p-3",
              !value && "text-muted-foreground"
            )}
            onClick={() => setOpen(!open)}
            disabled={disabled}
          >
            {value ? (
              <div className="inline-flex items-center gap-1" aria-hidden="true">
                <span className="text-sm">{value.name}</span>
              </div>
            ) : (
              <span>Select university</span>
            )}
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0 min-w-[400px]">
          <Command>
            <CommandInput
              placeholder="Search university..."
              className="h-10"
            />
            <CommandEmpty className="py-6 text-center text-sm">
              No university found.
            </CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto py-1">
              {universities.map((university) => (
                <CommandItem
                  key={university.id}
                  value={university.name}
                  onSelect={() => handleSelect(university)}
                  className="px-3 py-2"
                >
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <span className="font-medium">{university.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {university.location}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
