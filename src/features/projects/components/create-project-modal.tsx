"use client";

import { ResponsiveModal } from "@/components/responsive-model";

import { useCreateProjectModal } from "../hooks/use-create-project-modal";
import { CreateProjectForm } from "./create-project-form";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen, closed } = useCreateProjectModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={closed} />
    </ResponsiveModal>
  );
};
