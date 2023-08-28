import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import close from "../public/close.svg";
import { Dialog } from "@headlessui/react";
import qr from "../public/qr.svg";
import { SectionWrapper } from "@/hoc";
import github from "@/public/github.png";
import Link from "next/link";

const ShareModal = ({ isOpen, setIsOpen }) => {
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
          <div className="fixed inset-0 flex items-center justify-center w-full p-4">
            <Dialog.Panel className="rounded-2xl bg-primary p-5">
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
              <Image
                src={qr}
                alt="tech"
                width={600}
                height={300}
                className="justify-center m-auto"
              />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

const Share = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-5 p-auto">
      <button
        className="sectionSubText m-2 p-3 px-10 rounded-3xl bg-primary text-fourth hover:bg-fourth hover:text-primary border-fourth border-2 shadow-card"
        onClick={() => setIsOpen(true)}
      >
        Share Website
      </button>
      <Link
        href="https://github.com/EKayatz/Interview100-presentation"
        className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer my-auto"
      >
        <Image
          src={github}
          alt="source code"
          className="w-1/2 h-1/2 object-contain"
        />
      </Link>
      <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SectionWrapper(Share, "");
