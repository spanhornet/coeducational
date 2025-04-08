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
import InputUniversity from "@/components/ui/input.university";
import { InputProgram } from "@/components/ui/input.program";

// Lucide Icons
import { ArrowLeft, ArrowRight, Linkedin, Instagram, Facebook, Globe, Trash2, Plus  } from "lucide-react";
import { Input } from "@/components/ui/input";

// Constants
import {
  validGreekClasses,
  DEGREE_TYPES,
  personalSchema,
  educationSchema,
  experienceSchema,
  formSchema,
  steps,
  UNIVERSITY_DATA,
} from "./constants";

type FormData = z.infer<typeof formSchema>;
type PersonalFormData = z.infer<typeof personalSchema>;
type EducationFormData = z.infer<typeof educationSchema>;
type ExperienceFormData = z.infer<typeof experienceSchema>;

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
    education: {
      educationList: [{
        university: {
          id: "university-of-maryland",
          name: "University of Maryland",
          location: "College Park, MD",
        },
        degreeType: DEGREE_TYPES[0],
        program: {
          school: "",
          major: "",
          level: "undergraduate"
        },
        startDate: { month: "", year: "" },
        endDate: { month: "", year: "" },
      }]
    },
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

  const handleSetStep = async (newStep: number) => {
    // Only validate if moving forward
    if (newStep > step) {
      const currentForm = getCurrentForm();
      if (currentForm) {
        const result = await currentForm.trigger();
        if (!result) return;

        const currentValues = currentForm.getValues();
        
        if (step === 1) {
          setFormData((prev: FormData) => ({
            ...prev,
            personal: currentValues as PersonalFormData
          }));
        } else if (step === 2) {
          setFormData((prev: FormData) => ({
            ...prev,
            education: currentValues as EducationFormData
          }));
        } else if (step === 3) {
          setFormData((prev: FormData) => ({
            ...prev,
            experience: currentValues as ExperienceFormData
          }));
        }
      }
    }
    setStep(newStep);
  };

  const handleNextStep = async () => {
    if (step < steps.length) {
      const currentForm = getCurrentForm();
      if (currentForm) {
        const result = await currentForm.trigger();
        if (!result) return;

        const currentValues = currentForm.getValues();
        
        if (step === 1) {
          setFormData((prev: FormData) => ({
            ...prev,
            personal: currentValues as PersonalFormData
          }));
          console.log(currentValues);
        } else if (step === 2) {
          setFormData((prev: FormData) => ({
            ...prev,
            education: currentValues as EducationFormData
          }));
        } else if (step === 3) {
          setFormData((prev: FormData) => ({
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
                              First name <span className="text-destructive">*</span>
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
                              Last name <span className="text-destructive">*</span>
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
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                  Please provide the following information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...educationForm}>
                  <div className="space-y-6">
                    {educationForm.watch("educationList")?.map((_, index) => (
                      <div key={index} className="space-y-6 p-4 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium mb-1">Education {index + 1}</h3>
                            <p className="text-sm text-muted-foreground">Please provide details about your education</p>
                          </div>
                          {index > 0 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const currentList = educationForm.getValues("educationList");
                                currentList.splice(index, 1);
                                educationForm.setValue("educationList", [...currentList]);
                              }}
                            >
                              <Trash2 className="size-4 text-destructive" />
                            </Button>
                          )}
                        </div>

                        <FormField
                            control={educationForm.control}
                            name={`educationList.${index}.university`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>University</FormLabel>
                                <FormControl>
                                  <InputUniversity
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    disabled={true}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                        <FormField
                          control={educationForm.control}
                          name={`educationList.${index}.degreeType`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Degree</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select degree" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {DEGREE_TYPES.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={educationForm.control}
                          name={`educationList.${index}.program`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Program</FormLabel>
                              <FormControl>
                                <InputProgram name={`educationList.${index}.program`} universityData={UNIVERSITY_DATA} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-4">
                            <FormLabel>Start Date</FormLabel>
                            <div className="grid grid-cols-2 gap-2">
                              <FormField
                                control={educationForm.control}
                                name={`educationList.${index}.startDate.month`}
                                render={({ field }) => (
                                  <FormItem>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                          <SelectItem key={month} value={month.toString()}>
                                            {new Date(2000, month - 1).toLocaleString('default', { month: 'long' })}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={educationForm.control}
                                name={`educationList.${index}.startDate.year`}
                                render={({ field }) => (
                                  <FormItem>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {Array.from({ length: 50 }, (_, i) => {
                                          const currentYear = new Date().getFullYear();
                                          return currentYear - i + 10; // This will give us years from current year + 10 down to current year - 39
                                        }).map((year) => (
                                          <SelectItem key={year} value={year.toString()}>
                                            {year}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <FormLabel>End Date</FormLabel>
                            <div className="grid grid-cols-2 gap-2">
                              <FormField
                                control={educationForm.control}
                                name={`educationList.${index}.endDate.month`}
                                render={({ field }) => (
                                  <FormItem>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                          <SelectItem key={month} value={month.toString()}>
                                            {new Date(2000, month - 1).toLocaleString('default', { month: 'long' })}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={educationForm.control}
                                name={`educationList.${index}.endDate.year`}
                                render={({ field }) => (
                                  <FormItem>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {Array.from({ length: 50 }, (_, i) => {
                                          const currentYear = new Date().getFullYear();
                                          return currentYear - i + 10; // This will give us years from current year + 10 down to current year - 39
                                        }).map((year) => (
                                          <SelectItem key={year} value={year.toString()}>
                                            {year}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const currentList = educationForm.getValues("educationList") || [];
                        educationForm.setValue("educationList", [
                          ...currentList,
                          {
                            university: { 
                              id: "umd", 
                              name: "University of Maryland", 
                              location: "College Park, MD" 
                            },
                            degreeType: DEGREE_TYPES[0],
                            program: {
                              school: "",
                              major: "",
                              level: "undergraduate"
                            },
                            startDate: { month: "", year: "" },
                            endDate: { month: "", year: "" },
                          },
                        ]);
                      }}
                    >
                      <Plus className="size-4" />
                      Add education
                    </Button>
                  </div>
                </Form>
              </CardContent>
            </Card>
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
                <p>School: {formData.education.educationList[0].university.name}</p>
                <p>Degree: {formData.education.educationList[0].degreeType}</p>
                <p>Graduation Year: {formData.education.educationList[0].endDate.year}</p>
                
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
