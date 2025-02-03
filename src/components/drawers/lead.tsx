import * as React from 'react';

// shadCN Components Imports
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export interface ILeadDrawerProps {
}

export default function LeadDrawer (props: ILeadDrawerProps) {
  return (
    <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
  );
}
