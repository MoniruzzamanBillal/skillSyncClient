"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TInterview } from "@/utils/global.types";

import useIsMobile from "@/hooks/use-mobile";
import { CalendarIcon, FileTextIcon, PencilIcon, TagIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Button } from "./button";
import InterviewForm from "./InterviewForm";

type TProps = {
  interview: TInterview;
  applicationId: string;
  companyName?: string;
};

const InterviewCard = ({ interview, applicationId, companyName }: TProps) => {
  const isMobile = useIsMobile();

  const ModalOrDrawer = isMobile ? Drawer : Dialog;
  const ModalOrDrawerTrigger = isMobile ? DrawerTrigger : DialogTrigger;
  const ModalOrDrawerContent = isMobile ? DrawerContent : DialogContent;
  const ModalOrDrawerHeader = isMobile ? DrawerHeader : DialogHeader;
  const ModalOrDrawerTitle = isMobile ? DrawerTitle : DialogTitle;

  const [isUpdateInterviewOpen, setIsUpdateInterviewOpen] = useState(false);

  // ! for updating interview
  const handleUpdateInterview = (updateInterviewData) => {
    console.log("interview updated !!!");
    console.log(updateInterviewData);

    setIsUpdateInterviewOpen(false);
  };

  return (
    <Card
      key={interview.id}
      className="bg-white border border-gray-300 shadow my-3 "
    >
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        {" "}
        {/* Added flex for alignment */}
        <CardTitle className="text-lg flex items-center gap-2">
          <FileTextIcon className="h-5 w-5 text-prime50" />
          {companyName && `${companyName} - `} {interview.roundName}
        </CardTitle>
        {/*  */}
        <ModalOrDrawer
          open={isUpdateInterviewOpen}
          onOpenChange={setIsUpdateInterviewOpen}
        >
          <ModalOrDrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              // onClick={() => handleOpenEditInterview(interview)}
              className="text-gray-500 hover:text-prime100"
              aria-label={`Edit ${interview.roundName} interview`}
            >
              <PencilIcon className="h-5 w-5" />
            </Button>
          </ModalOrDrawerTrigger>
          <ModalOrDrawerContent className={isMobile ? "h-[80vh]" : "max-w-md"}>
            <ModalOrDrawerHeader>
              <ModalOrDrawerTitle>Update interview</ModalOrDrawerTitle>
            </ModalOrDrawerHeader>
            <div className="p-4 overflow-auto">
              <InterviewForm
                applicationId={applicationId}
                onSaveInterview={handleUpdateInterview}
                onClose={() => setIsUpdateInterviewOpen(false)}
                initialData={interview}
              />
            </div>
          </ModalOrDrawerContent>
        </ModalOrDrawer>
        {/*  */}
      </CardHeader>
      <CardContent className="text-sm text-gray-700">
        <p className="flex items-center gap-1 mb-1">
          <CalendarIcon className="h-4 w-4 text-gray-500" />
          <span className="font-semibold">Date:</span> {interview.date}
        </p>
        <p className="flex items-center gap-1 mb-1">
          <TagIcon className="h-4 w-4 text-gray-500" />
          <span className="font-semibold">Outcome:</span> {interview.outcome}
        </p>
        {interview.notes && (
          <p className="mt-2">
            <span className="font-semibold">Notes:</span> {interview.notes}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default InterviewCard;
