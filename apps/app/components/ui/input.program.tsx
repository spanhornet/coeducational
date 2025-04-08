"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

interface InputProgramProps {
  name: string
  label?: string
  placeholder?: string
  className?: string
  universityData: {
    programs: ReadonlyArray<{
      program: string
      undergraduateMajors: readonly string[]
      graduateMajors: readonly string[]
    }>
  }
}

export function InputProgram({
  name,
  label,
  placeholder = "Select program...",
  className,
  universityData,
}: InputProgramProps) {
  const [open, setOpen] = React.useState(false)
  const { setValue, watch } = useFormContext()
  const selectedProgram = watch(name)

  const selectedSchool = selectedProgram?.school
  const selectedMajor = selectedProgram?.major
  const selectedLevel = selectedProgram?.level

  const displayValue = selectedProgram
    ? selectedMajor.length > 20
      ? `${selectedMajor.substring(0, 20)}...`
      : selectedMajor
    : ""

  return (
    <div className={cn("space-y-2", className)}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <span className={`flex-1 text-left font-normal ${displayValue ? "" : "text-muted-foreground font-normal"}`}>
              {displayValue || "Enter program"}
            </span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command shouldFilter={true}>
            <CommandInput placeholder="Search program..." />
            <CommandEmpty>No program found.</CommandEmpty>
            <ScrollArea className="h-[300px]">
              {universityData.programs.map((program) => (
                <React.Fragment key={program.program}>
                  <CommandGroup heading={`${program.program}: Undergraduate`}>
                    {program.undergraduateMajors.map((major, majorIndex) => (
                      <CommandItem
                        key={`${program.program}-undergraduate-${major}-${majorIndex}`}
                        value={`${program.program}-undergraduate-${major}`}
                        onSelect={() => {
                          setValue(name, {
                            school: program.program,
                            major,
                            level: "undergraduate",
                          })
                          setOpen(false)
                        }}
                      >
                        {major}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandGroup heading={`${program.program}: Graduate`}>
                    {program.graduateMajors.map((major, majorIndex) => (
                      <CommandItem
                        key={`${program.program}-graduate-${major}-${majorIndex}`}
                        value={`${program.program}-graduate-${major}`}
                        onSelect={() => {
                          setValue(name, {
                            school: program.program,
                            major,
                            level: "graduate",
                          })
                          setOpen(false)
                        }}
                      >
                        {major}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </React.Fragment>
              ))}
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
} 