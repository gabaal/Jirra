"use client";

import { ResponsiveModal } from "@/components/responsive-model";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-modal_wrapper";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen } = useCreateTaskModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
