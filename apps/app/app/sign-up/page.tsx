"use client";

// React Hooks
import { useState } from "react";

// Components
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

// Lucide Icons
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Step 1",
    description: "Personal",
  },
  {
    step: 2,
    title: "Step 2",
    description: "Education",
  },
  {
    step: 3,
    title: "Step 3",
    description: "Experience",
  },
  {
    step: 4,
    title: "Step 4",
    description: "Confirmation",
  },
];

export default function Page() {
  const [step, setStep] = useState(1);

  const handleStepChange = (step: number) => {
    setStep(step);
  };

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Container>
      <div className="m-8 space-y-8 text-center">
        <Stepper value={step} onValueChange={handleStepChange}>
          {steps.map(({ step, title, description }) => (
            <StepperItem
              key={step}
              step={step}
              className="not-last:flex-1 max-md:items-start"
            >
              <StepperTrigger className="rounded max-md:flex-col">
                <StepperIndicator />
                <div className="text-center md:text-left">
                  <StepperTitle>{title}</StepperTitle>
                  <StepperDescription className="max-sm:hidden">
                    {description}
                  </StepperDescription>
                </div>
              </StepperTrigger>
              {step < steps.length && (
                <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
              )}
            </StepperItem>
          ))}
        </Stepper>
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={step === steps.length}
          >
            Next
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
}
