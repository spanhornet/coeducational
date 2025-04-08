"use client";

// React Hooks
import { useState } from "react";

// React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod
import { z } from "zod";

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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

// Lucide Icons
import { ArrowLeft, ArrowRight, Linkedin, Instagram, Facebook, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputPhone from "@/components/ui/input.phone";
import InputPassword from "@/components/ui/input.password";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";

const validGreekClasses = [
  'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 
  'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 
  'Phi', 'Chi', 'Psi', 'Omega'
];

const personalSchema = z.object({
  firstName: z.string().min(1, "First name must be at least 1 character"),
  lastName: z.string().min(1, "Last name must be at least 1 character"),
  class: z.string()
    .min(1, "Class must be at least 1 character")
    .refine(value => validGreekClasses.includes(value), {
      message: "Class must be a valid romanized Greek letter name",
    }),
  chapter: z.string().min(1, "Chapter must be at least 1 character"),
  email: z.string().email("Email address is invalid"),
  phone: z.string()
    .min(1, "Phone must be at least 1 character")
    .refine(value => {
      return value ? /^\+([1-9][0-9]{1,14})$/.test(value) : true;
    }, {
      message: "Phone number must be a valid international phone number in E.164 format",
    }),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .regex(/[0-9]/, "Password must contain at least 1 number")
    .regex(/\W/, "Password must contain at least 1 special character"),
});

const educationSchema = z.object({
  school: z.string().min(2, "School name must be at least 2 characters"),
  degree: z.string().min(2, "Degree must be at least 2 characters"),
  graduationYear: z.string().regex(/^\d{4}$/, "Invalid graduation year"),
});

const experienceSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  position: z.string().min(2, "Position must be at least 2 characters"),
  years: z.string().regex(/^\d+$/, "Years must be a number"),
});

const formSchema = z.object({
  personal: personalSchema,
  education: educationSchema,
  experience: experienceSchema,
});

type FormData = z.infer<typeof formSchema>;
type PersonalFormData = z.infer<typeof personalSchema>;
type EducationFormData = z.infer<typeof educationSchema>;
type ExperienceFormData = z.infer<typeof experienceSchema>;

const steps = [
  {
    step: 1,
    title: "Step 1",
    description: "Personal",
    schema: personalSchema,
  },
  {
    step: 2,
    title: "Step 2",
    description: "Education",
    schema: educationSchema,
  },
  {
    step: 3,
    title: "Step 3",
    description: "Experience",
    schema: experienceSchema,
  },
  {
    step: 4,
    title: "Step 4",
    description: "Confirmation",
  },
];

