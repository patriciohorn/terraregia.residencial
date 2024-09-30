import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

export function ProjectDialog(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(props);
  return (
    <>
      <Dialog open={isOpen}>
        <DialogHeader className="sr-only">
          <DialogTitle>Galería de proyectos</DialogTitle>
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription> */}
        </DialogHeader>
        <DialogContent></DialogContent>
      </Dialog>
    </>

    // <Dialog>
    //   <DialogTrigger>Open</DialogTrigger>
    //   <DialogContent>
    // <DialogHeader>
    //   <DialogTitle>Are you absolutely sure?</DialogTitle>
    //   <DialogDescription>
    //     This action cannot be undone. This will permanently delete your account and remove your
    //     data from our servers.
    //   </DialogDescription>
    // </DialogHeader>
    //   </DialogContent>
    // </Dialog>
  );
}
