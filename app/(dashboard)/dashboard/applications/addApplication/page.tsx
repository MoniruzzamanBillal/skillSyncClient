"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const companyOptions = [
  { value: "Company id 1", label: "Company name 1 " },
  { value: "Company id 2", label: "Company name 2 " },
  { value: "Company id 3", label: "Company name 3 " },
  { value: "Company id 4", label: "Company name 4 " },
  { value: "Company id 5", label: "Company name 5 " },
];

const jobTypeOptions = [
  { value: "Remote", label: "Remote" },
  { value: "Onsite", label: "Onsite" },
  { value: "Hybrid", label: "Hybrid" },
];

const applicationStatusOptions = [
  { value: "Saved", label: "Saved" },
  { value: "Applied", label: "Applied" },
];

const AddApplication = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  // ! for adding new application
  const handleAddApplication = async (data) => {
    console.log("application added !!! ");

    console.log(data);
  };

  return (
    <div className="mainCOntainer py-8 bg-gray-100 border border-gray-300 p-3 shadow rounded-md  ">
      <div className="addApplicationWrapper">
        <h1 className="mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl md:text-3xl text-center">
          Add Application
        </h1>

        {/* form  */}
        <div className="addApplicationForm p-1 w-[98%] xsm:w-[92%]  m-auto">
          <form
            onSubmit={handleSubmit(handleAddApplication)}
            className=" flex flex-col gap-y-4 "
          >
            {/* company name  */}
            <div className="nameContainer flex flex-col gap-y-1.5">
              <Label htmlFor="companyId">Company Name </Label>

              <Controller
                name="companyId"
                control={control}
                rules={{ required: "Company is required !!!" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={companyOptions}
                    value={companyOptions?.find(
                      (option) => option?.value === field?.value
                    )}
                    onChange={(selectedOptions) =>
                      field.onChange(selectedOptions?.value)
                    }
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Select Company..."
                  />
                )}
              />

              {errors?.companyId && (
                <span className="text-red-600 text-sm">
                  {errors?.companyId?.message as string}
                </span>
              )}
            </div>

            {/* job title   */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="JobTitle">Job Title </Label>
              <Input
                id="JobTitle"
                type="text"
                className="  "
                placeholder="Enter Job Title "
                {...register("JobTitle", {
                  required: "Job Title is required !!!",
                })}
              />
              {errors?.JobTitle && (
                <span className="text-red-600 text-sm">
                  {errors?.JobTitle?.message as string}
                </span>
              )}
            </div>

            {/* job JobLocation   */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="JobLocation">Job Location </Label>
              <Input
                id="JobLocation"
                type="text"
                className="  "
                placeholder="Enter Job Location "
                {...register("JobLocation", {
                  required: "Job Location is required !!!",
                })}
              />
              {errors?.JobLocation && (
                <span className="text-red-600 text-sm">
                  {errors?.JobLocation?.message as string}
                </span>
              )}
            </div>

            {/* JobType */}
            <div className="nameContainer flex flex-col gap-y-1.5">
              <Label htmlFor="JobType">Job Type</Label>

              <Controller
                name="JobType"
                control={control}
                rules={{ required: "Job Type is required !!!" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={jobTypeOptions}
                    value={jobTypeOptions?.find(
                      (option) => option?.value === field?.value
                    )}
                    onChange={(selectedOptions) =>
                      field.onChange(selectedOptions?.value)
                    }
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Select Job Type..."
                  />
                )}
              />

              {errors?.JobType && (
                <span className="text-red-600 text-sm">
                  {errors?.JobType?.message as string}
                </span>
              )}
            </div>

            {/* job link   */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="JobLocation">Job Link </Label>
              <Input
                id="JobLink"
                type="text"
                className="  "
                placeholder="Enter Job Link "
                {...register("JobLink", {
                  required: "Job Link is required !!!",
                })}
              />
              {errors?.JobLink && (
                <span className="text-red-600 text-sm">
                  {errors?.JobLink?.message as string}
                </span>
              )}
            </div>

            {/* job status  */}

            <div className="nameContainer flex flex-col gap-y-1.5">
              <Label htmlFor="Status">Applicaton Status </Label>

              <Controller
                name="Status"
                control={control}
                rules={{ required: "Status is required !!!" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={applicationStatusOptions}
                    value={applicationStatusOptions?.find(
                      (option) => option?.value === field?.value
                    )}
                    onChange={(selectedOptions) =>
                      field.onChange(selectedOptions?.value)
                    }
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Select Application Status..."
                  />
                )}
              />

              {errors?.companyId && (
                <span className="text-red-600 text-sm">
                  {errors?.companyId?.message as string}
                </span>
              )}
            </div>

            {/* deadline  */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="Deadline">Application Deadline </Label>
              <Input
                id="Deadline"
                type="date"
                className="  "
                placeholder="Enter Application Deadline "
                {...register("Deadline", {
                  required: "Application Deadline is required !!!",
                })}
              />
              {errors?.Deadline && (
                <span className="text-red-600 text-sm">
                  {errors?.Deadline?.message as string}
                </span>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-1000  bg-prime50 hover:bg-prime100 ${
                isSubmitting
                  ? " cursor-not-allowed bg-gray-600 "
                  : "bg-prime50 hover:bg-prime100  "
              }   `}
            >
              {isSubmitting ? "Adding New Application.." : "Add Application"}
            </Button>

            {/*  */}
          </form>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default AddApplication;