export default function Page() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personal: { 
      firstName: "", 
      lastName: "", 
      email: "", 
      class: "", 
      chapter: "Gamma Sigma",
      phone: "", 
      password: "", 
    },
    education: { school: "", degree: "", graduationYear: "" },
    experience: { company: "", position: "", years: "" },
  });

  const currentStep = steps.find((s) => s.step === step);
  const currentSchema = currentStep?.schema;

  const personalForm = useForm<PersonalFormData>({
    resolver: zodResolver(personalSchema),
    defaultValues: formData.personal,
  });

  const educationForm = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
    defaultValues: formData.education,
  });

  const experienceForm = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: formData.experience,
  });

  const getCurrentForm = () => {
    switch (step) {
      case 1:
        return personalForm;
      case 2:
        return educationForm;
      case 3:
        return experienceForm;
      default:
        return null;
    }
  };

  const handleSetStep = (step: number) => {
    setStep(step);
  };

  const handleNextStep = async () => {
    if (step < steps.length) {
      const currentForm = getCurrentForm();
      if (currentForm) {
        const result = await currentForm.trigger();
        if (!result) return;

        const currentValues = currentForm.getValues();
        
        if (step === 1) {
          setFormData(prev => ({
            ...prev,
            personal: currentValues as PersonalFormData
          }));
          console.log(currentValues);
        } else if (step === 2) {
          setFormData(prev => ({
            ...prev,
            education: currentValues as EducationFormData
          }));
        } else if (step === 3) {
          setFormData(prev => ({
            ...prev,
            experience: currentValues as ExperienceFormData
          }));
        }
      }
      setStep(step + 1);
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async () => {
    console.log("Final form data:", formData);
    // Here you would typically make your API call with the formData
  };

  return (
    <Container>
      <div className="m-8 space-y-8">
        <Stepper value={step} onValueChange={handleSetStep}>
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

        <form onSubmit={onSubmit} className="space-y-4">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Personal</CardTitle>
                <CardDescription>
                  Please provide the following information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...personalForm}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={personalForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              First Name <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={personalForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Last Name <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={personalForm.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Class <span className="text-destructive">*</span>
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {validGreekClasses.map((greekClass) => (
                                <SelectItem key={greekClass} value={greekClass}>
                                  {greekClass}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalForm.control}
                      name="chapter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Chapter <span className="text-destructive">*</span>
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue="Gamma Sigma"
                            disabled
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your chapter" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Gamma Sigma">Gamma Sigma</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <InputPhone
                              value={field.value}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Password <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <InputPassword
                              value={field.value}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Form>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <input
                  {...educationForm.register("school")}
                  placeholder="School"
                  className="w-full p-2 border rounded"
                />
                {educationForm.formState.errors.school && (
                  <p className="text-red-500">{educationForm.formState.errors.school.message}</p>
                )}
              </div>
              <div>
                <input
                  {...educationForm.register("degree")}
                  placeholder="Degree"
                  className="w-full p-2 border rounded"
                />
                {educationForm.formState.errors.degree && (
                  <p className="text-red-500">{educationForm.formState.errors.degree.message}</p>
                )}
              </div>
              <div>
                <input
                  {...educationForm.register("graduationYear")}
                  placeholder="Graduation Year"
                  className="w-full p-2 border rounded"
                />
                {educationForm.formState.errors.graduationYear && (
                  <p className="text-red-500">{educationForm.formState.errors.graduationYear.message}</p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <input
                  {...experienceForm.register("company")}
                  placeholder="Company"
                  className="w-full p-2 border rounded"
                />
                {experienceForm.formState.errors.company && (
                  <p className="text-red-500">{experienceForm.formState.errors.company.message}</p>
                )}
              </div>
              <div>
                <input
                  {...experienceForm.register("position")}
                  placeholder="Position"
                  className="w-full p-2 border rounded"
                />
                {experienceForm.formState.errors.position && (
                  <p className="text-red-500">{experienceForm.formState.errors.position.message}</p>
                )}
              </div>
              <div>
                <input
                  {...experienceForm.register("years")}
                  placeholder="Years of Experience"
                  className="w-full p-2 border rounded"
                />
                {experienceForm.formState.errors.years && (
                  <p className="text-red-500">{experienceForm.formState.errors.years.message}</p>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Review Your Information</h3>
              <div className="text-left">
                <h4 className="font-semibold">Personal Information</h4>
                <p>Name: {formData.personal.firstName} {formData.personal.lastName}</p>
                <p>Email: {formData.personal.email}</p>
                
                <h4 className="font-semibold mt-4">Education</h4>
                <p>School: {formData.education.school}</p>
                <p>Degree: {formData.education.degree}</p>
                <p>Graduation Year: {formData.education.graduationYear}</p>
                
                <h4 className="font-semibold mt-4">Experience</h4>
                <p>Company: {formData.experience.company}</p>
                <p>Position: {formData.experience.position}</p>
                <p>Years: {formData.experience.years}</p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBackStep}
              disabled={step === 1}
              type="button"
            >
              <ArrowLeft className="size-4" />
              Back
            </Button>
            {step === steps.length ? (
              <Button type="submit">
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNextStep}
                type="button"
              >
                Next
                <ArrowRight className="size-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
}
