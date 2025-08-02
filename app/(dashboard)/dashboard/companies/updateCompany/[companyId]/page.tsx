"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdatePost = () => {
  console.log("company  id = ");

  const { companyId } = useParams();

  console.log(companyId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // ! for updating company
  const handleUpdateCompany = async (data) => {
    console.log("company  updated !!!");

    console.log(data);
  };

  return (
    <div className="mainCOntainer py-8 bg-gray-100 border border-gray-300 p-3 shadow rounded-md  ">
      <div className="updateCompanyWrapper">
        <h1 className="mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl md:text-3xl text-center">
          Update Company
        </h1>

        {/* form  */}
        <div className="addCompanyForm p-1 w-[98%] xsm:w-[92%]  m-auto">
          <form
            onSubmit={handleSubmit(handleUpdateCompany)}
            className=" flex flex-col gap-y-4 "
          >
            {/* company name  */}
            <div className="nameContainer flex flex-col gap-y-1.5">
              <Label htmlFor="name">Company Name </Label>
              <Input
                id="name"
                type="text"
                className="  "
                placeholder="Enter Company Name "
                {...register("name", {
                  required: "Company Name is required !!!",
                })}
              />
              {errors?.name && (
                <span className="text-red-600 text-sm">
                  {errors?.name?.message as string}
                </span>
              )}
            </div>

            {/* company website  */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="website">Company Website </Label>
              <Input
                id="website"
                type="text"
                className="  "
                placeholder="Enter Company Website "
                {...register("website", {
                  required: "Company Website is required !!!",
                })}
              />
              {errors?.website && (
                <span className="text-red-600 text-sm">
                  {errors?.website?.message as string}
                </span>
              )}
            </div>

            {/* Industry  */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="industry">Industry </Label>
              <Input
                id="industry"
                type="text"
                className="  "
                placeholder="Enter Industry "
                {...register("industry", {
                  required: "Industry is required !!!",
                })}
              />
              {errors?.industry && (
                <span className="text-red-600 text-sm">
                  {errors?.industry?.message as string}
                </span>
              )}
            </div>

            {/* Location  */}
            <div className="websiteContainer flex flex-col gap-y-1.5">
              <Label htmlFor="location">Location </Label>
              <Input
                id="location"
                type="text"
                className="  "
                placeholder="Enter location "
                {...register("location", {
                  required: "Location is required !!!",
                })}
              />
              {errors?.location && (
                <span className="text-red-600 text-sm">
                  {errors?.location?.message as string}
                </span>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500  bg-prime50 hover:bg-prime100 ${
                isSubmitting
                  ? " cursor-not-allowed bg-gray-600 "
                  : "bg-prime50 hover:bg-prime100  "
              }   `}
            >
              {isSubmitting ? "Updating Company.." : "Update Company "}
            </Button>

            {/*  */}
          </form>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default UpdatePost;
