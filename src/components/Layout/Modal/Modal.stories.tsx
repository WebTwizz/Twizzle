import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../General/Button/Button";
import { Modal } from "./Modal";

export default {
  title: "Components/Layout/Modal",
  component: Modal,
  argTypes: {
    modalStyle: {
      control: { type: "object" },
    },
    modalTitle: { control: "text" },
    bodyStyle: { control: "object" },
    closable: { control: "boolean" },
    footer: { control: "boolean" },
    onCanel: { control: "func" },
    onOk: { control: "func" },
    onClose: { control: "func" },
    children: { control: "text" },
  },
} as ComponentMeta<typeof Modal>;

const ModalTemplate: ComponentStory<typeof Modal> = ({
  modalStyle,
  modalTitle,
  bodyStyle,
  closable,
  footer,
  onCanel,
  onOk,
  onClose,
  children,
}) => {

  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <>
      <Button outlined onClick={() => setIsOpen(true)} label="Open Modal"/>
      <div className="Lorem Ipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        purus lectus, at imperdiet sem vulputate non. Donec ac elit augue.
        Aliquam erat volutpat. Suspendisse non imperdiet dui. Donec quam orci,
        pulvinar quis lorem sed, fringilla dictum lectus. Nulla venenatis orci
        sit amet risus aliquam ultrices. Vestibulum eget hendrerit risus, sit
        amet vestibulum lectus. Nam semper neque risus, et aliquam enim posuere
        a. Cras a egestas nunc. Morbi sit amet metus risus. Donec ultrices
        pellentesque laoreet. In maximus, mi tristique commodo luctus, tellus
        nulla scelerisque urna, quis faucibus libero nunc non dolor. Vestibulum
        eu cursus metus, nec tempor sapien. Sed volutpat porttitor turpis, et
        vulputate risus. Quisque at justo suscipit, dictum erat sit amet,
        imperdiet erat. Maecenas quis purus vitae nisi consequat efficitur eu
        vel eros. Proin odio justo, blandit eget metus vel, rutrum posuere
        augue. Nunc ornare nibh vel orci laoreet lacinia sit amet ac neque.
        Aliquam vitae semper ex, iaculis hendrerit libero. Vivamus arcu eros,
        vulputate et cursus eu, sollicitudin at nibh. Quisque et orci eu enim
        vestibulum finibus. Integer id felis ligula. Sed vel pellentesque nunc,
        nec euismod enim. Nulla sit amet cursus velit. Phasellus at felis vel
        eros dictum blandit. Morbi sit amet libero sagittis, aliquet nibh sit
        amet, interdum risus. Etiam vel ligula mi. Cras tempor hendrerit
        placerat. Nullam eu sapien id purus ornare posuere quis at odio.
        Suspendisse sit amet consequat est, eget tristique eros. Nulla tortor
        dolor, aliquet eu nunc et, scelerisque feugiat enim. Suspendisse nec ex
        in urna convallis vulputate sit amet eu turpis. Fusce eu elementum
        turpis. Nulla in hendrerit eros. Integer sodales libero congue,
        facilisis nisi a, mollis sapien. Nullam ut velit ut nisl feugiat
        dapibus. Aenean in erat imperdiet, lacinia massa in, porttitor eros.
        Donec viverra arcu vitae leo tempor accumsan. Nullam vulputate orci non
        fermentum lobortis. Donec non risus sem. Etiam arcu enim, euismod ut
        lacus sit amet, suscipit mollis tellus. Sed viverra elit in metus
        consectetur rutrum. Nam a mi bibendum, posuere sem sit amet, lobortis
        augue. Suspendisse rhoncus, tellus vestibulum elementum ultricies,
        lectus diam finibus lacus, nec sodales quam mauris sit amet justo.
        Suspendisse euismod ut arcu sed vehicula. Curabitur consectetur maximus
        tortor eget iaculis. Aliquam feugiat, sem a luctus dignissim, ex metus
        ultrices est, et efficitur sem urna sit amet ex. Nullam vulputate augue
        quis dolor rutrum, et sodales neque egestas. Sed ut neque eleifend,
        sagittis nisl sed, pretium nibh. Morbi volutpat varius neque. Fusce
        fermentum augue a ultrices porttitor. Morbi commodo mauris sit amet
        pharetra rutrum. Suspendisse suscipit ligula nibh, sed commodo turpis
        molestie quis. Etiam ornare magna magna, sed euismod augue convallis
        non. Duis luctus velit justo, non pharetra ex interdum et. Donec
        vehicula et mauris eget tristique. Praesent tincidunt mauris elementum
        ultrices tincidunt. Pellentesque vitae finibus sapien. Nullam lobortis,
        est efficitur sollicitudin eleifend, enim nunc gravida orci, ac interdum
        metus metus at mauris. Morbi justo ex, semper nec erat quis, suscipit
        aliquam arcu. Suspendisse sit amet gravida arcu. Quisque consectetur
        mauris sit amet pulvinar dictum. Nunc aliquet dapibus nunc, quis
        hendrerit nunc finibus sit amet. Quisque vel est vitae sapien dictum
        auctor. Sed risus libero, lacinia non tortor eu, posuere commodo elit.{" "}
      </div>
      {isOpen && (
      <Modal
        modalStyle={modalStyle}
        modalTitle={modalTitle}
        bodyStyle={bodyStyle}
        closable={closable}
        footer={footer}
        onCanel={onCanel}
        onOk={onOk}
        onClose={()=> setIsOpen(false)}
      >
        {children}
      </Modal>
      )}
    </>
  );
};

export const ModalComponent = ModalTemplate.bind({});
ModalComponent.args = {
  modalStyle: {
    width: "500px",
    height: "300px",
  },
  modalTitle: "Modal",
  bodyStyle: {
    backgroundColor: "#f5f5f5",
  },
  closable: true,
  footer: true,
  children: "Modal content",
};
