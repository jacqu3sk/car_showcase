'use client';

import { CarProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CardDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car }: CardDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duatation-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duatation-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25'></div>
          </Transition.Child>

          <div></div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
