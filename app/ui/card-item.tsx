'use client';
import React from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Radio, RadioGroup } from '@nextui-org/radio';
import {
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { Carousel } from '@mantine/carousel';

interface Variant {
  label: string;
  values: string[];
}

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  images: Array<string>;
  variants: Array<Variant>;
  price: string;
}

export default function CardItem({
  id,
  title,
  description,
  images,
  price,
  variants,
}: CardItemProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const { isOpen2, onOpen2, onOpenChange2 } = useDisclosure();

  return (
    <>
      <Card className="py-4 flex h-max" key={id}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={images[0]}
            height={230}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="uppercase font-bold text-large mb-2 cursor-pointer hover:text-orange-600">
            {title}
          </div>
          {variants?.map((item, index) => {
            const { label, values } = item;
            return (
              <RadioGroup key={index} label={label} orientation="horizontal" className="mb-2">
                {values.map((item, index) => (
                  <Radio key={index} value={item}>
                    {item}
                  </Radio>
                ))}
              </RadioGroup>
            );
          })}
          {/*<small className="text-default-500 text-md mb-2">{description}</small>*/}
          <div className="flex align-center justify-between mt-6">
            <div className="flex flex-col">
              <div className="font-medium text-lg opacity-50"><s>{price} ₽</s></div>
              <div className="font-medium text-2xl">{price} ₽</div>
            </div>
            <Button
              onClick={onOpen}
              radius="sm"
              className="mt-auto w-40 bg-green-500 text-lg text-white shadow-lg"
            >
              Заказать
            </Button>
          </div>
        </CardBody>
      </Card>

      <Modal className="w-full" isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="px-2 pt-2">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <Carousel withControls={true} withIndicators loop align="center">
                  {images.map((src, index) => (
                    <Carousel.Slide key={index}>
                      <Image alt="NextUI hero Image" src={src} />
                    </Carousel.Slide>
                  ))}
                </Carousel>

                <h3 className="text-2xl text-center">{title}</h3>
              </ModalHeader>
              <ModalBody className="flex flex-col">
                <p>{description}</p>
                {variants.map((item, index) => {
                  const { label, values } = item;
                  return (
                    <RadioGroup key={index} label={label} orientation="horizontal" className="mb-2">
                      {values.map((item, index) => (
                        <Radio key={index} value={item}>
                          {item}
                        </Radio>
                      ))}
                    </RadioGroup>
                  );
                })}
                <Button className="text-sm">Таблица размеров</Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
                <Button color="primary" onPress={onClose}>
                  Заказать
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
