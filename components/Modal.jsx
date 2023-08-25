import React from "react";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import close from "../public/close.svg";

const Modal = ({ image, title, isOpen, setIsOpen }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="rounded-2xl bg-primary sm:w-[90%] p-4 lg:w-[50%]">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 z-10 w-fit p-2 bg-primary-blue-100"
              >
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
              <Dialog.Title className="sectionHeadText">{title}</Dialog.Title>

              <Image src={image} alt="tech" className="w-full" />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
