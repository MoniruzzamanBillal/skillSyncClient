"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InterviewOutcome } from "@/utils/global.types";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const interviewOutcomeOptions = [
  { value: "Pass", label: "Pass" },
  { value: "Fail", label: "Fail" },
  { value: "Pending", label: "Pending" },
];

const AddInterviewForm = ({ applicationId, onAddInterview, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleAddInterview = async (data) => {
    console.log(applicationId);
    console.log(data);
    onAddInterview(data);
    reset();
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddInterview)}
      className="flex flex-col gap-y-4"
    >
      <div className="flex flex-col gap-y-1.5">
        <Label htmlFor="roundName">Round Name</Label>
        <Input
          id="roundName"
          type="text"
          placeholder="e.g., HR Screening, Technical Interview"
          {...register("roundName", { required: "Round Name is required" })}
        />
        {errors?.roundName && (
          <span className="text-red-600 text-sm">
            {errors?.roundName?.message as string}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-y-1.5">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          {...register("date", { required: "Date is required" })}
        />
        {errors?.date && (
          <span className="text-red-600 text-sm">
            {errors?.date?.message as string}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-y-1.5">
        <Label htmlFor="outcome">Outcome</Label>
        <Controller
          name="outcome"
          control={control}
          rules={{ required: "Outcome is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={interviewOutcomeOptions}
              value={interviewOutcomeOptions.find(
                (option) => option.value === field.value
              )}
              onChange={(selectedOption) =>
                field.onChange(selectedOption?.value as InterviewOutcome)
              }
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Select Outcome..."
            />
          )}
        />
        {errors?.outcome && (
          <span className="text-red-600 text-sm">
            {errors?.outcome?.message as string}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-y-1.5">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          placeholder="e.g., Asked about relocation and availability."
          {...register("notes")}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base active:scale-95 duration-1000 bg-prime50 hover:bg-prime100 ${
          isSubmitting ? "cursor-not-allowed bg-gray-600" : ""
        }`}
      >
        {isSubmitting ? "Adding Interview..." : "Add Interview"}
      </Button>
    </form>
  );
};

export default AddInterviewForm;
